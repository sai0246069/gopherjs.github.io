p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �-��hash/fnvfnvhash�Qpackage fnv
import hash "hash"
func @"".New32() (? @"hash".Hash32)
func @"".New32a() (? @"hash".Hash32)
func @"".New64() (? @"hash".Hash64)
func @"".New64a() (? @"hash".Hash64)
type @"".sum32 uint32
func (? *@"".sum32) @"".BlockSize() (? int)
func (? *@"".sum32) @"".Reset() ()
func (? *@"".sum32) @"".Size() (? int)
func (? *@"".sum32) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".sum32) @"".Sum32() (? uint32)
func (? *@"".sum32) @"".Write(@"".data []byte) (? int, ? error)
type @"".sum32a uint32
func (? *@"".sum32a) @"".BlockSize() (? int)
func (? *@"".sum32a) @"".Reset() ()
func (? *@"".sum32a) @"".Size() (? int)
func (? *@"".sum32a) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".sum32a) @"".Sum32() (? uint32)
func (? *@"".sum32a) @"".Write(@"".data []byte) (? int, ? error)
type @"".sum64 uint64
func (? *@"".sum64) @"".BlockSize() (? int)
func (? *@"".sum64) @"".Reset() ()
func (? *@"".sum64) @"".Size() (? int)
func (? *@"".sum64) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".sum64) @"".Sum64() (? uint64)
func (? *@"".sum64) @"".Write(@"".data []byte) (? int, ? error)
type @"".sum64a uint64
func (? *@"".sum64a) @"".BlockSize() (? int)
func (? *@"".sum64a) @"".Reset() ()
func (? *@"".sum64a) @"".Size() (? int)
func (? *@"".sum64a) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".sum64a) @"".Sum64() (? uint64)
func (? *@"".sum64a) @"".Write(@"".data []byte) (? int, ? error)
import io "io"
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"hash".Hash64 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum64() (? uint64); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
$$
&AA=$packages["hash"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BIB=$pkg.sum32=$newType(4,$kindUint32,"fnv.sum32","sum32","hash/fnv",null);��J.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum32
hash/fnv.J
hash/fnv.Nhash/fnv.sum32 CLC=$pkg.sum32a=$newType(4,$kindUint32,"fnv.sum32a","sum32a","hash/fnv",null);��K.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum32a
hash/fnv.K
hash/fnv.Nhash/fnv.sum32a DID=$pkg.sum64=$newType(8,$kindUint64,"fnv.sum64","sum64","hash/fnv",null);��L.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum64
hash/fnv.L
hash/fnv.Nhash/fnv.sum64 ELE=$pkg.sum64a=$newType(8,$kindUint64,"fnv.sum64a","sum64a","hash/fnv",null);��M.methods=[{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Sum64",name:"Sum64",pkg:"",typ:$funcType([],[$Uint64],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([N],[$Int,$error],false)},{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([N],[N],false)}];sum64a
hash/fnv.M
hash/fnv.Nhash/fnv.sum64a JJ=$ptrType(B);Jhash/fnv.sum32 KK=$ptrType(C);Khash/fnv.sum32a LL=$ptrType(D);Lhash/fnv.sum64 MM=$ptrType(E);Mhash/fnv.sum64a NN=$sliceType($Uint8);N hash/fnv.New32FyF=$pkg.New32=function(){var a;  �  �a=2166136261;  �return new J(function(){return a;},function($v){a=$v;});    };New32
hash/fnv.Jhash/fnv.New32hash/fnv.sum32 hash/fnv.New32aGzG=$pkg.New32a=function(){var a;    a=2166136261;  /return new K(function(){return a;},function($v){a=$v;});    };New32a
hash/fnv.Khash/fnv.New32ahash/fnv.sum32a hash/fnv.New64H��H=$pkg.New64=function(){var a;  �  �a=new D(3421674724,2216829733);  �return new L(function(){return a;},function($v){a=$v;});    };New64
hash/fnv.Lhash/fnv.New64hash/fnv.sum64 hash/fnv.New64aI��I=$pkg.New64a=function(){var a;  �  �a=new E(3421674724,2216829733);  return new M(function(){return a;},function($v){a=$v;});    };New64a
hash/fnv.Mhash/fnv.New64ahash/fnv.sum64a (*hash/fnv.sum32).ResetX$ptrType(B).prototype.Reset=function(){var a;  &a=this;  ;a.$set(2166136261);    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).ResetX$ptrType(C).prototype.Reset=function(){var a;  Qa=this;  fa.$set(2166136261);    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Resetj$ptrType(D).prototype.Reset=function(){var a;  |a=this;  �a.$set(new D(3421674724,2216829733));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Resetj$ptrType(E).prototype.Reset=function(){var a;  �a=this;  �a.$set(new E(3421674724,2216829733));    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Sum32Z$ptrType(B).prototype.Sum32=function(){var a;  �a=this;  �return(a.$get()>>>0);    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum32Z$ptrType(C).prototype.Sum32=function(){var a;  	a=this;  %return(a.$get()>>>0);    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum64v$ptrType(D).prototype.Sum64=function(){var a,b;  ?a=this;  [return(b=a.$get(),new $Uint64(b.$high,b.$low));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum64v$ptrType(E).prototype.Sum64=function(){var a,b;  ua=this;  �return(b=a.$get(),new $Uint64(b.$high,b.$low));    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Write��$ptrType(B).prototype.Write=function(a){var a,b,c,d,e,f,g;  �b=this;  �c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);      c=(g=16777619,(((c>>>16<<16)*g>>>0)+(c<<16>>>16)*g)>>>0);        c=(c^((f>>>0)))>>>0;        e++;}  'b.$set(c);  2return[a.$length,$ifaceNil];    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Write��$ptrType(C).prototype.Write=function(a){var a,b,c,d,e,f,g;  Qb=this;  c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �  �c=(c^((f>>>0)))>>>0;      �  �c=(g=16777619,(((c>>>16<<16)*g>>>0)+(c<<16>>>16)*g)>>>0);        e++;}  �b.$set(c);  �return[a.$length,$ifaceNil];    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Write��$ptrType(D).prototype.Write=function(a){var a,b,c,d,e,f,g;  �b=this;  %c=b.$get();  1d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  L  Lc=$mul64(c,(new D(256,435)));      ^  ^c=(g=new D(0,f),new D(c.$high^g.$high,(c.$low^g.$low)>>>0));        e++;}  sb.$set(c);  ~return[a.$length,$ifaceNil];    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Write��$ptrType(E).prototype.Write=function(a){var a,b,c,d,e,f,g;  �b=this;  �c=b.$get();  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  �  �c=(g=new E(0,f),new E(c.$high^g.$high,(c.$low^g.$low)>>>0));        c=$mul64(c,(new E(256,435)));        e++;}  b.$set(c);  %return[a.$length,$ifaceNil];    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).SizeM$ptrType(B).prototype.Size=function(){var a;  Da=this;  \return 4;    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).SizeM$ptrType(C).prototype.Size=function(){var a;  ma=this;  �return 4;    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).SizeM$ptrType(D).prototype.Size=function(){var a;  �a=this;  �return 8;    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).SizeM$ptrType(E).prototype.Size=function(){var a;  �a=this;  �return 8;    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).BlockSizeR$ptrType(B).prototype.BlockSize=function(){var a;  �a=this;  	return 1;    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).BlockSizeR$ptrType(C).prototype.BlockSize=function(){var a;  	a=this;  	4return 1;    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).BlockSizeR$ptrType(D).prototype.BlockSize=function(){var a;  	Ea=this;  	breturn 1;    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).BlockSizeR$ptrType(E).prototype.BlockSize=function(){var a;  	sa=this;  	�return 1;    };sum64ahash/fnv.sum64a (*hash/fnv.sum32).Sum��$ptrType(B).prototype.Sum=function(a){var a,b,c;  	�b=this;  	�c=(b.$get()>>>0);  	�return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };sum32hash/fnv.sum32 (*hash/fnv.sum32a).Sum��$ptrType(C).prototype.Sum=function(a){var a,b,c;  
 b=this;  
Dc=(b.$get()>>>0);  
Ureturn $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };sum32ahash/fnv.sum32a (*hash/fnv.sum64).Sum��$ptrType(D).prototype.Sum=function(a){var a,b,c,d;  
�b=this;  
�d=(c=b.$get(),new $Uint64(c.$high,c.$low));  
�return $append(a,($shiftRightUint64(d,56).$low<<24>>>24),($shiftRightUint64(d,48).$low<<24>>>24),($shiftRightUint64(d,40).$low<<24>>>24),($shiftRightUint64(d,32).$low<<24>>>24),($shiftRightUint64(d,24).$low<<24>>>24),($shiftRightUint64(d,16).$low<<24>>>24),($shiftRightUint64(d,8).$low<<24>>>24),(d.$low<<24>>>24));    };sum64hash/fnv.sum64 (*hash/fnv.sum64a).Sum��$ptrType(E).prototype.Sum=function(a){var a,b,c,d;  Qb=this;  ud=(c=b.$get(),new $Uint64(c.$high,c.$low));  �return $append(a,($shiftRightUint64(d,56).$low<<24>>>24),($shiftRightUint64(d,48).$low<<24>>>24),($shiftRightUint64(d,40).$low<<24>>>24),($shiftRightUint64(d,32).$low<<24>>>24),($shiftRightUint64(d,24).$low<<24>>>24),($shiftRightUint64(d,16).$low<<24>>>24),($shiftRightUint64(d,8).$low<<24>>>24),(d.$low<<24>>>24));    };sum64ahash/fnv.sum64a ��{"Base":3070,"Files":[{"Name":"/usr/local/go/src/hash/fnv/fnv.go","Base":1,"Size":3068,"Lines":[0,55,109,159,160,237,297,304,382,394,395,404,412,414,415,422,437,452,467,482,484,485,493,516,549,570,596,598,599,646,673,697,708,710,711,760,788,813,824,826,827,874,901,925,936,938,939,988,1016,1041,1052,1054,1055,1098,1141,1184,1227,1228,1282,1336,1390,1444,1445,1495,1507,1533,1551,1570,1573,1584,1607,1609,1610,1661,1673,1699,1719,1737,1740,1751,1774,1776,1777,1827,1839,1865,1883,1902,1905,1916,1939,1941,1942,1993,2005,2031,2051,2069,2072,2083,2106,2108,2109,2150,2191,2232,2273,2274,2320,2366,2412,2458,2459,2499,2516,2582,2584,2585,2626,2643,2709,2711,2712,2752,2769,2887,2889,2890,2931,2948,3066],"Infos":null}]}
 