g��Archive�� 
ImportPath GcData
 Imports�� Declarations�� FileSet
 Minified   $��[]*compiler.PkgImport�� ��  !���� Path VarName   ��[]*compiler.Decl�� ��  g���� FullName Vars�� BodyCode
 InitCode
 
DceFilters�� DceDeps�� Blocking   ��[]string��   �"P��github.com/gopherjs/gopherjs/js�lpackage js
var @"".Arguments []@"".Object
func @"".Debugger() ()
type @"".Error struct { ? @"".Object }
func (? *@"".Error) @"".Error() (? string)
func (? *@"".Error) @"".Stack() (? string)
var @"".Global @"".Object
func @"".InternalObject(@"".i interface {  }) (? @"".Object)
func @"".Keys(@"".o @"".Object) (? []string)
type @"".M map[string]interface {  }
var @"".Module @"".Object
type @"".Object interface { @"".Bool() (? bool); @"".Call(@"".name string, @"".args ...interface {  }) (? @"".Object); @"".Delete(@"".key string) (); @"".Float() (? float64); @"".Get(@"".key string) (? @"".Object); @"".Index(@"".i int) (? @"".Object); @"".Int() (? int); @"".Int64() (? int64); @"".Interface() (? interface {  }); @"".Invoke(@"".args ...interface {  }) (? @"".Object); @"".IsNull() (? bool); @"".IsUndefined() (? bool); @"".Length() (? int); @"".New(@"".args ...interface {  }) (? @"".Object); @"".Set(@"".key string, @"".value interface {  }) (); @"".SetIndex(@"".i int, @"".value interface {  }) (); @"".Str() (? string); @"".Uint64() (? uint64); @"".Unsafe() (? uintptr) }
type @"".S []interface {  }
var @"".This @"".Object
$$
Objectu	Object = $pkg.Object = $newType(8, $kindInterface, "js.Object", "Object", "github.com/gopherjs/gopherjs/js", null);
��		Object.init([["Bool", "Bool", "", $funcType([], [$Bool], false)], ["Call", "Call", "", $funcType([$String, ($sliceType($emptyInterface))], [Object], true)], ["Delete", "Delete", "", $funcType([$String], [], false)], ["Float", "Float", "", $funcType([], [$Float64], false)], ["Get", "Get", "", $funcType([$String], [Object], false)], ["Index", "Index", "", $funcType([$Int], [Object], false)], ["Int", "Int", "", $funcType([], [$Int], false)], ["Int64", "Int64", "", $funcType([], [$Int64], false)], ["Interface", "Interface", "", $funcType([], [$emptyInterface], false)], ["Invoke", "Invoke", "", $funcType([($sliceType($emptyInterface))], [Object], true)], ["IsNull", "IsNull", "", $funcType([], [$Bool], false)], ["IsUndefined", "IsUndefined", "", $funcType([], [$Bool], false)], ["Length", "Length", "", $funcType([], [$Int], false)], ["New", "New", "", $funcType([($sliceType($emptyInterface))], [Object], true)], ["Set", "Set", "", $funcType([$String, $emptyInterface], [], false)], ["SetIndex", "SetIndex", "", $funcType([$Int, $emptyInterface], [], false)], ["Str", "Str", "", $funcType([], [$String], false)], ["Uint64", "Uint64", "", $funcType([], [$Uint64], false)], ["Unsafe", "Unsafe", "", $funcType([], [$Uintptr], false)]]);
Object Error��	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", "Error", "github.com/gopherjs/gopherjs/js", function(Object_) {
		this.$val = this;
		this.Object = Object_ !== undefined ? Object_ : $ifaceNil;
	});
�
�		Error.methods = [["Bool", "Bool", "", $funcType([], [$Bool], false), 0], ["Call", "Call", "", $funcType([$String, ($sliceType($emptyInterface))], [Object], true), 0], ["Delete", "Delete", "", $funcType([$String], [], false), 0], ["Float", "Float", "", $funcType([], [$Float64], false), 0], ["Get", "Get", "", $funcType([$String], [Object], false), 0], ["Index", "Index", "", $funcType([$Int], [Object], false), 0], ["Int", "Int", "", $funcType([], [$Int], false), 0], ["Int64", "Int64", "", $funcType([], [$Int64], false), 0], ["Interface", "Interface", "", $funcType([], [$emptyInterface], false), 0], ["Invoke", "Invoke", "", $funcType([($sliceType($emptyInterface))], [Object], true), 0], ["IsNull", "IsNull", "", $funcType([], [$Bool], false), 0], ["IsUndefined", "IsUndefined", "", $funcType([], [$Bool], false), 0], ["Length", "Length", "", $funcType([], [$Int], false), 0], ["New", "New", "", $funcType([($sliceType($emptyInterface))], [Object], true), 0], ["Set", "Set", "", $funcType([$String, $emptyInterface], [], false), 0], ["SetIndex", "SetIndex", "", $funcType([$Int, $emptyInterface], [], false), 0], ["Str", "Str", "", $funcType([], [$String], false), 0], ["Uint64", "Uint64", "", $funcType([], [$Uint64], false), 0], ["Unsafe", "Unsafe", "", $funcType([], [$Uintptr], false), 0]];
		($ptrType(Error)).methods = [["Bool", "Bool", "", $funcType([], [$Bool], false), 0], ["Call", "Call", "", $funcType([$String, ($sliceType($emptyInterface))], [Object], true), 0], ["Delete", "Delete", "", $funcType([$String], [], false), 0], ["Error", "Error", "", $funcType([], [$String], false), -1], ["Float", "Float", "", $funcType([], [$Float64], false), 0], ["Get", "Get", "", $funcType([$String], [Object], false), 0], ["Index", "Index", "", $funcType([$Int], [Object], false), 0], ["Int", "Int", "", $funcType([], [$Int], false), 0], ["Int64", "Int64", "", $funcType([], [$Int64], false), 0], ["Interface", "Interface", "", $funcType([], [$emptyInterface], false), 0], ["Invoke", "Invoke", "", $funcType([($sliceType($emptyInterface))], [Object], true), 0], ["IsNull", "IsNull", "", $funcType([], [$Bool], false), 0], ["IsUndefined", "IsUndefined", "", $funcType([], [$Bool], false), 0], ["Length", "Length", "", $funcType([], [$Int], false), 0], ["New", "New", "", $funcType([($sliceType($emptyInterface))], [Object], true), 0], ["Set", "Set", "", $funcType([$String, $emptyInterface], [], false), 0], ["SetIndex", "SetIndex", "", $funcType([$Int, $emptyInterface], [], false), 0], ["Stack", "Stack", "", $funcType([], [$String], false), -1], ["Str", "Str", "", $funcType([], [$String], false), 0], ["Uint64", "Uint64", "", $funcType([], [$Uint64], false), 0], ["Unsafe", "Unsafe", "", $funcType([], [$Uintptr], false), 0]];
		Error.init([["Object", "", "", Object, ""]]);
