g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �����path/filepath�%3package filepath
import errors "errors"
import os "os"
import runtime "runtime"
import sort "sort"
import strings "strings"
import utf8 "unicode/utf8"
import bytes "bytes"
func @"".Abs(@"".path string) (? string, ? error)
func @"".Base(@"".path string) (? string)
func @"".Clean(@"".path string) (? string)
func @"".Dir(@"".path string) (? string)
var @"".ErrBadPattern error
func @"".EvalSymlinks(@"".path string) (? string, ? error)
func @"".Ext(@"".path string) (? string)
func @"".FromSlash(@"".path string) (? string)
func @"".Glob(@"".pattern string) (@"".matches []string, @"".err error)
func @"".HasPrefix(@"".p string, @"".prefix string) (? bool)
func @"".IsAbs(@"".path string) (? bool)
func @"".Join(@"".elem ...string) (? string)
const @"".ListSeparator = '\u003a'
func @"".Match(@"".pattern string, @"".name string) (@"".matched bool, @"".err error)
func @"".Rel(@"".basepath string, @"".targpath string) (? string, ? error)
const @"".Separator = '\u002f'
var @"".SkipDir error
func @"".Split(@"".path string) (@"".dir string, @"".file string)
func @"".SplitList(@"".path string) (? []string)
func @"".ToSlash(@"".path string) (? string)
func @"".VolumeName(@"".path string) (@"".v string)
func @"".Walk(@"".root string, @"".walkFn @"".WalkFunc) (? error)
type @"".WalkFunc func (@"".path string, @"".info @"os".FileInfo, @"".err error) (? error)
type @"".lazybuf struct { @"".path string; @"".buf []byte; @"".w int; @"".volAndPath string; @"".volLen int }
func (? *@"".lazybuf) @"".append(@"".c byte) ()
func (? *@"".lazybuf) @"".index(@"".i int) (? byte)
func (? *@"".lazybuf) @"".string() (? string)
import time "time"
type @"os".FileInfo interface { @"os".IsDir() (? bool); @"os".ModTime() (? @"time".Time); @"os".Mode() (? @"os".FileMode); @"os".Name() (? string); @"os".Size() (? int64); @"os".Sys() (? interface {  }) }
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
type @"os".FileMode uint32
func (? @"os".FileMode) @"os".IsDir() (? bool)
func (? @"os".FileMode) @"os".IsRegular() (? bool)
func (? @"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? @"os".FileMode) @"os".String() (? string)
func (? *@"os".FileMode) @"os".IsDir() (? bool)
func (? *@"os".FileMode) @"os".IsRegular() (? bool)
func (? *@"os".FileMode) @"os".Perm() (? @"os".FileMode)
func (? *@"os".FileMode) @"os".String() (? string)
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
type @"time".zone struct { @"time".name string; @"time".offset int; @"time".isDST bool }
type @"time".zoneTrans struct { @"time".when int64; @"time".index uint8; @"time".isstd bool; @"time".isutc bool }
$$
errorsA osB runtimeC sortD stringsE unicode/utf8F bytesG 1@    $r=G.$init(true);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} @    $r=A.$init(true);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} @    $r=B.$init(true);$s=3;case 3:if($r&&$r.$blocking){$r=$r();} @    $r=C.$init(true);$s=4;case 4:if($r&&$r.$blocking){$r=$r();} @    $r=D.$init(true);$s=5;case 5:if($r&&$r.$blocking){$r=$r();} @    $r=E.$init(true);$s=6;case 6:if($r&&$r.$blocking){$r=$r();} @    $r=F.$init(true);$s=7;case 7:if($r&&$r.$blocking){$r=$r();} O�jO=$pkg.lazybuf=$newType(0,$kindStruct,"filepath.lazybuf","lazybuf","path/filepath",function(path_,buf_,w_,volAndPath_,volLen_){this.$val=this;this.path=path_!==undefined?path_:"";this.buf=buf_!==undefined?buf_:($sliceType($Uint8)).nil;this.w=w_!==undefined?w_:0;this.volAndPath=volAndPath_!==undefined?volAndPath_:"";this.volLen=volLen_!==undefined?volLen_:0;});��($ptrType(O)).methods=[["append","append","path/filepath",$funcType([$Uint8],[],false),-1],["index","index","path/filepath",$funcType([$Int],[$Uint8],false),-1],["string","string","path/filepath",$funcType([],[$String],false),-1]];O.init([["path","path","path/filepath",$String,""],["buf","buf","path/filepath",($sliceType($Uint8)),""],["w","w","path/filepath",$Int,""],["volAndPath","volAndPath","path/filepath",$String,""],["volLen","volLen","path/filepath",$Int,""]]);lazybuf AA[AA=$pkg.WalkFunc=$newType(4,$kindFunc,"filepath.WalkFunc","WalkFunc","path/filepath",null);4AA.init([$String,B.FileInfo,$error],[$error],false);WalkFuncos:FileInfo ErrBadPattern SkipDir ABlstat 9    $pkg.ErrBadPattern=A.New("syntax error in pattern");
errors:Newpath/filepath:ErrBadPattern /    $pkg.SkipDir=A.New("skip this directory");
errors:Newpath/filepath:SkipDir     AB=B.Lstat;lstatos:Lstatpath/filepath:lstat path/filepath.MatchH��H=$pkg.Match=function(a,b){var c=false,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;    Pattern:while(a.length>0){  4  8e=false;  D  Hf="";  Wg=I(a);e=g[0];f=g[1];a=g[2];  �    if(e&&f===""){  �    h=E.Index(b,"/")<0;i=$ifaceNil;c=h;d=i;return[c,d];    }  @j=J(f,b);k=j[0];l=j[1];m=j[2];      if(l&&((k.length===0)||a.length>0)){  3b=k;  ?continue;    }  N    if(!($interfaceIsEqual(m,$ifaceNil))){  a    n=false;o=m;c=n;d=o;return[c,d];    }  y    if(e){  �  �p=0;while(p<b.length&&!((b.charCodeAt(p)===47))){  q=J(f,b.substring((p+1>>0)));r=q[0];s=q[1];t=q[2];  1    if(s){      if((a.length===0)&&r.length>0){  �  �  �p=p+(1)>>0;continue;    }  �b=r;  �continue Pattern;    }  �    if(!($interfaceIsEqual(t,$ifaceNil))){  �    u=false;v=t;c=u;d=v;return[c,d];    }      �  �p=p+(1)>>0;}    }  	     w=false;x=$ifaceNil;c=w;d=x;return[c,d];    }  	6    y=b.length===0;z=$ifaceNil;c=y;d=z;return[c,d];    };Matchpath/filepath:matchChunkpath/filepath:scanChunkstrings:Index path/filepath.scanChunkI�=I=function(a){var b=false,c="",d="",e,f,g,h,i,j;  
 while(a.length>0&&(a.charCodeAt(0)===42)){  
.a=a.substring(1);  
Fb=true;    }  
Ve=false;  
h  
lf=0;  
r  
y  
}f=0;Scan:while(f<a.length){  
�g=a.charCodeAt(f);  
�if(g===92){  
�      if((f+1>>0)<a.length){  9  9f=f+(1)>>0;    }          J}else if(g===91){  We=true;      h}else if(g===93){  ue=false;      �}else if(g===42){  �    if(!e){  �break Scan;    }    }      
�  
�f=f+(1)>>0;}  �    h=b;i=a.substring(0,f);j=a.substring(f);b=h;c=i;d=j;return[b,c,d];    };	scanChunk path/filepath.matchChunkJ�ZJ=function(a,b){var c="",d=false,e=$ifaceNil,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  �while(a.length>0){  
    if(b.length===0){  return[c,d,e];    }  +f=a.charCodeAt(0);  ?if(f===91){  bg=F.DecodeRuneInString(b);h=g[0];i=g[1];  �b=b.substring(i);  �a=a.substring(1);      if(a.length===0){  .e=$pkg.ErrBadPattern;  Freturn[c,d,e];    }  lj=a.charCodeAt(0)===94;  �    if(j){  �a=a.substring(1);    }  �k=false;  �l=0;  �while(true){  �    if(a.length>0&&(a.charCodeAt(0)===93)&&l>0){  1a=a.substring(1);  Hbreak;    }  X  \m=0;n=0;o=m;p=n;  l  oq=K(a);o=q[0];a=q[1];e=q[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  �return[c,d,e];    }  �p=o;  �    if(a.charCodeAt(0)===45){  �  �r=K(a.substring(1));p=r[0];a=r[1];e=r[2];    if(!($interfaceIsEqual(e,$ifaceNil))){  return[c,d,e];    }    }  *    if(o<=h&&h<=p){  Gk=true;    }  ^  ^l=l+(1)>>0;    }  o    if(k===j){  �return[c,d,e];    }      �}else if(f===63){  �    if(b.charCodeAt(0)===47){  �return[c,d,e];    }  �s=F.DecodeRuneInString(b);t=s[1];  �b=b.substring(t);  a=a.substring(1);      }else if(f===92){  %  Ha=a.substring(1);  ^    if(a.length===0){  xe=$pkg.ErrBadPattern;  �return[c,d,e];    }      �  �    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  �return[c,d,e];    }  �b=b.substring(1);  �a=a.substring(1);    }else{  �    if(!((a.charCodeAt(0)===b.charCodeAt(0)))){  �return[c,d,e];    }  �b=b.substring(1);  �a=a.substring(1);    }    }      u=b;v=true;w=$ifaceNil;c=u;d=v;e=w;return[c,d,e];    };
