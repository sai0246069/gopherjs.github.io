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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �4��
hash/crc32crc32hashsync��
$$ exports $$
pv0
crc32hash/crc32Castagnoli$!����	Checksum data2tab
Table �   	ChecksumIEEE data2  IEEE$!����IEEETable>Koopman$!����	MakeTable poly > 	New tab> Hash32hashhashHashWriterioio 
Write p2nerr6  BlockSize    
Reset    Size    Sum b2 2  
Sum32      	NewIEEE   P Size$!>	Update crctab>p2  $AA=$packages["hash"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sync"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} COC=$pkg.Table=$newType(1024,$kindArray,"crc32.Table","Table","hash/crc32",null);C.init($Uint32,256);Tablehash/crc32.Table GgG=$pkg.slicing8Table=$newType(8192,$kindArray,"crc32.slicing8Table","slicing8Table","hash/crc32",null);G.init(C,8);slicing8Tablehash/crc32.Tablehash/crc32.slicing8Table M��M=$pkg.digest=$newType(0,$kindStruct,"crc32.digest","digest","hash/crc32",function(crc_,tab_){this.$val=this;if(arguments.length===0){this.crc=0;this.tab=W.nil;return;}this.crc=crc_;this.tab=tab_;});��AB.methods=[{prop:"Size",name:"Size",pkg:"",typ:$funcType([],[$Int],false)},{prop:"BlockSize",name:"BlockSize",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Reset",name:"Reset",pkg:"",typ:$funcType([],[],false)},{prop:"Write",name:"Write",pkg:"",typ:$funcType([AA],[$Int,$error],false)},{prop:"Sum32",name:"Sum32",pkg:"",typ:$funcType([],[$Uint32],false)},{prop:"Sum",name:"Sum",pkg:"",typ:$funcType([AA],[AA],false)}];|M.init([{prop:"crc",name:"crc",pkg:"hash/crc32",typ:$Uint32,tag:""},{prop:"tab",name:"tab",pkg:"hash/crc32",typ:W,tag:""}]);digesthash/crc32.AAhash/crc32.ABhash/crc32.Whash/crc32.digest WW=$ptrType(C);Whash/crc32.Table XX=$ptrType(G);Xhash/crc32.slicing8Table YY=$arrayType($Uint32,256);Y ZZ=$arrayType(C,8);Zhash/crc32.Table AAAA=$sliceType($Uint8);AA ABAB=$ptrType(M);ABhash/crc32.digest DD=W.nil;castagnoliTablehash/crc32.Tablehash/crc32.Whash/crc32.castagnoliTable E)E=new B.Once.ptr(new B.Mutex.ptr(0,0),0);castagnoliOncehash/crc32.castagnoliOnce
sync.Mutex	sync.Once 	IEEETable HH=X.nil;
ieeeTable8hash/crc32.Xhash/crc32.ieeeTable8hash/crc32.slicing8Table I)I=new B.Once.ptr(new B.Mutex.ptr(0,0),0);ieeeTable8Oncehash/crc32.ieeeTable8Once
sync.Mutex	sync.Once "    $pkg.IEEETable=K(3988292384);hash/crc32.IEEETablehash/crc32.makeTable hash/crc32.castagnoliInitF2F=function(){var $ptr;  ZD=K(2197175160);    };castagnoliInithash/crc32.castagnoliInithash/crc32.castagnoliTablehash/crc32.makeTable hash/crc32.MakeTableJ�PJ=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  &b=a;if(b===3988292384){$s=1;continue;}if(b===2197175160){$s=2;continue;}$s=3;continue;  5case 1:  Breturn $pkg.IEEETable;  Tcase 2:  g$r=E.Do(F);$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  �return D;    case 3:  �return K(a);    }return;}if($f===undefined){$f={$blk:J};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.MakeTable=J;	MakeTablehash/crc32.IEEETablehash/crc32.MakeTablehash/crc32.castagnoliInithash/crc32.castagnoliOncehash/crc32.castagnoliTablehash/crc32.makeTable hash/crc32.makeTableK��K=function(a){var $ptr,a,b,c,d,e,f;  	0b=Y.zero();  	Ec=0;while(true){if(!(c<256)){break;}  	^d=(c>>>0);  	ue=0;while(true){if(!(e<8)){break;}    if(((d&1)>>>0)===1){  	�d=(((d>>>1>>>0))^a)>>>0;    }else{  	�d=(f=(1),f<32?(d>>>f):0)>>>0;    }  	�e=e+(1)>>0;    }  	�b.nilCheck,((c<0||c>=b.length)?$throwRuntimeError("index out of range"):b[c]=d);  	Vc=c+(1)>>0;    }  	�return b;    };	makeTablehash/crc32.Yhash/crc32.makeTable hash/crc32.makeTable8L�nL=function(a){var $ptr,a,b,c,d,e,f,g,h,i;  
wb=Z.zero();  
�C.copy((b.nilCheck,b[0]),K(a));  
�c=0;while(true){if(!(c<256)){break;}  
�e=(d=(b.nilCheck,b[0]),((c<0||c>=d.length)?$throwRuntimeError("index out of range"):d[c]));  
�f=1;while(true){if(!(f<8)){break;}  
�e=((g=(b.nilCheck,b[0]),h=(e&255)>>>0,((h<0||h>=g.length)?$throwRuntimeError("index out of range"):g[h]))^((e>>>8>>>0)))>>>0;  (i=(b.nilCheck,((f<0||f>=b.length)?$throwRuntimeError("index out of range"):b[f])),((c<0||c>=i.length)?$throwRuntimeError("index out of range"):i[c]=e));  
�f=f+(1)>>0;    }  
�c=c+(1)>>0;    }  .return b;    };
makeTable8hash/crc32.Tablehash/crc32.Yhash/crc32.Zhash/crc32.makeTablehash/crc32.makeTable8 hash/crc32.NewNFN=function(a){var $ptr,a;  |return new M.ptr(0,a);    };$pkg.New=N;Newhash/crc32.Newhash/crc32.digest hash/crc32.NewIEEEOJO=function(){var $ptr;  Wreturn N($pkg.IEEETable);    };$pkg.NewIEEE=O;NewIEEEhash/crc32.IEEETablehash/crc32.Newhash/crc32.NewIEEE (*hash/crc32.digest).Size��M.ptr.prototype.Size=function(){var $ptr,a;  va=this;  �return 4;    };M.prototype.Size=function(){return this.$val.Size();};digesthash/crc32.digest (*hash/crc32.digest).BlockSize��M.ptr.prototype.BlockSize=function(){var $ptr,a;  �a=this;  �return 1;    };M.prototype.BlockSize=function(){return this.$val.BlockSize();};digesthash/crc32.digest (*hash/crc32.digest).Reset��M.ptr.prototype.Reset=function(){var $ptr,a;  �a=this;  �a.crc=0;    };M.prototype.Reset=function(){return this.$val.Reset();};digesthash/crc32.digest hash/crc32.updateP�mP=function(a,b,c){var $ptr,a,b,c,d,e,f,g;  ,a=~a>>>0;  8d=c;e=0;while(true){if(!(e<d.$length)){break;}f=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);  Pa=((g=((a<<24>>>24)^f)<<24>>>24,(b.nilCheck,((g<0||g>=b.length)?$throwRuntimeError("index out of range"):b[g])))^((a>>>8>>>0)))>>>0;    e++;}  xreturn~a>>>0;    };updatehash/crc32.update hash/crc32.updateSlicingBy8Q��Q=function(a,b,c){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;  a=~a>>>0;  while(true){if(!(c.$length>8)){break;}  #a=(a^(((((((((0>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+0])>>>0)|(((1>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+1])>>>0)<<8>>>0))>>>0)|(((2>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+2])>>>0)<<16>>>0))>>>0)|(((3>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+3])>>>0)<<24>>>0))>>>0)))>>>0;  qa=((((((((((((((d=(b.nilCheck,b[0]),e=(7>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+7]),((e<0||e>=d.length)?$throwRuntimeError("index out of range"):d[e]))^(f=(b.nilCheck,b[1]),g=(6>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+6]),((g<0||g>=f.length)?$throwRuntimeError("index out of range"):f[g])))>>>0)^(h=(b.nilCheck,b[2]),i=(5>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+5]),((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i])))>>>0)^(j=(b.nilCheck,b[3]),k=(4>=c.$length?$throwRuntimeError("index out of range"):c.$array[c.$offset+4]),((k<0||k>=j.length)?$throwRuntimeError("index out of range"):j[k])))>>>0)^(l=(b.nilCheck,b[4]),m=a>>>24>>>0,((m<0||m>=l.length)?$throwRuntimeError("index out of range"):l[m])))>>>0)^(n=(b.nilCheck,b[5]),o=(((a>>>16>>>0))&255)>>>0,((o<0||o>=n.length)?$throwRuntimeError("index out of range"):n[o])))>>>0)^(p=(b.nilCheck,b[6]),q=(((a>>>8>>>0))&255)>>>0,((q<0||q>=p.length)?$throwRuntimeError("index out of range"):p[q])))>>>0)^(r=(b.nilCheck,b[7]),s=(a&255)>>>0,((s<0||s>=r.length)?$throwRuntimeError("index out of range"):r[s])))>>>0;  c=$subslice(c,8);    }  a=~a>>>0;  )return P(a,(b.nilCheck,b[0]),c);    };updateSlicingBy8hash/crc32.updatehash/crc32.updateSlicingBy8 hash/crc32.UpdateR��R=function(a,b,c){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �d=b;if($equal(d,D,C)){$s=1;continue;}if($equal(d,$pkg.IEEETable,C)){$s=2;continue;}$s=3;continue;  �case 1:  �return U(a,c);  case 2:  e=V(a,c);$s=4;case 4:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}$s=5;case 5:return e;    case 3:  <return P(a,b,c);    }return;}if($f===undefined){$f={$blk:R};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Update=R;Updatehash/crc32.IEEETablehash/crc32.Tablehash/crc32.Updatehash/crc32.castagnoliTablehash/crc32.updatehash/crc32.updateCastagnolihash/crc32.updateIEEE (*hash/crc32.digest).Write��M.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  `d=this;  �e=R(d.crc,d.tab,a);$s=1;case 1:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}d.crc=e;    f=a.$length;g=$ifaceNil;b=f;c=g;return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Write=function(a){return this.$val.Write(a);};digesthash/crc32.Updatehash/crc32.digest (*hash/crc32.digest).Sum32��M.ptr.prototype.Sum32=function(){var $ptr,a;  �a=this;  �return a.crc;    };M.prototype.Sum32=function(){return this.$val.Sum32();};digesthash/crc32.digest (*hash/crc32.digest).Sum��M.ptr.prototype.Sum=function(a){var $ptr,a,b,c;   b=this;  $c=b.Sum32();  4return $append(a,((c>>>24>>>0)<<24>>>24),((c>>>16>>>0)<<24>>>24),((c>>>8>>>0)<<24>>>24),(c<<24>>>24));    };M.prototype.Sum=function(a){return this.$val.Sum(a);};digesthash/crc32.digest hash/crc32.ChecksumS��S=function(a,b){var $ptr,a,b,c,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  
c=R(0,b,a);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}$s=2;case 2:return c;    }return;}if($f===undefined){$f={$blk:S};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Checksum=S;Checksumhash/crc32.Checksumhash/crc32.Update hash/crc32.ChecksumIEEET��T=function(a){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �b=R(0,$pkg.IEEETable,a);$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=2;case 2:return b;    }return;}if($f===undefined){$f={$blk:T};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ChecksumIEEE=T;ChecksumIEEEhash/crc32.ChecksumIEEEhash/crc32.IEEETablehash/crc32.Update hash/crc32.updateCastagnoliU9U=function(a,b){var $ptr,a,b;  Sreturn P(a,D,b);    };updateCastagnolihash/crc32.castagnoliTablehash/crc32.updatehash/crc32.updateCastagnoli hash/crc32.updateIEEEV�=V=function(a,b){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �if(b.$length>=4096){$s=1;continue;}$s=2;continue;    case 1:  �$r=I.Do((function(){var $ptr;  H=L(3988292384);    }));$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  5return Q(a,H,b);    case 2:  ereturn P(a,$pkg.IEEETable,b);    }return;}if($f===undefined){$f={$blk:V};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};
updateIEEEhash/crc32.IEEETablehash/crc32.ieeeTable8hash/crc32.ieeeTable8Oncehash/crc32.makeTable8hash/crc32.updatehash/crc32.updateIEEEhash/crc32.updateSlicingBy8 ��{"Base":5769,"Files":[{"Name":"/tmp/gopherjsplayground_goroot/src/hash/crc32/crc32.go","Base":1,"Size":5062,"Lines":[0,55,109,159,160,235,309,325,328,416,419,547,567,581,582,591,599,607,609,610,653,668,669,696,704,767,834,853,854,898,956,996,1021,1022,1048,1111,1158,1180,1182,1183,1266,1289,1290,1365,1441,1517,1543,1570,1599,1600,1624,1665,1667,1668,1719,1751,1752,1790,1818,1819,1863,1893,1922,1923,1995,2047,2084,2099,2111,2130,2148,2184,2209,2212,2236,2238,2239,2313,2350,2367,2395,2414,2441,2460,2488,2500,2514,2519,2523,2536,2539,2549,2551,2552,2631,2677,2702,2727,2755,2772,2799,2836,2853,2857,2860,2870,2872,2873,2932,2953,2965,2977,2979,2980,3043,3093,3160,3220,3221,3288,3318,3385,3438,3439,3483,3484,3530,3531,3570,3571,3626,3638,3661,3699,3702,3715,3717,3718,3769,3842,3854,3872,3950,4018,4064,4108,4120,4123,4135,4167,4169,4170,4236,4291,4305,4328,4362,4379,4407,4410,4438,4440,4441,4495,4528,4548,4550,4551,4600,4601,4642,4658,4724,4726,4727,4775,4825,4903,4904,4956,4986],"Infos":null},{"Name":"/tmp/gopherjsplayground_goroot/src/hash/crc32/crc32_generic.go","Base":5064,"Size":704,"Lines":[0,55,109,159,160,214,215,229,230,308,340,341,394,434,436,437,484,531,552,581,614,619,665,668,702],"Infos":null}]}
 