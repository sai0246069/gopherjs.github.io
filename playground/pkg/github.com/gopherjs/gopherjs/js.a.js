p��Archive�� 
ImportPath Name Imports�� GcData
 Declarations�� FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �A���github.com/gopherjs/gopherjs/jsjs�xpackage js
func @"".Debugger() ()
type @"".Error struct { ? *@"".Object }
func (? *@"".Error) @"".Error() (? string)
func (? *@"".Error) @"".Stack() (? string)
var @"".Global *@"".Object
func @"".InternalObject(@"".i interface {  }) (? *@"".Object)
func @"".Keys(@"".o *@"".Object) (? []string)
type @"".M map[string]interface {  }
func @"".MakeFunc(? func (@"".this *@"".Object, @"".arguments []*@"".Object) (? interface {  })) (? *@"".Object)
func @"".MakeWrapper(@"".i interface {  }) (? *@"".Object)
var @"".Module *@"".Object
func @"".NewArrayBuffer(@"".b []byte) (? *@"".Object)
type @"".Object struct { @"".object *@"".Object }
func (? *@"".Object) @"".Bool() (? bool)
func (? *@"".Object) @"".Call(@"".name string, @"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Delete(@"".key string) ()
func (? *@"".Object) @"".Float() (? float64)
func (? *@"".Object) @"".Get(@"".key string) (? *@"".Object)
func (? *@"".Object) @"".Index(@"".i int) (? *@"".Object)
func (? *@"".Object) @"".Int() (? int)
func (? *@"".Object) @"".Int64() (? int64)
func (? *@"".Object) @"".Interface() (? interface {  })
func (? *@"".Object) @"".Invoke(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Length() (? int)
func (? *@"".Object) @"".New(@"".args ...interface {  }) (? *@"".Object)
func (? *@"".Object) @"".Set(@"".key string, @"".value interface {  }) ()
func (? *@"".Object) @"".SetIndex(@"".i int, @"".value interface {  }) ()
func (? *@"".Object) @"".String() (? string)
func (? *@"".Object) @"".Uint64() (? uint64)
func (? *@"".Object) @"".Unsafe() (? uintptr)
type @"".S []interface {  }
var @"".Undefined *@"".Object
$$
'Object��	Object = $pkg.Object = $newType(0, $kindStruct, "js.Object", "Object", "github.com/gopherjs/gopherjs/js", function(object_) {
		this.$val = this;
		this.object = object_ !== undefined ? object_ : null;
	});
��	ptrType.methods = [{prop: "Get", name: "Get", pkg: "", typ: $funcType([$String], [ptrType], false)}, {prop: "Set", name: "Set", pkg: "", typ: $funcType([$String, $emptyInterface], [], false)}, {prop: "Delete", name: "Delete", pkg: "", typ: $funcType([$String], [], false)}, {prop: "Length", name: "Length", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Index", name: "Index", pkg: "", typ: $funcType([$Int], [ptrType], false)}, {prop: "SetIndex", name: "SetIndex", pkg: "", typ: $funcType([$Int, $emptyInterface], [], false)}, {prop: "Call", name: "Call", pkg: "", typ: $funcType([$String, sliceType], [ptrType], true)}, {prop: "Invoke", name: "Invoke", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "New", name: "New", pkg: "", typ: $funcType([sliceType], [ptrType], true)}, {prop: "Bool", name: "Bool", pkg: "", typ: $funcType([], [$Bool], false)}, {prop: "String", name: "String", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Int", name: "Int", pkg: "", typ: $funcType([], [$Int], false)}, {prop: "Int64", name: "Int64", pkg: "", typ: $funcType([], [$Int64], false)}, {prop: "Uint64", name: "Uint64", pkg: "", typ: $funcType([], [$Uint64], false)}, {prop: "Float", name: "Float", pkg: "", typ: $funcType([], [$Float64], false)}, {prop: "Interface", name: "Interface", pkg: "", typ: $funcType([], [$emptyInterface], false)}, {prop: "Unsafe", name: "Unsafe", pkg: "", typ: $funcType([], [$Uintptr], false)}];
q	Object.init([{prop: "object", name: "object", pkg: "github.com/gopherjs/gopherjs/js", typ: ptrType, tag: ""}]);
Object&github.com/gopherjs/gopherjs/js.Object'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.sliceType Error��	Error = $pkg.Error = $newType(0, $kindStruct, "js.Error", "Error", "github.com/gopherjs/gopherjs/js", function(Object_) {
		this.$val = this;
		this.Object = Object_ !== undefined ? Object_ : null;
	});
