p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �g��	io/ioutilioutilbytesioospath/filepathsortstrconvsynctime�.�package ioutil
import bytes "bytes"
import io "io"
import os "os"
import sort "sort"
import sync "sync"
import filepath "path/filepath"
import strconv "strconv"
import time "time"
var @"".Discard @"io".Writer
func @"".NopCloser(@"".r @"io".Reader) (? @"io".ReadCloser)
func @"".ReadAll(@"".r @"io".Reader) (? []byte, ? error)
func @"".ReadDir(@"".dirname string) (? []@"os".FileInfo, ? error)
func @"".ReadFile(@"".filename string) (? []byte, ? error)
func @"".TempDir(@"".dir string, @"".prefix string) (@"".name string, @"".err error)
func @"".TempFile(@"".dir string, @"".prefix string) (@"".f *@"os".File, @"".err error)
func @"".WriteFile(@"".filename string, @"".data []byte, @"".perm @"os".FileMode) (? error)
type @"".byName []@"os".FileInfo
func (? @"".byName) @"".Len() (? int)
func (? @"".byName) @"".Less(@"".i int, @"".j int) (? bool)
func (? @"".byName) @"".Swap(@"".i int, @"".j int) ()
func (? *@"".byName) @"".Len() (? int)
func (? *@"".byName) @"".Less(@"".i int, @"".j int) (? bool)
func (? *@"".byName) @"".Swap(@"".i int, @"".j int) ()
type @"".devNull int
func (? @"".devNull) @"".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? @"".devNull) @"".Write(@"".p []byte) (? int, ? error)
func (? @"".devNull) @"".WriteString(@"".s string) (? int, ? error)
func (? *@"".devNull) @"".ReadFrom(@"".r @"io".Reader) (@"".n int64, @"".err error)
func (? *@"".devNull) @"".Write(@"".p []byte) (? int, ? error)
func (? *@"".devNull) @"".WriteString(@"".s string) (? int, ? error)
type @"".nopCloser struct { ? @"io".Reader }
func (? @"".nopCloser) @"".Close() (? error)
func (? *@"".nopCloser) @"".Close() (? error)
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".Reader interface { @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"io".ReadCloser interface { @"io".Close() (? error); @"io".Read(@"io".p []byte) (@"io".n int, @"io".err error) }
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
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
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
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
type @"os".file struct { @"os".fd int; @"os".name string; @"os".dirinfo *@"os".dirInfo; @"os".nepipe int32 }
func (? *@"os".file) @"os".close() (? error)
type @"time".Location struct { @"time".name string; @"time".zone []@"time".zone; @"time".tx []@"time".zoneTrans; @"time".cacheStart int64; @"time".cacheEnd int64; @"time".cacheZone *@"time".zone }
func (? *@"time".Location) @"time".String() (? string)
func (? *@"time".Location) @"time".firstZoneUsed() (? bool)
func (? *@"time".Location) @"time".get() (? *@"time".Location)
func (? *@"time".Location) @"time".lookup(@"time".sec int64) (@"time".name string, @"time".offset int, @"time".isDST bool, @"time".start int64, @"time".end int64)
func (? *@"time".Location) @"time".lookupFirstZone() (? int)
func (? *@"time".Location) @"time".lookupName(@"time".name string, @"time".unix int64) (@"time".offset int, @"time".isDST bool, @"time".ok bool)
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
type @"time".Month int
func (? @"time".Month) @"time".String() (? string)
func (? *@"time".Month) @"time".String() (? string)
type @"time".Weekday int
func (? @"time".Weekday) @"time".String() (? string)
func (? *@"time".Weekday) @"time".String() (? string)
type @"os".dirInfo struct { @"os".buf []byte; @"os".nbuf int; @"os".bufp int }
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
)AA=$packages["bytes"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["os"];<    $r=C.$init();$s=3;case 3:if($r&&$r.$blocking){$r=$r();} FF=$packages["path/filepath"];<    $r=F.$init();$s=4;case 4:if($r&&$r.$blocking){$r=$r();} DD=$packages["sort"];<    $r=D.$init();$s=5;case 5:if($r&&$r.$blocking){$r=$r();} GG=$packages["strconv"];<    $r=G.$init();$s=6;case 6:if($r&&$r.$blocking){$r=$r();} EE=$packages["sync"];<    $r=E.$init();$s=7;case 7:if($r&&$r.$blocking){$r=$r();} HH=$packages["time"];<    $r=H.$init();$s=8;case 8:if($r&&$r.$blocking){$r=$r();} MPM=$pkg.byName=$newType(12,$kindSlice,"ioutil.byName","byName","io/ioutil",null);��M.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)}];M.init(C.FileInfo);byNameio/ioutil.byNameos.FileInfo O��O=$pkg.nopCloser=$newType(0,$kindStruct,"ioutil.nopCloser","nopCloser","io/ioutil",function(Reader_){this.$val=this;this.Reader=Reader_!==undefined?Reader_:$ifaceNil;});PO.methods=[{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];=O.init([{prop:"Reader",name:"",pkg:"",typ:B.Reader,tag:""}]);	nopCloser	io.Readerio/ioutil.nopCloser QPQ=$pkg.devNull=$newType(4,$kindInt,"ioutil.devNull","devNull","io/ioutil",null);�Q.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([Z],[$Int,$error],false)},{prop:"WriteString",name:"WriteString",pkg:"",typ:$funcType([$String],[$Int,$error],false)},{prop:"ReadFrom",name:"ReadFrom",pkg:"",typ:$funcType([B.Reader],[$Int64,$error],false)}];devNull	io.Readerio/ioutil.Zio/ioutil.devNull YY=$sliceType($emptyInterface);Y ZZ=$sliceType($Uint8);Z AAAA=$ptrType(Z);AAio/ioutil.Z ABAB=$sliceType(C.FileInfo);ABos.FileInfo ACAC=$ptrType(C.File);ACos.File ADAD=$sliceType($String);AD RblackHolePool Discard SS=0;randio/ioutil.rand TT=new E.Mutex.ptr();randmuio/ioutil.randmu
sync.Mutex     _ ��    R=new E.Pool.ptr(0,0,Y.nil,(function(){var a;  �a=$makeSlice(Z,8192);  return new AA(function(){return a;},function($v){a=$v;});    }));io/ioutil.AAio/ioutil.Yio/ioutil.Zio/ioutil.blackHolePool	sync.Pool     $pkg.Discard=new Q(0);Discardio/ioutil.Discardio/ioutil.devNull io/ioutil.readAllI�8I=function(a,b){var $deferred=[],$err=null,$r,$s=0,$this=this,c=Z.nil,d=$ifaceNil,e,f,g,h,i;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  �e=A.NewBuffer($makeSlice(Z,0,$flatten64(b)));  �$deferred.push([(function(){var f,g,h,i;  �f=$recover();  �    if($interfaceIsEqual(f,$ifaceNil)){  �return;    }  �  �g=$assertType(f,$error,true);h=g[0];i=g[1];    if(i&&$interfaceIsEqual(h,A.ErrTooLarge)){  d=h;    }else{  3$panic(f);    }    }),[]]);  Fg=e.ReadFrom(a);$s=1;case 1:if(g&&g.$blocking){g=g();}f=g;d=f[1];  `    h=e.Bytes();i=d;c=h;d=i;return[c,d];    case-1:}return;}}catch(err){$err=err;}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);return[c,d];}};$f.$blocking=true;return $f;};readAllbytes.ErrTooLargebytes.NewBufferio/ioutil.Zio/ioutil.readAll io/ioutil.ReadAllJ��J=$pkg.ReadAll=function(a){var $r,$s=0,$this=this,b;var $f=function(){s:while(true){switch($s){case 0:  �b=I(a,new $Int64(0,512));$s=1;case 1:if(b&&b.$blocking){b=b();}return b;    case-1:}return;}};$f.$blocking=true;return $f;};ReadAllio/ioutil.ReadAllio/ioutil.readAll io/ioutil.ReadFileK�K=$pkg.ReadFile=function(a){var $deferred=[],$err=null,$r,$s=0,$this=this,b,c,d,e,f,g,h,i,j,k,l,m;var $f=function(){try{$deferFrames.push($deferred);s:while(true){switch($s){case 0:  �c=C.Open(a);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];      if(!($interfaceIsEqual(e,$ifaceNil))){  return[Z.nil,e];    }  .$deferred.push([$methodVal(d,"Close"),[]]);  �  �f=new $Int64(0,0);  �  �h=d.Stat();$s=2;case 2:if(h&&h.$blocking){h=h();}g=h;i=g[0];j=g[1];if($interfaceIsEqual(j,$ifaceNil)){$s=3;continue;}$s=4;continue;    case 3:  A  Dk=i.Size();$s=5;case 5:if(k&&k.$blocking){k=k();}l=k;if((l.$high<0||(l.$high===0&&l.$low<1000000000))){$s=6;continue;}$s=7;continue;    case 6:  gf=l;    case 7:    case 4:  �m=I(d,new $Int64(f.$high+0,f.$low+512));$s=8;case 8:if(m&&m.$blocking){m=m();}return m;    case-1:}return;}}catch(err){$err=err;return[Z.nil,$ifaceNil];}finally{$deferFrames.pop();if($curGoroutine.asleep&&!$jumpToDefer){throw null;}$s=-1;$callDeferred($deferred,$err);}};$f.$blocking=true;return $f;};ReadFileio/ioutil.ReadFileio/ioutil.Zio/ioutil.readAllos.Open io/ioutil.WriteFileL��L=$pkg.WriteFile=function(a,b,c){var $r,$s=0,$this=this,d,e,f,g,h,i,j,k,l;var $f=function(){s:while(true){switch($s){case 0:  
!e=C.OpenFile(a,1537,c);$s=1;case 1:if(e&&e.$blocking){e=e();}d=e;f=d[0];g=d[1];  
l    if(!($interfaceIsEqual(g,$ifaceNil))){  
~return g;    }  
�i=f.Write(b);$s=2;case 2:if(i&&i.$blocking){i=i();}h=i;j=h[0];g=h[1];  
�    if($interfaceIsEqual(g,$ifaceNil)&&j<b.$length){  
�g=B.ErrShortWrite;    }  
�  
�k=f.Close();$s=3;case 3:if(k&&k.$blocking){k=k();}l=k;if($interfaceIsEqual(g,$ifaceNil)){$s=4;continue;}$s=5;continue;    case 4:  	g=l;    case 5:  return g;    case-1:}return;}};$f.$blocking=true;return $f;};	WriteFileio.ErrShortWriteio/ioutil.WriteFileos.OpenFile (io/ioutil.byName).Len��M.prototype.Len=function(){var a;  la=this;  �return a.$length;    };$ptrType(M).prototype.Len=function(){return this.$get().Len();};byNameio/ioutil.byName (io/ioutil.byName).Less�M.prototype.Less=function(a,b){var $r,$s=0,$this=this,c,d,e;var $f=function(){s:while(true){switch($s){case 0:  �c=$this;  �d=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]).Name();$s=1;case 1:if(d&&d.$blocking){d=d();}e=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]).Name();$s=2;case 2:if(e&&e.$blocking){e=e();}return d<e;    case-1:}return;}};$f.$blocking=true;return $f;};$ptrType(M).prototype.Less=function(a,b){return this.$get().Less(a,b);};byNameio/ioutil.byName (io/ioutil.byName).Swap��M.prototype.Swap=function(a,b){var a,b,c,d,e;  �c=this;  d=((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]);e=((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]);((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]=d);((b<0||b>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+b]=e);    };$ptrType(M).prototype.Swap=function(a,b){return this.$get().Swap(a,b);};byNameio/ioutil.byName io/ioutil.ReadDirN��N=$pkg.ReadDir=function(a){var $r,$s=0,$this=this,b,c,d,e,f,g,h,i;var $f=function(){s:while(true){switch($s){case 0:  �c=C.Open(a);$s=1;case 1:if(c&&c.$blocking){c=c();}b=c;d=b[0];e=b[1];  �    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[AB.nil,e];    }  g=d.Readdir(-1);$s=2;case 2:if(g&&g.$blocking){g=g();}f=g;h=f[0];e=f[1];  i=d.Close();$s=3;case 3:if(i&&i.$blocking){i=i();}i;  )    if(!($interfaceIsEqual(e,$ifaceNil))){  ;return[AB.nil,e];    }  O$r=D.Sort($subslice(new M(h.$array),h.$offset,h.$offset+h.$length));$s=4;case 4:if($r&&$r.$blocking){$r=$r();}  hreturn[h,$ifaceNil];    case-1:}return;}};$f.$blocking=true;return $f;};ReadDirio/ioutil.ABio/ioutil.ReadDirio/ioutil.byNameos.FileInfoos.Open	sort.Sort (io/ioutil.nopCloser).ClosevO.ptr.prototype.Close=function(){  �return $ifaceNil;    };O.prototype.Close=function(){return this.$val.Close();};	nopCloserio/ioutil.nopCloser io/ioutil.NopCloserPbP=$pkg.NopCloser=function(a){var a,b;  ]return(b=new O.ptr(a),new b.constructor.elem(b));    };	NopCloserio/ioutil.NopCloserio/ioutil.nopCloser (io/ioutil.devNull).Write��Q.prototype.Write=function(a){var a;  Mreturn[a.$length,$ifaceNil];    };$ptrType(Q).prototype.Write=function(a){return new Q(this.$get()).Write(a);};devNullio/ioutil.devNull (io/ioutil.devNull).WriteString��Q.prototype.WriteString=function(a){var a;  �return[a.length,$ifaceNil];    };$ptrType(Q).prototype.WriteString=function(a){return new Q(this.$get()).WriteString(a);};devNullio/ioutil.devNull (io/ioutil.devNull).ReadFrom��Q.prototype.ReadFrom=function(a){var $r,$s=0,$this=this,b=new $Int64(0,0),c=$ifaceNil,d,e,f,g,h,i,j,k;var $f=function(){s:while(true){switch($s){case 0:  Rd=R.Get();$s=1;case 1:if(d&&d.$blocking){d=d();}e=$assertType(d,AA);  yf=0;  �case 2:  �h=a.Read(e.$get());$s=4;case 4:if(h&&h.$blocking){h=h();}g=h;f=g[0];c=g[1];  �  �b=(i=new $Int64(0,f),new $Int64(b.$high+i.$high,b.$low+i.$low));      �    if(!($interfaceIsEqual(c,$ifaceNil))){  �R.Put(e);  �    if($interfaceIsEqual(c,B.EOF)){      j=b;k=$ifaceNil;b=j;c=k;return[b,c];    }  "return[b,c];    }    $s=2;continue;case 3:    case-1:}return;}};$f.$blocking=true;return $f;};$ptrType(Q).prototype.ReadFrom=function(a){return new Q(this.$get()).ReadFrom(a);};devNullio.EOFio/ioutil.AAio/ioutil.blackHolePoolio/ioutil.devNull io/ioutil.reseedU�-U=function(){var $r,$s=0,$this=this,a,b,c;var $f=function(){s:while(true){switch($s){case 0:  �c=C.Getpid();$s=1;case 1:if(c&&c.$blocking){c=c();}return((a=H.Now().UnixNano(),b=new $Int64(0,c),new $Int64(a.$high+b.$high,a.$low+b.$low)).$low>>>0);    case-1:}return;}};$f.$blocking=true;return $f;};reseedio/ioutil.reseed	os.Getpidtime.Now io/ioutil.nextSuffixV�_V=function(){var $r,$s=0,$this=this,a,b,c;var $f=function(){s:while(true){switch($s){case 0:  �$r=T.Lock();$s=1;case 1:if($r&&$r.$blocking){$r=$r();}  �a=S;  if(a===0){$s=2;continue;}$s=3;continue;    case 2:  b=U();$s=4;case 4:if(b&&b.$blocking){b=b();}a=b;    case 3:  &a=((((a>>>16<<16)*1664525>>>0)+(a<<16>>>16)*1664525)>>>0)+1013904223>>>0;  fS=a;  p$r=T.Unlock();$s=5;case 5:if($r&&$r.$blocking){$r=$r();}  �return G.Itoa(((1000000000+(c=a%1000000000,c===c?c:$throwRuntimeError("integer divide by zero"))>>>0)>>0)).substring(1);    case-1:}return;}};$f.$blocking=true;return $f;};
nextSuffixio/ioutil.nextSuffixio/ioutil.randio/ioutil.randmuio/ioutil.reseedstrconv.Itoa io/ioutil.TempFileW��W=$pkg.TempFile=function(a,b){var $r,$s=0,$this=this,c=AC.nil,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o;var $f=function(){s:while(true){switch($s){case 0:  �if(a===""){$s=1;continue;}$s=2;continue;    case 1:  e=C.TempDir();$s=3;case 3:if(e&&e.$blocking){e=e();}a=e;    case 2:  f=0;  ,  0g=0;case 4:if(!(g<10000)){$s=5;continue;}  Kh=a;i=V();$s=6;case 6:if(i&&i.$blocking){i=i();}j=b+i;k=F.Join(new AD([h,j]));$s=7;case 7:if(k&&k.$blocking){k=k();}l=k;  }n=C.OpenFile(l,2562,384);$s=8;case 8:if(n&&n.$blocking){n=n();}m=n;c=m[0];d=m[1];  �if(C.IsExist(d)){$s=9;continue;}$s=10;continue;    case 9:  �  �  �f=f+(1)>>0;    if(f>10){$s=11;continue;}$s=12;continue;    case 11:  �o=U();$s=13;case 13:if(o&&o.$blocking){o=o();}S=o;    case 12:    C  Cg=g+(1)>>0;    $s=4;continue;    case 10:  %$s=5;continue;    $s=4;continue;case 5:  /return[c,d];    case-1:}return;}};$f.$blocking=true;return $f;};TempFileio/ioutil.ACio/ioutil.ADio/ioutil.TempFileio/ioutil.nextSuffixio/ioutil.randio/ioutil.reseedos.File
os.IsExistos.OpenFile
os.TempDirpath/filepath.Join io/ioutil.TempDirX��X=$pkg.TempDir=function(a,b){var $r,$s=0,$this=this,c="",d=$ifaceNil,e,f,g,h,i,j,k,l,m,n;var $f=function(){s:while(true){switch($s){case 0:  $if(a===""){$s=1;continue;}$s=2;continue;    case 1:  5e=C.TempDir();$s=3;case 3:if(e&&e.$blocking){e=e();}a=e;    case 2:  Mf=0;  ]  ag=0;case 4:if(!(g<10000)){$s=5;continue;}  |h=a;i=V();$s=6;case 6:if(i&&i.$blocking){i=i();}j=b+i;k=F.Join(new AD([h,j]));$s=7;case 7:if(k&&k.$blocking){k=k();}l=k;  �m=C.Mkdir(l,448);$s=8;case 8:if(m&&m.$blocking){m=m();}d=m;  �if(C.IsExist(d)){$s=9;continue;}$s=10;continue;    case 9:  �  �  �f=f+(1)>>0;    if(f>10){$s=11;continue;}$s=12;continue;    case 11:  n=U();$s=13;case 13:if(n&&n.$blocking){n=n();}S=n;    case 12:    t  tg=g+(1)>>0;    $s=4;continue;    case 10:  -    if($interfaceIsEqual(d,$ifaceNil)){  @c=l;    }  Q$s=5;continue;    $s=4;continue;case 5:  [return[c,d];    case-1:}return;}};$f.$blocking=true;return $f;};TempDir	io/ioutil.ADio/ioutil.TempDirio/ioutil.nextSuffixio/ioutil.randio/ioutil.reseed
os.IsExistos.Mkdir
os.TempDirpath/filepath.Join ��{"Base":7013,"Files":[{"Name":"/usr/local/go/src/io/ioutil/ioutil.go","Base":1,"Size":4524,"Lines":[0,55,109,159,160,217,232,233,242,251,257,263,271,279,281,282,357,422,488,539,599,653,669,686,702,712,716,786,804,815,827,831,836,862,887,889,890,966,1042,1116,1147,1191,1225,1227,1228,1299,1373,1445,1464,1513,1542,1559,1577,1580,1597,1680,1750,1763,1764,1802,1854,1891,1903,1907,1910,1992,2075,2155,2237,2300,2336,2338,2339,2393,2468,2520,2591,2666,2683,2696,2699,2724,2758,2783,2786,2822,2835,2838,2850,2852,2853,2890,2916,2917,2971,3044,3108,3109,3169,3208,3262,3290,3307,3325,3328,3356,3367,3384,3402,3405,3430,3448,3450,3451,3475,3486,3488,3489,3535,3536,3605,3631,3675,3696,3698,3699,3716,3717,3783,3835,3868,3869,3915,3935,3937,3938,3990,4010,4012,4013,4044,4071,4097,4109,4113,4115,4116,4176,4215,4230,4237,4269,4292,4310,4337,4359,4377,4382,4392,4396,4399,4401,4402,4462,4489],"Infos":null},{"Name":"/usr/local/go/src/io/ioutil/tempfile.go","Base":4526,"Size":2486,"Lines":[0,56,110,160,161,176,177,186,192,209,220,228,236,238,239,263,329,397,423,439,461,462,485,544,546,547,574,589,600,613,628,631,695,705,722,765,767,768,830,895,947,1014,1055,1108,1171,1243,1288,1348,1364,1385,1388,1389,1405,1435,1485,1553,1576,1612,1632,1637,1649,1653,1661,1664,1672,1674,1675,1741,1806,1870,1929,1981,2055,2105,2165,2181,2202,2205,2206,2222,2252,2301,2329,2352,2388,2408,2413,2425,2429,2447,2461,2465,2473,2476,2484],"Infos":null}]}
 