p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����os/execexec
byteserrorsioospath/filepathruntimestrconvstringssyncsyscall�Cpackage exec
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
:AA=$packages["bytes"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["errors"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["io"];E    $r=C.$init($BLOCKING);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} DD=$packages["os"];E    $r=D.$init($BLOCKING);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} EE=$packages["path/filepath"];E    $r=E.$init($BLOCKING);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} FF=$packages["runtime"];E    $r=F.$init($BLOCKING);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} GG=$packages["strconv"];E    $r=G.$init($BLOCKING);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["strings"];E    $r=H.$init($BLOCKING);$s=8;case 8:if($r&&$r.$blocking){$r=$r();} II=$packages["sync"];E    $r=I.$init($BLOCKING);$s=9;case 9:if($r&&$r.$blocking){$r=$r();} JJ=$packages["syscall"];G    $r=J.$init($BLOCKING);$s=10;case 10:if($r&&$r.$blocking){$r=$r();} K��K=$pkg.Error=$newType(0,$kindStruct,"exec.Error","Error","os/exec",function(Name_,Err_){this.$val=this;this.Name=Name_!==undefined?Name_:"";this.Err=Err_!==undefined?Err_:$ifaceNil;});SAH.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)}];qK.init([{prop:"Name",name:"Name",pkg:"",type:$String,tag:""},{prop:"Err",name:"Err",pkg:"",type:$error,tag:""}]);os/exec.Erroros/exec.Erroros/exec:*os/exec.Error L��L=$pkg.Cmd=$newType(0,$kindStruct,"exec.Cmd","Cmd","os/exec",function(Path_,Args_,Env_,Dir_,Stdin_,Stdout_,Stderr_,ExtraFiles_,SysProcAttr_,Process_,ProcessState_,lookPathErr_,finished_,childFiles_,closeAfterStart_,closeAfterWait_,goroutine_,errch_){this.$val=this;this.Path=Path_!==undefined?Path_:"";this.Args=Args_!==undefined?Args_:T.nil;this.Env=Env_!==undefined?Env_:T.nil;this.Dir=Dir_!==undefined?Dir_:"";this.Stdin=Stdin_!==undefined?Stdin_:$ifaceNil;this.Stdout=Stdout_!==undefined?Stdout_:$ifaceNil;this.Stderr=Stderr_!==undefined?Stderr_:$ifaceNil;this.ExtraFiles=ExtraFiles_!==undefined?ExtraFiles_:V.nil;this.SysProcAttr=SysProcAttr_!==undefined?SysProcAttr_:W.nil;this.Process=Process_!==undefined?Process_:X.nil;this.ProcessState=ProcessState_!==undefined?ProcessState_:Y.nil;this.lookPathErr=lookPathErr_!==undefined?lookPathErr_:$ifaceNil;this.finished=finished_!==undefined?finished_:false;this.childFiles=childFiles_!==undefined?childFiles_:V.nil;this.closeAfterStart=closeAfterStart_!==undefined?closeAfterStart_:Z.nil;this.closeAfterWait=closeAfterWait_!==undefined?closeAfterWait_:Z.nil;this.goroutine=goroutine_!==undefined?goroutine_:AB.nil;this.errch=errch_!==undefined?errch_:AC.nil;});��AF.methods=[{prop:"CombinedOutput",name:"CombinedOutput",pkg:"",type:$funcType([],[AG,$error],false)},{prop:"Output",name:"Output",pkg:"",type:$funcType([],[AG,$error],false)},{prop:"Run",name:"Run",pkg:"",type:$funcType([],[$error],false)},{prop:"Start",name:"Start",pkg:"",type:$funcType([],[$error],false)},{prop:"StderrPipe",name:"StderrPipe",pkg:"",type:$funcType([],[C.ReadCloser,$error],false)},{prop:"StdinPipe",name:"StdinPipe",pkg:"",type:$funcType([],[C.WriteCloser,$error],false)},{prop:"StdoutPipe",name:"StdoutPipe",pkg:"",type:$funcType([],[C.ReadCloser,$error],false)},{prop:"Wait",name:"Wait",pkg:"",type:$funcType([],[$error],false)},{prop:"argv",name:"argv",pkg:"os/exec",type:$funcType([],[T],false)},{prop:"closeDescriptors",name:"closeDescriptors",pkg:"os/exec",type:$funcType([Z],[],false)},{prop:"envv",name:"envv",pkg:"os/exec",type:$funcType([],[T],false)},{prop:"stderr",name:"stderr",pkg:"os/exec",type:$funcType([],[U,$error],false)},{prop:"stdin",name:"stdin",pkg:"os/exec",type:$funcType([],[U,$error],false)},{prop:"stdout",name:"stdout",pkg:"os/exec",type:$funcType([],[U,$error],false)},{prop:"writerDescriptor",name:"writerDescriptor",pkg:"os/exec",type:$funcType([C.Writer],[U,$error],false)}];�CL.init([{prop:"Path",name:"Path",pkg:"",type:$String,tag:""},{prop:"Args",name:"Args",pkg:"",type:T,tag:""},{prop:"Env",name:"Env",pkg:"",type:T,tag:""},{prop:"Dir",name:"Dir",pkg:"",type:$String,tag:""},{prop:"Stdin",name:"Stdin",pkg:"",type:C.Reader,tag:""},{prop:"Stdout",name:"Stdout",pkg:"",type:C.Writer,tag:""},{prop:"Stderr",name:"Stderr",pkg:"",type:C.Writer,tag:""},{prop:"ExtraFiles",name:"ExtraFiles",pkg:"",type:V,tag:""},{prop:"SysProcAttr",name:"SysProcAttr",pkg:"",type:W,tag:""},{prop:"Process",name:"Process",pkg:"",type:X,tag:""},{prop:"ProcessState",name:"ProcessState",pkg:"",type:Y,tag:""},{prop:"lookPathErr",name:"lookPathErr",pkg:"os/exec",type:$error,tag:""},{prop:"finished",name:"finished",pkg:"os/exec",type:$Bool,tag:""},{prop:"childFiles",name:"childFiles",pkg:"os/exec",type:V,tag:""},{prop:"closeAfterStart",name:"closeAfterStart",pkg:"os/exec",type:Z,tag:""},{prop:"closeAfterWait",name:"closeAfterWait",pkg:"os/exec",type:Z,tag:""},{prop:"goroutine",name:"goroutine",pkg:"os/exec",type:AB,tag:""},{prop:"errch",name:"errch",pkg:"os/exec",type:AC,tag:""}]);os/exec.Cmdio.ReadCloser	io.Readerio.WriteCloser	io.Writeros/exec.Cmdos/exec:*os.Fileos/exec:*os.Processos/exec:*os.ProcessStateos/exec:*os/exec.Cmdos/exec:*syscall.SysProcAttros/exec:[]*os.Fileos/exec:[]byteos/exec:[]func() erroros/exec:[]io.Closeros/exec:[]stringos/exec:chan error P��P=$pkg.ExitError=$newType(0,$kindStruct,"exec.ExitError","ExitError","os/exec",function(ProcessState_){this.$val=this;this.ProcessState=ProcessState_!==undefined?ProcessState_:Y.nil;});�	=P.methods=[{prop:"Exited",name:"Exited",pkg:"",type:$funcType([],[$Bool],false)},{prop:"Pid",name:"Pid",pkg:"",type:$funcType([],[$Int],false)},{prop:"String",name:"String",pkg:"",type:$funcType([],[$String],false)},{prop:"Success",name:"Success",pkg:"",type:$funcType([],[$Bool],false)},{prop:"Sys",name:"Sys",pkg:"",type:$funcType([],[$emptyInterface],false)},{prop:"SysUsage",name:"SysUsage",pkg:"",type:$funcType([],[$emptyInterface],false)},{prop:"SystemTime",name:"SystemTime",pkg:"",type:$funcType([],[$packages["time"].Duration],false)},{prop:"UserTime",name:"UserTime",pkg:"",type:$funcType([],[$packages["time"].Duration],false)},{prop:"exited",name:"exited",pkg:"os",type:$funcType([],[$Bool],false)},{prop:"success",name:"success",pkg:"os",type:$funcType([],[$Bool],false)},{prop:"sys",name:"sys",pkg:"os",type:$funcType([],[$emptyInterface],false)},{prop:"sysUsage",name:"sysUsage",pkg:"os",type:$funcType([],[$emptyInterface],false)},{prop:"systemTime",name:"systemTime",pkg:"os",type:$funcType([],[$packages["time"].Duration],false)},{prop:"userTime",name:"userTime",pkg:"os",type:$funcType([],[$packages["time"].Duration],false)}];AI.methods=[{prop:"Error",name:"Error",pkg:"",type:$funcType([],[$String],false)},{prop:"Exited",name:"Exited",pkg:"",type:$funcType([],[$Bool],false)},{prop:"Pid",name:"Pid",pkg:"",type:$funcType([],[$Int],false)},{prop:"String",name:"String",pkg:"",type:$funcType([],[$String],false)},{prop:"Success",name:"Success",pkg:"",type:$funcType([],[$Bool],false)},{prop:"Sys",name:"Sys",pkg:"",type:$funcType([],[$emptyInterface],false)},{prop:"SysUsage",name:"SysUsage",pkg:"",type:$funcType([],[$emptyInterface],false)},{prop:"SystemTime",name:"SystemTime",pkg:"",type:$funcType([],[$packages["time"].Duration],false)},{prop:"UserTime",name:"UserTime",pkg:"",type:$funcType([],[$packages["time"].Duration],false)},{prop:"exited",name:"exited",pkg:"os",type:$funcType([],[$Bool],false)},{prop:"success",name:"success",pkg:"os",type:$funcType([],[$Bool],false)},{prop:"sys",name:"sys",pkg:"os",type:$funcType([],[$emptyInterface],false)},{prop:"sysUsage",name:"sysUsage",pkg:"os",type:$funcType([],[$emptyInterface],false)},{prop:"systemTime",name:"systemTime",pkg:"os",type:$funcType([],[$packages["time"].Duration],false)},{prop:"userTime",name:"userTime",pkg:"os",type:$funcType([],[$packages["time"].Duration],false)}];=P.init([{prop:"ProcessState",name:"",pkg:"",type:Y,tag:""}]);os/exec.ExitErroros/exec.ExitErroros/exec:*os.ProcessStateos/exec:*os/exec.ExitErrortime.Duration Q� Q=$pkg.closeOnce=$newType(0,$kindStruct,"exec.closeOnce","closeOnce","os/exec",function(File_,once_,err_){this.$val=this;this.File=File_!==undefined?File_:U.nil;this.once=once_!==undefined?once_:new I.Once.ptr();this.err=err_!==undefined?err_:$ifaceNil;});��Q.methods=[{prop:"Chdir",name:"Chdir",pkg:"",type:$funcType([],[$error],false)},{prop:"Chmod",name:"Chmod",pkg:"",type:$funcType([D.FileMode],[$error],false)},{prop:"Chown",name:"Chown",pkg:"",type:$funcType([$Int,$Int],[$error],false)},{prop:"Fd",name:"Fd",pkg:"",type:$funcType([],[$Uintptr],false)},{prop:"Name",name:"Name",pkg:"",type:$funcType([],[$String],false)},{prop:"Read",name:"Read",pkg:"",type:$funcType([AG],[$Int,$error],false)},{prop:"ReadAt",name:"ReadAt",pkg:"",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"Readdir",name:"Readdir",pkg:"",type:$funcType([$Int],[AJ,$error],false)},{prop:"Readdirnames",name:"Readdirnames",pkg:"",type:$funcType([$Int],[T,$error],false)},{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Stat",name:"Stat",pkg:"",type:$funcType([],[D.FileInfo,$error],false)},{prop:"Sync",name:"Sync",pkg:"",type:$funcType([],[$error],false)},{prop:"Truncate",name:"Truncate",pkg:"",type:$funcType([$Int64],[$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AG],[$Int,$error],false)},{prop:"WriteAt",name:"WriteAt",pkg:"",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"WriteString",name:"WriteString",pkg:"",type:$funcType([$String],[$Int,$error],false)},{prop:"close",name:"close",pkg:"os",type:$funcType([],[$error],false)},{prop:"pread",name:"pread",pkg:"os",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"pwrite",name:"pwrite",pkg:"os",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"read",name:"read",pkg:"os",type:$funcType([AG],[$Int,$error],false)},{prop:"readdir",name:"readdir",pkg:"os",type:$funcType([$Int],[AJ,$error],false)},{prop:"readdirnames",name:"readdirnames",pkg:"os",type:$funcType([$Int],[T,$error],false)},{prop:"seek",name:"seek",pkg:"os",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"write",name:"write",pkg:"os",type:$funcType([AG],[$Int,$error],false)}];AK.methods=[{prop:"Chdir",name:"Chdir",pkg:"",type:$funcType([],[$error],false)},{prop:"Chmod",name:"Chmod",pkg:"",type:$funcType([D.FileMode],[$error],false)},{prop:"Chown",name:"Chown",pkg:"",type:$funcType([$Int,$Int],[$error],false)},{prop:"Close",name:"Close",pkg:"",type:$funcType([],[$error],false)},{prop:"Fd",name:"Fd",pkg:"",type:$funcType([],[$Uintptr],false)},{prop:"Name",name:"Name",pkg:"",type:$funcType([],[$String],false)},{prop:"Read",name:"Read",pkg:"",type:$funcType([AG],[$Int,$error],false)},{prop:"ReadAt",name:"ReadAt",pkg:"",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"Readdir",name:"Readdir",pkg:"",type:$funcType([$Int],[AJ,$error],false)},{prop:"Readdirnames",name:"Readdirnames",pkg:"",type:$funcType([$Int],[T,$error],false)},{prop:"Seek",name:"Seek",pkg:"",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"Stat",name:"Stat",pkg:"",type:$funcType([],[D.FileInfo,$error],false)},{prop:"Sync",name:"Sync",pkg:"",type:$funcType([],[$error],false)},{prop:"Truncate",name:"Truncate",pkg:"",type:$funcType([$Int64],[$error],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([AG],[$Int,$error],false)},{prop:"WriteAt",name:"WriteAt",pkg:"",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"WriteString",name:"WriteString",pkg:"",type:$funcType([$String],[$Int,$error],false)},{prop:"close",name:"close",pkg:"os",type:$funcType([],[$error],false)},{prop:"pread",name:"pread",pkg:"os",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"pwrite",name:"pwrite",pkg:"os",type:$funcType([AG,$Int64],[$Int,$error],false)},{prop:"read",name:"read",pkg:"os",type:$funcType([AG],[$Int,$error],false)},{prop:"readdir",name:"readdir",pkg:"os",type:$funcType([$Int],[AJ,$error],false)},{prop:"readdirnames",name:"readdirnames",pkg:"os",type:$funcType([$Int],[T,$error],false)},{prop:"seek",name:"seek",pkg:"os",type:$funcType([$Int64,$Int],[$Int64,$error],false)},{prop:"write",name:"write",pkg:"os",type:$funcType([AG],[$Int,$error],false)},{prop:"close",name:"close",pkg:"os/exec",type:$funcType([],[],false)}];��Q.init([{prop:"File",name:"",pkg:"",type:U,tag:""},{prop:"once",name:"once",pkg:"os/exec",type:I.Once,tag:""},{prop:"err",name:"err",pkg:"os/exec",type:$error,tag:""}]);os/exec.closeOnce	os.FileInfoos.FileModeos/exec.closeOnceos/exec:*os.Fileos/exec:*os/exec.closeOnceos/exec:[]byteos/exec:[]os.FileInfoos/exec:[]string	sync.Once AD5AD=$newType(4,$kindFunc,"exec.F","F","os/exec",null);AD.init([AF],[U,$error],false);	os/exec.Fos/exec:*os.Fileos/exec:*os/exec.Cmd TT=$sliceType($String);os/exec:[]string UU=$ptrType(D.File);os/exec:*os.Fileos.File VV=$sliceType(U);os/exec:[]*os.Fileos/exec:*os.File WW=$ptrType(J.SysProcAttr);os/exec:*syscall.SysProcAttrsyscall.SysProcAttr XX=$ptrType(D.Process);os/exec:*os.Process
os.Process YY=$ptrType(D.ProcessState);os/exec:*os.ProcessStateos.ProcessState ZZ=$sliceType(C.Closer);os/exec:[]io.Closer	io.Closer AA AA=$funcType([],[$error],false);os/exec:func() error ABAB=$sliceType(AA);os/exec:[]func() erroros/exec:func() error AC!AC=$chanType($error,false,false);os/exec:chan error AEAE=$sliceType(AD);os/exec:[]os/exec.F AFAF=$ptrType(L);os/exec:*os/exec.Cmdos/exec.Cmd AGAG=$sliceType($Uint8);os/exec:[]byte AHAH=$ptrType(K);os/exec:*os/exec.Erroros/exec.Error AIAI=$ptrType(P);os/exec:*os/exec.ExitErroros/exec.ExitError AJAJ=$sliceType(D.FileInfo);os/exec:[]os.FileInfoos.FileInfo AKAK=$ptrType(Q);os/exec:*os/exec.closeOnceos/exec.closeOnce os/exec.ErrNotFound B    $pkg.ErrNotFound=B.New("executable file not found in $PATH");
errors.Newos/exec.ErrNotFound (*os/exec.Error).Error��K.ptr.prototype.Error=function(){var a;  Ya=this;  ureturn"exec: "+G.Quote(a.Name)+": "+a.Err.Error();    };K.prototype.Error=function(){return this.$val.Error();};os/exec.Erroros/exec.Errorstrconv.Quote os/exec.CommandM��M=$pkg.Command=function(a,b,$b){var $args=arguments,$r,$s=0,$this=this,c,d,e,f,g;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  rc=new L.ptr(a,$appendSlice(new T([a]),b),T.nil,"",$ifaceNil,$ifaceNil,$ifaceNil,V.nil,W.nil,X.nil,Y.nil,$ifaceNil,false,V.nil,Z.nil,Z.nil,AB.nil,AC.nil);  �    if(E.Base(a)===a){}else{$s=1;continue;}  �  �e=S(a,$BLOCKING);$s=2;case 2:if(e&&e.$blocking){e=e();}d=e;f=d[0];g=d[1];    if(!($interfaceIsEqual(g,$ifaceNil))){}else{$s=3;continue;}  
c.lookPathErr=g;    $s=4;continue;case 3:  .c.Path=f;    case 4:    case 1:  Dreturn c;    case-1:}return;}};$f.$blocking=true;return $f;};os/exec.Command	io.Closeros.File
os.Processos.ProcessStateos/exec.Cmdos/exec.Commandos/exec.LookPathos/exec:*os.Fileos/exec:*os.Processos/exec:*os.ProcessStateos/exec:*syscall.SysProcAttros/exec:[]*os.Fileos/exec:[]func() erroros/exec:[]io.Closeros/exec:[]stringos/exec:chan erroros/exec:func() errorpath/filepath.Basesyscall.SysProcAttr os/exec.interfaceEqualN�N=function(a,b){var $deferred=[],$err=null;try{$deferFrames.push($deferred);  �$deferred.push([(function(){  $recover();    }),[]]);   return $interfaceIsEqual(a,b);    }catch(err){$err=err;return false;}finally{$deferFrames.pop();$callDeferred($deferred,$err);}};os/exec.interfaceEqualos/exec.interfaceEqual (*os/exec.Cmd).envv��L.ptr.prototype.envv=function($b){var $args=arguments,$r,$s=0,$this=this,a,b;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  7a=$this;  R    if(!(a.Env===T.nil)){  freturn a.Env;    }  wb=D.Environ($BLOCKING);$s=1;case 1:if(b&&b.$blocking){b=b();}return b;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.envv=function($b){return this.$val.envv($b);};os/exec.Cmdos/exec.envv~
os.Environos/exec.Cmdos/exec:[]string (*os/exec.Cmd).argv��L.ptr.prototype.argv=function(){var a;  �a=this;  �    if(a.Args.$length>0){  �return a.Args;    }  �return new T([a.Path]);    };L.prototype.argv=function(){return this.$val.argv();};os/exec.Cmdos/exec.argv~os/exec.Cmdos/exec:[]string (*os/exec.Cmd).stdin��L.ptr.prototype.stdin=function($b){var $args=arguments,$r,$s=0,$this=this,a=U.nil,b=$ifaceNil,c,d,e,f,g,h,i,j,k,l,m,n,o;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �c=$this;  $    if($interfaceIsEqual(c.Stdin,$ifaceNil)){  :d=D.Open("/dev/null");a=d[0];b=d[1];  Y    if(!($interfaceIsEqual(b,$ifaceNil))){  lreturn[a,b];    }  yc.closeAfterStart=$append(c.closeAfterStart,a);  �return[a,b];    }  �  �e=$assertType(c.Stdin,U,true);f=e[0];g=e[1];    if(g){  �    h=f;i=$ifaceNil;a=h;b=i;return[a,b];    }  �k=D.Pipe($BLOCKING);$s=1;case 1:if(k&&k.$blocking){k=k();}j=k;l=j[0];m=j[1];b=j[2];      if(!($interfaceIsEqual(b,$ifaceNil))){  return[a,b];    }  *c.closeAfterStart=$append(c.closeAfterStart,l);  ]c.closeAfterWait=$append(c.closeAfterWait,m);  �c.goroutine=$append(c.goroutine,(function(){var n,o,p;  �n=C.Copy(m,c.Stdin);o=n[1];  �  �p=m.Close();    if($interfaceIsEqual(o,$ifaceNil)){  	o=p;    }  return o;    }));  *    n=l;o=$ifaceNil;a=n;b=o;return[a,b];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.stdin=function($b){return this.$val.stdin($b);};os/exec.Cmdos/exec.stdin~io.Copyos.Openos.Pipeos/exec.Cmdos/exec:*os.File (*os/exec.Cmd).stdout��L.ptr.prototype.stdout=function($b){var $args=arguments,$r,$s=0,$this=this,a=U.nil,b=$ifaceNil,c,d,e;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  Bc=$this;  n    e=c.writerDescriptor(c.Stdout,$BLOCKING);$s=1;case 1:if(e&&e.$blocking){e=e();}d=e;a=d[0];b=d[1];return[a,b];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.stdout=function($b){return this.$val.stdout($b);};os/exec.Cmdos/exec.stdout~os/exec.Cmdos/exec.writerDescriptor~os/exec:*os.File (*os/exec.Cmd).stderr��L.ptr.prototype.stderr=function($b){var $args=arguments,$r,$s=0,$this=this,a=U.nil,b=$ifaceNil,c,d,e,f,g,h;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �c=$this;  �    if(!($interfaceIsEqual(c.Stderr,$ifaceNil))&&N(c.Stderr,c.Stdout)){      d=(e=c.childFiles,((1<0||1>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+1]));f=$ifaceNil;a=d;b=f;return[a,b];    }  $    h=c.writerDescriptor(c.Stderr,$BLOCKING);$s=1;case 1:if(h&&h.$blocking){h=h();}g=h;a=g[0];b=g[1];return[a,b];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.stderr=function($b){return this.$val.stderr($b);};os/exec.Cmdos/exec.stderr~os/exec.Cmdos/exec.interfaceEqualos/exec.writerDescriptor~os/exec:*os.File (*os/exec.Cmd).writerDescriptor�sL.ptr.prototype.writerDescriptor=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b=U.nil,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  Qd=$this;  �    if($interfaceIsEqual(a,$ifaceNil)){  �e=D.OpenFile("/dev/null",1,0);b=e[0];c=e[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �d.closeAfterStart=$append(d.closeAfterStart,b);  (return[b,c];    }  4  7f=$assertType(a,U,true);g=f[0];h=f[1];    if(h){  U    i=g;j=$ifaceNil;b=i;c=j;return[b,c];    }  hl=D.Pipe($BLOCKING);$s=1;case 1:if(l&&l.$blocking){l=l();}k=l;m=k[0];n=k[1];c=k[2];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �d.closeAfterStart=$append(d.closeAfterStart,n);  �d.closeAfterWait=$append(d.closeAfterWait,m);  d.goroutine=$append(d.goroutine,(function(){var o,p;  7o=C.Copy(a,m);p=o[1];  Rreturn p;    }));  b    o=n;p=$ifaceNil;b=o;c=p;return[b,c];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.writerDescriptor=function(a,$b){return this.$val.writerDescriptor(a,$b);};os/exec.Cmdos/exec.writerDescriptor~io.Copyos.OpenFileos.Pipeos/exec.Cmdos/exec:*os.File (*os/exec.Cmd).closeDescriptors�,L.ptr.prototype.closeDescriptors=function(a){var b,c,d,e;  zb=this;  �c=a;d=0;while(d<c.$length){e=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �e.Close();    d++;}    };L.prototype.closeDescriptors=function(a){return this.$val.closeDescriptors(a);};os/exec.Cmdos/exec.closeDescriptors~os/exec.Cmd (*os/exec.Cmd).Run�L.ptr.prototype.Run=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  Sa=$this;  j  mb=a.Start($BLOCKING);$s=1;case 1:if(b&&b.$blocking){b=b();}c=b;    if(!($interfaceIsEqual(c,$ifaceNil))){}else{$s=2;continue;}  �return c;    case 2:  �d=a.Wait($BLOCKING);$s=3;case 3:if(d&&d.$blocking){d=d();}return d;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Run=function($b){return this.$val.Run($b);};os/exec.Cmdos/exec.Cmd os/exec.lookExtensionsO��O=function(a,b,$b){var $args=arguments,$r,$s=0,$this=this,c,d,e,f,g,h,i,j,k;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  �    if(E.Base(a)===a){  �a=E.Join(new T([".",a]));    }  �    if(b===""){}else{$s=1;continue;}  c=S(a,$BLOCKING);$s=2;case 2:if(c&&c.$blocking){c=c();}return c;    case 1:       if(!(E.VolumeName(a)==="")){}else{$s=3;continue;}  Gd=S(a,$BLOCKING);$s=4;case 4:if(d&&d.$blocking){d=d();}return d;    case 3:  a    if(a.length>1&&D.IsPathSeparator(a.charCodeAt(0))){}else{$s=5;continue;}  �e=S(a,$BLOCKING);$s=6;case 6:if(e&&e.$blocking){e=e();}return e;    case 5:  �f=E.Join(new T([b,a]));  h=S(f,$BLOCKING);$s=7;case 7:if(h&&h.$blocking){h=h();}g=h;i=g[0];j=g[1];  2    if(!($interfaceIsEqual(j,$ifaceNil))){  Dreturn["",j];    }  Wk=H.TrimPrefix(i,f);  �return[a+k,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};os/exec.lookExtensionsos.IsPathSeparatoros/exec.LookPathos/exec.lookExtensionsos/exec:[]stringpath/filepath.Basepath/filepath.Joinpath/filepath.VolumeNamestrings.TrimPrefix (*os/exec.Cmd).Start��L.ptr.prototype.Start=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i,j,k,l,m,n;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  Za=$this;  s    if(!($interfaceIsEqual(a.lookPathErr,$ifaceNil))){  �a.closeDescriptors(a.closeAfterStart);  �a.closeDescriptors(a.closeAfterWait);  �return a.lookPathErr;    }  �  �    if(!(a.Process===X.nil)){  �return B.New("exec: already started");    }    5b=new AE([$methodExpr(AF.prototype.stdin),$methodExpr(AF.prototype.stdout),$methodExpr(AF.prototype.stderr)]);c=0;while(c<b.$length){d=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  �e=d(a);f=e[0];g=e[1];  �    if(!($interfaceIsEqual(g,$ifaceNil))){  �a.closeDescriptors(a.closeAfterStart);  �a.closeDescriptors(a.closeAfterWait);  �return g;    }   a.childFiles=$append(a.childFiles,f);    c++;}   :a.childFiles=$appendSlice(a.childFiles,a.ExtraFiles);   q   uh=$ifaceNil;   �j=a.envv($BLOCKING);$s=1;case 1:if(j&&j.$blocking){j=j();}k=D.StartProcess(a.Path,a.argv(),new D.ProcAttr.ptr(a.Dir,j,a.childFiles,a.SysProcAttr),$BLOCKING);$s=2;case 2:if(k&&k.$blocking){k=k();}i=k;a.Process=i[0];h=i[1];  !    if(!($interfaceIsEqual(h,$ifaceNil))){  !*a.closeDescriptors(a.closeAfterStart);  !Ra.closeDescriptors(a.closeAfterWait);  !yreturn h;    }  !�a.closeDescriptors(a.closeAfterStart);  !�a.errch=new AC(a.goroutine.$length);  !�l=a.goroutine;m=0;while(m<l.$length){n=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  "$go((function(o,$b){var $args=arguments,$r,$s=0,$this=this;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  "     $r=$send(a.errch,o(),$BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}    case-1:}return;}};$f.$blocking=true;return $f;}),[n]);    m++;}  "=return $ifaceNil;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Start=function($b){return this.$val.Start($b);};os/exec.Cmd
errors.Newos.ProcAttros.StartProcessos/exec.Cmd	os/exec.Fos/exec.argv~os/exec.closeDescriptors~os/exec.envv~os/exec.stderr~os/exec.stdin~os/exec.stdout~os/exec:*os.Processos/exec:*os/exec.Cmdos/exec:*syscall.SysProcAttros/exec:[]*os.Fileos/exec:[]os/exec.Fos/exec:[]stringos/exec:chan error (*os/exec.ExitError).Error��P.ptr.prototype.Error=function(){var a;  "�a=this;  "�return a.ProcessState.String();    };P.prototype.Error=function(){return this.$val.Error();};os/exec.ExitErroros/exec.ExitError (*os/exec.Cmd).Wait�L.ptr.prototype.Wait=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f,g,h,i;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  $�a=$this;  $�    if(a.Process===X.nil){  $�return B.New("exec: not started");    }  %    if(a.finished){  %'return B.New("exec: Wait was already called");    }  %^a.finished=true;  %qb=a.Process.Wait();c=b[0];d=b[1];  %�a.ProcessState=c;  %�  %�e=$ifaceNil;  %�f=a.goroutine;g=0;case 1:if(!(g<f.$length)){$s=2;continue;}  %�  %�h=$recv(a.errch,$BLOCKING);$s=3;case 3:if(h&&h.$blocking){h=h();}i=h[0];    if(!($interfaceIsEqual(i,$ifaceNil))&&$interfaceIsEqual(e,$ifaceNil)){}else{$s=4;continue;}  &e=i;    case 4:    g++;$s=1;continue;case 2:  &+a.closeDescriptors(a.closeAfterWait);  &R    if(!($interfaceIsEqual(d,$ifaceNil))){  &dreturn d;        }else if(!c.Success()){  &�return new P.ptr(c);    }  &�return e;    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Wait=function($b){return this.$val.Wait($b);};os/exec.Cmd
errors.Newos/exec.Cmdos/exec.ExitErroros/exec.closeDescriptors~os/exec:*os.Process (*os/exec.Cmd).Output�;L.ptr.prototype.Output=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  'a=$this;  ''    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  '>return[AG.nil,B.New("exec: Stdout already set")];    }  'u  'yb=$clone(new A.Buffer.ptr(),A.Buffer);  '�a.Stdout=b;  '�c=a.Run($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  '�return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.Output=function($b){return this.$val.Output($b);};os/exec.Cmdbytes.Buffer
errors.Newos/exec.Cmdos/exec:[]byte (*os/exec.Cmd).CombinedOutput��L.ptr.prototype.CombinedOutput=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  (*a=$this;  (V    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  (mreturn[AG.nil,B.New("exec: Stdout already set")];    }  (�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  (�return[AG.nil,B.New("exec: Stderr already set")];    }  (�  (�b=$clone(new A.Buffer.ptr(),A.Buffer);  )a.Stdout=b;  )a.Stderr=b;  )$c=a.Run($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  )4return[b.Bytes(),d];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.CombinedOutput=function($b){return this.$val.CombinedOutput($b);};os/exec.Cmdbytes.Buffer
errors.Newos/exec.Cmdos/exec:[]byte (*os/exec.Cmd).StdinPipe��L.ptr.prototype.StdinPipe=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f,g;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  *�a=$this;  *�    if(!($interfaceIsEqual(a.Stdin,$ifaceNil))){  +return[$ifaceNil,B.New("exec: Stdin already set")];    }  +F    if(!(a.Process===X.nil)){  +^return[$ifaceNil,B.New("exec: StdinPipe after process started")];    }  +�c=D.Pipe($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];f=b[2];  +�    if(!($interfaceIsEqual(f,$ifaceNil))){  +�return[$ifaceNil,f];    }  +�a.Stdin=d;  +�a.closeAfterStart=$append(a.closeAfterStart,d);  ,#g=new Q.ptr(e,new I.Once.ptr(),$ifaceNil);  ,?a.closeAfterWait=$append(a.closeAfterWait,g);  ,preturn[g,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.StdinPipe=function($b){return this.$val.StdinPipe($b);};os/exec.Cmd
errors.Newos.Pipeos/exec.Cmdos/exec.closeOnceos/exec:*os.Fileos/exec:*os.Process	sync.Once (*os/exec.closeOnce).Close��Q.ptr.prototype.Close=function($b){var $args=arguments,$r,$s=0,$this=this,a;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  ,�a=$this;  ,�$r=a.once.Do($methodVal(a,"close"),$BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  ,�return a.err;    case-1:}return;}};$f.$blocking=true;return $f;};Q.prototype.Close=function($b){return this.$val.Close($b);};os/exec.closeOnceos/exec.closeOnceos/exec.close~ (*os/exec.closeOnce).close��Q.ptr.prototype.close=function(){var a;  -a=this;  -,a.err=a.File.Close();    };Q.prototype.close=function(){return this.$val.close();};os/exec.closeOnceos/exec.close~os/exec.closeOnce (*os/exec.Cmd).StdoutPipe�YL.ptr.prototype.StdoutPipe=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  /a=$this;  /C    if(!($interfaceIsEqual(a.Stdout,$ifaceNil))){  /Zreturn[$ifaceNil,B.New("exec: Stdout already set")];    }  /�    if(!(a.Process===X.nil)){  /�return[$ifaceNil,B.New("exec: StdoutPipe after process started")];    }  /�c=D.Pipe($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];f=b[2];  0    if(!($interfaceIsEqual(f,$ifaceNil))){  0return[$ifaceNil,f];    }  0.a.Stdout=e;  0=a.closeAfterStart=$append(a.closeAfterStart,e);  0pa.closeAfterWait=$append(a.closeAfterWait,d);  0�return[d,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.StdoutPipe=function($b){return this.$val.StdoutPipe($b);};os/exec.Cmd
errors.Newos.Pipeos/exec.Cmdos/exec:*os.Process (*os/exec.Cmd).StderrPipe�YL.ptr.prototype.StderrPipe=function($b){var $args=arguments,$r,$s=0,$this=this,a,b,c,d,e,f;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  2�a=$this;  2�    if(!($interfaceIsEqual(a.Stderr,$ifaceNil))){  2�return[$ifaceNil,B.New("exec: Stderr already set")];    }  3    if(!(a.Process===X.nil)){  3return[$ifaceNil,B.New("exec: StderrPipe after process started")];    }  3dc=D.Pipe($BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];f=b[2];  3~    if(!($interfaceIsEqual(f,$ifaceNil))){  3�return[$ifaceNil,f];    }  3�a.Stderr=e;  3�a.closeAfterStart=$append(a.closeAfterStart,e);  3�a.closeAfterWait=$append(a.closeAfterWait,d);  4return[d,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};L.prototype.StderrPipe=function($b){return this.$val.StderrPipe($b);};os/exec.Cmd
errors.Newos.Pipeos/exec.Cmdos/exec:*os.Process os/exec.findExecutableR�R=function(a){var b,c,d,e;  6b=D.Stat(a);c=b[0];d=b[1];  6&    if(!($interfaceIsEqual(d,$ifaceNil))){  68return d;    }  6G  6Je=c.Mode();    if(!new D.FileMode(e).IsDir()&&!((((e&73)>>>0)===0))){  6wreturn $ifaceNil;    }  6�return D.ErrPermission;    };os/exec.findExecutableos.ErrPermissionos.FileModeos.Statos/exec.findExecutable os/exec.LookPathS�`S=$pkg.LookPath=function(a,$b){var $args=arguments,$r,$s=0,$this=this,b,c,d,e,f,g,h,i;if($b!==$BLOCKING){$nonblockingCall();};var $f=function(){s:while(true){switch($s){case 0:  8�    if(H.Contains(a,"/")){  8�b=R(a);  8�    if($interfaceIsEqual(b,$ifaceNil)){  8�return[a,$ifaceNil];    }  9return["",new K.ptr(a,b)];    }  9#c=D.Getenv("PATH",$BLOCKING);$s=1;case 1:if(c&&c.$blocking){c=c();}d=c;  9A    if(d===""){  9Vreturn["",new K.ptr(a,$pkg.ErrNotFound)];    }  9e=H.Split(d,":");f=0;while(f<e.$length){g=((f<0||f>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+f]);  9�    if(g===""){  9�g=".";    }  :h=g+"/"+a;  :&  :)i=R(h);    if($interfaceIsEqual(i,$ifaceNil)){  :Vreturn[h,$ifaceNil];    }    f++;}  :oreturn["",new K.ptr(a,$pkg.ErrNotFound)];    case-1:}return;}};$f.$blocking=true;return $f;};os/exec.LookPath	os.Getenvos/exec.ErrNotFoundos/exec.Erroros/exec.LookPathos/exec.findExecutablestrings.Containsstrings.Split ��{"Base":14999,"Files":[{"Name":"/usr/local/go/src/os/exec/exec.go","Base":1,"Size":13351,"Lines":[0,55,109,159,160,236,310,326,339,340,349,358,368,374,380,397,408,419,430,438,449,451,452,517,546,566,579,591,593,594,627,691,693,694,755,773,817,821,879,936,948,961,962,1035,1091,1095,1162,1177,1178,1228,1291,1305,1306,1362,1422,1463,1475,1476,1526,1600,1671,1698,1760,1829,1903,1969,2045,2062,2063,2134,2138,2207,2244,2248,2306,2347,2365,2383,2384,2454,2527,2596,2600,2675,2708,2731,2732,2802,2871,2905,2906,2959,2980,2981,3044,3087,3118,3119,3169,3216,3244,3273,3302,3334,3388,3390,3391,3459,3483,3486,3547,3550,3615,3685,3703,3706,3776,3842,3904,3952,3966,3980,4020,4023,4057,4102,4127,4138,4155,4159,4162,4174,4176,4177,4248,4304,4349,4365,4377,4382,4397,4399,4400,4432,4451,4466,4469,4490,4492,4493,4525,4547,4563,4566,4591,4593,4594,4642,4663,4694,4712,4722,4726,4777,4786,4789,4790,4828,4844,4847,4848,4874,4891,4900,4903,4904,4955,5004,5054,5087,5125,5139,5143,5156,5160,5176,5178,5179,5228,5265,5267,5268,5317,5377,5407,5410,5447,5449,5450,5520,5535,5586,5604,5614,5618,5669,5678,5681,5682,5714,5730,5733,5734,5760,5777,5786,5789,5790,5841,5890,5940,5967,5980,5984,6000,6002,6003,6057,6087,6100,6103,6105,6106,6172,6175,6241,6306,6317,6320,6389,6446,6476,6504,6539,6552,6555,6572,6574,6575,6639,6690,6772,6828,6862,6896,6899,6915,6939,6942,6980,7004,7007,7058,7082,7085,7125,7183,7216,7233,7250,7253,7296,7320,7322,7323,7399,7402,7480,7507,7537,7564,7604,7643,7666,7669,7701,7744,7762,7803,7843,7857,7861,7875,7878,7901,7946,7949,7950,7987,8062,8086,8104,8145,8185,8199,8203,8245,8248,8302,8303,8318,8384,8400,8423,8442,8466,8470,8487,8527,8566,8579,8582,8583,8622,8623,8669,8703,8732,8751,8759,8762,8763,8775,8777,8778,8837,8861,8879,8881,8882,8919,8951,8953,8954,8993,9032,9035,9101,9166,9177,9180,9249,9306,9336,9339,9395,9424,9447,9488,9491,9508,9561,9564,9583,9615,9639,9640,9661,9686,9742,9761,9765,9768,9769,9807,9808,9825,9838,9868,9895,9898,9899,9917,9919,9920,9980,10021,10043,10096,10099,10119,10134,10150,10173,10175,10176,10245,10275,10324,10346,10399,10402,10424,10477,10480,10500,10515,10530,10546,10569,10571,10572,10640,10683,10758,10826,10902,10948,11000,11021,11073,11076,11099,11165,11168,11194,11211,11229,11232,11246,11297,11325,11374,11390,11392,11393,11417,11427,11428,11444,11456,11458,11459,11495,11515,11529,11531,11532,11562,11586,11588,11589,11658,11702,11705,11780,11851,11930,12005,12045,12097,12119,12172,12175,12198,12265,12268,12294,12311,12329,12332,12347,12398,12447,12463,12465,12466,12535,12578,12581,12656,12727,12806,12880,12931,12983,13005,13058,13061,13084,13151,13154,13180,13197,13215,13218,13233,13284,13333,13349],"Infos":null},{"Name":"/usr/local/go/src/os/exec/lp_unix.go","Base":13353,"Size":1645,"Lines":[0,56,110,160,161,230,231,244,245,254,264,270,281,283,284,374,441,442,483,508,525,538,541,588,601,604,629,631,632,689,751,832,915,960,1020,1082,1132,1133,1167,1197,1215,1235,1239,1270,1273,1303,1323,1362,1365,1416,1433,1487,1500,1504,1531,1578,1598,1602,1605,1643],"Infos":null}]}
 