��	ptrType$1.methods = [{prop: "Error", name: "Error", pkg: "", typ: $funcType([], [$String], false)}, {prop: "Stack", name: "Stack", pkg: "", typ: $funcType([], [$String], false)}];
K	Error.init([{prop: "Object", name: "", pkg: "", typ: ptrType, tag: ""}]);
Error%github.com/gopherjs/gopherjs/js.Error'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.ptrType$1 M[	M = $pkg.M = $newType(4, $kindMap, "js.M", "M", "github.com/gopherjs/gopherjs/js", null);
#	M.init($String, $emptyInterface);
M!github.com/gopherjs/gopherjs/js.M S^	S = $pkg.S = $newType(12, $kindSlice, "js.S", "S", "github.com/gopherjs/gopherjs/js", null);
	S.init($emptyInterface);
S!github.com/gopherjs/gopherjs/js.S 	sliceType*	sliceType = $sliceType($emptyInterface);
	sliceType sliceType$1$	sliceType$1 = $sliceType($String);
sliceType$1 ptrType	ptrType = $ptrType(Object);
ptrType&github.com/gopherjs/gopherjs/js.Object sliceType$2$	sliceType$2 = $sliceType(ptrType);
sliceType$2'github.com/gopherjs/gopherjs/js.ptrType funcType7	funcType = $funcType([sliceType$2], [ptrType], true);
funcType'github.com/gopherjs/gopherjs/js.ptrType+github.com/gopherjs/gopherjs/js.sliceType$2 	ptrType$1	ptrType$1 = $ptrType(Error);
	ptrType$1%github.com/gopherjs/gopherjs/js.Error 		$pkg.Global = null;
