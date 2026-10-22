"""POSIX/Windows differences in one place: file lock, no-follow open, owner checks, folder ACLs. Standard library only."""
import errno,logging,ntpath,os,re,secrets,shutil,stat,subprocess,tempfile
from contextlib import contextmanager
from pathlib import Path
WINDOWS=os.name=='nt'
NONBLOCK=getattr(os,'O_NONBLOCK',0)
REPARSE=getattr(stat,'FILE_ATTRIBUTE_REPARSE_POINT',0x400)
def is_link(path):
    """Symlink or any Windows reparse point (junction, mount point, cloud placeholder). Missing path: False."""
    path=Path(path)
    if path.is_symlink():return True
    try:return bool(getattr(os.lstat(path),'st_file_attributes',0)&REPARSE)
    except OSError:return False
def open_nofollow(path,flags,mode=0o600):
    """``os.open`` that refuses a symlink final component. Windows has no O_NOFOLLOW, so check first."""
    path=Path(path)
    if WINDOWS:
        if is_link(path):raise OSError(f'Refusing to follow link: {path}')
        return os.open(path,flags|getattr(os,'O_BINARY',0),mode)
    return os.open(path,flags|os.O_NOFOLLOW,mode)
@contextmanager
def file_lock(path):
    """Exclusive lock held for the ``with`` body: flock on POSIX, msvcrt.locking of byte 0 on Windows."""
    fd=open_nofollow(path,os.O_CREAT|os.O_RDWR,0o600)
    with os.fdopen(fd,'ab')as lock:
        if not stat.S_ISREG(os.fstat(lock.fileno()).st_mode):raise ValueError('Invalid lock file')
        if WINDOWS:
            import msvcrt
            n=lock.fileno()
            while True:
                os.lseek(n,0,os.SEEK_SET)
                try:msvcrt.locking(n,msvcrt.LK_LOCK,1);break
                except OSError as exc:
                    if exc.errno not in(errno.EDEADLK,errno.EACCES):raise
                    # LK_LOCK gives up after ~10s with EDEADLK; keep waiting, re-raise anything else
            try:yield
            finally:
                os.lseek(n,0,os.SEEK_SET)
                try:msvcrt.locking(n,msvcrt.LK_UNLCK,1)
                except OSError:pass # closing the handle below releases the lock anyway
        else:
            import fcntl
            fcntl.flock(lock,fcntl.LOCK_EX);yield
def _win_user_sid():
    """Binary SID of the user running this process (token user), via ctypes. Raises on any failure."""
    import ctypes
    from ctypes import wintypes
    adv=ctypes.WinDLL('advapi32',use_last_error=True);k32=ctypes.WinDLL('kernel32',use_last_error=True)
    k32.GetCurrentProcess.restype=wintypes.HANDLE;k32.CloseHandle.argtypes=[wintypes.HANDLE]
    adv.OpenProcessToken.argtypes=[wintypes.HANDLE,wintypes.DWORD,ctypes.POINTER(wintypes.HANDLE)]
    adv.GetTokenInformation.argtypes=[wintypes.HANDLE,ctypes.c_int,ctypes.c_void_p,wintypes.DWORD,ctypes.POINTER(wintypes.DWORD)]
    adv.GetLengthSid.argtypes=[ctypes.c_void_p];adv.GetLengthSid.restype=wintypes.DWORD
    token=wintypes.HANDLE()
    if not adv.OpenProcessToken(k32.GetCurrentProcess(),8,ctypes.byref(token)):raise ctypes.WinError(ctypes.get_last_error()) # TOKEN_QUERY
    try:
        size=wintypes.DWORD();adv.GetTokenInformation(token,1,None,0,ctypes.byref(size)) # TokenUser; sizing call fails by design
        if not size.value:raise ctypes.WinError(ctypes.get_last_error())
        buf=ctypes.create_string_buffer(size.value)
        if not adv.GetTokenInformation(token,1,buf,size,ctypes.byref(size)):raise ctypes.WinError(ctypes.get_last_error())
        sid=ctypes.cast(buf,ctypes.POINTER(ctypes.c_void_p))[0]
        return ctypes.string_at(sid,adv.GetLengthSid(sid))
    finally:k32.CloseHandle(token)
