p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����runtime/pprofpprofiosync��package pprof
import io "io"
import sync "sync"
func @"".Lookup(@"".name string) (? *@"".Profile)
type @"".Profile struct { @"".name string; @"".mu @"sync".Mutex; @"".m map[interface {  }][]uintptr; @"".count func () (? int); @"".write func (? @"io".Writer, ? int) (? error) }
func (? *@"".Profile) @"".WriteTo(@"".w @"io".Writer, @"".debug int) (? error)
func @"".StartCPUProfile(@"".w @"io".Writer) (? error)
func @"".StopCPUProfile() ()
func @"".WriteHeapProfile(@"".w @"io".Writer) (? error)
type @"sync".Mutex struct { @"sync".state int32; @"sync".sema uint32 }
func (? *@"sync".Mutex) @"sync".Lock() ()
func (? *@"sync".Mutex) @"sync".Unlock() ()
type @"io".Writer interface { @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["io"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["sync"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} C�oC=$pkg.Profile=$newType(0,$kindStruct,"pprof.Profile","Profile","runtime/pprof",function(name_,mu_,m_,count_,write_){this.$val=this;this.name=name_!==undefined?name_:"";this.mu=mu_!==undefined?mu_:new B.Mutex.ptr();this.m=m_!==undefined?m_:false;this.count=count_!==undefined?count_:$throwNilPointerError;this.write=write_!==undefined?write_:$throwNilPointerError;});aH.methods=[{prop:"WriteTo",name:"WriteTo",pkg:"",typ:$funcType([A.Writer,$Int],[$error],false)}];�7C.init([{prop:"name",name:"name",pkg:"runtime/pprof",typ:$String,tag:""},{prop:"mu",name:"mu",pkg:"runtime/pprof",typ:B.Mutex,tag:""},{prop:"m",name:"m",pkg:"runtime/pprof",typ:J,tag:""},{prop:"count",name:"count",pkg:"runtime/pprof",typ:K,tag:""},{prop:"write",name:"write",pkg:"runtime/pprof",typ:L,tag:""}]);Profile	io.Writerruntime/pprof.Hruntime/pprof.Iruntime/pprof.Jruntime/pprof.Kruntime/pprof.Lruntime/pprof.Profile
sync.Mutex HH=$ptrType(C);Hruntime/pprof.Profile II=$sliceType($Uintptr);I JJ=$mapType($emptyInterface,I);Jruntime/pprof.I KK=$funcType([],[$Int],false);K L,L=$funcType([A.Writer,$Int],[$error],false);L	io.Writer  (*runtime/pprof.Profile).WriteTo��C.ptr.prototype.WriteTo=function(a,b){var $ptr={},a,b,c;   �c=this;  return $ifaceNil;    };C.prototype.WriteTo=function(a,b){return this.$val.WriteTo(a,b);};Profileruntime/pprof.Profile runtime/pprof.StartCPUProfileDND=$pkg.StartCPUProfile=function(a){var $ptr={},a;  :return $ifaceNil;    };StartCPUProfileruntime/pprof.StartCPUProfile runtime/pprof.StopCPUProfileE4E=$pkg.StopCPUProfile=function(){var $ptr={};    };StopCPUProfileruntime/pprof.StopCPUProfile runtime/pprof.WriteHeapProfileFOF=$pkg.WriteHeapProfile=function(a){var $ptr={},a;  �return $ifaceNil;    };WriteHeapProfileruntime/pprof.WriteHeapProfile runtime/pprof.LookupGAG=$pkg.Lookup=function(a){var $ptr={},a;  �return H.nil;    };Lookupruntime/pprof.Hruntime/pprof.Lookupruntime/pprof.Profile �${"Base":464,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/runtime/pprof/pprof.go","Base":1,"Size":462,"Lines":[0,13,14,28,29,38,44,52,54,55,77,91,109,142,160,194,196,197,255,267,269,270,312,324,326,327,351,353,354,397,409,411,412,448,460],"Infos":null}]}
 