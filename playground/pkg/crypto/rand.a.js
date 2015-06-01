p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �^U��crypto/randranderrorsgithub.com/gopherjs/gopherjs/jsiomath/big�:9package rand
import errors "errors"
import js "github.com/gopherjs/gopherjs/js"
import io "io"
import big "math/big"
func @"".Int(@"".rand @"io".Reader, @"".max *@"math/big".Int) (@"".n *@"math/big".Int, @"".err error)
func @"".Prime(@"".rand @"io".Reader, @"".bits int) (@"".p *@"math/big".Int, @"".err error)
func @"".Read(@"".b []byte) (@"".n int, @"".err error)
var @"".Reader @"io".Reader
type @"".rngReader struct {  }
func (? *@"".rngReader) @"".Read(@"".b []byte) (@"".n int, @"".err error)
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
AA=$packages["errors"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} B/B=$packages["github.com/gopherjs/gopherjs/js"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["io"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["math/big"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F��F=$pkg.rngReader=$newType(0,$kindStruct,"rand.rngReader","rngReader","crypto/rand",function(){this.$val=this;if(arguments.length===0){return;}});TN.methods=[{prop:"Read",name:"Read",pkg:"",typ:$funcType([L],[$Int,$error],false)}];F.init([]);	rngReadercrypto/rand.Lcrypto/rand.Ncrypto/rand.rngReader LL=$sliceType($Uint8);L MM=$ptrType(D.Int);Mmath/big.Int NN=$ptrType(F);Ncrypto/rand.rngReader $pkg.Reader=$ifaceNil;Readercrypto/rand.Reader HsmallPrimes IsmallPrimesProduct :    H=new L([3,5,7,11,13,17,19,23,29,31,37,41,43,47,53]);smallPrimescrypto/rand.Lcrypto/rand.smallPrimes D    I=new D.Int.ptr().SetUint64(new $Uint64(3793877372,820596253));crypto/rand.smallPrimesProductmath/big.Int crypto/rand.initE:E=function(){var $ptr;   f$pkg.Reader=new F.ptr();    };	    E();crypto/rand.Readercrypto/rand.initcrypto/rand.rngReader (*crypto/rand.rngReader).Read�&F.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;b=0;c=$ifaceNil;   �d=this;   �e=a.$array;   �f=$parseInt(a.$offset)>>0;  @g=$global.crypto;    if(g===undefined){  �g=$global.msCrypto;    }    if(!(g===undefined)){    if(!(g.getRandomValues===undefined)){  �b=a.$length;    if(b>65536){  �b=65536;    }  �g.getRandomValues(e.subarray(f,f+b>>0));    h=b;i=$ifaceNil;b=h;c=i;return[b,c];    }    }  Zj=$global.require;    if(!(j===undefined)){  �k=j($externalize("crypto",$String)).randomBytes;    if(!(k===undefined)){  �e.set(k(a.$length),f);    l=a.$length;m=$ifaceNil;b=l;c=m;return[b,c];    }    }    n=0;o=A.New("crypto/rand not available in this environment");b=n;c=o;return[b,c];    };F.prototype.Read=function(a){return this.$val.Read(a);};	rngReadercrypto/rand.rngReader
errors.New crypto/rand.ReadG�
G=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;    e=C.ReadFull($pkg.Reader,a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d=e;b=d[0];c=d[1];return[b,c];    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:G};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Read=G;Readcrypto/rand.Readcrypto/rand.Readerio.ReadFull crypto/rand.PrimeJ��J=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=M.nil;d=$ifaceNil;    if(b<2){  d=A.New("crypto/rand: prime size must be at least 2-bit");  Zreturn[c,d];    }  ff=((e=b%8,e===e?e:$throwRuntimeError("integer divide by zero"))>>>0);    if(f===0){  �f=8;    }  �h=$makeSlice(L,(g=((b+7>>0))/8,(g===g&&g!==1/0&&g!==-1/0)?g>>0:$throwRuntimeError("integer divide by zero")));  �c=new D.Int.ptr();  �i=new D.Int.ptr();  �case 1:  �k=C.ReadFull(a,h);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d=j[1];    if(!($interfaceIsEqual(d,$ifaceNil))){    l=M.nil;m=d;c=l;d=m;return[c,d];    }  �(0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])&(((((n=f,n<32?(1<<n):0)>>0)-1>>0)<<24>>>24)))>>>0);    if(f>=2){  �(0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])|(((o=((f-2>>>0)),o<32?(3<<o):0)<<24>>>24)))>>>0);    }else{  (0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0]=((0>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+0])|(1))>>>0);    if(h.$length>1){  /(1>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+1]=((1>=h.$length?$throwRuntimeError("index out of range"):h.$array[h.$offset+1])|(128))>>>0);    }    }    p=h.$length-1>>0;  �((p<0||p>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+p]=(((p<0||p>=h.$length)?$throwRuntimeError("index out of range"):h.$array[h.$offset+p])|(1))>>>0);  �c.SetBytes(h);  �i.Mod(c,I);  �q=i.Uint64();  r=new $Uint64(0,0);NextDelta:while(true){if(!((r.$high<0||(r.$high===0&&r.$low<1048576)))){break;}  Rs=new $Uint64(q.$high+r.$high,q.$low+r.$low);  ft=H;u=0;while(true){if(!(u<t.$length)){break;}v=((u<0||u>=t.$length)?$throwRuntimeError("index out of range"):t.$array[t.$offset+u]);    if((w=$div64(s,new $Uint64(0,v),true),(w.$high===0&&w.$low===0))&&(b>6||!((x=new $Uint64(0,v),(s.$high===x.$high&&s.$low===x.$low))))){  Br=(y=new $Uint64(0,2),new $Uint64(r.$high+y.$high,r.$low+y.$low));    continue NextDelta;    }    u++;}    if((r.$high>0||(r.$high===0&&r.$low>0))){  i.SetUint64(r);  "c.Add(c,i);    }  ;break;    }  �z=c.ProbablyPrime(20);$s=6;case 6:if($c){$c=false;z=z.$blk();}if(z&&z.$blk!==undefined){break s;}if(z&&(c.BitLen()===b)){$s=4;continue;}$s=5;continue;    case 4:  return[c,d];    case 5:    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Prime=J;Primecrypto/rand.Lcrypto/rand.Mcrypto/rand.Primecrypto/rand.smallPrimescrypto/rand.smallPrimesProduct
errors.Newio.ReadFullmath/big.Int crypto/rand.IntK�yK=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:c=M.nil;d=$ifaceNil;    if(b.Sign()<=0){  �$panic(new $String("crypto/rand: argument to Int is <= 0"));    }  �f=(e=((b.BitLen()+7>>0))/8,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero"));  Ih=((g=b.BitLen()%8,g===g?g:$throwRuntimeError("integer divide by zero"))>>>0);    if(h===0){  th=8;    }  i=$makeSlice(L,f);  �c=new D.Int.ptr();  �case 1:  �k=C.ReadFull(a,i);$s=3;case 3:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;d=j[1];    if(!($interfaceIsEqual(d,$ifaceNil))){    l=M.nil;m=d;c=l;d=m;return[c,d];    }  b(0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0]=((0>=i.$length?$throwRuntimeError("index out of range"):i.$array[i.$offset+0])&(((((n=h,n<32?(1<<n):0)>>0)-1>>0)<<24>>>24)))>>>0);  �c.SetBytes(i);    if(c.Cmp(b)<0){  �return[c,d];    }    $s=1;continue;case 2:    $s=-1;case-1:}return;}if($f===undefined){$f={$blk:K};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Int=K;Intcrypto/rand.Intcrypto/rand.Lcrypto/rand.Mio.ReadFullmath/big.Int ��{"Base":5570,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/compiler/natives/crypto/rand/rand.go","Base":1,"Size":1175,"Lines":[0,13,14,27,28,37,47,48,83,85,86,100,123,125,126,150,151,207,252,305,306,318,353,382,419,422,451,504,518,536,594,649,721,735,740,816,833,837,840,841,853,920,1015,1072,1094,1098,1101,1102,1173],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/rand.go","Base":1177,"Size":709,"Lines":[0,56,110,160,161,215,249,262,263,275,276,338,373,430,489,510,511,582,635,676,707],"Infos":null},{"Name":"/usr/local/go/src/crypto/rand/util.go","Base":1887,"Size":3682,"Lines":[0,56,110,160,161,174,175,184,194,200,212,214,215,290,367,446,525,549,576,634,636,637,717,795,865,880,950,951,1021,1047,1126,1189,1204,1273,1282,1285,1286,1307,1320,1328,1331,1332,1367,1385,1386,1410,1411,1418,1454,1472,1491,1495,1496,1577,1612,1691,1752,1818,1860,1874,1902,1913,1956,1973,1996,2017,2022,2026,2105,2132,2133,2153,2154,2220,2286,2352,2416,2452,2477,2478,2490,2544,2564,2603,2669,2693,2699,2704,2705,2723,2751,2772,2777,2786,2790,2791,2857,2918,2929,2978,2988,2992,2995,2997,2998,3072,3137,3159,3207,3210,3239,3240,3305,3334,3347,3355,3358,3359,3385,3403,3404,3411,3447,3465,3484,3488,3489,3551,3585,3620,3621,3641,3663,3673,3677,3680],"Infos":null}]}
 