matchChunkpath/filepath:ErrBadPatternpath/filepath:getEscunicode/utf8:DecodeRuneInString path/filepath.getEscK�K=function(a){var b=0,c="",d=$ifaceNil,e,f;  �    if((a.length===0)||(a.charCodeAt(0)===45)||(a.charCodeAt(0)===93)){  �d=$pkg.ErrBadPattern;  
return[b,c,d];    }      if((a.charCodeAt(0)===92)&&true){  Ja=a.substring(1);  ^    if(a.length===0){  vd=$pkg.ErrBadPattern;  �return[b,c,d];    }    }  �e=F.DecodeRuneInString(a);b=e[0];f=e[1];  �    if((b===65533)&&(f===1)){  �d=$pkg.ErrBadPattern;    }  c=a.substring(f);      if(c.length===0){  -d=$pkg.ErrBadPattern;    }  Ereturn[b,c,d];    };getEscpath/filepath:ErrBadPatternunicode/utf8:DecodeRuneInString path/filepath.GlobL��L=$pkg.Glob=function(a){var b=($sliceType($String)).nil,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  %    if(!N(a)){  >  Ad=B.Lstat(a);c=d[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  m    e=($sliceType($String)).nil;f=$ifaceNil;b=e;c=f;return[b,c];    }  �    g=new($sliceType($String))([a]);h=$ifaceNil;b=g;c=h;return[b,c];    }  �i=T(a);j=i[0];k=i[1];  �l=j;  �if(l===""){  �j=".";      �}else if(l==="/"){    }else{  j=j.substring(0,(j.length-1>>0));    }  V    if(!N(j)){  k    m=M(j,k,($sliceType($String)).nil);b=m[0];c=m[1];return[b,c];    }  �  �n=($sliceType($String)).nil;  �o=L(j);n=o[0];c=o[1];  �    if(!($interfaceIsEqual(c,$ifaceNil))){  �return[b,c];    }  �p=n;q=0;while(q<p.$length){r=((q<0||q>=p.$length)?$throwRuntimeError("index out of range"):p.$array[p.$offset+q]);  �s=M(r,k,b);b=s[0];c=s[1];      if(!($interfaceIsEqual(c,$ifaceNil))){   return[b,c];    }    q++;}  /return[b,c];    };Globos:Lstatpath/filepath:Splitpath/filepath:globpath/filepath:hasMeta path/filepath.globM��M=function(a,b,c){var d=($sliceType($String)).nil,e=$ifaceNil,$deferred=[],$err=null,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;try{$deferFrames.push($deferred);  ^d=c;  kf=B.Stat(a);g=f[0];h=f[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }  �    if(!g.IsDir()){  �return[d,e];    }  �i=B.Open(a);j=i[0];h=i[1];  �    if(!($interfaceIsEqual(h,$ifaceNil))){  �return[d,e];    }  �$deferred.push([$methodVal(j,"Close"),[]]);  k=j.Readdirnames(-1);l=k[0];  &D.Strings(l);  <m=l;n=0;while(n<m.$length){o=((n<0||n>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+n]);  Xp=H(b,o);q=p[0];r=p[1];  |    if(!($interfaceIsEqual(r,$ifaceNil))){  �    s=d;t=r;d=s;e=t;return[d,e];    }  �    if(q){  �d=$append(d,U(new($sliceType($String))([a,o])));    }    n++;}  �return[d,e];    }catch(err){$err=err;}finally{$deferFrames.pop();$callDeferred($deferred,$err);return[d,e];}};globos:Openos:Statpath/filepath:Joinpath/filepath:Matchsort:Strings path/filepath.hasMetaN8N=function(a){  �return E.IndexAny(a,"*?[")>=0;    };hasMetastrings:IndexAny (*path/filepath.lazybuf).index�:O.Ptr.prototype.index=function(a){var b,c;  �b=this;  �    if(!(b.buf===($sliceType($Uint8)).nil)){  �return(c=b.buf,((a<0||a>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+a]));    }  �return b.path.charCodeAt(a);    };O.prototype.index=function(a){return this.$val.index(a);};lazybufindexpath/filepath:lazybuf (*path/filepath.lazybuf).append�O.Ptr.prototype.append=function(a){var b,c,d;  b=this;  +    if(b.buf===($sliceType($Uint8)).nil){  ?    if(b.w<b.path.length&&(b.path.charCodeAt(b.w)===a)){  m  mb.w=b.w+(1)>>0;  vreturn;    }  �b.buf=($sliceType($Uint8)).make(b.path.length);  �$copyString(b.buf,b.path.substring(0,b.w));    }  �(c=b.buf,d=b.w,(d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]=a);  �  �b.w=b.w+(1)>>0;    };O.prototype.append=function(a){return this.$val.append(a);};lazybufappendpath/filepath:lazybuf (*path/filepath.lazybuf).string�8O.Ptr.prototype.string=function(){var a;  �a=this;       if(a.buf===($sliceType($Uint8)).nil){   return a.volAndPath.substring(0,(a.volLen+a.w>>0));    }   >return a.volAndPath.substring(0,a.volLen)+$bytesToString($subslice(a.buf,0,a.w));    };O.prototype.string=function(){return this.$val.string();};lazybufstringpath/filepath:lazybuf path/filepath.CleanP�P=$pkg.Clean=function(a){var b,c,d,e,f,g,h,i,j,k,l;  $�b=a;  $�c=AJ(a);  $�a=a.substring(c);  $�    if(a===""){  $�    if(c>1&&!((b.charCodeAt(1)===58))){  %3return R(b);    }  %Xreturn b+".";    }  %vd=B.IsPathSeparator(a.charCodeAt(0));  &�e=a.length;  &�f=new O.Ptr(a,($sliceType($Uint8)).nil,0,b,c);  &�g=0;h=0;i=g;j=h;  '    if(d){  'f.append(47);  '-k=1;l=1;i=k;j=l;    }  'Cwhile(i<e){  'Q  '\if(B.IsPathSeparator(a.charCodeAt(i))){  '�  '�i=i+(1)>>0;      '�}else if((a.charCodeAt(i)===46)&&(((i+1>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+1>>0))))){  '�  '�i=i+(1)>>0;      '�}else if((a.charCodeAt(i)===46)&&(a.charCodeAt((i+1>>0))===46)&&(((i+2>>0)===e)||B.IsPathSeparator(a.charCodeAt((i+2>>0))))){  (�i=i+(2)>>0;  (�  (�if(f.w>j){  (�  (�f.w=f.w-(1)>>0;  (�while(f.w>j&&!B.IsPathSeparator(f.index(f.w))){  )  )f.w=f.w-(1)>>0;    }      )'}else if(!d){  )x    if(f.w>0){  )�f.append(47);    }  )�f.append(46);  )�f.append(46);  )�j=f.w;    }    }else{  *)    if(d&&!((f.w===1))||!d&&!((f.w===0))){  *`f.append(47);    }  *�while(i<e&&!B.IsPathSeparator(a.charCodeAt(i))){  *�f.append(a.charCodeAt(i));      *�  *�i=i+(1)>>0;}    }    }  +	    if(f.w===0){  +f.append(46);    }  +0return R(f.string());    };Cleanos:IsPathSeparatorpath/filepath:FromSlashpath/filepath:appendpath/filepath:indexpath/filepath:lazybufpath/filepath:stringpath/filepath:volumeNameLen path/filepath.ToSlashQ^Q=$pkg.ToSlash=function(a){  ,  ,4return a;      ,Dreturn E.Replace(a,"/","/",-1);    };ToSlashstrings:Replace path/filepath.FromSlashR`R=$pkg.FromSlash=function(a){  -N  -freturn a;      -vreturn E.Replace(a,"/","/",-1);    };	FromSlashstrings:Replace path/filepath.SplitListS6S=$pkg.SplitList=function(a){  .�return AL(a);    };	SplitListpath/filepath:splitList path/filepath.SplitT� T=$pkg.Split=function(a){var b="",c="",d,e,f,g;  0d=AH(a);  0,e=a.length-1>>0;  0@while(e>=d.length&&!B.IsPathSeparator(a.charCodeAt(e))){  0v  0ve=e-(1)>>0;    }  0~    f=a.substring(0,(e+1>>0));g=a.substring((e+1>>0));b=f;c=g;return[b,c];    };Splitos:IsPathSeparatorpath/filepath:VolumeName path/filepath.JoinU�U=$pkg.Join=function(a){var b,c,d,e;  1lb=a;c=0;while(c<b.$length){d=c;e=((c<0||c>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+c]);  1�    if(!(e==="")){  1�return P(E.Join($subslice(a,d),"/"));    }    c++;}  1�return"";    };Joinpath/filepath:Cleanstrings:Join path/filepath.ExtV��V=$pkg.Ext=function(a){var b;  2�  2�b=a.length-1>>0;while(b>=0&&!B.IsPathSeparator(a.charCodeAt(b))){  2�    if(a.charCodeAt(b)===46){  3return a.substring(b);    }      2�  2�b=b-(1)>>0;}  3.return"";    };Extos:IsPathSeparator path/filepath.EvalSymlinksW9W=$pkg.EvalSymlinks=function(a){  4Mreturn AO(a);    };EvalSymlinkspath/filepath:evalSymlinks path/filepath.AbsX0X=$pkg.Abs=function(a){  5�return AM(a);    };Abspath/filepath:abs path/filepath.unixAbsY��Y=function(a){var b,c,d;  5�    if(AI(a)){  5�return[P(a),$ifaceNil];    }  5�b=B.Getwd();c=b[0];d=b[1];  6    if(!($interfaceIsEqual(d,$ifaceNil))){  6$return["",d];    }  67return[U(new($sliceType($String))([c,a])),$ifaceNil];    };unixAbsos:Getwdpath/filepath:Cleanpath/filepath:IsAbspath/filepath:Join path/filepath.RelZ��Z=$pkg.Rel=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;  8vc=AH(a);  8�d=AH(b);  8�e=P(a);  8�f=P(b);  8�    if(f===e){  8�return[".",$ifaceNil];    }  9e=e.substring(c.length);  9.f=f.substring(d.length);  9J    if(e==="."){  9]e="";    }  9�g=e.length>0&&(e.charCodeAt(0)===47);  9�h=f.length>0&&(f.charCodeAt(0)===47);  :    if(!(g===h)||!(c===d)){  :Preturn["",A.New("Rel: can't make "+f+" relative to "+e)];    }  :�i=e.length;  :�j=f.length;  ;
  ;k=0;l=0;m=0;n=0;o=k;p=l;q=m;r=n;  ;"while(true){  ;*while(p<i&&!((e.charCodeAt(p)===47))){  ;T  ;Tp=p+(1)>>0;    }  ;_while(r<j&&!((f.charCodeAt(r)===47))){  ;�  ;�r=r+(1)>>0;    }  ;�    if(!(f.substring(q,r)===e.substring(o,p))){  ;�break;    }  ;�    if(p<i){  ;�  ;�p=p+(1)>>0;    }  ;�    if(r<j){  ;�  ;�r=r+(1)>>0;    }  ;�o=p;  <q=r;    }  <    if(e.substring(o,p)===".."){  <*return["",A.New("Rel: can't make "+f+" relative to "+e)];    }  <x    if(!((o===i))){  <�s=E.Count(e.substring(o,i),"/");  <�t=2+((((s>>>16<<16)*3>>0)+(s<<16>>>16)*3)>>0)>>0;  =    if(!((j===q))){  =t=t+(((1+j>>0)-q>>0))>>0;    }  =7u=($sliceType($Uint8)).make(t);  =Sv=$copyString(u,"..");  =j  =nw=0;while(w<s){  =�(v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]=47;  =�$copyString($subslice(u,(v+1>>0)),"..");  =�v=v+(3)>>0;      =�  =�w=w+(1)>>0;}  =�    if(!((q===j))){  =�(v<0||v>=u.$length)?$throwRuntimeError("index out of range"):u.$array[u.$offset+v]=47;  =�$copyString($subslice(u,(v+1>>0)),f.substring(q));    }  >return[$bytesToString(u),$ifaceNil];    }  >)return[f.substring(q),$ifaceNil];    };Rel
errors:Newpath/filepath:Cleanpath/filepath:VolumeNamestrings:Count path/filepath.walkAC��AC=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;  CEd=c(a,b,$ifaceNil);  Ce    if(!($interfaceIsEqual(d,$ifaceNil))){  Cw    if(b.IsDir()&&$interfaceIsEqual(d,$pkg.SkipDir)){  C�return $ifaceNil;    }  C�return d;    }  C�    if(!b.IsDir()){  C�return $ifaceNil;    }  C�e=AE(a);f=e[0];d=e[1];  D    if(!($interfaceIsEqual(d,$ifaceNil))){  Dreturn c(a,b,d);    }  D<g=f;h=0;while(h<g.$length){i=((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h]);  D[j=U(new($sliceType($String))([a,i]));  Dzk=AB(j);l=k[0];m=k[1];  D�    if(!($interfaceIsEqual(m,$ifaceNil))){  D�  D�n=c(j,l,m);    if(!($interfaceIsEqual(n,$ifaceNil))&&!($interfaceIsEqual(n,$pkg.SkipDir))){  D�return n;    }    }else{  Em=AC(j,l,c);  EF    if(!($interfaceIsEqual(m,$ifaceNil))){  EZ    if(!l.IsDir()||!($interfaceIsEqual(m,$pkg.SkipDir))){  E�return m;    }    }    }    h++;}  E�return $ifaceNil;    };walkpath/filepath:Joinpath/filepath:SkipDirpath/filepath:lstatpath/filepath:readDirNames path/filepath.WalkAD��AD=$pkg.Walk=function(a,b){var c,d,e;  Ghc=B.Lstat(a);d=c[0];e=c[1];  G�    if(!($interfaceIsEqual(e,$ifaceNil))){  G�return b(a,$ifaceNil,e);    }  G�return AC(a,d,b);    };Walkos:Lstatpath/filepath:walk path/filepath.readDirNamesAE�cAE=function(a){var b,c,d,e,f;  H{b=B.Open(a);c=b[0];d=b[1];  H�    if(!($interfaceIsEqual(d,$ifaceNil))){  H�return[($sliceType($String)).nil,d];    }  H�e=c.Readdirnames(-1);f=e[0];d=e[1];  H�c.Close();  H�    if(!($interfaceIsEqual(d,$ifaceNil))){  H�return[($sliceType($String)).nil,d];    }  ID.Strings(f);  I%return[f,$ifaceNil];    };readDirNamesos:Opensort:Strings path/filepath.BaseAF��AF=$pkg.Base=function(a){var b;  JM    if(a===""){  J_return".";    }  J�while(a.length>0&&B.IsPathSeparator(a.charCodeAt((a.length-1>>0)))){  J�a=a.substring(0,(a.length-1>>0));    }  Ka=a.substring(AH(a).length);  KDb=a.length-1>>0;  KXwhile(b>=0&&!B.IsPathSeparator(a.charCodeAt(b))){  K�  K�b=b-(1)>>0;    }  K�    if(b>=0){  K�a=a.substring((b+1>>0));    }  K�    if(a===""){  K�return"/";    }  L	return a;    };Baseos:IsPathSeparatorpath/filepath:VolumeName path/filepath.DirAG��AG=$pkg.Dir=function(a){var b,c,d;  M�b=AH(a);  M�c=a.length-1>>0;  M�while(c>=b.length&&!B.IsPathSeparator(a.charCodeAt(c))){  N  Nc=c-(1)>>0;    }  Nd=P(a.substring(b.length,(c+1>>0)));  NBreturn b+d;    };Diros:IsPathSeparatorpath/filepath:Cleanpath/filepath:VolumeName path/filepath.VolumeNameAHYAH=$pkg.VolumeName=function(a){var b="";  O=    b=a.substring(0,AJ(a));return b;    };
VolumeNamepath/filepath:volumeNameLen path/filepath.IsAbsAI@AI=$pkg.IsAbs=function(a){  P�return E.HasPrefix(a,"/");    };IsAbsstrings:HasPrefix path/filepath.volumeNameLenAJ$AJ=function(a){  Qkreturn 0;    };volumeNameLen path/filepath.HasPrefixAKDAK=$pkg.HasPrefix=function(a,b){  Q�return E.HasPrefix(a,b);    };	HasPrefixstrings:HasPrefix path/filepath.splitListALuAL=function(a){  R8    if(a===""){  RJreturn new($sliceType($String))([]);    }  R`return E.Split(a,":");    };	splitListstrings:Split path/filepath.absAM'AM=function(a){  R�return Y(a);    };abspath/filepath:unixAbs path/filepath.walkSymlinksAN�AN=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;  S�  Tb=a;  T�  T�c=new G.Buffer.Ptr();$copy(c,new G.Buffer.Ptr(),G.Buffer);  T�  T�d=0;while(!(a==="")){  T�    if(d>255){  T�return["",A.New("EvalSymlinks: too many links in "+b)];    }  UP  UTe=-1;  U]f=a;g=0;while(g<f.length){h=$decodeRune(f,g);i=g;j=h[0];  Uy    if(j<128&&B.IsPathSeparator((j<<24>>>24))){  U�e=i;  U�break;    }    g+=h[1];}  U�  U�k="";  U�    if(e===-1){  U�l=a;m="";k=l;a=m;    }else{  Vn=a.substring(0,e);o=a.substring((e+1>>0));k=n;a=o;    }  V4    if(k===""){  VD    if(c.Len()===0){  Vwc.WriteRune(47);    }  V�  T�  T�d=d+(1)>>0;continue;    }  V�p=B.Lstat(c.String()+k);q=p[0];r=p[1];  V�    if(!($interfaceIsEqual(r,$ifaceNil))){  V�return["",r];    }  V�    if(((q.Mode()&134217728)>>>0)===0){  Wc.WriteString(k);  W.    if(!(a==="")||((c.Len()===2)&&(k.length===2)&&(k.charCodeAt(1)===58))){  Wrc.WriteRune(47);    }  W�  T�  T�d=d+(1)>>0;continue;    }  W�s=B.Readlink(c.String()+k);t=s[0];r=s[1];  W�    if(!($interfaceIsEqual(r,$ifaceNil))){  Xreturn["",r];    }  X%    if(AI(t)||B.IsPathSeparator(t.charCodeAt(0))){  XXc.Reset();    }  Xha=t+"/"+a;      T�  T�d=d+(1)>>0;}  X�return[P(c.String()),$ifaceNil];    };walkSymlinksbytes:Buffer
errors:Newos:IsPathSeparatoros:Lstatos:Readlinkpath/filepath:Cleanpath/filepath:IsAbs path/filepath.evalSymlinksAO(AO=function(a){  Yreturn AN(a);    };evalSymlinkspath/filepath:walkSymlinks �${"Base":22825,"Files":[{"Name":"/usr/local/go/src/path/filepath/match.go","Base":1,"Size":7116,"Lines":[0,55,109,159,160,177,178,187,197,203,214,222,233,249,251,252,313,371,372,439,465,468,480,493,502,567,626,666,718,781,817,820,840,898,934,988,991,1061,1128,1145,1148,1213,1232,1235,1296,1305,1329,1345,1364,1408,1435,1494,1552,1556,1597,1637,1702,1772,1792,1839,1851,1863,1867,1885,1906,1910,1922,1963,1984,2044,2092,2104,2169,2211,2226,2233,2247,2269,2275,2295,2318,2324,2329,2333,2353,2356,2384,2386,2387,2461,2493,2558,2603,2627,2641,2644,2662,2673,2679,2715,2737,2750,2784,2839,2867,2876,2882,2887,2899,2917,2929,2948,2960,2977,2992,2997,3001,3004,3044,3046,3047,3110,3169,3244,3313,3335,3354,3364,3368,3388,3400,3422,3460,3473,3494,3555,3601,3625,3649,3660,3665,3688,3718,3734,3756,3761,3784,3802,3817,3826,3883,3906,3917,3923,3943,3995,4007,4013,4025,4050,4107,4120,4127,4133,4161,4179,4185,4198,4203,4228,4239,4244,4245,4257,4283,4294,4299,4337,4350,4371,4372,4385,4419,4441,4466,4491,4503,4509,4514,4529,4530,4541,4566,4577,4582,4595,4616,4620,4623,4644,4646,4647,4726,4789,4849,4871,4880,4883,4935,4955,4978,5001,5011,5015,5018,5058,5094,5116,5119,5139,5162,5184,5187,5195,5197,5198,5261,5329,5397,5447,5450,5525,5592,5609,5667,5691,5737,5756,5760,5792,5795,5796,5825,5839,5849,5861,5886,5899,5909,5968,5971,5972,5992,6022,6025,6026,6042,6062,6079,6088,6091,6114,6154,6172,6182,6186,6189,6197,6199,6200,6265,6324,6384,6419,6492,6505,6530,6547,6556,6559,6577,6586,6589,6613,6630,6639,6642,6659,6660,6692,6713,6714,6741,6777,6795,6812,6816,6831,6862,6866,6869,6877,6879,6880,6949,6973,7006,7071,7114],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/path.go","Base":7118,"Size":13203,"Lines":[0,55,109,159,160,240,316,333,334,343,353,359,367,378,380,381,431,489,555,612,634,653,672,688,707,723,725,726,764,783,801,804,822,824,825,860,879,924,933,943,947,983,1011,1014,1030,1037,1039,1040,1076,1095,1132,1135,1189,1191,1192,1200,1234,1272,1274,1275,1334,1399,1455,1458,1519,1585,1656,1710,1764,1828,1861,1864,1941,1985,1988,2047,2074,2077,2133,2161,2213,2246,2268,2299,2321,2338,2382,2402,2436,2440,2468,2471,2510,2511,2527,2586,2640,2702,2767,2783,2853,2872,2885,2909,2928,2931,2932,2945,2956,2992,3017,3024,3094,3110,3117,3207,3250,3260,3272,3296,3317,3329,3395,3408,3414,3431,3494,3513,3540,3546,3566,3586,3605,3610,3621,3646,3672,3726,3752,3757,3776,3830,3854,3859,3863,3866,3867,3898,3915,3933,3936,3937,3969,3971,3972,4040,4105,4138,4173,4196,4210,4213,4271,4273,4274,4346,4415,4442,4479,4502,4516,4519,4577,4579,4580,4657,4715,4802,4841,4865,4867,4868,4932,4991,5055,5080,5143,5188,5213,5233,5286,5292,5295,5326,5328,5329,5398,5464,5498,5533,5559,5574,5633,5637,5640,5651,5653,5654,5707,5765,5822,5833,5864,5935,5957,5976,5980,5983,5994,5996,5997,6072,6082,6159,6221,6270,6297,6299,6300,6351,6417,6486,6548,6588,6606,6608,6609,6653,6671,6697,6700,6723,6740,6757,6760,6788,6790,6791,6868,6930,7007,7077,7129,7206,7281,7335,7368,7401,7426,7451,7470,7488,7491,7519,7547,7565,7577,7580,7645,7699,7753,7808,7884,7887,7961,7978,7995,8019,8026,8067,8075,8079,8120,8128,8132,8166,8175,8179,8194,8202,8206,8221,8229,8233,8243,8253,8256,8282,8358,8361,8376,8431,8487,8508,8524,8547,8551,8579,8602,8632,8654,8679,8689,8693,8709,8731,8761,8765,8791,8794,8817,8819,8820,8889,8961,8993,9041,9042,9116,9189,9260,9335,9404,9407,9485,9561,9637,9715,9789,9867,9885,9952,9953,9989,9990,10036,10102,10134,10151,10189,10203,10207,10220,10223,10224,10244,10257,10260,10261,10295,10312,10345,10348,10349,10379,10410,10445,10463,10540,10555,10560,10571,10613,10632,10677,10693,10699,10704,10708,10711,10723,10725,10726,10802,10881,10956,11027,11073,11113,11161,11190,11207,11239,11242,11275,11277,11278,11343,11382,11436,11464,11481,11499,11502,11536,11547,11564,11582,11585,11606,11625,11627,11628,11670,11746,11789,11870,11902,11919,11932,11935,11963,12025,12056,12059,12086,12123,12149,12169,12215,12221,12224,12237,12257,12260,12299,12316,12343,12346,12359,12361,12362,12443,12513,12537,12579,12659,12741,12772,12797,12817,12870,12876,12879,12915,12933,12935,12936,12979,13032,13087,13124,13166,13201],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/path_unix.go","Base":20322,"Size":883,"Lines":[0,55,109,159,160,229,230,247,248,265,266,313,344,381,383,384,455,482,520,530,532,533,606,646,683,685,686,725,742,762,765,816,818,819,859,881],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/symlink.go","Base":21206,"Size":1501,"Lines":[0,55,109,159,160,177,178,187,196,206,212,214,215,241,242,291,312,334,390,448,468,499,518,594,598,599,632,645,672,729,739,749,754,758,773,788,810,821,855,859,860,875,896,925,952,957,969,973,974,1012,1030,1048,1052,1089,1109,1176,1203,1208,1220,1224,1225,1274,1317,1335,1353,1357,1407,1420,1424,1465,1468,1499],"Infos":null},{"Name":"/usr/local/go/src/path/filepath/symlink_unix.go","Base":22708,"Size":116,"Lines":[0,19,20,37,38,87,114],"Infos":null}]}
 