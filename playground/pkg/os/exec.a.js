g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   ��*��os/exec�Cpackage exec
import bytes "bytes"
import errors "errors"
import io "io"
import os "os"
import filepath "path/filepath"
import runtime "runtime"
import strconv "strconv"
import strings "strings"
import sync "sync"
import syscall "syscall"
type @"".Cmd struct { @"".Path string; @"".Args []string; @"".Env []string; @"".Dir string; @"".Stdin @"io".Reader; @"".Stdout @"io".Writer; @"".Stderr @"io".Writer; @"".ExtraFiles []*@"os".File; @"".SysProcAttr *@"syscall".SysProcAttr; @"".Process *@"os".Process; @"".ProcessState *@"os".ProcessState; @"".lookPathErr error; @"".finished bool; @"".childFiles []*@"os".File; @"".closeAfterStart []@"io".Closer; @"".closeAfterWait []@"io".Closer; @"".goroutine []func () (? error); @"".errch chan error }
func (? *@"".Cmd) @"".CombinedOutput() (? []byte, ? error)
func (? *@"".Cmd) @"".Output() (? []byte, ? error)
func (? *@"".Cmd) @"".Run() (? error)
func (? *@"".Cmd) @"".Start() (? error)
func (? *@"".Cmd) @"".StderrPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".StdinPipe() (? @"io".WriteCloser, ? error)
func (? *@"".Cmd) @"".StdoutPipe() (? @"io".ReadCloser, ? error)
func (? *@"".Cmd) @"".Wait() (? error)
func (? *@"".Cmd) @"".argv() (? []string)
func (? *@"".Cmd) @"".closeDescriptors(@"".closers []@"io".Closer) ()
func (? *@"".Cmd) @"".envv() (? []string)
func (? *@"".Cmd) @"".stderr() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdin() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".stdout() (@"".f *@"os".File, @"".err error)
func (? *@"".Cmd) @"".writerDescriptor(@"".w @"io".Writer) (@"".f *@"os".File, @"".err error)
func @"".Command(@"".name string, @"".arg ...string) (? *@"".Cmd)
var @"".ErrNotFound error
type @"".Error struct { @"".Name string; @"".Err error }
func (? *@"".Error) @"".Error() (? string)
type @"".ExitError struct { ? *@"os".ProcessState }
func (? *@"".ExitError) @"".Error() (? string)
func @"".LookPath(@"".file string) (? string, ? error)
type @"".closeOnce struct { ? *@"os".File; @"".once @"sync".Once; @"".err error }
func (? *@"".closeOnce) @"".Close() (? error)
func (? *@"".closeOnce) @"".close() ()
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"os".File struct { ? *@"os".file }
func (? *@"os".File) @"os".Chdir() (? error)
func (? *@"os".File) @"os".Chmod(@"os".mode @"os".FileMode) (? error)
func (? *@"os".File) @"os".Chown(@"os".uid int, @"os".gid int) (? error)
func (? *@"os".File) @"os".Close() (? error)
func (? *@"os".File) @"os".Fd() (? uintptr)
func (? *@"os".File) @"os".Name() (? string)
func (? *@"os".File) @"os".Read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".ReadAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".Readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".Seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".Stat() (@"os".fi @"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".Sync() (@"os".err error)
func (? *@"os".File) @"os".Truncate(@"os".size int64) (? error)
func (? *@"os".File) @"os".Write(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteAt(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".WriteString(@"os".s string) (@"os".ret int, @"os".err error)
func (? *@"os".File) @"os".pread(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".pwrite(@"os".b []byte, @"os".off int64) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".read(@"os".b []byte) (@"os".n int, @"os".err error)
func (? *@"os".File) @"os".readdir(@"os".n int) (@"os".fi []@"os".FileInfo, @"os".err error)
func (? *@"os".File) @"os".readdirnames(@"os".n int) (@"os".names []string, @"os".err error)
func (? *@"os".File) @"os".seek(@"os".offset int64, @"os".whence int) (@"os".ret int64, @"os".err error)
func (? *@"os".File) @"os".write(@"os".b []byte) (@"os".n int, @"os".err error)
type @"syscall".SysProcAttr struct { @"syscall".Chroot string; @"syscall".Credential *@"syscall".Credential; @"syscall".Ptrace bool; @"syscall".Setsid bool; @"syscall".Setpgid bool; @"syscall".Setctty bool; @"syscall".Noctty bool }
type @"os".Process struct { @"os".Pid int; @"os".handle uintptr; @"os".isdone uint32 }
func (? *@"os".Process) @"os".Kill() (? error)
func (? *@"os".Process) @"os".Release() (? error)
func (? *@"os".Process) @"os".Signal(@"os".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".Wait() (? *@"os".ProcessState, ? error)
func (? *@"os".Process) @"os".done() (? bool)
func (? *@"os".Process) @"os".kill() (? error)
func (? *@"os".Process) @"os".release() (? error)
func (? *@"os".Process) @"os".setDone() ()
func (? *@"os".Process) @"os".signal(@"os".sig @"os".Signal) (? error)
func (? *@"os".Process) @"os".wait() (@"os".ps *@"os".ProcessState, @"os".err error)
type @"os".ProcessState struct { @"os".pid int; @"os".status @"syscall".WaitStatus; @"os".rusage *@"syscall".Rusage }
func (? *@"os".ProcessState) @"os".Exited() (? bool)
func (? *@"os".ProcessState) @"os".Pid() (? int)
func (? *@"os".ProcessState) @"os".String() (? string)
func (? *@"os".ProcessState) @"os".Success() (? bool)
func (? *@"os".ProcessState) @"os".Sys() (? interface {  })
func (? *@"os".ProcessState) @"os".SysUsage() (? interface {  })
import time "time"
func (? *@"os".ProcessState) @"os".SystemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".UserTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".exited() (? bool)
func (? *@"os".ProcessState) @"os".success() (? bool)
func (? *@"os".ProcessState) @"os".sys() (? interface {  })
func (? *@"os".ProcessState) @"os".sysUsage() (? interface {  })
func (? *@"os".ProcessState) @"os".systemTime() (? @"time".Duration)
func (? *@"os".ProcessState) @"os".userTime() (? @"time".Duration)
type @"io".Closer interface { @"io".Close() (? error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"sync".Once struct { @"sync".m @"sync".Mutex; @"sync".done uint32 }
func (? *@"sync".Once) @"sync".Do(@"sync".f func () ()) ()
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
type @"syscall".Credential struct { @"syscall".Uid uint32; @"syscall".Gid uint32; @"syscall".Groups []uint32 }
type @"os".Signal interface { @"os".Signal() (); @"os".String() (? string) }
type @"syscall".WaitStatus uint32
func (? @"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? @"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? @"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? @"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? @"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? @"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? @"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? @"syscall".WaitStatus) @"syscall".TrapCause() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Continued() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".CoreDump() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".ExitStatus() (? int)
func (? *@"syscall".WaitStatus) @"syscall".Exited() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".Signal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Signaled() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".StopSignal() (? @"syscall".Signal)
func (? *@"syscall".WaitStatus) @"syscall".Stopped() (? bool)
func (? *@"syscall".WaitStatus) @"syscall".TrapCause() (? int)
type @"syscall".Rusage struct { @"syscall".Utime @"syscall".Timeval; @"syscall".Stime @"syscall".Timeval; @"syscall".Maxrss int64; @"syscall".Ixrss int64; @"syscall".Idrss int64; @"syscall".Isrss int64; @"syscall".Minflt int64; @"syscall".Majflt int64; @"syscall".Nswap int64; @"syscall".Inblock int64; @"syscall".Oublock int64; @"syscall".Msgsnd int64; @"syscall".Msgrcv int64; @"syscall".Nsignals int64; @"syscall".Nvcsw int64; @"syscall".Nivcsw int64 }
type @"time".Duration int64
func (? @"time".Duration) @"time".Hours() (? float64)
func (? @"time".Duration) @"time".Minutes() (? float64)
func (? @"time".Duration) @"time".Nanoseconds() (? int64)
func (? @"time".Duration) @"time".Seconds() (? float64)
func (? @"time".Duration) @"time".String() (? string)
func (? *@"time".Duration) @"time".Hours() (? float64)
func (? *@"time".Duration) @"time".Minutes() (? float64)
func (? *@"time".Duration) @"time".Nanoseconds() (? int64)
func (? *@"time".Duration) @"time".Seconds() (? float64)
func (? *@"time".Duration) @"time".String() (? string)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
type @"time".Time struct { @"time".sec int64; @"time".nsec int32; @"time".loc *@"time".Location }
func (? @"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? @"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? @"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? @"time".Time) @"time".Day() (? int)
func (? @"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? @"time".Time) @"time".Format(@"time".layout string) (? string)
func (? @"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? @"time".Time) @"time".Hour() (? int)
func (? @"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? @"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? @"time".Time) @"time".IsZero() (? bool)
func (? @"time".Time) @"time".Local() (? @"time".Time)
func (? @"time".Time) @"time".Location() (? *@"time".Location)
func (? @"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? @"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? @"time".Time) @"time".Minute() (? int)
func (? @"time".Time) @"time".Month() (? @"time".Month)
func (? @"time".Time) @"time".Nanosecond() (? int)
func (? @"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".Second() (? int)
func (? @"time".Time) @"time".String() (? string)
func (? @"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? @"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? @"time".Time) @"time".UTC() (? @"time".Time)
func (? @"time".Time) @"time".Unix() (? int64)
func (? @"time".Time) @"time".UnixNano() (? int64)
func (? @"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? @"time".Time) @"time".Year() (? int)
func (? @"time".Time) @"time".YearDay() (? int)
func (? @"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? @"time".Time) @"time".abs() (? uint64)
func (? @"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? @"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
func (? *@"time".Time) @"time".Add(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".AddDate(@"time".years int, @"time".months int, @"time".days int) (? @"time".Time)
func (? *@"time".Time) @"time".After(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Before(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Clock() (@"time".hour int, @"time".min int, @"time".sec int)
func (? *@"time".Time) @"time".Date() (@"time".year int, @"time".month @"time".Month, @"time".day int)
func (? *@"time".Time) @"time".Day() (? int)
func (? *@"time".Time) @"time".Equal(@"time".u @"time".Time) (? bool)
func (? *@"time".Time) @"time".Format(@"time".layout string) (? string)
func (? *@"time".Time) @"time".GobDecode(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".GobEncode() (? []byte, ? error)
func (? *@"time".Time) @"time".Hour() (? int)
func (? *@"time".Time) @"time".ISOWeek() (@"time".year int, @"time".week int)
func (? *@"time".Time) @"time".In(@"time".loc *@"time".Location) (? @"time".Time)
func (? *@"time".Time) @"time".IsZero() (? bool)
func (? *@"time".Time) @"time".Local() (? @"time".Time)
func (? *@"time".Time) @"time".Location() (? *@"time".Location)
func (? *@"time".Time) @"time".MarshalBinary() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalJSON() (? []byte, ? error)
func (? *@"time".Time) @"time".MarshalText() (? []byte, ? error)
func (? *@"time".Time) @"time".Minute() (? int)
func (? *@"time".Time) @"time".Month() (? @"time".Month)
func (? *@"time".Time) @"time".Nanosecond() (? int)
func (? *@"time".Time) @"time".Round(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".Second() (? int)
func (? *@"time".Time) @"time".String() (? string)
func (? *@"time".Time) @"time".Sub(@"time".u @"time".Time) (? @"time".Duration)
func (? *@"time".Time) @"time".Truncate(@"time".d @"time".Duration) (? @"time".Time)
func (? *@"time".Time) @"time".UTC() (? @"time".Time)
func (? *@"time".Time) @"time".Unix() (? int64)
func (? *@"time".Time) @"time".UnixNano() (? int64)
func (? *@"time".Time) @"time".UnmarshalBinary(@"time".data []byte) (? error)
func (? *@"time".Time) @"time".UnmarshalJSON(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".UnmarshalText(@"time".data []byte) (@"time".err error)
func (? *@"time".Time) @"time".Weekday() (? @"time".Weekday)
func (? *@"time".Time) @"time".Year() (? int)
func (? *@"time".Time) @"time".YearDay() (? int)
func (? *@"time".Time) @"time".Zone() (@"time".name string, @"time".offset int)
func (? *@"time".Time) @"time".abs() (? uint64)
func (? *@"time".Time) @"time".date(@"time".full bool) (@"time".year int, @"time".month @"time".Month, @"time".day int, @"time".yday int)
func (? *@"time".Time) @"time".locabs() (@"time".name string, @"time".offset int, @"time".abs uint64)
type @"syscall".Signal int
func (? @"syscall".Signal) @"syscall".Signal() ()
func (? @"syscall".Signal) @"syscall".String() (? string)
func (? *@"syscall".Signal) @"syscall".Signal() ()
func (? *@"syscall".Signal) @"syscall".String() (? string)
type @"syscall".Timeval struct { @"syscall".Sec int64; @"syscall".Usec int32; @"syscall".Pad_cgo_0 [4]byte }
func (? *@"syscall".Timeval) @"syscall".Nano() (? int64)
func (? *@"syscall".Timeval) @"syscall".Unix() (@"syscall".sec int64, @"syscall".nsec int64)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$

bytesA errorsB ioC osD path/filepathE runtimeF strconvG stringsH syncI syscallJ (@    $r=A.$init(true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} @    $r=B.$init(true);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} @    $r=C.$init(true);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} @    $r=D.$init(true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} @    $r=E.$init(true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} @    $r=F.$init(true);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} @    $r=G.$init(true);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} @    $r=H.$init(true);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} @    $r=I.$init(true);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} B    $r=J.$init(true);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} K��K=$pkg.Error=$newType(0,$kindStruct,"exec.Error","Error","os/exec",function(Name_,Err_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Err=Err_!==undefined?Err_:$ifaceNil;});��($ptrType(K)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];K.init([["Name","Name","",$String,""],["Err","Err","",$error,""]]);Error L��L=$pkg.Cmd=$newType(0,$kindStruct,"exec.Cmd","Cmd","os/exec",function(Path_,Args_,Env_,Dir_,Stdin_,Stdout_,Stderr_,ExtraFiles_,SysProcAttr_,Process_,ProcessState_,lookPathErr_,finished_,childFiles_,closeAfterStart_,closeAfterWait_,goroutine_,errch_){this.$val=this;this.Path=Path_!==undefined?Path_:"";this.Args=Args_!==undefined?Args_:($sliceType($String)).nil;this.Env=Env_!==undefined?Env_:($sliceType($String)).nil;this.Dir=Dir_!==undefined?Dir_:"";this.Stdin=Stdin_!==undefined?Stdin_:$ifaceNil;this.Stdout=Stdout_!==undefined?Stdout_:$ifaceNil;this.Stderr=Stderr_!==undefined?Stderr_:$ifaceNil;this.ExtraFiles=ExtraFiles_!==undefined?ExtraFiles_:($sliceType(($ptrType(D.File)))).nil;this.SysProcAttr=SysProcAttr_!==undefined?SysProcAttr_:($ptrType(J.SysProcAttr)).nil;this.Process=Process_!==undefined?Process_:($ptrType(D.Process)).nil;this.ProcessState=ProcessState_!==undefined?ProcessState_:($ptrType(D.ProcessState)).nil;this.lookPathErr=lookPathErr_!==undefined?lookPathErr_:$ifaceNil;this.finished=finished_!==undefined?finished_:false;this.childFiles=childFiles_!==undefined?childFiles_:($sliceType(($ptrType(D.File)))).nil;this.closeAfterStart=closeAfterStart_!==undefined?closeAfterStart_:($sliceType(C.Closer)).nil;this.closeAfterWait=closeAfterWait_!==undefined?closeAfterWait_:($sliceType(C.Closer)).nil;this.goroutine=goroutine_!==undefined?goroutine_:($sliceType(($funcType([],[$error],false)))).nil;this.errch=errch_!==undefined?errch_:($chanType($error,false,false)).nil;});�O($ptrType(L)).methods=[["CombinedOutput","CombinedOutput","",$funcType([],[($sliceType($Uint8)),$error],false),-1],["Output","Output","",$funcType([],[($sliceType($Uint8)),$error],false),-1],["Run","Run","",$funcType([],[$error],false),-1],["Start","Start","",$funcType([],[$error],false),-1],["StderrPipe","StderrPipe","",$funcType([],[C.ReadCloser,$error],false),-1],["StdinPipe","StdinPipe","",$funcType([],[C.WriteCloser,$error],false),-1],["StdoutPipe","StdoutPipe","",$funcType([],[C.ReadCloser,$error],false),-1],["Wait","Wait","",$funcType([],[$error],false),-1],["argv","argv","os/exec",$funcType([],[($sliceType($String))],false),-1],["closeDescriptors","closeDescriptors","os/exec",$funcType([($sliceType(C.Closer))],[],false),-1],["envv","envv","os/exec",$funcType([],[($sliceType($String))],false),-1],["stderr","stderr","os/exec",$funcType([],[($ptrType(D.File)),$error],false),-1],["stdin","stdin","os/exec",$funcType([],[($ptrType(D.File)),$error],false),-1],["stdout","stdout","os/exec",$funcType([],[($ptrType(D.File)),$error],false),-1],["writerDescriptor","writerDescriptor","os/exec",$funcType([C.Writer],[($ptrType(D.File)),$error],false),-1]];L.init([["Path","Path","",$String,""],["Args","Args","",($sliceType($String)),""],["Env","Env","",($sliceType($String)),""],["Dir","Dir","",$String,""],["Stdin","Stdin","",C.Reader,""],["Stdout","Stdout","",C.Writer,""],["Stderr","Stderr","",C.Writer,""],["ExtraFiles","ExtraFiles","",($sliceType(($ptrType(D.File)))),""],["SysProcAttr","SysProcAttr","",($ptrType(J.SysProcAttr)),""],["Process","Process","",($ptrType(D.Process)),""],["ProcessState","ProcessState","",($ptrType(D.ProcessState)),""],["lookPathErr","lookPathErr","os/exec",$error,""],["finished","finished","os/exec",$Bool,""],["childFiles","childFiles","os/exec",($sliceType(($ptrType(D.File)))),""],["closeAfterStart","closeAfterStart","os/exec",($sliceType(C.Closer)),""],["closeAfterWait","closeAfterWait","os/exec",($sliceType(C.Closer)),""],["goroutine","goroutine","os/exec",($sliceType(($funcType([],[$error],false)))),""],["errch","errch","os/exec",($chanType($error,false,false)),""]]);Cmd		io:Closerio:ReadCloser	io:Readerio:WriteCloser	io:Writeros:File
os:Processos:ProcessStatesyscall:SysProcAttr P��P=$pkg.ExitError=$newType(0,$kindStruct,"exec.ExitError","ExitError","os/exec",function(ProcessState_){this.$val=this;this.ProcessState=ProcessState_!==undefined?ProcessState_:($ptrType(D.ProcessState)).nil;});��P.methods=[["Exited","Exited","",$funcType([],[$Bool],false),0],["Pid","Pid","",$funcType([],[$Int],false),0],["String","String","",$funcType([],[$String],false),0],["Success","Success","",$funcType([],[$Bool],false),0],["Sys","Sys","",$funcType([],[$emptyInterface],false),0],["SysUsage","SysUsage","",$funcType([],[$emptyInterface],false),0],["SystemTime","SystemTime","",$funcType([],[$packages["time"].Duration],false),0],["UserTime","UserTime","",$funcType([],[$packages["time"].Duration],false),0],["exited","exited","os",$funcType([],[$Bool],false),0],["success","success","os",$funcType([],[$Bool],false),0],["sys","sys","os",$funcType([],[$emptyInterface],false),0],["sysUsage","sysUsage","os",$funcType([],[$emptyInterface],false),0],["systemTime","systemTime","os",$funcType([],[$packages["time"].Duration],false),0],["userTime","userTime","os",$funcType([],[$packages["time"].Duration],false),0]];($ptrType(P)).methods=[["Error","Error","",$funcType([],[$String],false),-1],["Exited","Exited","",$funcType([],[$Bool],false),0],["Pid","Pid","",$funcType([],[$Int],false),0],["String","String","",$funcType([],[$String],false),0],["Success","Success","",$funcType([],[$Bool],false),0],["Sys","Sys","",$funcType([],[$emptyInterface],false),0],["SysUsage","SysUsage","",$funcType([],[$emptyInterface],false),0],["SystemTime","SystemTime","",$funcType([],[$packages["time"].Duration],false),0],["UserTime","UserTime","",$funcType([],[$packages["time"].Duration],false),0],["exited","exited","os",$funcType([],[$Bool],false),0],["success","success","os",$funcType([],[$Bool],false),0],["sys","sys","os",$funcType([],[$emptyInterface],false),0],["sysUsage","sysUsage","os",$funcType([],[$emptyInterface],false),0],["systemTime","systemTime","os",$funcType([],[$packages["time"].Duration],false),0],["userTime","userTime","os",$funcType([],[$packages["time"].Duration],false),0]];P.init([["ProcessState","","",($ptrType(D.ProcessState)),""]]);	ExitErroros:ProcessStatetime:Duration Q�Q=$pkg.closeOnce=$newType(0,$kindStruct,"exec.closeOnce","closeOnce","os/exec",function(File_,once_,err_){this.$val=this;this.File=File_!==undefined?File_:($ptrType(D.File)).nil;this.once=once_!==undefined?once_:new I.Once.Ptr();this.err=err_!==undefined?err_:$ifaceNil;});��Q.methods=[["Chdir","Chdir","",$funcType([],[$error],false),0],["Chmod","Chmod","",$funcType([D.FileMode],[$error],false),0],["Chown","Chown","",$funcType([$Int,$Int],[$error],false),0],["Fd","Fd","",$funcType([],[$Uintptr],false),0],["Name","Name","",$funcType([],[$String],false),0],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["ReadAt","ReadAt","",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["Readdir","Readdir","",$funcType([$Int],[($sliceType(D.FileInfo)),$error],false),0],["Readdirnames","Readdirnames","",$funcType([$Int],[($sliceType($String)),$error],false),0],["Seek","Seek","",$funcType([$Int64,$Int],[$Int64,$error],false),0],["Stat","Stat","",$funcType([],[D.FileInfo,$error],false),0],["Sync","Sync","",$funcType([],[$error],false),0],["Truncate","Truncate","",$funcType([$Int64],[$error],false),0],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["WriteAt","WriteAt","",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["WriteString","WriteString","",$funcType([$String],[$Int,$error],false),0],["close","close","os",$funcType([],[$error],false),0],["pread","pread","os",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["pwrite","pwrite","os",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["read","read","os",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["readdir","readdir","os",$funcType([$Int],[($sliceType(D.FileInfo)),$error],false),0],["readdirnames","readdirnames","os",$funcType([$Int],[($sliceType($String)),$error],false),0],["seek","seek","os",$funcType([$Int64,$Int],[$Int64,$error],false),0],["write","write","os",$funcType([($sliceType($Uint8))],[$Int,$error],false),0]];($ptrType(Q)).methods=[["Chdir","Chdir","",$funcType([],[$error],false),0],["Chmod","Chmod","",$funcType([D.FileMode],[$error],false),0],["Chown","Chown","",$funcType([$Int,$Int],[$error],false),0],["Close","Close","",$funcType([],[$error],false),-1],["Fd","Fd","",$funcType([],[$Uintptr],false),0],["Name","Name","",$funcType([],[$String],false),0],["Read","Read","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["ReadAt","ReadAt","",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["Readdir","Readdir","",$funcType([$Int],[($sliceType(D.FileInfo)),$error],false),0],["Readdirnames","Readdirnames","",$funcType([$Int],[($sliceType($String)),$error],false),0],["Seek","Seek","",$funcType([$Int64,$Int],[$Int64,$error],false),0],["Stat","Stat","",$funcType([],[D.FileInfo,$error],false),0],["Sync","Sync","",$funcType([],[$error],false),0],["Truncate","Truncate","",$funcType([$Int64],[$error],false),0],["Write","Write","",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["WriteAt","WriteAt","",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["WriteString","WriteString","",$funcType([$String],[$Int,$error],false),0],["close","close","os",$funcType([],[$error],false),0],["pread","pread","os",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["pwrite","pwrite","os",$funcType([($sliceType($Uint8)),$Int64],[$Int,$error],false),0],["read","read","os",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["readdir","readdir","os",$funcType([$Int],[($sliceType(D.FileInfo)),$error],false),0],["readdirnames","readdirnames","os",$funcType([$Int],[($sliceType($String)),$error],false),0],["seek","seek","os",$funcType([$Int64,$Int],[$Int64,$error],false),0],["write","write","os",$funcType([($sliceType($Uint8))],[$Int,$error],false),0],["close","close","os/exec",$funcType([],[],false),-1]];Q.init([["File","","",($ptrType(D.File)),""],["once","once","os/exec",I.Once,""],["err","err","os/exec",$error,""]]);	closeOnceos:Fileos:FileInfoos:FileMode	sync:Once ErrNotFound B    $pkg.ErrNotFound=B.New("executable file not found in $PATH");
errors:Newos/exec:ErrNotFound (*os/exec.Error).Error��K.Ptr.prototype.Error=function(){var a;  Ya=this;  ureturn"exec: "+G.Quote(a.Name)+": "+a.Err.Error();    };K.prototype.Error=function(){return this.$val.Error();};Erroros/exec:Errorstrconv:Quote os/exec.CommandM��M=$pkg.Command=function(a,b){var c,d,e,f;  rc=new L.Ptr(a,$appendSlice(new($sliceType($String))([a]),b),($sliceType($String)).nil,"",$ifaceNil,$ifaceNil,$ifaceNil,($sliceType(($ptrType(D.File)))).nil,($ptrType(J.SysProcAttr)).nil,($ptrType(D.Process)).nil,($ptrType(D.ProcessState)).nil,$ifaceNil,false,($sliceType(($ptrType(D.File)))).nil,($sliceType(C.Closer)).nil,($sliceType(C.Closer)).nil,($sliceType(($funcType([],[$error],false)))).nil,($chanType($error,false,false)).nil);  �    if(E.Base(a)===a){  �  �d=S(a);e=d[0];f=d[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  
c.lookPathErr=f;    }else{  .c.Path=e;    }    }  Dreturn c;    };Command	io:Closeros/exec:Cmdos/exec:LookPathos:File
os:Processos:ProcessStatepath/filepath:Basesyscall:SysProcAttr os/exec.interfaceEqualN�N=function(a,b){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  �$deferred.push([(function(){  $recover();    }),[]]);   return $interfaceIsEqual(a,b);    }catch(err){$err=err;return false;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};interfaceEqual (*os/exec.Cmd).envv��L.Ptr.prototype.envv=function(){var a;  7a=this;  R    if(!(a.Env===($sliceType($String)).nil)){  freturn a.Env;    }  wreturn D.Environ();    };L.prototype.envv=function(){return this.$val.envv();};Cmdenvvos/exec:Cmd
os:Environ (*os/exec.Cmd).argv��L.Ptr.prototype.argv=function(){var a;  �a=this;  �    if(a.Args.$length>0){  �return a.Args;    }  �return new($sliceType($String))([a.Path]);    };L.prototype.argv=function(){return this.$val.argv();};Cmdargvos/exec:Cmd (*os/exec.Cmd).stdin��L.Ptr.prototype.stdin=function(){var a=($ptrType(D.File)).nil,b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n;  �c=this;  $    if($interfaceIsEqual(c.Stdin,$ifaceNil)){  :d=D.Open("/dev/null");a=d[0];b=d[1];  Y    if(!($interfaceIsEqual(b,$ifaceNil))){  lreturn[a,b];    }  yc.closeAfterStart=$append(c.closeAfterStart,a);  �return[a,b];    }  �  �e=$assertType(c.Stdin,($ptrType(D.File)),true);f=e[0];g=e[1];    if(g){  �    h=f;i=$ifaceNil;a=h;b=i;return[a,b];    }  �j=D.Pipe();k=j[0];l=j[1];b=j[2];      if(!($interfaceIsEqual(b,$ifaceNil))){  return[a,b];    }  *c.closeAfterStart=$append(c.closeAfterStart,k);  ]c.closeAfterWait=$append(c.closeAfterWait,l);  �c.goroutine=$append(c.goroutine,(function(){var m,n,o;  �m=C.Copy(l,c.Stdin);n=m[1];  �  �o=l.Close();    if($interfaceIsEqual(n,$ifaceNil)){  	n=o;    }  return n;    }));  *    m=k;n=$ifaceNil;a=m;b=n;return[a,b];    };L.prototype.stdin=function(){return this.$val.stdin();};Cmdstdinio:Copyos/exec:Cmdos:Fileos:Openos:Pipe (*os/exec.Cmd).stdout��L.Ptr.prototype.stdout=function(){var a=($ptrType(D.File)).nil,b=$ifaceNil,c,d;  Bc=this;  n    d=c.writerDescriptor(c.Stdout);a=d[0];b=d[1];return[a,b];    };L.prototype.stdout=function(){return this.$val.stdout();};Cmdstdoutos/exec:Cmdos/exec:writerDescriptoros:File (*os/exec.Cmd).stderr��L.Ptr.prototype.stderr=function(){var a=($ptrType(D.File)).nil,b=$ifaceNil,c,d,e,f,g;  �c=this;  �    if(!($interfaceIsEqual(c.Stderr,$ifaceNil))&&N(c.Stderr,c.Stdout)){      d=(e=c.childFiles,((1<0||1>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+1]));f=$ifaceNil;a=d;b=f;return[a,b];    }  $    g=c.writerDescriptor(c.Stderr);a=g[0];b=g[1];return[a,b];    };L.prototype.stderr=function(){return this.$val.stderr();};Cmdstderros/exec:Cmdos/exec:interfaceEqualos/exec:writerDescriptoros:File (*os/exec.Cmd).writerDescriptor��L.Ptr.prototype.writerDescriptor=function(a){var b=($ptrType(D.File)).nil,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o;  Qd=this;  �    if($interfaceIsEqual(a,$ifaceNil)){  �e=D.OpenFile("/dev/null",1,0);b=e[0];c=e[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �d.closeAfterStart=$append(d.closeAfterStart,b);  (return[b,c];    }  4  7f=$assertType(a,($ptrType(D.File)),true);g=f[0];h=f[1];    if(h){  U    i=g;j=$ifaceNil;b=i;c=j;return[b,c];    }  hk=D.Pipe();l=k[0];m=k[1];c=k[2];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �d.closeAfterStart=$append(d.closeAfterStart,m);  �d.closeAfterWait=$append(d.closeAfterWait,l);  d.goroutine=$append(d.goroutine,(function(){var n,o;  7n=C.Copy(a,l);o=n[1];  Rreturn o;    }));  b    n=m;o=$ifaceNil;b=n;c=o;return[b,c];    };L.prototype.writerDescriptor=function(a){return this.$val.writerDescriptor(a);};CmdwriterDescriptorio:Copyos/exec:Cmdos:Fileos:OpenFileos:Pipe (*os/exec.Cmd).closeDescriptors�,L.Ptr.prototype.closeDescriptors=function(a){var b,c,d,e;  zb=this;  �c=a;d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �e.Close();    d++;}    };L.prototype.closeDescriptors=function(a){return this.$val.closeDescriptors(a);};CmdcloseDescriptorsos/exec:Cmd (*os/exec.Cmd).Run��L.Ptr.prototype.Run=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  Sa=$this;  j  mb=a.Start();    if(!($interfaceIsEqual(b,$ifaceNil))){  �return b;    }  �c=a.Wait(true);$s=1;case 1:if(c&&c.$blocking){c=c();}return c;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Run=function($b){return this.$val.Run($b);};Cmdos/exec:Cmd os/exec.lookExtensionsO��O=function(a,b){var c,d,e,f,g;  �    if(E.Base(a)===a){  �a=E.Join(new($sliceType($String))([".",a]));    }  �    if(b===""){  return S(a);    }       if(!(E.VolumeName(a)==="")){  Greturn S(a);    }  a    if(a.length>1&&D.IsPathSeparator(a.charCodeAt(0))){  �return S(a);    }  �c=E.Join(new($sliceType($String))([b,a]));  d=S(c);e=d[0];f=d[1];  2    if(!($interfaceIsEqual(f,$ifaceNil))){  Dreturn["",f];    }  Wg=H.TrimPrefix(e,c);  �return[a+g,$ifaceNil];    };lookExtensionsos/exec:LookPathos:IsPathSeparatorpath/filepath:Basepath/filepath:Joinpath/filepath:VolumeNamestrings:TrimPrefix (*os/exec.Cmd).Start��L.Ptr.prototype.Start=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;  Za=this;  s    if(!($interfaceIsEqual(a.lookPathErr,$ifaceNil))){  �a.closeDescriptors(a.closeAfterStart);  �a.closeDescriptors(a.closeAfterWait);  �return a.lookPathErr;    }  �  �    if(!(a.Process===($ptrType(D.Process)).nil)){  �return B.New("exec: already started");    }  b=$newType(4,$kindFunc,"exec.F","F","os/exec",null);b.init([($ptrType(L))],[($ptrType(D.File)),$error],false);  5c=new($sliceType(b))([$methodExpr(($ptrType(L)).prototype.stdin),$methodExpr(($ptrType(L)).prototype.stdout),$methodExpr(($ptrType(L)).prototype.stderr)]);d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �f=e(a);g=f[0];h=f[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �a.closeDescriptors(a.closeAfterStart);  �a.closeDescriptors(a.closeAfterWait);  �return h;    }   a.childFiles=$append(a.childFiles,g);    d++;}   :a.childFiles=$appendSlice(a.childFiles,a.ExtraFiles);   q   ui=$ifaceNil;   �j=D.StartProcess(a.Path,a.argv(),new D.ProcAttr.Ptr(a.Dir,a.envv(),a.childFiles,a.SysProcAttr));a.Process=j[0];i=j[1];  !    if(!($interfaceIsEqual(i,$ifaceNil))){  !*a.closeDescriptors(a.closeAfterStart);  !Ra.closeDescriptors(a.closeAfterWait);  !yreturn i;    }  !�a.closeDescriptors(a.closeAfterStart);  !�a.errch=new($chanType($error,false,false))(a.goroutine.$length);  !�k=a.goroutine;l=0;while(l<k.$length){m=((l<0||l>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+l]);  "$go((function(n,$b){var $this=this,$args=arguments,$r,$s=0;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  "     $r=$send(a.errch,n(),true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[m]);    l++;}  "=return $ifaceNil;    };L.prototype.Start=function(){return this.$val.Start();};Cmd
errors:Newos/exec:Cmdos/exec:argvos/exec:closeDescriptorsos/exec:envvos/exec:stderros/exec:stdinos/exec:stdoutos:Fileos:ProcAttr
os:Processos:StartProcesssyscall:SysProcAttr (*os/exec.ExitError).Error��P.Ptr.prototype.Error=function(){var a;  "�a=this;  "�return a.ProcessState.String();    };P.prototype.Error=function(){return this.$val.Error();};	ExitErroros/exec:ExitError (*os/exec.Cmd).Wait�L.Ptr.prototype.Wait=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d,e,f,g,h,i;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  $�a=$this;  $�    if(a.Process===($ptrType(D.Process)).nil){  $�return B.New("exec: not started");    }  %    if(a.finished){  %'return B.New("exec: Wait was already called");    }  %^a.finished=true;  %qb=a.Process.Wait();c=b[0];d=b[1];  %�a.ProcessState=c;  %�  %�e=$ifaceNil;  %�f=a.goroutine;g=0;case 1:if(!(g<f.$length)){$s=2;continue;}  %�  %�h=$recv(a.errch,true);$s=3;case 3:if(h&&h.$blocking){h=h();}i=h[0];    if(!($interfaceIsEqual(i,$ifaceNil))&&$interfaceIsEqual(e,$ifaceNil)){}else{$s=4;continue;}  &e=i;    case 4:    g++;$s=1;continue;case 2:  &+a.closeDescriptors(a.closeAfterWait);  &R    if(!($interfaceIsEqual(d,$ifaceNil))){  &dreturn d;        }else if(!c.Success()){  &�return new P.Ptr(c);    }  &�return e;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Wait=function($b){return this.$val.Wait($b);};Cmd
errors:Newos/exec:Cmdos/exec:ExitErroros/exec:closeDescriptors
os:Process (*os/exec.Cmd).Output�QL.Ptr.prototype.Output=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  'a=$this;  ''    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  '>return[($sliceType($Uint8)).nil,B.New("exec: Stdout already set")];    }  'u  'yb=new A.Buffer.Ptr();$copy(b,new A.Buffer.Ptr(),A.Buffer);  '�a.Stdout=b;  '�c=a.Run(true);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  '�return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Output=function($b){return this.$val.Output($b);};Cmdbytes:Buffer
errors:Newos/exec:Cmd (*os/exec.Cmd).CombinedOutput��L.Ptr.prototype.CombinedOutput=function($b){var $this=this,$args=arguments,$r,$s=0,a,b,c,d;if(!$b){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  (*a=$this;  (V    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  (mreturn[($sliceType($Uint8)).nil,B.New("exec: Stdout already set")];    }  (�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  (�return[($sliceType($Uint8)).nil,B.New("exec: Stderr already set")];    }  (�  (�b=new A.Buffer.Ptr();$copy(b,new A.Buffer.Ptr(),A.Buffer);  )a.Stdout=b;  )a.Stderr=b;  )$c=a.Run(true);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  )4return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.CombinedOutput=function($b){return this.$val.CombinedOutput($b);};Cmdbytes:Buffer
errors:Newos/exec:Cmd (*os/exec.Cmd).StdinPipe��L.Ptr.prototype.StdinPipe=function(){var a,b,c,d,e,f;  *�a=this;  *�    if(!($interfaceIsEqual(a.Stdin,$ifaceNil))){  +return[$ifaceNil,B.New("exec: Stdin already set")];    }  +F    if(!(a.Process===($ptrType(D.Process)).nil)){  +^return[$ifaceNil,B.New("exec: StdinPipe after process started")];    }  +�b=D.Pipe();c=b[0];d=b[1];e=b[2];  +�    if(!($interfaceIsEqual(e,$ifaceNil))){  +�return[$ifaceNil,e];    }  +�a.Stdin=c;  +�a.closeAfterStart=$append(a.closeAfterStart,c);  ,#f=new Q.Ptr(d,new I.Once.Ptr(),$ifaceNil);  ,?a.closeAfterWait=$append(a.closeAfterWait,f);  ,preturn[f,$ifaceNil];    };L.prototype.StdinPipe=function(){return this.$val.StdinPipe();};Cmd
errors:Newos/exec:Cmdos/exec:closeOnceos:Fileos:Pipe
os:Process	sync:Once (*os/exec.closeOnce).Close��Q.Ptr.prototype.Close=function(){var a;  ,�a=this;  ,�a.once.Do($methodVal(a,"close"));  ,�return a.err;    };Q.prototype.Close=function(){return this.$val.Close();};	closeOnceos/exec:closeos/exec:closeOnce (*os/exec.closeOnce).close��Q.Ptr.prototype.close=function(){var a;  -a=this;  -,a.err=a.File.Close();    };Q.prototype.close=function(){return this.$val.close();};	closeOncecloseos/exec:closeOnce (*os/exec.Cmd).StdoutPipe��L.Ptr.prototype.StdoutPipe=function(){var a,b,c,d,e;  /a=this;  /C    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  /Zreturn[$ifaceNil,B.New("exec: Stdout already set")];    }  /�    if(!(a.Process===($ptrType(D.Process)).nil)){  /�return[$ifaceNil,B.New("exec: StdoutPipe after process started")];    }  /�b=D.Pipe();c=b[0];d=b[1];e=b[2];  0    if(!($interfaceIsEqual(e,$ifaceNil))){  0return[$ifaceNil,e];    }  0.a.Stdout=d;  0=a.closeAfterStart=$append(a.closeAfterStart,d);  0pa.closeAfterWait=$append(a.closeAfterWait,c);  0�return[c,$ifaceNil];    };L.prototype.StdoutPipe=function(){return this.$val.StdoutPipe();};Cmd
errors:Newos/exec:Cmdos:Pipe
os:Process (*os/exec.Cmd).StderrPipe��L.Ptr.prototype.StderrPipe=function(){var a,b,c,d,e;  2�a=this;  2�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  2�return[$ifaceNil,B.New("exec: Stderr already set")];    }  3    if(!(a.Process===($ptrType(D.Process)).nil)){  3return[$ifaceNil,B.New("exec: StderrPipe after process started")];    }  3db=D.Pipe();c=b[0];d=b[1];e=b[2];  3~    if(!($interfaceIsEqual(e,$ifaceNil))){  3�return[$ifaceNil,e];    }  3�a.Stderr=d;  3�a.closeAfterStart=$append(a.closeAfterStart,d);  3�a.closeAfterWait=$append(a.closeAfterWait,c);  4return[c,$ifaceNil];    };L.prototype.StderrPipe=function(){return this.$val.StderrPipe();};Cmd
errors:Newos/exec:Cmdos:Pipe
os:Process os/exec.findExecutableR�R=function(a){var b,c,d,e;  6b=D.Stat(a);c=b[0];d=b[1];  6&    if(!($interfaceIsEqual(d,$ifaceNil))){  68return d;    }  6G  6Je=c.Mode();    if(!new D.FileMode(e).IsDir()&&!((((e&73)>>>0)===0))){  6wreturn $ifaceNil;    }  6�return D.ErrPermission;    };findExecutableos:ErrPermissionos:FileModeos:Stat os/exec.LookPathS�|S=$pkg.LookPath=function(a){var b,c,d,e,f,g,h;  8�    if(H.Contains(a,"/")){  8�b=R(a);  8�    if($interfaceIsEqual(b,$ifaceNil)){  8�return[a,$ifaceNil];    }  9return["",new K.Ptr(a,b)];    }  9#c=D.Getenv("PATH");  9A    if(c===""){  9Vreturn["",new K.Ptr(a,$pkg.ErrNotFound)];    }  9d=H.Split(c,":");e=0;while(e<d.$length){f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  9�    if(f===""){  9�f=".";    }  :g=f+"/"+a;  :&  :)h=R(g);    if($interfaceIsEqual(h,$ifaceNil)){  :Vreturn[g,$ifaceNil];    }    e++;}  :oreturn["",new K.Ptr(a,$pkg.ErrNotFound)];    };LookPathos/exec:ErrNotFoundos/exec:Erroros/exec:findExecutable	os:Getenvstrings:Containsstrings:Split ��{"Base":14999,"Files":[{"Name":"/usr/local/go/src/os/exec/exec.go","Base":1,"Size":13351,"Lines":[0,55,109,159,160,236,310,326,339,340,349,358,368,374,380,397,408,419,430,438,449,451,452,517,546,566,579,591,593,594,627,691,693,694,755,773,817,821,879,936,948,961,962,1035,1091,1095,1162,1177,1178,1228,1291,1305,1306,1362,1422,1463,1475,1476,1526,1600,1671,1698,1760,1829,1903,1969,2045,2062,2063,2134,2138,2207,2244,2248,2306,2347,2365,2383,2384,2454,2527,2596,2600,2675,2708,2731,2732,2802,2871,2905,2906,2959,2980,2981,3044,3087,3118,3119,3169,3216,3244,3273,3302,3334,3388,3390,3391,3459,3483,3486,3547,3550,3615,3685,3703,3706,3776,3842,3904,3952,3966,3980,4020,4023,4057,4102,4127,4138,4155,4159,4162,4174,4176,4177,4248,4304,4349,4365,4377,4382,4397,4399,4400,4432,4451,4466,4469,4490,4492,4493,4525,4547,4563,4566,4591,4593,4594,4642,4663,4694,4712,4722,4726,4777,4786,4789,4790,4828,4844,4847,4848,4874,4891,4900,4903,4904,4955,5004,5054,5087,5125,5139,5143,5156,5160,5176,5178,5179,5228,5265,5267,5268,5317,5377,5407,5410,5447,5449,5450,5520,5535,5586,5604,5614,5618,5669,5678,5681,5682,5714,5730,5733,5734,5760,5777,5786,5789,5790,5841,5890,5940,5967,5980,5984,6000,6002,6003,6057,6087,6100,6103,6105,6106,6172,6175,6241,6306,6317,6320,6389,6446,6476,6504,6539,6552,6555,6572,6574,6575,6639,6690,6772,6828,6862,6896,6899,6915,6939,6942,6980,7004,7007,7058,7082,7085,7125,7183,7216,7233,7250,7253,7296,7320,7322,7323,7399,7402,7480,7507,7537,7564,7604,7643,7666,7669,7701,7744,7762,7803,7843,7857,7861,7875,7878,7901,7946,7949,7950,7987,8062,8086,8104,8145,8185,8199,8203,8245,8248,8302,8303,8318,8384,8400,8423,8442,8466,8470,8487,8527,8566,8579,8582,8583,8622,8623,8669,8703,8732,8751,8759,8762,8763,8775,8777,8778,8837,8861,8879,8881,8882,8919,8951,8953,8954,8993,9032,9035,9101,9166,9177,9180,9249,9306,9336,9339,9395,9424,9447,9488,9491,9508,9561,9564,9583,9615,9639,9640,9661,9686,9742,9761,9765,9768,9769,9807,9808,9825,9838,9868,9895,9898,9899,9917,9919,9920,9980,10021,10043,10096,10099,10119,10134,10150,10173,10175,10176,10245,10275,10324,10346,10399,10402,10424,10477,10480,10500,10515,10530,10546,10569,10571,10572,10640,10683,10758,10826,10902,10948,11000,11021,11073,11076,11099,11165,11168,11194,11211,11229,11232,11246,11297,11325,11374,11390,11392,11393,11417,11427,11428,11444,11456,11458,11459,11495,11515,11529,11531,11532,11562,11586,11588,11589,11658,11702,11705,11780,11851,11930,12005,12045,12097,12119,12172,12175,12198,12265,12268,12294,12311,12329,12332,12347,12398,12447,12463,12465,12466,12535,12578,12581,12656,12727,12806,12880,12931,12983,13005,13058,13061,13084,13151,13154,13180,13197,13215,13218,13233,13284,13333,13349],"Infos":null},{"Name":"/usr/local/go/src/os/exec/lp_unix.go","Base":13353,"Size":1645,"Lines":[0,56,110,160,161,230,231,244,245,254,264,270,281,283,284,374,441,442,483,508,525,538,541,588,601,604,629,631,632,689,751,832,915,960,1020,1082,1132,1133,1167,1197,1215,1235,1239,1270,1273,1303,1323,1362,1365,1416,1433,1487,1500,1504,1531,1578,1598,1602,1605,1643],"Infos":null}]}
 