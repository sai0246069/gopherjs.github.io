p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����crypto/hmachmaccrypto/subtlehash�Lpackage hmac
import subtle "crypto/subtle"
import hash "hash"
func @"".Equal(@"".mac1 []byte, @"".mac2 []byte) (? bool)
func @"".New(@"".h func () (? @"hash".Hash), @"".key []byte) (? @"hash".Hash)
type @"".hmac struct { @"".size int; @"".blocksize int; @"".key []byte; @"".tmp []byte; @"".outer @"hash".Hash; @"".inner @"hash".Hash }
func (? *@"".hmac) @"".BlockSize() (? int)
func (? *@"".hmac) @"".Reset() ()
func (? *@"".hmac) @"".Size() (? int)
func (? *@"".hmac) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".hmac) @"".Write(@"".p []byte) (@"".n int, @"".err error)
func (? *@"".hmac) @"".tmpPad(@"".xor byte) ()
import io "io"
type @"hash".Hash interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"io".Write(@"io".p []byte) (@"io".n int, @"io".err error) }
$$
AA=$packages["crypto/subtle"];E    $r=A.$init($BLOCKING);$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["hash"];E    $r=B.$init($BLOCKING);$s=2;case 2:if($r&&$r.$blocking){$r=$r();} C��C=$pkg.hmac=$newType(0,$kindStruct,"hmac.hmac","hmac","crypto/hmac",function(size_,blocksize_,key_,tmp_,outer_,inner_){this.$val=this;this.size=size_!==undefined?size_:0;this.blocksize=blocksize_!==undefined?blocksize_:0;this.key=key_!==undefined?key_:F.nil;this.tmp=tmp_!==undefined?tmp_:F.nil;this.outer=outer_!==undefined?outer_:$ifaceNil;this.inner=inner_!==undefined?inner_:$ifaceNil;});��G.methods=[{prop:"BlockSize",name:"BlockSize",pkg:"",type:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",type:$funcType([],[],false)},{prop:"Size",name:"Size",pkg:"",type:$funcType([],[$Int],false)},{prop:"Sum",name:"Sum",pkg:"",type:$funcType([F],[F],false)},{prop:"Write",name:"Write",pkg:"",type:$funcType([F],[$Int,$error],false)},{prop:"tmpPad",name:"tmpPad",pkg:"crypto/hmac",type:$funcType([$Uint8],[],false)}];��C.init([{prop:"size",name:"size",pkg:"crypto/hmac",type:$Int,tag:""},{prop:"blocksize",name:"blocksize",pkg:"crypto/hmac",type:$Int,tag:""},{prop:"key",name:"key",pkg:"crypto/hmac",type:F,tag:""},{prop:"tmp",name:"tmp",pkg:"crypto/hmac",type:F,tag:""},{prop:"outer",name:"outer",pkg:"crypto/hmac",type:B.Hash,tag:""},{prop:"inner",name:"inner",pkg:"crypto/hmac",type:B.Hash,tag:""}]);crypto/hmac.hmaccrypto/hmac.hmaccrypto/hmac:*crypto/hmac.hmaccrypto/hmac:[]byte	hash.Hash FF=$sliceType($Uint8);crypto/hmac:[]byte GG=$ptrType(C);crypto/hmac:*crypto/hmac.hmaccrypto/hmac.hmac (*crypto/hmac.hmac).tmpPad�.C.ptr.prototype.tmpPad=function(a){var b,c,d,e,f,g,h,i;  �b=this;  �c=b.key;d=0;while(d<c.$length){e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  (g=b.tmp,(e<0||e>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+e]=(a^f)<<24>>>24);    d++;}  2  6h=b.key.$length;while(h<b.blocksize){  `(i=b.tmp,(h<0||h>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+h]=a);      X  Xh=h+(1)>>0;}    };C.prototype.tmpPad=function(a){return this.$val.tmpPad(a);};crypto/hmac.hmaccrypto/hmac.tmpPad~crypto/hmac.hmac (*crypto/hmac.hmac).Sum�@C.ptr.prototype.Sum=function(a){var b,c;  {b=this;  �c=a.$length;  �a=b.inner.Sum(a);  �b.tmpPad(92);  �$copySlice($subslice(b.tmp,b.blocksize),$subslice(a,c));   b.outer.Reset();  b.outer.Write(b.tmp);  'return b.outer.Sum($subslice(a,0,c));    };C.prototype.Sum=function(a){return this.$val.Sum(a);};crypto/hmac.hmaccrypto/hmac.hmaccrypto/hmac.tmpPad~ (*crypto/hmac.hmac).Write��C.ptr.prototype.Write=function(a){var b=0,c=$ifaceNil,d,e;  Qd=this;  �    e=d.inner.Write(a);b=e[0];c=e[1];return[b,c];    };C.prototype.Write=function(a){return this.$val.Write(a);};crypto/hmac.hmaccrypto/hmac.hmac (*crypto/hmac.hmac).Size��C.ptr.prototype.Size=function(){var a;  �a=this;  �return a.size;    };C.prototype.Size=function(){return this.$val.Size();};crypto/hmac.hmaccrypto/hmac.hmac (*crypto/hmac.hmac).BlockSize��C.ptr.prototype.BlockSize=function(){var a;  �a=this;  �return a.blocksize;    };C.prototype.BlockSize=function(){return this.$val.BlockSize();};crypto/hmac.hmaccrypto/hmac.hmac (*crypto/hmac.hmac).Reset��C.ptr.prototype.Reset=function(){var a;  a=this;  a.inner.Reset();  *a.tmpPad(54);  :a.inner.Write($subslice(a.tmp,0,a.blocksize));    };C.prototype.Reset=function(){return this.$val.Reset();};crypto/hmac.hmaccrypto/hmac.hmaccrypto/hmac.tmpPad~ crypto/hmac.NewD�D=$pkg.New=function(a,b){var c;  �c=new C.ptr();  �c.outer=a();  �c.inner=a();  c.size=c.inner.Size();  )c.blocksize=c.inner.BlockSize();  Nc.tmp=$makeSlice(F,(c.blocksize+c.size>>0));  {    if(b.$length>c.blocksize){  �c.outer.Write(b);  �b=c.outer.Sum(F.nil);    }  �c.key=$makeSlice(F,b.$length);  	$copySlice(c.key,b);  	!c.Reset();  	-return c;    };crypto/hmac.Newcrypto/hmac.Newcrypto/hmac.hmaccrypto/hmac:[]byte crypto/hmac.EqualEgE=$pkg.Equal=function(a,b){  
Hreturn(a.$length===b.$length)&&(A.ConstantTimeCompare(a,b)===1);    };crypto/hmac.Equalcrypto/hmac.Equal!crypto/subtle.ConstantTimeCompare �P{"Base":2712,"Files":[{"Name":"/usr/local/go/src/crypto/hmac/hmac.go","Base":1,"Size":2710,"Lines":[0,55,109,159,160,163,240,314,381,450,451,526,548,549,622,677,712,733,763,808,811,814,827,828,837,854,862,864,865,878,942,943,1004,1048,1092,1139,1140,1159,1177,1195,1216,1240,1242,1243,1277,1304,1325,1328,1373,1390,1393,1395,1396,1435,1455,1477,1493,1534,1551,1573,1607,1609,1610,1662,1687,1689,1690,1734,1735,1789,1790,1815,1832,1848,1884,1886,1887,1958,2011,2028,2044,2060,2087,2124,2169,2199,2232,2254,2280,2283,2316,2335,2347,2358,2360,2361,2437,2474,2543,2616,2630,2708],"Infos":null}]}
 