p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �8���unicode/utf8utf8�Bpackage utf8
func @"".DecodeLastRune(@"".p []byte) (@"".r rune, @"".size int)
func @"".DecodeLastRuneInString(@"".s string) (@"".r rune, @"".size int)
func @"".DecodeRune(@"".p []byte) (@"".r rune, @"".size int)
func @"".DecodeRuneInString(@"".s string) (@"".r rune, @"".size int)
func @"".EncodeRune(@"".p []byte, @"".r rune) (? int)
func @"".FullRune(@"".p []byte) (? bool)
func @"".FullRuneInString(@"".s string) (? bool)
const @"".MaxRune = '\U0010ffff'
func @"".RuneCount(@"".p []byte) (? int)
func @"".RuneCountInString(@"".s string) (@"".n int)
const @"".RuneError = '\ufffd'
func @"".RuneLen(@"".r rune) (? int)
const @"".RuneSelf = 0x80
func @"".RuneStart(@"".b byte) (? bool)
const @"".UTFMax = 0x4
func @"".Valid(@"".p []byte) (? bool)
func @"".ValidRune(@"".r rune) (? bool)
func @"".ValidString(@"".s string) (? bool)
$$
unicode/utf8.decodeRuneInternalA��A=function(a){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b=0,ba,bb,bc,bd,be,bf,bg,bh,c=0,d=false,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  �e=a.$length;  �    if(e<1){  �    f=65533;g=0;h=true;b=f;c=g;d=h;return[b,c,d];    }  �i=(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]);  �    if(i<128){  	    j=(i>>0);k=1;l=false;b=j;c=k;d=l;return[b,c,d];    }  J    if(i<192){  Y    m=65533;n=1;o=false;b=m;c=n;d=o;return[b,c,d];    }  �    if(e<2){  �    p=65533;q=1;r=true;b=p;c=q;d=r;return[b,c,d];    }  �s=(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]);  �    if(s<128||192<=s){  �    t=65533;u=1;v=false;b=t;c=u;d=v;return[b,c,d];    }  )    if(i<224){  8b=((((i&31)>>>0)>>0)<<6>>0)|(((s&63)>>>0)>>0);  a    if(b<=127){  w    w=65533;x=1;y=false;b=w;c=x;d=y;return[b,c,d];    }  �    z=b;aa=2;ab=false;b=z;c=aa;d=ab;return[b,c,d];    }  �    if(e<3){  �    ac=65533;ad=1;ae=true;b=ac;c=ad;d=ae;return[b,c,d];    }  �af=(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]);  	    if(af<128||192<=af){  $    ag=65533;ah=1;ai=false;b=ag;c=ah;d=ai;return[b,c,d];    }  a    if(i<240){  pb=(((((i&15)>>>0)>>0)<<12>>0)|((((s&63)>>>0)>>0)<<6>>0))|(((af&63)>>>0)>>0);  �    if(b<=2047){  �    aj=65533;ak=1;al=false;b=aj;c=ak;d=al;return[b,c,d];    }  �    if(55296<=b&&b<=57343){  	    am=65533;an=1;ao=false;b=am;c=an;d=ao;return[b,c,d];    }  	5    ap=b;aq=3;ar=false;b=ap;c=aq;d=ar;return[b,c,d];    }  	n    if(e<4){  	{    as=65533;at=1;au=true;b=as;c=at;d=au;return[b,c,d];    }  	�av=(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]);  	�    if(av<128||192<=av){  	�    aw=65533;ax=1;ay=false;b=aw;c=ax;d=ay;return[b,c,d];    }  	�    if(i<248){  
b=((((((i&7)>>>0)>>0)<<18>>0)|((((s&63)>>>0)>>0)<<12>>0))|((((af&63)>>>0)>>0)<<6>>0))|(((av&63)>>>0)>>0);  
_    if(b<=65535||1114111<b){  
�    az=65533;ba=1;bb=false;b=az;c=ba;d=bb;return[b,c,d];    }  
�    bc=b;bd=4;be=false;b=bc;c=bd;d=be;return[b,c,d];    }  
�    bf=65533;bg=1;bh=false;b=bf;c=bg;d=bh;return[b,c,d];    };decodeRuneInternalunicode/utf8.decodeRuneInternal 'unicode/utf8.decodeRuneInStringInternalB��B=function(a){var a,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,b=0,ba,bb,bc,bd,be,bf,bg,bh,c=0,d=false,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;  1e=a.length;  >    if(e<1){  K    f=65533;g=0;h=true;b=f;c=g;d=h;return[b,c,d];    }  ii=a.charCodeAt(0);  �    if(i<128){  �    j=(i>>0);k=1;l=false;b=j;c=k;d=l;return[b,c,d];    }  �    if(i<192){  �    m=65533;n=1;o=false;b=m;c=n;d=o;return[b,c,d];    }  2    if(e<2){  ?    p=65533;q=1;r=true;b=p;c=q;d=r;return[b,c,d];    }  ]s=a.charCodeAt(1);  i    if(s<128||192<=s){  �    t=65533;u=1;v=false;b=t;c=u;d=v;return[b,c,d];    }  �    if(i<224){  �b=((((i&31)>>>0)>>0)<<6>>0)|(((s&63)>>>0)>>0);  �    if(b<=127){      w=65533;x=1;y=false;b=w;c=x;d=y;return[b,c,d];    }  0    z=b;aa=2;ab=false;b=z;c=aa;d=ab;return[b,c,d];    }  j    if(e<3){  w    ac=65533;ad=1;ae=true;b=ac;c=ad;d=ae;return[b,c,d];    }  �af=a.charCodeAt(2);  �    if(af<128||192<=af){  �    ag=65533;ah=1;ai=false;b=ag;c=ah;d=ai;return[b,c,d];    }  �    if(i<240){  b=(((((i&15)>>>0)>>0)<<12>>0)|((((s&63)>>>0)>>0)<<6>>0))|(((af&63)>>>0)>>0);  F    if(b<=2047){  \    aj=65533;ak=1;al=false;b=aj;c=ak;d=al;return[b,c,d];    }  }    if(55296<=b&&b<=57343){  �    am=65533;an=1;ao=false;b=am;c=an;d=ao;return[b,c,d];    }  �    ap=b;aq=3;ar=false;b=ap;c=aq;d=ar;return[b,c,d];    }      if(e<4){      as=65533;at=1;au=true;b=as;c=at;d=au;return[b,c,d];    }  1av=a.charCodeAt(3);  =    if(av<128||192<=av){  X    aw=65533;ax=1;ay=false;b=aw;c=ax;d=ay;return[b,c,d];    }  �    if(i<248){  �b=((((((i&7)>>>0)>>0)<<18>>0)|((((s&63)>>>0)>>0)<<12>>0))|((((af&63)>>>0)>>0)<<6>>0))|(((av&63)>>>0)>>0);  �    if(b<=65535||1114111<b){      az=65533;ba=1;bb=false;b=az;c=ba;d=bb;return[b,c,d];    }  =    bc=b;bd=4;be=false;b=bc;c=bd;d=be;return[b,c,d];    }  _    bf=65533;bg=1;bh=false;b=bf;c=bg;d=bh;return[b,c,d];    };decodeRuneInStringInternal'unicode/utf8.decodeRuneInStringInternal unicode/utf8.FullRuneCNC=$pkg.FullRune=function(a){var a,b,c;  Tb=A(a);c=b[2];  zreturn!c;    };FullRuneunicode/utf8.FullRuneunicode/utf8.decodeRuneInternal unicode/utf8.FullRuneInStringDVD=$pkg.FullRuneInString=function(a){var a,b,c;  �b=B(a);c=b[2];  !return!c;    };FullRuneInStringunicode/utf8.FullRuneInString'unicode/utf8.decodeRuneInStringInternal unicode/utf8.DecodeRuneE`E=$pkg.DecodeRune=function(a){var a,b=0,c=0,d;  (d=A(a);b=d[0];c=d[1];  Lreturn[b,c];    };
DecodeRuneunicode/utf8.DecodeRuneunicode/utf8.decodeRuneInternal unicode/utf8.DecodeRuneInStringFhF=$pkg.DecodeRuneInString=function(a){var a,b=0,c=0,d;  4d=B(a);b=d[0];c=d[1];  `return[b,c];    };DecodeRuneInStringunicode/utf8.DecodeRuneInString'unicode/utf8.decodeRuneInStringInternal unicode/utf8.DecodeLastRuneG�G=$pkg.DecodeLastRune=function(a){var a,b=0,c=0,d,e,f,g,h,i,j,k,l,m,n,o;  gd=a.$length;  v    if(d===0){  �    e=65533;f=0;b=e;c=f;return[b,c];    }  �g=d-1>>0;  �b=(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g])>>0);  �    if(b<128){  �    h=b;i=1;b=h;c=i;return[b,c];    }  bj=d-4>>0;  w    if(j<0){  �j=0;    }  �  �  �g=g-(1)>>0;    while(true){if(!(g>=j)){break;}  �    if(M(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]))){  �break;    }      �  �g=g-(1)>>0;    }  �    if(g<0){  �g=0;    }  k=E($subslice(a,g,d));b=k[0];c=k[1];  &    if(!(((g+c>>0)===d))){  ?    l=65533;m=1;b=l;c=m;return[b,c];    }  W    n=b;o=c;b=n;c=o;return[b,c];    };DecodeLastRuneunicode/utf8.DecodeLastRuneunicode/utf8.DecodeRuneunicode/utf8.RuneStart #unicode/utf8.DecodeLastRuneInStringH��H=$pkg.DecodeLastRuneInString=function(a){var a,b=0,c=0,d,e,f,g,h,i,j,k,l,m,n,o;  Sd=a.length;  b    if(d===0){  r    e=65533;f=0;b=e;c=f;return[b,c];    }  �g=d-1>>0;  �b=(a.charCodeAt(g)>>0);  �    if(b<128){  �    h=b;i=1;b=h;c=i;return[b,c];    }  Nj=d-4>>0;  c    if(j<0){  rj=0;    }  ~  �  �g=g-(1)>>0;    while(true){if(!(g>=j)){break;}  �    if(M(a.charCodeAt(g))){  �break;    }      �  �g=g-(1)>>0;    }  �    if(g<0){  �g=0;    }  �k=F(a.substring(g,d));b=k[0];c=k[1];      if(!(((g+c>>0)===d))){  3    l=65533;m=1;b=l;c=m;return[b,c];    }  K    n=b;o=c;b=n;c=o;return[b,c];    };DecodeLastRuneInString#unicode/utf8.DecodeLastRuneInStringunicode/utf8.DecodeRuneInStringunicode/utf8.RuneStart unicode/utf8.RuneLenI�<I=$pkg.RuneLen=function(a){var a;    if(a<0){  return-1;      &}else if(a<=127){  <return 1;      F}else if(a<=2047){  \return 2;      f}else if(55296<=a&&a<=57343){  �return-1;      �}else if(a<=65535){  �return 3;      �}else if(a<=1114111){  �return 4;    }  �return-1;    };RuneLenunicode/utf8.RuneLen unicode/utf8.EncodeRuneJ�J=$pkg.EncodeRune=function(a,b){var a,b,c;   �   �c=(b>>>0);  !if(c<=127){  !(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(b<<24>>>24));  !+return 1;      !5}else if(c<=2047){  !K(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(192|((b>>6>>0)<<24>>>24))>>>0);  !d(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(128|(((b<<24>>>24)&63)>>>0))>>>0);  !�return 2;      !�}else if(c>1114111||55296<=c&&c<=57343){  !�b=65533;  !�  !�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(224|((b>>12>>0)<<24>>>24))>>>0);  "(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0);  "2(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(128|(((b<<24>>>24)&63)>>>0))>>>0);  "Nreturn 3;      !�}else if(c<=65535){  !�(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(224|((b>>12>>0)<<24>>>24))>>>0);  "(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0);  "2(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(128|(((b<<24>>>24)&63)>>>0))>>>0);  "Nreturn 3;    }else{  "c(0>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+0]=(240|((b>>18>>0)<<24>>>24))>>>0);  "}(1>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+1]=(128|((((b>>12>>0)<<24>>>24)&63)>>>0))>>>0);  "�(2>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+2]=(128|((((b>>6>>0)<<24>>>24)&63)>>>0))>>>0);  "�(3>=a.$length?$throwRuntimeError("index out of range"):a.$array[a.$offset+3]=(128|(((b<<24>>>24)&63)>>>0))>>>0);  "�return 4;    }    };
EncodeRuneunicode/utf8.EncodeRune unicode/utf8.RuneCountK�wK=$pkg.RuneCount=function(a){var a,b,c,d,e;  #�b=0;  #�  #�c=0;  #�  #�c=0;while(true){if(!(b<a.$length)){break;}  #�    if(((b<0||b>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+b])<128){  #�  #�b=b+(1)>>0;        }else{  #�d=E($subslice(a,b));e=d[1];  $  $b=b+(e)>>0;        }      #�  #�c=c+(1)>>0;    }  $return c;    };	RuneCountunicode/utf8.DecodeRuneunicode/utf8.RuneCount unicode/utf8.RuneCountInStringL��L=$pkg.RuneCountInString=function(a){var a,b=0,c,d,e;  $�c=a;d=0;while(true){if(!(d<c.length)){break;}e=$decodeRune(c,d);  $�  $�b=b+(1)>>0;        d+=e[1];}  $�return b;    };RuneCountInStringunicode/utf8.RuneCountInString unicode/utf8.RuneStartMNM=$pkg.RuneStart=function(a){var a;  %jreturn!((((a&192)>>>0)===128));    };	RuneStartunicode/utf8.RuneStart unicode/utf8.ValidN�oN=$pkg.Valid=function(a){var a,b,c,d;  %�b=0;  %�while(true){if(!(b<a.$length)){break;}  &    if(((b<0||b>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+b])<128){  &  &b=b+(1)>>0;        }else{  &0c=E($subslice(a,b));d=c[1];  &P    if(d===1){  &�return false;    }  &�  &�b=b+(d)>>0;        }    }  &�return true;    };Validunicode/utf8.DecodeRuneunicode/utf8.Valid unicode/utf8.ValidStringO�O=$pkg.ValidString=function(a){var a,b,c,d,e,f,g,h;  '�b=a;c=0;while(true){if(!(c<b.length)){break;}d=$decodeRune(b,c);e=c;f=d[0];  '�    if(f===65533){  (dg=F(a.substring(e));h=g[1];  (�    if(h===1){  (�return false;    }    }    c+=d[1];}  (�return true;    };ValidStringunicode/utf8.DecodeRuneInStringunicode/utf8.ValidString unicode/utf8.ValidRuneP��P=$pkg.ValidRune=function(a){var a;  )m  )wif(a<0){  )�return false;      )�}else if(55296<=a&&a<=57343){  )�return false;      )�}else if(a>1114111){  )�return false;    }  )�return true;    };	ValidRuneunicode/utf8.ValidRune �	,{"Base":10756,"Files":[{"Name":"/usr/local/go/src/unicode/utf8/utf8.go","Base":1,"Size":10754,"Lines":[0,55,109,159,160,238,323,336,337,394,449,524,525,565,573,654,757,820,911,913,914,977,985,1008,1031,1033,1034,1042,1066,1090,1114,1138,1162,1186,1187,1214,1241,1268,1295,1296,1317,1339,1361,1363,1364,1431,1444,1456,1484,1487,1499,1500,1528,1542,1570,1573,1574,1608,1622,1651,1654,1655,1688,1700,1728,1731,1743,1769,1798,1801,1802,1831,1845,1886,1907,1937,1941,1962,1965,1966,2000,2012,2040,2043,2055,2081,2110,2113,2114,2143,2157,2219,2240,2270,2274,2320,2350,2354,2375,2378,2379,2412,2424,2452,2455,2467,2493,2522,2525,2526,2555,2569,2652,2688,2718,2722,2743,2746,2747,2757,2785,2787,2788,2863,2876,2888,2916,2919,2931,2932,2960,2974,3002,3005,3006,3040,3054,3083,3086,3087,3120,3132,3160,3163,3175,3201,3230,3233,3234,3263,3277,3318,3339,3369,3373,3394,3397,3398,3432,3444,3472,3475,3487,3513,3542,3545,3546,3575,3589,3651,3672,3702,3706,3752,3782,3786,3807,3810,3811,3844,3856,3884,3887,3899,3925,3954,3957,3958,3987,4001,4084,4120,4150,4154,4175,4178,4179,4189,4217,4219,4220,4307,4403,4434,4472,4487,4489,4490,4554,4593,4639,4654,4656,4657,4734,4812,4887,4917,4920,4995,5067,5111,5158,5194,5202,5204,5205,5281,5359,5433,5436,5511,5583,5627,5682,5726,5734,5736,5737,5817,5895,5970,6000,6003,6078,6150,6194,6245,6260,6275,6297,6300,6318,6338,6357,6371,6374,6424,6477,6496,6517,6531,6541,6544,6582,6609,6618,6622,6625,6641,6653,6656,6692,6716,6738,6741,6757,6759,6760,6839,6919,6996,6999,7074,7146,7190,7249,7264,7279,7301,7304,7322,7342,7361,7375,7378,7428,7481,7500,7521,7535,7545,7548,7586,7613,7622,7626,7629,7645,7657,7660,7704,7728,7750,7753,7769,7771,7772,7840,7910,7937,7947,7960,7972,7993,8004,8025,8036,8082,8094,8115,8126,8146,8157,8160,8171,8173,8174,8263,8306,8346,8424,8450,8471,8488,8499,8520,8545,8573,8584,8643,8659,8673,8694,8720,8751,8779,8790,8800,8826,8858,8889,8917,8928,8931,8933,8934,9002,9060,9091,9099,9110,9140,9163,9170,9181,9213,9226,9230,9233,9243,9245,9246,9312,9355,9370,9376,9379,9387,9389,9390,9455,9524,9547,9601,9602,9677,9705,9713,9731,9754,9761,9772,9804,9822,9862,9905,9938,9955,9960,9973,9977,9980,9993,9995,9996,10077,10111,10134,10156,10198,10248,10298,10336,10376,10394,10411,10416,10420,10423,10436,10438,10439,10503,10573,10603,10613,10626,10641,10687,10702,10721,10736,10739,10752],"Infos":null}]}
 