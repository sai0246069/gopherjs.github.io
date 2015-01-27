p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 	FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ����crypto/subtlesubtle��package subtle
func @"".ConstantTimeByteEq(@"".x uint8, @"".y uint8) (? int)
func @"".ConstantTimeCompare(@"".x []byte, @"".y []byte) (? int)
func @"".ConstantTimeCopy(@"".v int, @"".x []byte, @"".y []byte) ()
func @"".ConstantTimeEq(@"".x int32, @"".y int32) (? int)
func @"".ConstantTimeLessOrEq(@"".x int, @"".y int) (? int)
func @"".ConstantTimeSelect(@"".v int, @"".x int, @"".y int) (? int)
$$
!crypto/subtle.ConstantTimeCompareA��A=$pkg.ConstantTimeCompare=function(a,b){var c,d;      if(!((a.$length===b.$length))){  0return 0;    }  >  Bc=0;  K  Od=0;while(d<a.$length){  kc=(c|(((((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d])^((d<0||d>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+d]))<<24>>>24)))>>>0;      c  cd=d+(1)>>0;}  �return C(c,0);    };!crypto/subtle.ConstantTimeCompare crypto/subtle.ConstantTimeByteEq!crypto/subtle.ConstantTimeCompare  crypto/subtle.ConstantTimeSelectB`B=$pkg.ConstantTimeSelect=function(a,b,c){  Creturn((~((a-1>>0))>>0)&b)|(((a-1>>0))&c);    }; crypto/subtle.ConstantTimeSelect crypto/subtle.ConstantTimeSelect  crypto/subtle.ConstantTimeByteEqC��C=$pkg.ConstantTimeByteEq=function(a,b){var c;  �c=~(((a^b)<<24>>>24))<<24>>>24;  �c=(c&((c>>>4<<24>>>24)))>>>0;  �c=(c&((c>>>2<<24>>>24)))>>>0;  �c=(c&((c>>>1<<24>>>24)))>>>0;  �return(c>>0);    }; crypto/subtle.ConstantTimeByteEq crypto/subtle.ConstantTimeByteEq crypto/subtle.ConstantTimeEqD��D=$pkg.ConstantTimeEq=function(a,b){var c;  lc=~(((a^b)>>0))>>0;  {c=c&((c>>16>>0));  �c=c&((c>>8>>0));  �c=c&((c>>4>>0));  �c=c&((c>>2>>0));  �c=c&((c>>1>>0));  �return((c&1)>>0);    };crypto/subtle.ConstantTimeEqcrypto/subtle.ConstantTimeEq crypto/subtle.ConstantTimeCopyE�@E=$pkg.ConstantTimeCopy=function(a,b,c){var d,e,f;  �    if(!((b.$length===c.$length))){  �$panic(new $String("subtle: slices have different lengths"));    }  d=((a-1>>0)<<24>>>24);  e=((~((a-1>>0))>>0)<<24>>>24);  0  4f=0;while(f<b.$length){  P(f<0||f>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+f]=(((((f<0||f>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+f])&d)>>>0)|((((f<0||f>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+f])&e)>>>0))>>>0;      H  Hf=f+(1)>>0;}    };crypto/subtle.ConstantTimeCopycrypto/subtle.ConstantTimeCopy "crypto/subtle.ConstantTimeLessOrEqF��F=$pkg.ConstantTimeLessOrEq=function(a,b){var c,d;  !c=(a>>0);  2d=(b>>0);  Creturn(((((((c-d>>0)-1>>0))>>31>>0))&1)>>0);    };"crypto/subtle.ConstantTimeLessOrEq"crypto/subtle.ConstantTimeLessOrEq ��{"Base":1902,"Files":[{"Name":"/usr/local/go/src/crypto/subtle/constant_time.go","Base":1,"Size":1900,"Lines":[0,55,109,159,160,238,292,307,308,363,440,490,534,557,568,571,572,584,585,616,635,638,639,672,674,675,734,791,862,863,922,964,979,992,1005,1018,1019,1034,1036,1037,1092,1130,1145,1159,1172,1185,1198,1211,1212,1231,1233,1234,1312,1389,1415,1459,1482,1531,1534,1535,1557,1582,1613,1646,1649,1651,1652,1713,1781,1823,1840,1857,1898],"Infos":null}]}
 