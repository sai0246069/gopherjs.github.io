p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �?���encoding/ascii85ascii85iostrconv��package ascii85
import io "io"
import strconv "strconv"
type @"".CorruptInputError int64
func (? @"".CorruptInputError) @"".Error() (? string)
func (? *@"".CorruptInputError) @"".Error() (? string)
func @"".Decode(@"".dst []byte, @"".src []byte, @"".flush bool) (@"".ndst int, @"".nsrc int, @"".err error)
func @"".Encode(@"".dst []byte, @"".src []byte) (? int)
func @"".MaxEncodedLen(@"".n int) (? int)
func @"".NewDecoder(@"".r @"io".Reader) (? @"io".Reader)
func @"".NewEncoder(@"".w @"io".Writer) (? @"io".WriteCloser)
type @"".decoder struct { @"".err error; @"".readErr error; @"".r @"io".Reader; @"".buf [1024]byte; @"".nbuf int; @"".out []byte; @"".outbuf [1024]byte }
func (? *@"".decoder) @"".Read(@"".p []byte) (@"".n int, @"".err error)
type @"".encoder struct { @"".err error; @"".w @"io".Writer; @"".buf [4]byte; @"".nbuf int; @"".out [1024]byte }
func (? *@"".encoder) @"".Close() (? error)
func (? *@"".encoder) @"".Write(@"".p []byte) (@"".n int, @"".err error)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"io".Writer interface { @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
type @"io".WriteCloser interface { @"io".Close() (? error); @"io".Write(@"".p []byte) (@"".n int, @"".err error) }
$$
AA=$packages["io"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["strconv"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} F�IF=$pkg.encoder=$newType(0,$kindStruct,"ascii85.encoder","encoder","encoding/ascii85",function(err_,w_,buf_,nbuf_,out_){this.$val=this;this.err=err_!==undefined?err_:$ifaceNil;this.w=w_!==undefined?w_:$ifaceNil;this.buf=buf_!==undefined?buf_:L.zero();this.nbuf=nbuf_!==undefined?nbuf_:0;this.out=out_!==undefined?out_:M.zero();});��N.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([K],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�CF.init([{prop:"err",name:"err",pkg:"encoding/ascii85",typ:$error,tag:""},{prop:"w",name:"w",pkg:"encoding/ascii85",typ:A.Writer,tag:""},{prop:"buf",name:"buf",pkg:"encoding/ascii85",typ:L,tag:""},{prop:"nbuf",name:"nbuf",pkg:"encoding/ascii85",typ:$Int,tag:""},{prop:"out",name:"out",pkg:"encoding/ascii85",typ:M,tag:""}]);encoderencoding/ascii85.Kencoding/ascii85.Lencoding/ascii85.Mencoding/ascii85.Nencoding/ascii85.encoder	io.Writer GxG=$pkg.CorruptInputError=$newType(8,$kindInt64,"ascii85.CorruptInputError","CorruptInputError","encoding/ascii85",null);QG.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];CorruptInputError"encoding/ascii85.CorruptInputError J��J=$pkg.decoder=$newType(0,$kindStruct,"ascii85.decoder","decoder","encoding/ascii85",function(err_,readErr_,r_,buf_,nbuf_,out_,outbuf_){this.$val=this;this.err=err_!==undefined?err_:$ifaceNil;this.readErr=readErr_!==undefined?readErr_:$ifaceNil;this.r=r_!==undefined?r_:$ifaceNil;this.buf=buf_!==undefined?buf_:M.zero();this.nbuf=nbuf_!==undefined?nbuf_:0;this.out=out_!==undefined?out_:K.nil;this.outbuf=outbuf_!==undefined?outbuf_:M.zero();});TO.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([K],[$Int,$error],false)}];��J.init([{prop:"err",name:"err",pkg:"encoding/ascii85",typ:$error,tag:""},{prop:"readErr",name:"readErr",pkg:"encoding/ascii85",typ:$error,tag:""},{prop:"r",name:"r",pkg:"encoding/ascii85",typ:A.Reader,tag:""},{prop:"buf",name:"buf",pkg:"encoding/ascii85",typ:M,tag:""},{prop:"nbuf",name:"nbuf",pkg:"encoding/ascii85",typ:$Int,tag:""},{prop:"out",name:"out",pkg:"encoding/ascii85",typ:K,tag:""},{prop:"outbuf",name:"outbuf",pkg:"encoding/ascii85",typ:M,tag:""}]);decoderencoding/ascii85.Kencoding/ascii85.Mencoding/ascii85.Oencoding/ascii85.decoder	io.Reader KK=$sliceType($Uint8);K LL=$arrayType($Uint8,4);L MM=$arrayType($Uint8,1024);M NN=$ptrType(F);Nencoding/ascii85.encoder OO=$ptrType(J);Oencoding/ascii85.decoder encoding/ascii85.EncodeC�
�C=$pkg.Encode=function(a,b){var a,b,c,d,e,f,g,h,i;  3    if(b.$length===0){  Hreturn 0;    }  Vc=0;  ^while(true){if(!(b.$length>0)){break;}  s(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=0);  �(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=0);  �(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=0);  �(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=0);  �(4>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+4]=0);  �  �d=0;  e=b.$length;  Hif(e===3){  S  Sd=(d|((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>0)<<8>>>0)))>>>0;      o  �  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;      �  �  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;          }}else if(e===2){  �  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;      �  �  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;          �}else if(e===1){  �  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;        }else{  #  #d=(d|(((3>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+3])>>>0)))>>>0;      :  S  Sd=(d|((((2>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+2])>>>0)<<8>>>0)))>>>0;      o  �  �d=(d|((((1>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+1])>>>0)<<16>>>0)))>>>0;      �  �  �d=(d|((((0>=b.$length?$throwRuntimeError("index out of range"):b.$array[b.$offset+0])>>>0)<<24>>>0)))>>>0;        }      if((d===0)&&b.$length>=4){  .(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=122);  >a=$subslice(a,1);  Ob=$subslice(b,4);  `  `c=c+(1)>>0;      gcontinue;    }  �  �f=4;while(true){if(!(f>=0)){break;}  �((f<0||f>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+f]=33+((g=d%85,g===g?g:$throwRuntimeError("integer divide by zero"))<<24>>>24)<<24>>>24);  �  �d=(h=d/(85),(h===h&&h!==1/0&&h!==-1/0)?h>>>0:$throwRuntimeError("integer divide by zero"));          �  �f=f-(1)>>0;    }  *i=5;  3    if(b.$length<4){  H  Hi=i-((4-b.$length>>0))>>0;      ]b=K.nil;    }else{  ub=$subslice(b,4);    }  �a=$subslice(a,i);  �  �c=c+(i)>>0;        }  �return c;    };Encodeencoding/ascii85.Encodeencoding/ascii85.K encoding/ascii85.MaxEncodedLenD��D=$pkg.MaxEncodedLen=function(a){var a,b;  return(b=((a+3>>0))/4,(b===b&&b!==1/0&&b!==-1/0)?b>>0:$throwRuntimeError("integer divide by zero"))*5>>0;    };MaxEncodedLenencoding/ascii85.MaxEncodedLen encoding/ascii85.NewEncoderEbE=$pkg.NewEncoder=function(a){var a;  �return new F.ptr($ifaceNil,a,L.zero(),0,M.zero());    };
NewEncoderencoding/ascii85.Lencoding/ascii85.Mencoding/ascii85.NewEncoderencoding/ascii85.encoder !(*encoding/ascii85.encoder).Write�aF.ptr.prototype.Write=function(a){var $r,$s=0,$this=this,b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;var $f=function(){s:while(true){switch($s){case 0:  	^d=$this;  	�    if(!($interfaceIsEqual(d.err,$ifaceNil))){  	�    e=0;f=d.err;b=e;c=f;return[b,c];    }  	�if(d.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  	�  	�g=0;  	�  	�g=0;while(true){if(!(g<a.$length&&d.nbuf<4)){break;}  
(h=d.buf,i=d.nbuf,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])));  
1  
1d.nbuf=d.nbuf+(1)>>0;          
  
g=g+(1)>>0;    }  
@  
@b=b+(g)>>0;      
Ia=$subslice(a,g);  
U    if(d.nbuf<4){  
hreturn[b,c];    }  
uj=C($subslice(new K(d.out),0),$subslice(new K(d.buf),0));  
�  
�l=d.w.Write($subslice(new K(d.out),0,j));$s=3;case 3:if(l&&l.$blocking){l=l();}k=l;d.err=k[1];if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=4;continue;}$s=5;continue;    case 4:  
�    m=b;n=d.err;b=m;c=n;return[b,c];    case 5:  
�d.nbuf=0;    case 2:  case 6:if(!(a.$length>=4)){$s=7;continue;}  +o=816;  F    if(o>a.$length){  Zo=a.$length;    }  l  lo=o-((p=o%4,p===p?p:$throwRuntimeError("integer divide by zero")))>>0;      {if(o>0){$s=8;continue;}$s=9;continue;    case 8:  �q=C($subslice(new K(d.out),0),$subslice(a,0,o));  �  �s=d.w.Write($subslice(new K(d.out),0,q));$s=10;case 10:if(s&&s.$blocking){s=s();}r=s;d.err=r[1];if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=11;continue;}$s=12;continue;    case 11:  �    t=b;u=d.err;b=t;c=u;return[b,c];    case 12:    case 9:    b=b+(o)>>0;      a=$subslice(a,o);    $s=6;continue;case 7:  5  9v=0;while(true){if(!(v<a.$length)){break;}  U(w=d.buf,((v<0||v>=w.length)?$throwRuntimeError("index out of range"):w[v]=((v<0||v>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+v])));      M  Mv=v+(1)>>0;    }  id.nbuf=a.$length;  z  zb=b+(a.$length)>>0;      �return[b,c];    case-1:}return;}};$f.$blocking=true;return $f;};F.prototype.Write=function(a){return this.$val.Write(a);};encoderencoding/ascii85.Encodeencoding/ascii85.Kencoding/ascii85.encoder !(*encoding/ascii85.encoder).Close�F.ptr.prototype.Close=function(){var $r,$s=0,$this=this,a,b,c,d;var $f=function(){s:while(true){switch($s){case 0:  a=$this;  Xif($interfaceIsEqual(a.err,$ifaceNil)&&a.nbuf>0){$s=1;continue;}$s=2;continue;    case 1:  zb=C($subslice(new K(a.out),0),$subslice(new K(a.buf),0,a.nbuf));  �a.nbuf=0;  �d=a.w.Write($subslice(new K(a.out),0,b));$s=3;case 3:if(d&&d.$blocking){d=d();}c=d;a.err=c[1];    case 2:  �return a.err;    case-1:}return;}};$f.$blocking=true;return $f;};F.prototype.Close=function(){return this.$val.Close();};encoderencoding/ascii85.Encodeencoding/ascii85.Kencoding/ascii85.encoder *(encoding/ascii85.CorruptInputError).Error��G.prototype.Error=function(){var a;  #a=this;  Jreturn"illegal ascii85 data at input byte "+B.FormatInt(new $Int64(a.$high,a.$low),10);    };$ptrType(G).prototype.Error=function(){return this.$get().Error();};CorruptInputError"encoding/ascii85.CorruptInputErrorstrconv.FormatInt encoding/ascii85.DecodeH��H=$pkg.Decode=function(a,b,c){var a,b,c,d=0,e=0,f=$ifaceNil,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;  �  �g=0;  �  �h=0;  �i=b;j=0;while(true){if(!(j<i.$length)){break;}k=j;l=((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]);  �    if((a.$length-d>>0)<4){  �return[d,e,f];    }  �  �if(l<=32){  �j++;continue;      	}else if((l===122)&&(h===0)){  &h=5;  0g=0;      8}else if(33<=l&&l<=117){  Vg=((((g>>>16<<16)*85>>>0)+(g<<16>>>16)*85)>>>0)+((l-33<<24>>>24)>>>0)>>>0;  r  rh=h+(1)>>0;        }else{  �    m=0;n=0;o=new G(0,k);d=m;e=n;f=o;return[d,e,f];    }  �    if(h===5){  �e=k+1>>0;  �((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=((g>>>24>>>0)<<24>>>24));  �(p=d+1>>0,((p<0||p>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+p]=((g>>>16>>>0)<<24>>>24)));  	(q=d+2>>0,((q<0||q>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+q]=((g>>>8>>>0)<<24>>>24)));  '(r=d+3>>0,((r<0||r>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+r]=(g<<24>>>24)));  @  @d=d+(4)>>0;      Mh=0;  Wg=0;    }    j++;}  e    if(c){  re=b.$length;  �    if(h>0){  c    if(h===1){  t    s=0;t=0;u=new G(0,b.$length);d=s;e=t;f=u;return[d,e,f];    }  �  �v=h;while(true){if(!(v<5)){break;}  lg=((((g>>>16<<16)*85>>>0)+(g<<16>>>16)*85)>>>0)+84>>>0;      �  �v=v+(1)>>0;    }  �  �w=0;while(true){if(!(w<(h-1>>0))){break;}  �((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=((g>>>24>>>0)<<24>>>24));  �  �g=(x=(8),x<32?(g<<x):0)>>>0;      �  �d=d+(1)>>0;          �  �w=w+(1)>>0;    }    }    }  �return[d,e,f];    };Decode"encoding/ascii85.CorruptInputErrorencoding/ascii85.Decode encoding/ascii85.NewDecoderIrI=$pkg.NewDecoder=function(a){var a;  Jreturn new J.ptr($ifaceNil,$ifaceNil,a,M.zero(),0,K.nil,M.zero());    };
NewDecoderencoding/ascii85.Kencoding/ascii85.Mencoding/ascii85.NewDecoderencoding/ascii85.decoder  (*encoding/ascii85.decoder).Read�@J.ptr.prototype.Read=function(a){var $r,$s=0,$this=this,b=0,c=$ifaceNil,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;var $f=function(){s:while(true){switch($s){case 0:  %d=$this;  V    if(a.$length===0){  i    e=0;f=$ifaceNil;b=e;c=f;return[b,c];    }  {    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    g=0;h=d.err;b=g;c=h;return[b,c];    }  �case 1:  �    if(d.out.$length>0){  �b=$copySlice(a,d.out);  d.out=$subslice(d.out,b);  return[b,c];    }  S  Wi=0;j=0;k=0;l=i;m=j;n=k;  lif(d.nbuf>0){$s=3;continue;}$s=4;continue;    case 3:  o=H($subslice(new K(d.outbuf),0),$subslice(new K(d.buf),0,d.nbuf),!($interfaceIsEqual(d.readErr,$ifaceNil)));n=o[0];m=o[1];d.err=o[2];  �    if(n>0){  �d.out=$subslice(new K(d.outbuf),0,n);  �d.nbuf=$copySlice($subslice(new K(d.buf),0),$subslice(new K(d.buf),m,d.nbuf));  .$s=1;continue;    }  V    if((n===0)&&$interfaceIsEqual(d.err,$ifaceNil)){  �p=0;    q=0;while(true){if(!(q<d.nbuf)){break;}  +    if((r=d.buf,((q<0||q>=r.length)?$throwRuntimeError("index out of range"):r[q]))>32){  E(t=d.buf,((p<0||p>=t.length)?$throwRuntimeError("index out of range"):t[p]=(s=d.buf,((q<0||q>=s.length)?$throwRuntimeError("index out of range"):s[q]))));  a  ap=p+(1)>>0;        }          q=q+(1)>>0;    }  xd.nbuf=p;    }    case 4:  �    if(!($interfaceIsEqual(d.err,$ifaceNil))){  �    u=0;v=d.err;b=u;c=v;return[b,c];    }  �    if(!($interfaceIsEqual(d.readErr,$ifaceNil))){  d.err=d.readErr;  #    w=0;x=d.err;b=w;c=x;return[b,c];    }  Oz=d.r.Read($subslice(new K(d.buf),d.nbuf));$s=5;case 5:if(z&&z.$blocking){z=z();}y=z;l=y[0];d.readErr=y[1];  z  zd.nbuf=d.nbuf+(l)>>0;        $s=1;continue;case 2:    case-1:}return;}};$f.$blocking=true;return $f;};J.prototype.Read=function(a){return this.$val.Read(a);};decoderencoding/ascii85.Decodeencoding/ascii85.Kencoding/ascii85.decoder �`{"Base":7053,"Files":[{"Name":"/usr/local/go/src/encoding/ascii85/ascii85.go","Base":1,"Size":7051,"Lines":[0,55,109,159,160,216,293,309,310,319,325,336,338,339,342,353,357,358,417,480,483,547,613,685,688,752,782,817,837,848,851,852,860,880,893,906,919,932,945,946,1009,1024,1044,1055,1078,1093,1103,1131,1146,1156,1185,1200,1210,1239,1243,1244,1291,1322,1338,1355,1372,1379,1391,1395,1396,1444,1472,1501,1512,1516,1517,1575,1584,1604,1625,1638,1649,1666,1670,1686,1695,1698,1708,1710,1711,1789,1846,1847,1916,1978,2039,2107,2134,2204,2205,2227,2239,2255,2311,2354,2388,2390,2391,2446,2465,2483,2486,2487,2507,2524,2536,2581,2605,2617,2621,2630,2642,2660,2670,2674,2713,2770,2789,2793,2806,2809,2810,2837,2856,2883,2902,2917,2921,2936,2950,2988,3046,3066,3071,3075,3085,3098,3101,3102,3123,3154,3172,3175,3192,3205,3213,3215,3216,3270,3323,3357,3414,3447,3492,3505,3543,3546,3560,3562,3563,3566,3577,3581,3582,3611,3612,3656,3736,3738,3739,3797,3858,3922,3987,4042,4106,4167,4170,4230,4292,4349,4352,4410,4413,4484,4498,4510,4535,4560,4570,4574,4585,4602,4614,4642,4652,4661,4690,4718,4726,4737,4774,4778,4793,4809,4838,4869,4899,4924,4937,4947,4956,4960,4963,4975,4993,5007,5061,5110,5161,5215,5231,5276,5281,5310,5364,5422,5479,5497,5502,5533,5563,5575,5586,5591,5595,5598,5606,5608,5609,5664,5729,5730,5752,5767,5782,5801,5839,5852,5895,5915,5917,5918,5972,5990,6006,6009,6028,6046,6049,6050,6057,6101,6123,6145,6166,6176,6180,6181,6224,6249,6267,6346,6363,6392,6441,6477,6482,6516,6588,6646,6659,6693,6718,6746,6758,6765,6771,6788,6793,6797,6798,6855,6875,6894,6898,6922,6943,6962,6966,6967,6988,7031,7046,7049],"Infos":null}]}
 