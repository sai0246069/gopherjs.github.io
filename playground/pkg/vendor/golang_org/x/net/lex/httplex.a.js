����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �+���#vendor/golang_org/x/net/lex/httplexhttplexnetstringsunicode/utf8vendor/golang_org/x/net/idna�
$$ exports $$
pv0httplexFvendor/golang_org/x/net/lex/httplex	2HeaderValuesContainsToken values 
token    	IsTokenRune r4   	 PunycodeHostPort v    6 	(ValidHeaderFieldName v    	*ValidHeaderFieldValue v    	ValidHostHeader h    AA=$packages["net"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["strings"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["unicode/utf8"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} D,D=$packages["vendor/golang_org/x/net/idna"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EisTokenTable RvalidHostByte ��    E=$toNativeArray($kindBool,[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,true,true,true,false,false,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true]);isTokenTable0vendor/golang_org/x/net/lex/httplex.isTokenTable ��    R=$toNativeArray($kindBool,[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);validHostByte1vendor/golang_org/x/net/lex/httplex.validHostByte /vendor/golang_org/x/net/lex/httplex.IsTokenRuneF��F=function(a){var $ptr,a,b;  b=(a>>0);  return b<127&&((b<0||b>=E.length)?($throwRuntimeError("index out of range"),undefined):E[b]);    };$pkg.IsTokenRune=F;IsTokenRune/vendor/golang_org/x/net/lex/httplex.IsTokenRune0vendor/golang_org/x/net/lex/httplex.isTokenTable .vendor/golang_org/x/net/lex/httplex.isNotTokenG1G=function(a){var $ptr,a;  mreturn!F(a);    };
isNotToken/vendor/golang_org/x/net/lex/httplex.IsTokenRune.vendor/golang_org/x/net/lex/httplex.isNotToken =vendor/golang_org/x/net/lex/httplex.HeaderValuesContainsTokenH�$H=function(a,b){var $ptr,a,b,c,d,e;  Ic=a;d=0;while(true){if(!(d<c.$length)){break;}e=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);    if(K(e,b)){  �return true;    }    d++;}  �return false;    };$pkg.HeaderValuesContainsToken=H;HeaderValuesContainsToken=vendor/golang_org/x/net/lex/httplex.HeaderValuesContainsToken<vendor/golang_org/x/net/lex/httplex.headerValueContainsToken )vendor/golang_org/x/net/lex/httplex.isOWSI=I=function(a){var $ptr,a;  3return(a===32)||(a===9);    };isOWS)vendor/golang_org/x/net/lex/httplex.isOWS +vendor/golang_org/x/net/lex/httplex.trimOWSJ�J=function(a){var $ptr,a;  	�while(true){if(!(a.length>0&&I(a.charCodeAt(0)))){break;}  	�a=$substring(a,1);    }  	�while(true){if(!(a.length>0&&I(a.charCodeAt((a.length-1>>0))))){break;}  	�a=$substring(a,0,(a.length-1>>0));    }  	�return a;    };trimOWS)vendor/golang_org/x/net/lex/httplex.isOWS+vendor/golang_org/x/net/lex/httplex.trimOWS <vendor/golang_org/x/net/lex/httplex.headerValueContainsTokenK��K=function(a,b){var $ptr,a,b,c;  a=J(a);  (c=B.IndexByte(a,44);    if(!((c===-1))){  \return M(J($substring(a,0,c)),b)||K($substring(a,(c+1>>0)),b);    }  �return M(a,b);    };headerValueContainsTokenstrings.IndexByte<vendor/golang_org/x/net/lex/httplex.headerValueContainsToken.vendor/golang_org/x/net/lex/httplex.tokenEqual+vendor/golang_org/x/net/lex/httplex.trimOWS .vendor/golang_org/x/net/lex/httplex.lowerASCIILdL=function(a){var $ptr,a;    if(65<=a&&a<=90){  Preturn a+32<<24>>>24;    }  kreturn a;    };
lowerASCII.vendor/golang_org/x/net/lex/httplex.lowerASCII .vendor/golang_org/x/net/lex/httplex.tokenEqualM�JM=function(a,b){var $ptr,a,b,c,d,e,f,g;    if(!((a.length===b.length))){  return false;    }  c=a;d=0;while(true){if(!(d<c.length)){break;}e=$decodeRune(c,d);f=d;g=e[0];    if(g>=128){  yreturn false;    }    if(!((L((g<<24>>>24))===L(b.charCodeAt(f))))){  �return false;    }    d+=e[1];}  �return true;    };
tokenEqual.vendor/golang_org/x/net/lex/httplex.lowerASCII.vendor/golang_org/x/net/lex/httplex.tokenEqual )vendor/golang_org/x/net/lex/httplex.isLWSN=N=function(a){var $ptr,a;  �return(a===32)||(a===9);    };isLWS)vendor/golang_org/x/net/lex/httplex.isLWS )vendor/golang_org/x/net/lex/httplex.isCTLO<O=function(a){var $ptr,a;  �return a<32||(a===127);    };isCTL)vendor/golang_org/x/net/lex/httplex.isCTL 8vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldNameP�P=function(a){var $ptr,a,b,c,d,e;    if(a.length===0){  �return false;    }  b=a;c=0;while(true){if(!(c<b.length)){break;}d=$decodeRune(b,c);e=d[0];    if(!F(e)){  <return false;    }    c+=d[1];}  Qreturn true;    };$pkg.ValidHeaderFieldName=P;ValidHeaderFieldName/vendor/golang_org/x/net/lex/httplex.IsTokenRune8vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldName 3vendor/golang_org/x/net/lex/httplex.ValidHostHeaderQ�Q=function(a){var $ptr,a,b,c;  0b=0;while(true){if(!(b<a.length)){break;}    if(!(c=a.charCodeAt(b),((c<0||c>=R.length)?($throwRuntimeError("index out of range"),undefined):R[c]))){  ireturn false;    }  Db=b+(1)>>0;    }  ~return true;    };$pkg.ValidHostHeader=Q;ValidHostHeader3vendor/golang_org/x/net/lex/httplex.ValidHostHeader1vendor/golang_org/x/net/lex/httplex.validHostByte 9vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldValueS��S=function(a){var $ptr,a,b,c;   �b=0;while(true){if(!(b<a.length)){break;}  !c=a.charCodeAt(b);    if(O(c)&&!N(c)){  !=return false;    }  !b=b+(1)>>0;    }  !Rreturn true;    };$pkg.ValidHeaderFieldValue=S;ValidHeaderFieldValue9vendor/golang_org/x/net/lex/httplex.ValidHeaderFieldValue)vendor/golang_org/x/net/lex/httplex.isCTL)vendor/golang_org/x/net/lex/httplex.isLWS +vendor/golang_org/x/net/lex/httplex.isASCIIT��T=function(a){var $ptr,a,b;  !�b=0;while(true){if(!(b<a.length)){break;}    if(a.charCodeAt(b)>=128){  !�return false;    }  !�b=b+(1)>>0;    }  !�return true;    };isASCII+vendor/golang_org/x/net/lex/httplex.isASCII 4vendor/golang_org/x/net/lex/httplex.PunycodeHostPortU��U=function(a){var $ptr,a,b,c,d,e,f,g,h,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(T(a)){  "�$s=-1;return[a,$ifaceNil];    }  "�c=A.SplitHostPort(a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];f=b[2];    if(!($interfaceIsEqual(f,$ifaceNil))){  #_d=a;  #je="";    }  #xh=D.ToASCII(d);$s=2;case 2:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;d=g[0];f=g[1];    if(!($interfaceIsEqual(f,$ifaceNil))){  #�$s=-1;return["",f];    }    if(e===""){  $$s=-1;return[d,$ifaceNil];    }  $%$s=-1;return[A.JoinHostPort(d,e),$ifaceNil];    }return;}if($f===undefined){$f={$blk:U};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.$s=$s;$f.$r=$r;return $f;};$pkg.PunycodeHostPort=U;PunycodeHostPortnet.JoinHostPortnet.SplitHostPort$vendor/golang_org/x/net/idna.ToASCII4vendor/golang_org/x/net/lex/httplex.PunycodeHostPort+vendor/golang_org/x/net/lex/httplex.isASCII �w{"Base":9297,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.lxzseTFa0I/goroot/src/vendor/golang_org/x/net/lex/httplex/httplex.go","Base":1,"Size":9295,"Lines":[0,55,109,159,160,228,260,263,332,392,408,409,418,425,436,452,453,478,480,481,511,524,537,550,563,576,589,602,615,628,641,654,667,680,693,706,719,732,745,758,771,784,797,810,823,836,849,862,875,888,901,914,927,940,953,966,979,992,1005,1018,1031,1044,1057,1070,1083,1096,1109,1122,1135,1148,1161,1174,1187,1200,1213,1226,1239,1252,1265,1278,1291,1304,1317,1330,1343,1356,1369,1382,1395,1408,1421,1434,1447,1460,1473,1486,1499,1512,1514,1515,1547,1560,1609,1611,1612,1643,1667,1669,1670,1736,1794,1863,1891,1933,1948,1952,1955,1969,1971,1972,2042,2072,2129,2130,2197,2219,2251,2308,2359,2420,2436,2469,2481,2484,2524,2543,2546,2556,2558,2559,2622,2691,2751,2774,2835,2851,2905,3000,3003,3032,3034,3035,3091,3122,3149,3174,3177,3187,3189,3190,3267,3305,3330,3345,3348,3372,3398,3445,3461,3465,3513,3529,3533,3536,3549,3551,3552,3612,3679,3725,3782,3783,3839,3906,3963,4019,4045,4072,4100,4102,4103,4178,4244,4272,4275,4294,4351,4379,4409,4482,4539,4582,4600,4615,4618,4641,4664,4680,4684,4687,4700,4702,4703,4764,4802,4840,4844,4895,4932,4936,4959,5016,5020,5081,5145,5162,5193,5221,5237,5241,5244,5257,5259,5260,5296,5327,5416,5439,5440,5529,5618,5707,5730,5731,5820,5909,5998,6021,6022,6049,6076,6129,6156,6183,6210,6237,6264,6291,6318,6345,6407,6434,6461,6474,6501,6514,6541,6568,6570,6571,6652,6718,6721,6779,6831,6896,6970,7038,7041,7107,7110,7161,7208,7256,7315,7373,7376,7394,7445,7496,7561,7599,7628,7683,7686,7755,7823,7890,7961,8026,8093,8159,8217,8274,8277,8343,8389,8433,8464,8476,8505,8521,8525,8528,8541,8543,8544,8574,8605,8634,8650,8654,8657,8670,8672,8673,8727,8776,8826,8843,8859,8862,8863,8904,8921,8977,9032,9052,9063,9075,9078,9110,9127,9181,9192,9209,9212,9229,9248,9251,9293],"Infos":null}]}
 