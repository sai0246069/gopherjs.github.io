g˙Archive˙ 
ImportPath GcData
 Imports˙ Declarations˙ FileSet
 Minified   $˙[]*compiler.PkgImport˙ ˙  !˙˙ Path VarName   ˙[]*compiler.Decl˙ ˙  g˙˙ FullName Vars˙ BodyCode
 InitCode
 
DceFilters˙ DceDeps˙ Blocking   ˙[]string˙   ţ´˙errors˙package errors
func @"".New(@"".text string) (? error)
type @"".errorString struct { @"".s string }
func (? *@"".errorString) @"".Error() (? string)
$$
B˙B=$pkg.errorString=$newType(0,$kindStruct,"errors.errorString","errorString","errors",function(s_){this.$val=this;this.s=s_!==undefined?s_:"";});v($ptrType(B)).methods=[["Error","Error","",$funcType([],[$String],false),-1]];B.init([["s","s","errors",$String,""]]);errorString 
errors.NewA7A=$pkg.New=function(a){  Freturn new B.Ptr(a);    };Newerrors:errorString (*errors.errorString).Error˙B.Ptr.prototype.Error=function(){var a;  Ĺa=this;  çreturn a.s;    };B.prototype.Error=function(){return this.$val.Error();};errorStringerrors:errorString ˙˝{"Base":501,"Files":[{"Name":"/usr/local/go/src/errors/errors.go","Base":1,"Size":499,"Lines":[0,56,110,160,161,222,237,238,294,324,351,353,354,407,433,443,445,446,485,497],"Infos":null}]}
 