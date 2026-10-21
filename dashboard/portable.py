"""POSIX/Windows differences in one place: file lock, no-follow open, owner checks. Standard library only."""
import errno,os,stat
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