def _win_owner_sid(path):
    """Binary SID of the owner of ``path`` (GetNamedSecurityInfoW, OWNER_SECURITY_INFORMATION). Raises on failure."""
    import ctypes
    from ctypes import wintypes
    adv=ctypes.WinDLL('advapi32',use_last_error=True);k32=ctypes.WinDLL('kernel32',use_last_error=True)
    pv=ctypes.POINTER(ctypes.c_void_p)
    adv.GetNamedSecurityInfoW.argtypes=[wintypes.LPCWSTR,ctypes.c_int,wintypes.DWORD,pv,pv,pv,pv,pv];adv.GetNamedSecurityInfoW.restype=wintypes.DWORD
    adv.GetLengthSid.argtypes=[ctypes.c_void_p];adv.GetLengthSid.restype=wintypes.DWORD
    k32.LocalFree.argtypes=[ctypes.c_void_p]
    owner=ctypes.c_void_p();sd=ctypes.c_void_p()
    code=adv.GetNamedSecurityInfoW(str(path),1,1,ctypes.byref(owner),None,None,None,ctypes.byref(sd)) # SE_FILE_OBJECT, OWNER_SECURITY_INFORMATION
    if code:raise ctypes.WinError(code)
    try:
        if not owner.value:raise OSError('No owner SID')
        return ctypes.string_at(owner.value,adv.GetLengthSid(owner))
    finally:k32.LocalFree(sd)
def win_owner_is_me(path):
    """True only when the owner SID equals this process's user SID. Administrators are NOT accepted. Any failure: False."""
    try:
        owner=_win_owner_sid(path);me=_win_user_sid()
        return bool(owner)and owner==me
    except Exception:return False
def is_mine(info,path):
    return win_owner_is_me(path)if WINDOWS else info.st_uid==os.getuid()
def owner_only(info,path):
    """Owned by this user with no group/other bits. Windows: owner SID check only; the mode bits there are fixed and meaningless."""
    return win_owner_is_me(path)if WINDOWS else info.st_uid==os.getuid()and not info.st_mode&0o077
def fchmod(fd,mode):
    # Windows: no POSIX mode bits to tighten; privacy rests on the owner check and the inherited ACL.
    if not WINDOWS:os.fchmod(fd,mode)
def fsync_dir(path):
    """Persist a rename. Windows cannot open a directory for fsync, and NTFS journals the rename."""
    if WINDOWS:return
    fd=os.open(path,os.O_RDONLY)
    try:os.fsync(fd)
    finally:os.close(fd)

# W4 (Windows): Python 3.12.4+/3.13+ turns os.mkdir(mode=0o700) -- and so tempfile.mkdtemp and
# TemporaryDirectory -- into a protected owner-only DACL (OWNER RIGHTS, SYSTEM, Administrators; gh-118486,
# CVE-2024-4030). OWNER RIGHTS follows the creator, so files a gateway running with an elevated admin
# token creates there (state.db) are closed to the user's non-elevated Desktop. On Windows MyBots
# folders therefore take no mode, and the folders MyBots publishes get an explicit inheritable DACL
# (this user, SYSTEM, Administrators) on their ROOT only: children inherit it when they are created,
# privacy does not depend on the parent folder, and nothing ever walks a tree (no recursive or
# reset-to-inherit icacls switch: they follow junctions planted inside a profile).
# POSIX keeps 0o700 and TemporaryDirectory.
_log=logging.getLogger('mybots.portable')
class AclError(OSError):
    """The explicit Windows DACL could not be set on a MyBots folder."""
def make_dir(path,*,parents=False,exist_ok=False):
    """A MyBots-private folder: 0o700 on POSIX; on Windows no mode (no owner-only DACL)."""
    if not WINDOWS:Path(path).mkdir(mode=0o700,parents=parents,exist_ok=exist_ok);return
    if parents:os.makedirs(path,exist_ok=exist_ok);return
    try:os.mkdir(path)
    except FileExistsError:
        if not exist_ok or not os.path.isdir(path):raise
def _unique_dir(prefix,parent):
    for _ in range(100):
        work=os.path.join(os.path.abspath(parent),prefix+secrets.token_hex(8))
        try:os.mkdir(work);return work
        except FileExistsError:continue
    raise FileExistsError('No free folder name')
def _remove(work):
    shutil.rmtree(work,ignore_errors=True)
    if os.path.lexists(work):_log.warning(STAGING_LEFT_LOG)
@contextmanager
def staging_dir(prefix,parent,run=None):
    """Temporary folder whose contents get renamed into place. POSIX: ``TemporaryDirectory`` (0o700).
    Windows: a uniquely named ``os.mkdir`` without a mode under ``parent`` that gets the explicit DACL
    while it is still empty (``AclError`` when that fails), removed afterwards."""
    if not WINDOWS:
        with tempfile.TemporaryDirectory(prefix=prefix,dir=parent)as work:yield work
        return
    work=_unique_dir(prefix,parent)
    try:
        if not grant_private(work,run):raise AclError(STAGING_ACL_FAILED)
        yield work
    finally:_remove(work)
def private_mkdtemp(prefix,parent,run=None):
    """``tempfile.mkdtemp`` on POSIX. Windows: unique ``os.mkdir`` plus the explicit DACL (``AclError``)."""
    if not WINDOWS:return tempfile.mkdtemp(prefix=prefix,dir=parent)
    work=_unique_dir(prefix,parent)
    if not grant_private(work,run):_remove(work);raise AclError(STAGING_ACL_FAILED)
    return work
