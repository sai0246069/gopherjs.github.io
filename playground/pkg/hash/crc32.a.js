p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   ����
hash/crc32crc32hashsync��package crc32
import hash "hash"
import sync "sync"
const @"".Castagnoli = 0x82f63b78
func @"".Checksum(@"".data []byte, @"".tab *@"".Table) (? uint32)
func @"".ChecksumIEEE(@"".data []byte) (? uint32)
const @"".IEEE = 0xedb88320
var @"".IEEETable *@"".Table
const @"".Koopman = 0xeb31d82e
func @"".MakeTable(@"".poly uint32) (? *@"".Table)
func @"".New(@"".tab *@"".Table) (? @"hash".Hash32)
func @"".NewIEEE() (? @"hash".Hash32)
const @"".Size = 0x4
type @"".Table [256]uint32
func @"".Update(@"".crc uint32, @"".tab *@"".Table, @"".p []byte) (? uint32)
type @"".digest struct { @"".crc uint32; @"".tab *@"".Table }
func (? *@"".digest) @"".BlockSize() (? int)
func (? *@"".digest) @"".Reset() ()
func (? *@"".digest) @"".Size() (? int)
func (? *@"".digest) @"".Sum(@"".in []byte) (? []byte)
func (? *@"".digest) @"".Sum32() (? uint32)
func (? *@"".digest) @"".Write(@"".p []byte) (@"".n int, @"".err error)
import io "io"
type @"hash".Hash32 interface { @"hash".BlockSize() (? int); @"hash".Reset() (); @"hash".Size() (? int); @"hash".Sum(@"hash".b []byte) (? []byte); @"hash".Sum32() (? uint32); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
$$
AA=$packages["hash"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["sync"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} COC=$pkg.Table=$newType(1024,$kindArray,"crc32.Table","Table","hash/crc32",null);C.init($Uint32,256);Tablehash/crc32.Table I��I=$pkg.digest=$newType(0,$kindStruct,"crc32.digest","digest","hash/crc32",function(crc_,tab_){this.$val=this;this.crc=crc_!==undefined?crc_:0;this.tab=tab_!==undefined?tab_:Q.nil;});��S.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([R],[$Int,$error],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([R],[R],false)}];|I.init([{prop:"crc",name:"crc",pkg:"hash/crc32",typ:$Uint32,tag:""},{prop:"tab",name:"tab",pkg:"hash/crc32",typ:Q,tag:""}]);digesthash/crc32.Qhash/crc32.Rhash/crc32.Shash/crc32.digest QQ=$ptrType(C);Qhash/crc32.Table RR=$sliceType($Uint8);R SS=$ptrType(I);Shash/crc32.digest DD=Q.nil;castagnoliTablehash/crc32.Qhash/crc32.Tablehash/crc32.castagnoliTable EE=new B.Once.ptr();castagnoliOncehash/crc32.castagnoliOnce	sync.Once 	IEEETable "    $pkg.IEEETable=H(3988292384);hash/crc32.IEEETablehash/crc32.makeTable hash/crc32.castagnoliInitF5F=function(){var $ptr={};  hD=H(2197175160);    };castagnoliInithash/crc32.castagnoliInithash/crc32.castagnoliTablehash/crc32.makeTable hash/crc32.MakeTableG��G=$pkg.MakeTable=function(a){var $ptr={},$r,$s=0,$this=this,a,b;var $f=function(){s:while(true){switch($s){case 0:  Wb=a;if(b===3988292384){$s=1;continue;}if(b===2197175160){$s=2;continue;}$s=3;continue;  fcase 1:  sreturn $pkg.IEEETable;    $s=3;continue;  �case 2:  �$r=E.Do(F);$s=4;case 4:if($r&&$r.$blocking){$r=$r();}  �return D;    case 3:  �return H(a);    case-1:}return;}};$f.$blocking=true;return $f;};	MakeTablehash/crc32.IEEETablehash/crc32.MakeTablehash/crc32.castagnoliInithash/crc32.castagnoliOncehash/crc32.castagnoliTablehash/crc32.makeTable hash/crc32.makeTableH��H=function(a){var $ptr={},a,b,c,d,e,f;  ab=C.zero();  r  vc=0;while(true){if(!(c<256)){break;}  �d=(c>>>0);  �  �e=0;while(true){if(!(e<8)){break;}  �    if(((d&1)>>>0)===1){  �d=(((d>>>1>>>0))^a)>>>0;    }else{  �  �d=(f=(1),f<32?(d>>>f):0)>>>0;        }      �  �e=e+(1)>>0;    }  b.nilCheck,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d);      �  �c=c+(1)>>0;    }  return b;    };	makeTablehash/crc32.Tablehash/crc32.makeTable hash/crc32.NewJGJ=$pkg.New=function(a){var $ptr={},a;  	)return new I.ptr(0,a);    };Newhash/crc32.Newhash/crc32.digest hash/crc32.NewIEEEKKK=$pkg.NewIEEE=function(){var $ptr={};  	�return J($pkg.IEEETable);    };NewIEEEhash/crc32.IEEETablehash/crc32.Newhash/crc32.NewIEEE (*hash/crc32.digest).Size��I.ptr.prototype.Size=function(){var $ptr={},a;  	�a=this;  	�return 4;    };I.prototype.Size=function(){return this.$val.Size();};digesthash/crc32.digest (*hash/crc32.digest).BlockSize��I.ptr.prototype.BlockSize=function(){var $ptr={},a;  
a=this;  
*return 1;    };I.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc32.digest (*hash/crc32.digest).Reset��I.ptr.prototype.Reset=function(){var $ptr={},a;  
<a=this;  
Qa.crc=0;    };I.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc32.digest hash/crc32.updateL�pL=function(a,b,c){var $ptr={},a,b,c,d,e,f,g;  
�a=~a>>>0;  
�d=c;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  
�a=((g=((a<<24>>>24)^f)<<24>>>24,(b.nilCheck,((g<0||g>=b.length)?$throwRuntimeError("index out of range"):b[g])))^((a>>>8>>>0)))>>>0;    e++;}  
�return~a>>>0;    };updatehash/crc32.update hash/crc32.UpdateM��M=$pkg.Update=function(a,b,c){var $ptr={},a,b,c;  k    if($equal(b,D,C)){  �return P(a,c);    }  �return L(a,b,c);    };Updatehash/crc32.Tablehash/crc32.Updatehash/crc32.castagnoliTablehash/crc32.updatehash/crc32.updateCastagnoli (*hash/crc32.digest).Write��I.ptr.prototype.Write=function(a){var $ptr={},a,b=0,c=$ifaceNil,d,e,f;  �d=this;  d.crc=M(d.crc,d.tab,a);  #    e=a.$length;f=$ifaceNil;b=e;c=f;return[b,c];    };I.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc32.Updatehash/crc32.digest (*hash/crc32.digest).Sum32��I.ptr.prototype.Sum32=function(){var $ptr={},a;  ?a=this;  [return a.crc;    };I.prototype.Sum32=function(){return this.$val.Sum32();};digesthash/crc32.digest (*hash/crc32.digest).Sum��I.ptr.prototype.Sum=function(a){var $ptr={},a,b,c;  qb=this;  �c=b.Sum32();  �return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };I.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc32.digest hash/crc32.ChecksumNJN=$pkg.Checksum=function(a,b){var $ptr={},a,b;  {return M(0,b,a);    };Checksumhash/crc32.Checksumhash/crc32.Update hash/crc32.ChecksumIEEEOWO=$pkg.ChecksumIEEE=function(a){var $ptr={},a;  return L(0,$pkg.IEEETable,a);    };ChecksumIEEEhash/crc32.ChecksumIEEEhash/crc32.IEEETablehash/crc32.update hash/crc32.updateCastagnoliP<P=function(a,b){var $ptr={},a,b;  �return L(a,D,b);    };updateCastagnolihash/crc32.castagnoliTablehash/crc32.updatehash/crc32.updateCastagnoli ��{"Base":4042,"Files":[{"Name":"/usr/local/go/src/hash/crc32/crc32.go","Base":1,"Size":3639,"Lines":[0,55,109,159,160,235,309,325,339,340,349,357,365,367,368,411,426,427,454,462,525,592,611,612,656,714,754,779,780,806,869,916,938,940,941,1024,1047,1048,1123,1199,1275,1301,1328,1357,1358,1382,1423,1425,1426,1477,1509,1510,1584,1621,1636,1648,1667,1685,1721,1746,1749,1773,1775,1776,1850,1887,1904,1932,1951,1978,1997,2025,2037,2051,2056,2060,2073,2076,2086,2088,2089,2148,2169,2181,2193,2195,2196,2259,2309,2369,2370,2437,2467,2520,2521,2565,2566,2612,2613,2652,2653,2708,2720,2743,2781,2784,2797,2799,2800,2866,2921,2950,2984,2987,3015,3017,3018,3072,3105,3125,3127,3128,3177,3178,3219,3235,3301,3303,3304,3352,3402,3480,3481,3533,3563],"Infos":null},{"Name":"/usr/local/go/src/hash/crc32/crc32_generic.go","Base":3641,"Size":400,"Lines":[0,55,109,159,160,178,179,193,194,272,304,305,358,398],"Infos":null}]}
 