p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �b���
crypto/dsadsaerrorsiomath/big�<Cpackage dsa
import errors "errors"
import io "io"
import big "math/big"
var @"".ErrInvalidPublicKey error
func @"".GenerateKey(@"".priv *@"".PrivateKey, @"".rand @"io".Reader) (? error)
func @"".GenerateParameters(@"".params *@"".Parameters, @"".rand @"io".Reader, @"".sizes @"".ParameterSizes) (@"".err error)
const @"".L1024N160 @"".ParameterSizes = 0x0
const @"".L2048N224 @"".ParameterSizes = 0x1
const @"".L2048N256 @"".ParameterSizes = 0x2
const @"".L3072N256 @"".ParameterSizes = 0x3
type @"".ParameterSizes int
type @"".Parameters struct { @"".P *@"math/big".Int; @"".Q *@"math/big".Int; @"".G *@"math/big".Int }
type @"".PrivateKey struct { ? @"".PublicKey; @"".X *@"math/big".Int }
type @"".PublicKey struct { ? @"".Parameters; @"".Y *@"math/big".Int }
func @"".Sign(@"".rand @"io".Reader, @"".priv *@"".PrivateKey, @"".hash []byte) (@"".r *@"math/big".Int, @"".s *@"math/big".Int, @"".err error)
func @"".Verify(@"".pub *@"".PublicKey, @"".hash []byte, @"".r *@"math/big".Int, @"".s *@"math/big".Int) (? bool)
type @"io".Reader interface { @"io".Read(@"".p []byte) (@"".n int, @"".err error) }
type @"math/big".Int struct { @"math/big".neg bool; @"math/big".abs @"math/big".nat }
func (? *@"math/big".Int) @"math/big".Abs(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Add(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".And(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".AndNot(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Binomial(@"".n int64, @"".k int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Bit(@"".i int) (? uint)
func (? *@"math/big".Int) @"math/big".BitLen() (? int)
func (? *@"math/big".Int) @"math/big".Bits() (? []@"math/big".Word)
func (? *@"math/big".Int) @"math/big".Bytes() (? []byte)
func (? *@"math/big".Int) @"math/big".Cmp(@"".y *@"math/big".Int) (@"".r int)
func (? *@"math/big".Int) @"math/big".Div(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".DivMod(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Exp(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".m *@"math/big".Int) (? *@"math/big".Int)
import fmt "fmt"
func (? *@"math/big".Int) @"math/big".Format(@"".s @"fmt".State, @"".ch rune) ()
func (? *@"math/big".Int) @"math/big".GCD(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".GobDecode(@"".buf []byte) (? error)
func (? *@"math/big".Int) @"math/big".GobEncode() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".Int64() (? int64)
func (? *@"math/big".Int) @"math/big".Lsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MarshalJSON() (? []byte, ? error)
func (? *@"math/big".Int) @"math/big".MarshalText() (@"".text []byte, @"".err error)
func (? *@"math/big".Int) @"math/big".Mod(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ModInverse(@"".g *@"math/big".Int, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Mul(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".MulRange(@"".a int64, @"".b int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Neg(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Not(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Or(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".ProbablyPrime(@"".n int) (? bool)
func (? *@"math/big".Int) @"math/big".Quo(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".QuoRem(@"".x *@"math/big".Int, @"".y *@"math/big".Int, @"".r *@"math/big".Int) (? *@"math/big".Int, ? *@"math/big".Int)
import rand "math/rand"
func (? *@"math/big".Int) @"math/big".Rand(@"".rnd *@"math/rand".Rand, @"".n *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rem(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Rsh(@"".x *@"math/big".Int, @"".n uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Scan(@"".s @"fmt".ScanState, @"".ch rune) (? error)
func (? *@"math/big".Int) @"math/big".Set(@"".x *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBit(@"".x *@"math/big".Int, @"".i int, @"".b uint) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBits(@"".abs []@"math/big".Word) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetBytes(@"".buf []byte) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetInt64(@"".x int64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".SetString(@"".s string, @"".base int) (? *@"math/big".Int, ? bool)
func (? *@"math/big".Int) @"math/big".SetUint64(@"".x uint64) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Sign() (? int)
func (? *@"math/big".Int) @"math/big".String() (? string)
func (? *@"math/big".Int) @"math/big".Sub(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".Uint64() (? uint64)
func (? *@"math/big".Int) @"math/big".UnmarshalJSON(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".UnmarshalText(@"".text []byte) (? error)
func (? *@"math/big".Int) @"math/big".Xor(@"".x *@"math/big".Int, @"".y *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".binaryGCD(@"".a *@"math/big".Int, @"".b *@"math/big".Int) (? *@"math/big".Int)
func (? *@"math/big".Int) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? *@"math/big".Int, ? int, ? error)
type @"math/big".nat []@"math/big".Word
func (? @"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? @"math/big".nat) @"math/big".bitLen() (? int)
func (? @"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? @"math/big".nat) @"math/big".clear() ()
func (? @"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? @"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? @"math/big".nat) @"math/big".decimalString() (? string)
func (? @"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? @"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? @"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? @"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? @"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? @"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? @"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? @"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".add(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".and(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".andNot(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".bit(@"".i uint) (? uint)
func (? *@"math/big".nat) @"math/big".bitLen() (? int)
func (? *@"math/big".nat) @"math/big".bytes(@"".buf []byte) (@"".i int)
func (? *@"math/big".nat) @"math/big".clear() ()
func (? *@"math/big".nat) @"math/big".cmp(@"".y @"math/big".nat) (@"".r int)
func (? *@"math/big".nat) @"math/big".convertWords(@"".s []byte, @"".charset string, @"".b @"math/big".Word, @"".ndigits int, @"".bb @"math/big".Word, @"".table []@"math/big".divisor) ()
func (? *@"math/big".nat) @"math/big".decimalString() (? string)
func (? *@"math/big".nat) @"math/big".div(@"".z2 @"math/big".nat, @"".u @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divLarge(@"".u @"math/big".nat, @"".uIn @"math/big".nat, @"".v @"math/big".nat) (@"".q @"math/big".nat, @"".r @"math/big".nat)
func (? *@"math/big".nat) @"math/big".divW(@"".x @"math/big".nat, @"".y @"math/big".Word) (@"".q @"math/big".nat, @"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".expNN(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expNNWindowed(@"".x @"math/big".nat, @"".y @"math/big".nat, @"".m @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".expWW(@"".x @"math/big".Word, @"".y @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".make(@"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".modW(@"".d @"math/big".Word) (@"".r @"math/big".Word)
func (? *@"math/big".nat) @"math/big".mul(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulAddWW(@"".x @"math/big".nat, @"".y @"math/big".Word, @"".r @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".mulRange(@"".a uint64, @"".b uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".norm() (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".or(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".probablyPrime(@"".reps int) (? bool)
func (? *@"math/big".nat) @"math/big".random(@"".rand *@"math/rand".Rand, @"".limit @"math/big".nat, @"".n int) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".scan(@"".r @"io".RuneScanner, @"".base int) (? @"math/big".nat, ? int, ? error)
func (? *@"math/big".nat) @"math/big".set(@"".x @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBit(@"".x @"math/big".nat, @"".i uint, @"".b uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setBytes(@"".buf []byte) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setUint64(@"".x uint64) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".setWord(@"".x @"math/big".Word) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shl(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".shr(@"".x @"math/big".nat, @"".s uint) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".string(@"".charset string) (? string)
func (? *@"math/big".nat) @"math/big".sub(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
func (? *@"math/big".nat) @"math/big".trailingZeroBits() (? uint)
func (? *@"math/big".nat) @"math/big".xor(@"".x @"math/big".nat, @"".y @"math/big".nat) (? @"math/big".nat)
type @"math/big".Word uintptr
type @"fmt".State interface { @"fmt".Flag(@"".c int) (? bool); @"fmt".Precision() (@"".prec int, @"".ok bool); @"fmt".Width() (@"".wid int, @"".ok bool); @"fmt".Write(@"".b []byte) (@"".ret int, @"".err error) }
type @"math/rand".Rand struct { @"math/rand".src @"math/rand".Source }
func (? *@"math/rand".Rand) @"math/rand".ExpFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Float32() (? float32)
func (? *@"math/rand".Rand) @"math/rand".Float64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Int() (? int)
func (? *@"math/rand".Rand) @"math/rand".Int31() (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int31n(@"".n int32) (? int32)
func (? *@"math/rand".Rand) @"math/rand".Int63() (? int64)
func (? *@"math/rand".Rand) @"math/rand".Int63n(@"".n int64) (? int64)
func (? *@"math/rand".Rand) @"math/rand".Intn(@"".n int) (? int)
func (? *@"math/rand".Rand) @"math/rand".NormFloat64() (? float64)
func (? *@"math/rand".Rand) @"math/rand".Perm(@"".n int) (? []int)
func (? *@"math/rand".Rand) @"math/rand".Seed(@"".seed int64) ()
func (? *@"math/rand".Rand) @"math/rand".Uint32() (? uint32)
type @"fmt".ScanState interface { @"fmt".Read(@"".buf []byte) (@"".n int, @"".err error); @"fmt".ReadRune() (@"".r rune, @"".size int, @"".err error); @"fmt".SkipSpace() (); @"fmt".Token(@"".skipSpace bool, @"".f func (? rune) (? bool)) (@"".token []byte, @"".err error); @"fmt".UnreadRune() (? error); @"fmt".Width() (@"".wid int, @"".ok bool) }
type @"io".RuneScanner interface { @"io".ReadRune() (@"".r rune, @"".size int, @"".err error); @"io".UnreadRune() (? error) }
type @"math/big".divisor struct { @"math/big".bbb @"math/big".nat; @"math/big".nbits int; @"math/big".ndigits int }
type @"math/rand".Source interface { @"math/rand".Int63() (? int64); @"math/rand".Seed(@"".seed int64) () }
$$
AA=$packages["errors"];<    $r=A.$init();$s=1;case 1:if($r&&$r.$blocking){$r=$r();} BB=$packages["io"];<    $r=B.$init();$s=2;case 2:if($r&&$r.$blocking){$r=$r();} CC=$packages["math/big"];<    $r=C.$init();$s=3;case 3:if($r&&$r.$blocking){$r=$r();} D��D=$pkg.Parameters=$newType(0,$kindStruct,"dsa.Parameters","Parameters","crypto/dsa",function(P_,Q_,G_){this.$val=this;this.P=P_!==undefined?P_:N.nil;this.Q=Q_!==undefined?Q_:N.nil;this.G=G_!==undefined?G_:N.nil;});��D.init([{prop:"P",name:"P",pkg:"",typ:N,tag:""},{prop:"Q",name:"Q",pkg:"",typ:N,tag:""},{prop:"G",name:"G",pkg:"",typ:N,tag:""}]);
Parameterscrypto/dsa.Ncrypto/dsa.Parameters E��E=$pkg.PublicKey=$newType(0,$kindStruct,"dsa.PublicKey","PublicKey","crypto/dsa",function(Parameters_,Y_){this.$val=this;this.Parameters=Parameters_!==undefined?Parameters_:new D.ptr();this.Y=Y_!==undefined?Y_:N.nil;});bE.init([{prop:"Parameters",name:"",pkg:"",typ:D,tag:""},{prop:"Y",name:"Y",pkg:"",typ:N,tag:""}]);	PublicKeycrypto/dsa.Ncrypto/dsa.Parameterscrypto/dsa.PublicKey F��F=$pkg.PrivateKey=$newType(0,$kindStruct,"dsa.PrivateKey","PrivateKey","crypto/dsa",function(PublicKey_,X_){this.$val=this;this.PublicKey=PublicKey_!==undefined?PublicKey_:new E.ptr();this.X=X_!==undefined?X_:N.nil;});aF.init([{prop:"PublicKey",name:"",pkg:"",typ:E,tag:""},{prop:"X",name:"X",pkg:"",typ:N,tag:""}]);
PrivateKeycrypto/dsa.Ncrypto/dsa.PrivateKeycrypto/dsa.PublicKey GcG=$pkg.ParameterSizes=$newType(4,$kindInt,"dsa.ParameterSizes","ParameterSizes","crypto/dsa",null);ParameterSizescrypto/dsa.ParameterSizes MM=$sliceType($Uint8);M NN=$ptrType(C.Int);Nmath/big.Int ErrInvalidPublicKey F    $pkg.ErrInvalidPublicKey=A.New("crypto/dsa: invalid public key");crypto/dsa.ErrInvalidPublicKey
errors.New crypto/dsa.GenerateParametersH�xH=$pkg.GenerateParameters=function(a,b,c){var $r,$s=0,$this=this,aa,ab,ac,ad,d=$ifaceNil,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;var $f=function(){s:while(true){switch($s){case 0:  }  �e=0;f=0;g=e;h=f;  �i=c;  �if(i===0){  �g=1024;  �h=160;      �}else if(i===1){  �g=2048;  �h=224;      �}else if(i===2){  �g=2048;  h=256;      }else if(i===3){  g=3072;  *h=256;    }else{  >    d=A.New("crypto/dsa: invalid ParameterSizes");return d;    }  {k=$makeSlice(M,(j=h/8,(j===j&&j!==1/0&&j!==-1/0)?j>>0:$throwRuntimeError("integer divide by zero")));  �m=$makeSlice(M,(l=g/8,(l===l&&l!==1/0&&l!==-1/0)?l>>0:$throwRuntimeError("integer divide by zero")));  �n=new C.Int.ptr();  �o=new C.Int.ptr();  �p=new C.Int.ptr();  �q=new C.Int.ptr();  	q.SetInt64(new $Int64(0,1));  	  	(case 1:  	0s=B.ReadFull(b,k);$s=3;case 3:if(s&&s.$blocking){s=s();}r=s;d=r[1];  	U    if(!($interfaceIsEqual(d,$ifaceNil))){  	hreturn d;    }  	v    t=k.$length-1>>0;  	v((t<0||t>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+t]=(((t<0||t>=k.$length)?$throwRuntimeError("index out of range"):k.$array[k.$offset+t])|(1))>>>0);      	�  	�(0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0]=((0>=k.$length?$throwRuntimeError("index out of range"):k.$array[k.$offset+0])|(128))>>>0);      	�n.SetBytes(k);  	�u=n.ProbablyPrime(64);$s=6;case 6:if(u&&u.$blocking){u=u();}if(!u){$s=4;continue;}$s=5;continue;    case 4:  	�$s=1;continue;    case 5:  	�  	�v=0;case 7:if(!(v<(4*g>>0))){$s=8;continue;}  
x=B.ReadFull(b,m);$s=9;case 9:if(x&&x.$blocking){x=x();}w=x;d=w[1];  
6    if(!($interfaceIsEqual(d,$ifaceNil))){  
Jreturn d;    }  
Z    y=m.$length-1>>0;  
Z((y<0||y>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+y]=(((y<0||y>=m.$length)?$throwRuntimeError("index out of range"):m.$array[m.$offset+y])|(1))>>>0);      
x  
x(0>=m.$length?$throwRuntimeError("index out of range"):m.$array[m.$offset+0]=((0>=m.$length?$throwRuntimeError("index out of range"):m.$array[m.$offset+0])|(128))>>>0);      
�o.SetBytes(m);  
�p.Mod(o,n);  
�p.Sub(p,q);  
�o.Sub(o,p);  
�if(o.BitLen()<g){$s=10;continue;}$s=11;continue;    case 10:  
�  
  
v=v+(1)>>0;    $s=7;continue;    case 11:  z=o.ProbablyPrime(64);$s=14;case 14:if(z&&z.$blocking){z=z();}if(!z){$s=12;continue;}$s=13;continue;    case 12:  +  
  
v=v+(1)>>0;    $s=7;continue;    case 13:  =a.P=o;  Ma.Q=n;  ]$s=2;continue s;    $s=7;continue;case 8:    $s=1;continue;case 2:  {aa=new C.Int.ptr();  �aa.SetInt64(new $Int64(0,2));  �ab=new C.Int.ptr();  �ac=new C.Int.ptr().Sub(o,q);  �ad=new C.Int.ptr().Div(ac,n);  �while(true){  �ab.Exp(aa,ad,o);      if(ab.Cmp(q)===0){  #aa.Add(aa,q);  4continue;    }  Da.G=ab;  Sreturn d;    }    case-1:}return;}};$f.$blocking=true;return $f;};GenerateParameterscrypto/dsa.GenerateParameterscrypto/dsa.M
errors.Newio.ReadFullmath/big.Int crypto/dsa.GenerateKeyI��I=$pkg.GenerateKey=function(a,b){var $r,$s=0,$this=this,c,d,e,f,g,h;var $f=function(){s:while(true){switch($s){case 0:  $    if(a.PublicKey.Parameters.P===N.nil||a.PublicKey.Parameters.Q===N.nil||a.PublicKey.Parameters.G===N.nil){  [return A.New("crypto/dsa: parameters not set up before generating key");    }  �c=new C.Int.ptr();  �e=$makeSlice(M,(d=a.PublicKey.Parameters.Q.BitLen()/8,(d===d&&d!==1/0&&d!==-1/0)?d>>0:$throwRuntimeError("integer divide by zero")));  �case 1:  �g=B.ReadFull(b,e);$s=3;case 3:if(g&&g.$blocking){g=g();}f=g;h=f[1];      if(!($interfaceIsEqual(h,$ifaceNil))){  -return h;    }  >c.SetBytes(e);  S    if(!((c.Sign()===0))&&c.Cmp(a.PublicKey.Parameters.Q)<0){  ~$s=2;continue;    }    $s=1;continue;case 2:  �a.X=c;  �a.PublicKey.Y=new C.Int.ptr();  �a.PublicKey.Y.Exp(a.PublicKey.Parameters.G,c,a.PublicKey.Parameters.P);  �return $ifaceNil;    case-1:}return;}};$f.$blocking=true;return $f;};GenerateKeycrypto/dsa.GenerateKeycrypto/dsa.Mcrypto/dsa.N
errors.Newio.ReadFullmath/big.Int crypto/dsa.fermatInverseJ��J=function(a,b){var a,b,c,d;  c=C.NewInt(new $Int64(0,2));  )d=new C.Int.ptr().Sub(b,c);  Nreturn new C.Int.ptr().Exp(a,d,b);    };fermatInversecrypto/dsa.fermatInversemath/big.Intmath/big.NewInt crypto/dsa.SignK��K=$pkg.Sign=function(a,b,c){var $r,$s=0,$this=this,d=N.nil,e=N.nil,f=$ifaceNil,g,h,i,j,k,l,m;var $f=function(){s:while(true){switch($s){case 0:  �g=b.PublicKey.Parameters.Q.BitLen();  �    if(!(((g&7)===0))){  �f=$pkg.ErrInvalidPublicKey;  �return[d,e,f];    }  �  �g=(g>>$min((3),31))>>0;      �case 1:  �h=new C.Int.ptr();  	i=$makeSlice(M,g);  "case 3:  +k=B.ReadFull(a,i);$s=5;case 5:if(k&&k.$blocking){k=k();}j=k;f=j[1];  N    if(!($interfaceIsEqual(f,$ifaceNil))){  breturn[d,e,f];    }  qh.SetBytes(i);  �    if(h.Sign()>0&&h.Cmp(b.PublicKey.Parameters.Q)<0){  �$s=4;continue;    }    $s=3;continue;case 4:  �l=J(h,b.PublicKey.Parameters.Q);  �d=new C.Int.ptr().Exp(b.PublicKey.Parameters.G,h,b.PublicKey.Parameters.P);  d.Mod(d,b.PublicKey.Parameters.Q);  #    if(d.Sign()===0){  9$s=1;continue;    }  Im=h.SetBytes(c);  be=new C.Int.ptr().Mul(b.X,d);  �e.Add(e,m);  �e.Mod(e,b.PublicKey.Parameters.Q);  �e.Mul(e,l);  �e.Mod(e,b.PublicKey.Parameters.Q);  �    if(!((e.Sign()===0))){  �$s=2;continue;    }    $s=1;continue;case 2:  �return[d,e,f];    case-1:}return;}};$f.$blocking=true;return $f;};Signcrypto/dsa.ErrInvalidPublicKeycrypto/dsa.Mcrypto/dsa.Ncrypto/dsa.Signcrypto/dsa.fermatInverseio.ReadFullmath/big.Int crypto/dsa.VerifyL��L=$pkg.Verify=function(a,b,c,d){var a,b,c,d,e,f,g,h,i,j;  �    if(c.Sign()<1||c.Cmp(a.Parameters.Q)>=0){  �return false;    }  �    if(d.Sign()<1||d.Cmp(a.Parameters.Q)>=0){  �return false;    }  �e=new C.Int.ptr().ModInverse(d,a.Parameters.Q);  "f=a.Parameters.Q.BitLen();  7    if(!(((f&7)===0))){  Greturn false;    }  Xg=new C.Int.ptr().SetBytes(b);  {h=new C.Int.ptr().Mul(g,e);  �h.Mod(h,a.Parameters.Q);  �i=e.Mul(c,e);  �i.Mod(i,a.Parameters.Q);  �j=h.Exp(a.Parameters.G,h,a.Parameters.P);  �i.Exp(a.Y,i,a.Parameters.P);  j.Mul(j,i);  j.Mod(j,a.Parameters.P);  *j.Mod(j,a.Parameters.Q);  <return j.Cmp(c)===0;    };Verifycrypto/dsa.Verifymath/big.Int ��{"Base":6228,"Files":[{"Name":"/usr/local/go/src/crypto/dsa/dsa.go","Base":1,"Size":6226,"Lines":[0,55,109,159,160,245,257,258,267,277,283,295,297,298,377,453,478,496,498,499,541,565,577,589,591,592,636,661,672,684,686,687,764,840,919,950,1021,1022,1101,1161,1185,1186,1194,1227,1238,1249,1260,1262,1263,1343,1412,1434,1435,1513,1573,1669,1740,1809,1874,1914,1915,1929,1945,1962,1973,1983,2000,2011,2021,2038,2049,2059,2076,2087,2097,2107,2165,2168,2169,2198,2227,2228,2247,2266,2287,2308,2325,2326,2342,2349,2386,2404,2414,2418,2419,2448,2468,2489,2490,2526,2538,2542,2543,2572,2610,2629,2640,2645,2646,2676,2697,2698,2720,2737,2758,2775,2798,2811,2816,2817,2854,2867,2872,2873,2889,2905,2929,2933,2936,2937,2956,2971,2990,2991,3024,3055,3056,3063,3080,3103,3120,3132,3136,3137,3152,3161,3164,3166,3167,3241,3303,3362,3416,3495,3498,3499,3518,3561,3562,3569,3607,3625,3639,3643,3664,3706,3715,3719,3722,3723,3735,3758,3789,3801,3803,3804,3881,3959,4030,4068,4113,4135,4172,4212,4214,4215,4295,4373,4452,4461,4464,4544,4619,4641,4727,4755,4756,4778,4793,4821,4830,4833,4842,4843,4850,4870,4895,4903,4938,4957,4968,4973,4992,5034,5044,5049,5053,5054,5089,5090,5132,5151,5152,5173,5185,5189,5190,5214,5215,5249,5263,5282,5299,5318,5319,5340,5349,5353,5356,5357,5365,5367,5368,5447,5490,5493,5573,5648,5670,5733,5761,5762,5802,5817,5820,5860,5875,5878,5879,5919,5920,5941,5956,5971,5974,6008,6009,6039,6058,6077,6096,6127,6153,6167,6184,6201,6202,6224],"Infos":null}]}
 