STAGING_ACL_FAILED='Windows folder permissions for the new files could not be set; nothing was changed.'
ACL_GRANT_FAILED='Windows folder permissions of this bot could not be set; if the bot cannot open its files, remove the bot and install it again.'
ACL_GRANT_LOG='MyBots: icacls could not set the folder permissions of an installed profile'
STAGING_LEFT_LOG='MyBots: a temporary MyBots folder could not be fully removed'
ACL_SKIPPED_LOG='MyBots: folder permissions left unchanged (a link inside, or the folder could not be checked)'
WALK_LIMIT=20000
def tree_is_plain(path,limit=None):
    """True when nothing under ``path`` is a symlink or reparse point (junction, mount point, cloud
    placeholder). Never follows anything (lstat only). More than ``limit`` entries (default
    ``WALK_LIMIT``) or any error: False ("cannot verify"). Windows propagates a folder's new inheritable
    ACEs into its existing children, so a link anywhere below would carry the change outside."""
    limit=WALK_LIMIT if limit is None else limit;seen=0;pending=[os.path.abspath(path)]
    try:
        while pending:
            with os.scandir(pending.pop())as entries:
                for entry in entries:
                    seen+=1
                    if seen>limit or entry.is_symlink()or is_link(entry.path):return False
                    if entry.is_dir(follow_symlinks=False):pending.append(entry.path)
        return True
    except OSError:return False
ACL_TIMEOUT=60
SYSTEM_SID='S-1-5-18';ADMINISTRATORS_SID='S-1-5-32-544'
SID_RE=re.compile(r'S-1-[0-9]+(-[0-9]+){1,14}')
def icacls_path():
    """%SystemRoot%\\System32\\icacls.exe as an absolute local path (C:\\Windows unless SystemRoot is X:\\...)."""
    root=os.environ.get('SystemRoot')or os.environ.get('SYSTEMROOT')or''
    drive=ntpath.splitdrive(root)[0]
    if not(len(drive)==2 and drive[1]==':'and drive[0].isalpha()and ntpath.isabs(root)):root='C:\\Windows'
    return ntpath.join(root,'System32','icacls.exe')
def _win_sid_string(sid):
    """``S-1-…`` text of a binary SID (ConvertSidToStringSidW). Raises on failure."""
    import ctypes
    from ctypes import wintypes
    adv=ctypes.WinDLL('advapi32',use_last_error=True);k32=ctypes.WinDLL('kernel32',use_last_error=True)
    adv.ConvertSidToStringSidW.argtypes=[ctypes.c_void_p,ctypes.POINTER(wintypes.LPWSTR)];k32.LocalFree.argtypes=[ctypes.c_void_p]
    buf=ctypes.create_string_buffer(sid,len(sid));text=wintypes.LPWSTR()
    if not adv.ConvertSidToStringSidW(buf,ctypes.byref(text)):raise ctypes.WinError(ctypes.get_last_error())
    try:return text.value
    finally:k32.LocalFree(text)
def user_sid():
    """Text SID of this process's token user. Raises on failure."""
    return _win_sid_string(_win_user_sid())
def grant_private(path,run=None):
    """Windows only: replace the DACL of ``path`` itself (never its tree) with inheritable full control for
    this user, SYSTEM and Administrators, inheritance from the parent removed:
    ``icacls <path> /inheritance:r /grant:r *<user>:(OI)(CI)F *S-1-5-18:(OI)(CI)F *S-1-5-32-544:(OI)(CI)F``.
    True on success or on POSIX; False on any failure (a link/reparse point or non-folder root included).
    The existing tree is checked first (``tree_is_plain``): a link anywhere below, or a tree that cannot be
    checked, means no icacls call at all (an empty, freshly made folder passes at once).
    Never raises; output is discarded."""
    if not WINDOWS:return True
    try:
        path=os.path.abspath(path)
        if is_link(path)or not os.path.isdir(path):return False
        if not tree_is_plain(path):_log.warning(ACL_SKIPPED_LOG);return False
        sid=user_sid()
        if type(sid)is not str or not SID_RE.fullmatch(sid):return False
        argv=[icacls_path(),path,'/inheritance:r','/grant:r',*(f'*{s}:(OI)(CI)F'for s in (sid,SYSTEM_SID,ADMINISTRATORS_SID))]
        result=(run or subprocess.run)(argv,shell=False,stdin=subprocess.DEVNULL,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,
            timeout=ACL_TIMEOUT,creationflags=getattr(subprocess,'CREATE_NO_WINDOW',0x08000000))
        return result.returncode==0
    except Exception:return False
