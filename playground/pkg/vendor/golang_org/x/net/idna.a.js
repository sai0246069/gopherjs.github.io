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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �5Y��vendor/golang_org/x/net/idnaidnafmtmathstringsunicode/utf8c
$$ exports $$
pv0idna8vendor/golang_org/x/net/idna	ToASCII s    6 	ToUnicode s    6 CC=$packages["fmt"];a    $r=C.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["math"];a    $r=D.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["strings"];a    $r=A.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["unicode/utf8"];a    $r=B.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} MM=$sliceType($emptyInterface);M NN=$sliceType($Int32);N OO=$sliceType($Uint8);O $vendor/golang_org/x/net/idna.ToASCIIE�JE=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(G(a)){  s$s=-1;return[a,$ifaceNil];    }  �b=A.Split(a,".");  �c=b;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �if(!G(f)){$s=3;continue;}$s=4;continue;    case 3:  �h=I("xn--",f);$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[0];j=g[1];    if(!($interfaceIsEqual(j,$ifaceNil))){  $s=-1;return["",j];    }  .((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=i);    case 4:    d++;$s=1;continue;case 2:  D$s=-1;return[A.Join(b,"."),$ifaceNil];    }return;}if($f===undefined){$f={$blk:E};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ToASCII=E;ToASCIIstrings.Joinstrings.Split$vendor/golang_org/x/net/idna.ToASCII"vendor/golang_org/x/net/idna.ascii#vendor/golang_org/x/net/idna.encode &vendor/golang_org/x/net/idna.ToUnicodeF�tF=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(!A.Contains(a,"xn--")){  }$s=-1;return[a,$ifaceNil];    }  �b=A.Split(a,".");  �c=b;d=0;case 1:if(!(d<c.$length)){$s=2;continue;}e=d;f=((d<0||d>=c.$length)?($throwRuntimeError("index out of range"),undefined):c.$array[c.$offset+d]);  �if(A.HasPrefix(f,"xn--")){$s=3;continue;}$s=4;continue;    case 3:  �h=H($substring(f,4));$s=5;case 5:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;i=g[0];j=g[1];    if(!($interfaceIsEqual(j,$ifaceNil))){  =$s=-1;return["",j];    }  T((e<0||e>=b.$length)?($throwRuntimeError("index out of range"),undefined):b.$array[b.$offset+e]=i);    case 4:    d++;$s=1;continue;case 2:  j$s=-1;return[A.Join(b,"."),$ifaceNil];    }return;}if($f===undefined){$f={$blk:F};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ToUnicode=F;	ToUnicodestrings.Containsstrings.HasPrefixstrings.Joinstrings.Split&vendor/golang_org/x/net/idna.ToUnicode#vendor/golang_org/x/net/idna.decode "vendor/golang_org/x/net/idna.asciiG��G=function(a){var $ptr,a,b;  �b=0;while(true){if(!(b<a.length)){break;}    if(a.charCodeAt(b)>=128){  �return false;    }  �b=b+(1)>>0;    }  return true;    };ascii"vendor/golang_org/x/net/idna.ascii #vendor/golang_org/x/net/idna.decodeH��H=function(a){var $ptr,a,aa,ab,ac,ad,ae,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(a===""){  
$s=-1;return["",$ifaceNil];    }  
2b=1+A.LastIndex(a,"-")>>0;  
^if(b===1){$s=1;continue;}$s=2;continue;    case 1:  
nc=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=3;case 3:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=-1;return["",c];    case 2:    if(b===a.length){  
�$s=-1;return[$substring(a,0,(a.length-1>>0)),$ifaceNil];    }  
�d=$makeSlice(N,0,a.length);    if(!((b===0))){  (e=$substring(a,0,(b-1>>0));f=0;while(true){if(!(f<e.length)){break;}g=$decodeRune(e,f);h=g[0];  Od=$append(d,h);    f+=g[1];}    }  ri=0;j=128;k=72;l=i;m=j;n=k;  �case 4:if(!(b<a.length)){$s=5;continue;}  �o=l;p=1;q=o;r=p;  �s=36;case 6:  �if(b===a.length){$s=8;continue;}$s=9;continue;    case 8:  t=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=10;case 10:if($c){$c=false;t=t.$blk();}if(t&&t.$blk!==undefined){break s;}$s=-1;return["",t];    case 9:  Su=J(a.charCodeAt(b));v=u[0];w=u[1];  }if(!w){$s=11;continue;}$s=12;continue;    case 11:  �x=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=13;case 13:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}$s=-1;return["",x];    case 12:  �b=b+(1)>>0;  �l=l+(($imul(v,r)))>>0;  �if(l<0){$s=14;continue;}$s=15;continue;    case 14:  �y=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=16;case 16:if($c){$c=false;y=y.$blk();}if(y&&y.$blk!==undefined){break s;}$s=-1;return["",y];    case 15:  6z=s-n>>0;    if(z<1){  Yz=1;    }else if(z>26){  ~z=26;    }    if(v<z){  �$s=7;continue;    }  �r=$imul(r,((36-z>>0)));  �if(r>=59652323){$s=17;continue;}$s=18;continue;    case 17:  �aa=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=19;case 19:if($c){$c=false;aa=aa.$blk();}if(aa&&aa.$blk!==undefined){break s;}$s=-1;return["",aa];    case 18:  �s=s+(36)>>0;    $s=6;continue;case 7:  &ab=((d.$length+1>>0)>>0);  Dn=L(l-q>>0,ab,q===0);  im=m+((ac=l/ab,(ac===ac&&ac!==1/0&&ac!==-1/0)?ac>>0:$throwRuntimeError("integer divide by zero")))>>0;  vl=(ad=l%(ab),ad===ad?ad:$throwRuntimeError("integer divide by zero"));  if(m>1114111||d.$length>=1024){$s=20;continue;}$s=21;continue;    case 20:  �ae=C.Errorf("idna: invalid label %q",new M([new $String(a)]));$s=22;case 22:if($c){$c=false;ae=ae.$blk();}if(ae&&ae.$blk!==undefined){break s;}$s=-1;return["",ae];    case 21:  �d=$append(d,0);  $copySlice($subslice(d,(l+1>>0)),$subslice(d,l));  ,((l<0||l>=d.$length)?($throwRuntimeError("index out of range"),undefined):d.$array[d.$offset+l]=m);  <l=l+(1)>>0;    $s=4;continue;case 5:  D$s=-1;return[$runesToString(d),$ifaceNil];    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};decode
fmt.Errorfstrings.LastIndexvendor/golang_org/x/net/idna.Mvendor/golang_org/x/net/idna.N"vendor/golang_org/x/net/idna.adapt#vendor/golang_org/x/net/idna.decode(vendor/golang_org/x/net/idna.decodeDigit #vendor/golang_org/x/net/idna.encodeI�
�I=function(a,b){var $ptr,a,aa,ab,ac,ad,ae,af,ag,ah,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;aa=$f.aa;ab=$f.ab;ac=$f.ac;ad=$f.ad;ae=$f.ae;af=$f.af;ag=$f.ag;ah=$f.ah;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �c=$makeSlice(O,a.length,((a.length+1>>0)+($imul(2,b.length))>>0));  �$copyString(c,a);  �d=0;e=128;f=72;g=d;h=e;i=f;  j=0;k=0;l=j;m=k;  5n=b;o=0;while(true){if(!(o<n.length)){break;}p=$decodeRune(n,o);q=p[0];    if(q<128){  ^l=l+(1)>>0;  ec=$append(c,(q<<24>>>24));    }else{  �m=m+(1)>>0;    }    o+=p[1];}  �r=l;    if(l>0){  �c=$append(c,45);    }  �case 1:if(!(!((m===0)))){$s=2;continue;}  �s=2147483647;  t=b;u=0;while(true){if(!(u<t.length)){break;}v=$decodeRune(t,u);w=v[0];    if(s>w&&w>=h){  @s=w;    }    u+=v[1];}  Qg=g+(($imul(((s-h>>0)),((r+1>>0)))))>>0;  nif(g<0){$s=3;continue;}$s=4;continue;    case 3:  �x=C.Errorf("idna: invalid label %q",new M([new $String(b)]));$s=5;case 5:if($c){$c=false;x=x.$blk();}if(x&&x.$blk!==undefined){break s;}$s=-1;return["",x];    case 4:  �h=s;  �y=b;z=0;case 6:if(!(z<y.length)){$s=7;continue;}aa=$decodeRune(y,z);ab=aa[0];  �if(ab<h){$s=8;continue;}$s=9;continue;    case 8:  �g=g+(1)>>0;  �if(g<0){$s=10;continue;}$s=11;continue;    case 10:  	ac=C.Errorf("idna: invalid label %q",new M([new $String(b)]));$s=12;case 12:if($c){$c=false;ac=ac.$blk();}if(ac&&ac.$blk!==undefined){break s;}$s=-1;return["",ac];    case 11:  Fz+=aa[1];$s=6;continue;    case 9:    if(ab>h){  fz+=aa[1];$s=6;continue;    }  wad=g;  �ae=36;while(true){  �af=ae-i>>0;    if(af<1){  �af=1;    }else if(af>26){  �af=26;    }    if(ad<af){  break;    }  %c=$append(c,K(af+(ag=((ad-af>>0))%((36-af>>0)),ag===ag?ag:$throwRuntimeError("integer divide by zero"))>>0));  `ad=(ah=((ad-af>>0))/((36-af>>0)),(ah===ah&&ah!==1/0&&ah!==-1/0)?ah>>0:$throwRuntimeError("integer divide by zero"));  �ae=ae+(36)>>0;    }  �c=$append(c,K(ad));  �i=L(g,r+1>>0,r===l);  �g=0;  �r=r+(1)>>0;  �m=m-(1)>>0;    z+=aa[1];$s=6;continue;case 7:  �g=g+(1)>>0;   h=h+(1)>>0;    $s=1;continue;case 2:  $s=-1;return[$bytesToString(c),$ifaceNil];    }return;}if($f===undefined){$f={$blk:I};}$f.$ptr=$ptr;$f.a=a;$f.aa=aa;$f.ab=ab;$f.ac=ac;$f.ad=ad;$f.ae=ae;$f.af=af;$f.ag=ag;$f.ah=ah;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};encode
fmt.Errorfvendor/golang_org/x/net/idna.Mvendor/golang_org/x/net/idna.O"vendor/golang_org/x/net/idna.adapt#vendor/golang_org/x/net/idna.encode(vendor/golang_org/x/net/idna.encodeDigit (vendor/golang_org/x/net/idna.decodeDigitJ�_J=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k;b=0;c=false;    if(48<=a&&a<=57){    d=((a-22<<24>>>24)>>0);e=true;b=d;c=e;return[b,c];    }else if(65<=a&&a<=90){    f=((a-65<<24>>>24)>>0);g=true;b=f;c=g;return[b,c];    }else if(97<=a&&a<=122){    h=((a-97<<24>>>24)>>0);i=true;b=h;c=i;return[b,c];    }    j=0;k=false;b=j;c=k;return[b,c];    };decodeDigit(vendor/golang_org/x/net/idna.decodeDigit (vendor/golang_org/x/net/idna.encodeDigitK��K=function(a){var $ptr,a;    if(0<=a&&a<26){  return((a+97>>0)<<24>>>24);    }else if(26<=a&&a<36){  �return((a+22>>0)<<24>>>24);    }  �$panic(new $String("idna: internal error in punycode encoding"));    };encodeDigit(vendor/golang_org/x/net/idna.encodeDigit "vendor/golang_org/x/net/idna.adaptL��L=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i;    if(c){  �a=(d=a/(700),(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero"));    }else{  �a=(e=a/(2),(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"));    }  �a=a+((f=a/b,(f===f&&f!==1/0&&f!==-1/0)?f>>0:$throwRuntimeError("integer divide by zero")))>>0;  �g=0;  �while(true){if(!(a>455)){break;}  a=(h=a/(35),(h===h&&h!==1/0&&h!==-1/0)?h>>0:$throwRuntimeError("integer divide by zero"));  5g=g+(36)>>0;    }  Creturn g+(i=($imul(36,a))/((a+38>>0)),(i===i&&i!==1/0&&i!==-1/0)?i>>0:$throwRuntimeError("integer divide by zero"))>>0;    };adapt"vendor/golang_org/x/net/idna.adapt �z{"Base":6258,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.lxzseTFa0I/goroot/src/vendor/golang_org/x/net/idna/idna.go","Base":1,"Size":1808,"Lines":[0,55,109,159,160,232,304,317,364,365,374,385,401,403,404,482,562,563,617,642,643,720,790,824,865,880,896,899,932,964,985,1023,1042,1061,1066,1083,1087,1090,1129,1131,1132,1213,1285,1321,1364,1402,1418,1421,1454,1486,1529,1573,1592,1611,1616,1633,1637,1640,1679,1681,1682,1710,1741,1770,1786,1790,1793,1806],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.lxzseTFa0I/goroot/src/vendor/golang_org/x/net/idna/punycode.go","Base":1810,"Size":4447,"Lines":[0,55,109,159,160,173,174,236,237,246,253,261,272,288,290,291,345,348,427,477,485,509,534,558,583,607,631,654,656,657,713,759,779,796,799,843,858,917,920,946,985,988,1029,1044,1082,1112,1116,1119,1166,1192,1217,1248,1276,1337,1342,1384,1396,1457,1462,1471,1489,1503,1564,1569,1586,1603,1616,1640,1653,1658,1676,1686,1691,1708,1740,1801,1806,1810,1840,1877,1890,1899,1946,2006,2010,2039,2072,2088,2094,2097,2125,2127,2128,2206,2221,2224,2296,2376,2424,2485,2507,2558,2594,2617,2633,2640,2676,2687,2702,2706,2709,2717,2729,2760,2763,2785,2810,2834,2858,2868,2873,2877,2906,2923,2977,2981,2989,3013,3027,3039,3058,3114,3120,3133,3138,3152,3165,3170,3184,3216,3234,3252,3266,3291,3305,3311,3326,3337,3343,3402,3431,3436,3479,3515,3528,3535,3550,3554,3564,3570,3573,3601,3603,3604,3654,3664,3692,3729,3757,3787,3815,3845,3848,3865,3867,3868,3905,3915,3947,3974,4007,4041,4044,4096,4098,4099,4166,4225,4241,4257,4267,4280,4283,4311,4326,4362,4385,4397,4400,4445],"Infos":null}]}
 