Global&github.com/gopherjs/gopherjs/js.Global 		$pkg.Module = null;
Module&github.com/gopherjs/gopherjs/js.Module 		$pkg.Undefined = null;
	Undefined)github.com/gopherjs/gopherjs/js.Undefined -(*github.com/gopherjs/gopherjs/js.Object).Get��	Object.ptr.prototype.Get = function(key) {
		var key, o;
  	�		o = this;
  	�		return o.object[$externalize(key, $String)];
    	};
	Object.prototype.Get = function(key) { return this.$val.Get(key); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Set�
	Object.ptr.prototype.Set = function(key, value) {
		var key, o, value;
  
]		o = this;
  
�		o.object[$externalize(key, $String)] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.Set = function(key, value) { return this.$val.Set(key, value); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Delete��	Object.ptr.prototype.Delete = function(key) {
		var key, o;
  
�		o = this;
  		delete o.object[$externalize(key, $String)];
    	};
	Object.prototype.Delete = function(key) { return this.$val.Delete(key); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Length��	Object.ptr.prototype.Length = function() {
		var o;
  m		o = this;
  �		return $parseInt(o.object.length);
    	};
	Object.prototype.Length = function() { return this.$val.Length(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Index��	Object.ptr.prototype.Index = function(i) {
		var i, o;
  �		o = this;
  �		return o.object[i];
    	};
	Object.prototype.Index = function(i) { return this.$val.Index(i); };
Object&github.com/gopherjs/gopherjs/js.Object 2(*github.com/gopherjs/gopherjs/js.Object).SetIndex��	Object.ptr.prototype.SetIndex = function(i, value) {
		var i, o, value;
  K		o = this;
  {		o.object[i] = $externalize(value, $emptyInterface);
    	};
	Object.prototype.SetIndex = function(i, value) { return this.$val.SetIndex(i, value); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Object).Call�*	Object.ptr.prototype.Call = function(name, args) {
		var args, name, o, obj;
  �		o = this;
  		return (obj = o.object, obj[$externalize(name, $String)].apply(obj, $externalize(args, sliceType)));
    	};
	Object.prototype.Call = function(name, args) { return this.$val.Call(name, args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType 0(*github.com/gopherjs/gopherjs/js.Object).Invoke��	Object.ptr.prototype.Invoke = function(args) {
		var args, o;
  �		o = this;
  �		return o.object.apply(undefined, $externalize(args, sliceType));
    	};
	Object.prototype.Invoke = function(args) { return this.$val.Invoke(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType -(*github.com/gopherjs/gopherjs/js.Object).New�	Object.ptr.prototype.New = function(args) {
		var args, o;
  K		o = this;
  y		return new ($global.Function.prototype.bind.apply(o.object, [undefined].concat($externalize(args, sliceType))));
    	};
	Object.prototype.New = function(args) { return this.$val.New(args); };
Object&github.com/gopherjs/gopherjs/js.Object)github.com/gopherjs/gopherjs/js.sliceType .(*github.com/gopherjs/gopherjs/js.Object).Bool��	Object.ptr.prototype.Bool = function() {
		var o;
  �		o = this;
  		return !!(o.object);
    	};
	Object.prototype.Bool = function() { return this.$val.Bool(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).String��	Object.ptr.prototype.String = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $String);
    	};
	Object.prototype.String = function() { return this.$val.String(); };
Object&github.com/gopherjs/gopherjs/js.Object -(*github.com/gopherjs/gopherjs/js.Object).Int��	Object.ptr.prototype.Int = function() {
		var o;
  )		o = this;
  @		return $parseInt(o.object) >> 0;
    	};
	Object.prototype.Int = function() { return this.$val.Int(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Int64��	Object.ptr.prototype.Int64 = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $Int64);
    	};
	Object.prototype.Int64 = function() { return this.$val.Int64(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Uint64��	Object.ptr.prototype.Uint64 = function() {
		var o;
  e		o = this;
  �		return $internalize(o.object, $Uint64);
    	};
	Object.prototype.Uint64 = function() { return this.$val.Uint64(); };
Object&github.com/gopherjs/gopherjs/js.Object /(*github.com/gopherjs/gopherjs/js.Object).Float��	Object.ptr.prototype.Float = function() {
		var o;
  		o = this;
  )		return $parseFloat(o.object);
    	};
	Object.prototype.Float = function() { return this.$val.Float(); };
Object&github.com/gopherjs/gopherjs/js.Object 3(*github.com/gopherjs/gopherjs/js.Object).Interface��	Object.ptr.prototype.Interface = function() {
		var o;
  �		o = this;
  �		return $internalize(o.object, $emptyInterface);
    	};
	Object.prototype.Interface = function() { return this.$val.Interface(); };
Object&github.com/gopherjs/gopherjs/js.Object 0(*github.com/gopherjs/gopherjs/js.Object).Unsafe��	Object.ptr.prototype.Unsafe = function() {
		var o;
  d		o = this;
  �		return o.object;
    	};
	Object.prototype.Unsafe = function() { return this.$val.Unsafe(); };
Object&github.com/gopherjs/gopherjs/js.Object .(*github.com/gopherjs/gopherjs/js.Error).Error��	Error.ptr.prototype.Error = function() {
		var err;
  �		err = this;
  �		return "JavaScript error: " + $internalize(err.Object.message, $String);
    	};
	Error.prototype.Error = function() { return this.$val.Error(); };
Error%github.com/gopherjs/gopherjs/js.Error .(*github.com/gopherjs/gopherjs/js.Error).Stack��	Error.ptr.prototype.Stack = function() {
		var err;
  W		err = this;
  u		return $internalize(err.Object.stack, $String);
    	};
	Error.prototype.Stack = function() { return this.$val.Stack(); };
Error%github.com/gopherjs/gopherjs/js.Error (github.com/gopherjs/gopherjs/js.DebuggerDebugger2	Debugger = $pkg.Debugger = function() {
    	};
Debugger(github.com/gopherjs/gopherjs/js.Debugger .github.com/gopherjs/gopherjs/js.InternalObjectInternalObject\	InternalObject = $pkg.InternalObject = function(i) {
		var i;
  �		return null;
    	};
InternalObject.github.com/gopherjs/gopherjs/js.InternalObject (github.com/gopherjs/gopherjs/js.MakeFuncMakeFuncX	MakeFunc = $pkg.MakeFunc = function(param) {
		var param;
  �		return null;
    	};
MakeFunc(github.com/gopherjs/gopherjs/js.MakeFunc $github.com/gopherjs/gopherjs/js.KeysKeys�	Keys = $pkg.Keys = function(o) {
		var a, i, o, s;
      		if (o === undefined || o === null) {
  >			return sliceType$1.nil;
    		}
  M		a = $global.Object.keys(o);
  x		s = $makeSlice(sliceType$1, $parseInt(a.length));
  �  �		i = 0;
		while (true) {
			if (!(i < $parseInt(a.length))) { break; }
  �			((i < 0 || i >= s.$length) ? $throwRuntimeError("index out of range") : s.$array[s.$offset + i] = $internalize(a[i], $String));
      �  �			i = i + (1) >> 0;
    		}
  �		return s;
    	};
Keys$github.com/gopherjs/gopherjs/js.Keys+github.com/gopherjs/gopherjs/js.sliceType$1 +github.com/gopherjs/gopherjs/js.MakeWrapperMakeWrapper�	MakeWrapper = $pkg.MakeWrapper = function(i) {
		var i, i$1, m, methods, o, v;
  �		v = i;
  �		o = new ($global.Object)();
  �		methods = v.constructor.methods;
  ,  0		i$1 = 0;
		while (true) {
			if (!(i$1 < $parseInt(methods.length))) { break; }
			m = [undefined];
  V			m[0] = methods[i$1];
  n    			if (!($internalize(m[0].pkg, $String) === "")) {
  �  N  N				i$1 = i$1 + (1) >> 0;
    				continue;
    			}
  �			o[$externalize($internalize(m[0].name, $String), $String)] = $externalize((function(m) { return function(args) {
				var _i, _ref, _ref$1, a, args, i$2, i$3, internalizedArgs, obj, paramTypes, result, resultTypes;
  �				paramTypes = m[0].typ.params;
  				internalizedArgs = $makeSlice(sliceType, $parseInt(paramTypes.length));
  ^				_ref = internalizedArgs;
				_i = 0;
				while (true) {
					if (!(_i < _ref.$length)) { break; }
					i$2 = _i;
  �					((i$2 < 0 || i$2 >= internalizedArgs.$length) ? $throwRuntimeError("index out of range") : internalizedArgs.$array[internalizedArgs.$offset + i$2] = new $jsObjectPtr($internalize(((i$2 < 0 || i$2 >= args.$length) ? $throwRuntimeError("index out of range") : args.$array[args.$offset + i$2]), paramTypes[i$2])));
    					_i++;
				}
  �				result = (obj = v, obj[$externalize($internalize(m[0].prop, $String), $String)].apply(obj, $externalize(internalizedArgs, sliceType)));
  				resultTypes = m[0].typ.results;
  K				_ref$1 = $parseInt(resultTypes.length);
  l				if (_ref$1 === 0) {
  x					return null;
      �				} else if (_ref$1 === 1) {
  �					return $externalize(result, resultTypes[0]);
    				} else {
  �					a = new ($global.Array)($parseInt(resultTypes.length));
    					i$3 = 0;
					while (true) {
						if (!(i$3 < $parseInt(resultTypes.length))) { break; }
  K						a[i$3] = $externalize(result[i$3], resultTypes[i$3]);
      @  @						i$3 = i$3 + (1) >> 0;
    					}
  �					return a;
    				}
    			}; })(m), funcType);
      N  N			i$1 = i$1 + (1) >> 0;
    		}
  �		return o;
    	};
MakeWrapper+github.com/gopherjs/gopherjs/js.MakeWrapper&github.com/gopherjs/gopherjs/js.Object(github.com/gopherjs/gopherjs/js.funcType'github.com/gopherjs/gopherjs/js.ptrType)github.com/gopherjs/gopherjs/js.sliceType+github.com/gopherjs/gopherjs/js.sliceType$2 .github.com/gopherjs/gopherjs/js.NewArrayBufferNewArrayBuffer�	NewArrayBuffer = $pkg.NewArrayBuffer = function(b) {
		var b, length, offset, slice;
  9		slice = b;
  U		offset = $parseInt(slice.$offset) >> 0;
  {		length = $parseInt(slice.$length) >> 0;
  �		return slice.$array.buffer.slice(offset, offset + length >> 0);
    	};
NewArrayBuffer.github.com/gopherjs/gopherjs/js.NewArrayBuffer $github.com/gopherjs/gopherjs/js.initinitL	init = function() {
		var e;
  !!		e = new Error.ptr(null);
  !/    	};
    		init();
%github.com/gopherjs/gopherjs/js.Error$github.com/gopherjs/gopherjs/js.init �{"Base":8504,"Files":[{"Name":"/Users/richard/src/github.com/gopherjs/gopherjs/js/js.go","Base":1,"Size":8502,"Lines":[0,203,206,326,329,417,505,593,681,769,857,945,1033,1121,1209,1297,1385,1473,1561,1649,1737,1825,1913,2001,2004,2140,2151,2152,2410,2447,2448,2505,2575,2576,2646,2727,2728,2788,2849,2850,2918,2977,2978,3025,3092,3093,3140,3224,3225,3280,3384,3385,3460,3549,3550,3652,3735,3736,3823,3879,3880,3971,4033,4034,4130,4183,4184,4284,4343,4344,4446,4508,4509,4613,4674,4675,4767,4840,4841,4957,5020,5021,5172,5192,5201,5203,5204,5278,5313,5372,5374,5375,5456,5491,5525,5527,5528,5621,5640,5641,5790,5809,5810,5863,5885,5886,5951,5970,5971,6076,6121,6133,6135,6136,6245,6322,6334,6336,6337,6394,6426,6459,6472,6475,6518,6551,6586,6615,6618,6628,6630,6631,6807,6849,6873,6906,6954,6995,7019,7070,7082,7086,7150,7194,7258,7295,7379,7384,7449,7495,7528,7539,7554,7565,7634,7646,7701,7749,7836,7842,7855,7860,7865,7868,7878,7880,7881,7951,7991,8019,8057,8095,8174,8176,8177,8278,8308,8309,8411,8432,8433,8447,8479,8493,8500],"Infos":null}]}
 