Error&github.com/gopherjs/gopherjs/js:Object M[	M = $pkg.M = $newType(4, $kindMap, "js.M", "M", "github.com/gopherjs/gopherjs/js", null);
$		M.init($String, $emptyInterface);
M S^	S = $pkg.S = $newType(12, $kindSlice, "js.S", "S", "github.com/gopherjs/gopherjs/js", null);
		S.init($emptyInterface);
S 		$pkg.Global = $ifaceNil;
Global&github.com/gopherjs/gopherjs/js:Global 		$pkg.This = $ifaceNil;
This$github.com/gopherjs/gopherjs/js:This -		$pkg.Arguments = ($sliceType(Object)).nil;
	Arguments)github.com/gopherjs/gopherjs/js:Arguments&github.com/gopherjs/gopherjs/js:Object 		$pkg.Module = $ifaceNil;
Module&github.com/gopherjs/gopherjs/js:Module .(*github.com/gopherjs/gopherjs/js.Error).Error��	Error.Ptr.prototype.Error = function() {
		var err;
  e		err = this;
  �		return "JavaScript error: " + $internalize(err.Object.message, $String);
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Error%github.com/gopherjs/gopherjs/js:Error .(*github.com/gopherjs/gopherjs/js.Error).Stack��	Error.Ptr.prototype.Stack = function() {
		var err;
  		err = this;
  2		return $internalize(err.Object.stack, $String);
    	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
Error%github.com/gopherjs/gopherjs/js:Error (github.com/gopherjs/gopherjs/js.DebuggerDebugger2	Debugger = $pkg.Debugger = function() {
    	};
Debugger .github.com/gopherjs/gopherjs/js.InternalObjectInternalObjectX	InternalObject = $pkg.InternalObject = function(i) {
  
		return $ifaceNil;
    	};
InternalObject $github.com/gopherjs/gopherjs/js.KeysKeys��	Keys = $pkg.Keys = function(o) {
		var a, s, i;
  q    		if ((o === undefined) || (o === null)) {
  �			return ($sliceType($String)).nil;
    		}
  �		a = $global.Object.keys(o);
  �		s = ($sliceType($String)).make($parseInt(a.length));
  �  �		i = 0;
		while (i < $parseInt(a.length)) {
  			(i < 0 || i >= s.$length) ? $throwRuntimeError("index out of range") : s.$array[s.$offset + i] = $internalize(a[i], $String);
        			i = i + (1) >> 0;
		}
  1		return s;
    	};
Keys $github.com/gopherjs/gopherjs/js.initinitQ	init = function() {
		var e;
  u		e = new Error.Ptr($ifaceNil);
  �    	};
    		init();
%github.com/gopherjs/gopherjs/js:Error �O{"Base":6540,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":6538,"Lines":[0,189,192,312,315,405,495,585,675,765,855,945,1035,1125,1215,1305,1395,1485,1575,1665,1755,1845,1848,2218,2229,2230,2394,2418,2419,2477,2501,2502,2573,2609,2610,2671,2691,2692,2758,2772,2773,2821,2842,2843,2891,2927,2928,2984,3031,3032,3108,3144,3145,3248,3281,3282,3370,3383,3384,3517,3531,3532,3629,3640,3641,3742,3757,3758,3861,3878,3879,3984,4001,4002,4095,4120,4121,4238,4256,4257,4337,4357,4358,4428,4443,4445,4446,4597,4617,4625,4627,4628,4702,4737,4793,4795,4796,4877,4912,4943,4945,4946,5084,5102,5103,5273,5289,5290,5470,5493,5494,5643,5661,5662,5727,5746,5747,5852,5896,5908,5910,5911,5968,5999,6035,6048,6051,6094,6127,6162,6188,6191,6201,6203,6204,6305,6335,6336,6438,6459,6460,6474,6515,6529,6536],"Infos":null}]}
 