!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=118)}([function(t,n,r){var e=r(1),o=r(14).f,i=r(9),u=r(11),c=r(31),a=r(49),f=r(75);t.exports=function(t,n){var r,s,l,p,v,y=t.target,d=t.global,h=t.stat;if(r=d?e:h?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(d?s:y+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,s,p,t)}}},function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(73))},function(t,n,r){var e=r(1),o=r(32),i=r(5),u=r(33),c=r(37),a=r(58),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(4),o=r(45),i=r(10),u=r(20),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(28),o=r(30);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(4),o=r(6),i=r(15);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(8);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(1),o=r(9),i=r(5),u=r(31),c=r(47),a=r(21),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,r){var e=r(30);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(4),o=r(3),i=r(5),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},function(t,n,r){var e=r(4),o=r(44),i=r(15),u=r(7),c=r(20),a=r(5),f=r(45),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(35),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(56),o=r(28),i=r(12),u=r(16),c=r(57),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,d,h){for(var g,m,b=i(v),x=o(b),S=e(y,d,3),w=u(x.length),O=0,j=h||c,A=n?j(v,w):r?j(v,0):void 0;w>O;O++)if((p||O in x)&&(m=S(g=x[O],O,b),t))if(n)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(A,g)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(29);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n){t.exports={}},function(t,n,r){var e=r(8);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e,o,i,u=r(74),c=r(1),a=r(8),f=r(9),s=r(5),l=r(22),p=r(24),v=c.WeakMap;if(u){var y=new v,d=y.get,h=y.has,g=y.set;e=function(t,n){return g.call(y,t,n),n},o=function(t){return d.call(y,t)||{}},i=function(t){return h.call(y,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n,r){var e=r(32),o=r(33),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n){t.exports={}},function(t,n,r){var e=r(51),o=r(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n,r){var e=r(3),o=r(2),i=r(59),u=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){"use strict";var e=r(20),o=r(6),i=r(15);t.exports=function(t,n,r){var u=e(n);u in t?o.f(t,u,i(0,r)):t[u]=r}},function(t,n,r){var e=r(3),o=r(29),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(1),o=r(9);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(23),o=r(48);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n,r){var e=r(52),o=r(36).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,r){var e=r(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){var e,o=r(10),i=r(61),u=r(36),c=r(24),a=r(79),f=r(46),s=r(22),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,n;y=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete y.prototype[u[r]];return y()};c[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=y(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(52),o=r(36);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(6).f,o=r(5),i=r(2)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){var e={};e[r(2)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){"use strict";var e=r(0),o=r(17).map,i=r(26),u=r(13),c=i("map"),a=u("map");e({target:"Array",proto:!0,forced:!c||!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(4),o=r(3),i=r(46);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),o=r(8),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,r){var e=r(48),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,n,r){var e=r(1),o=r(31),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(5),o=r(50),i=r(14),u=r(6);t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},function(t,n,r){var e=r(25),o=r(34),i=r(55),u=r(10);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(1);t.exports=e},function(t,n,r){var e=r(5),o=r(7),i=r(53).indexOf,u=r(24);t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(7),o=r(16),i=r(54),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,r){var e=r(35),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(76);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(8),o=r(18),i=r(2)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(37);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e,o,i=r(1),u=r(60),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(25);t.exports=e("navigator","userAgent")||""},function(t,n,r){var e=r(4),o=r(6),i=r(10),u=r(39);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},function(t,n,r){var e=r(2);n.f=e},function(t,n,r){var e=r(51),o=r(5),i=r(62),u=r(6).f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||u(n,t,{value:i.f(t)})}},function(t,n,r){var e=r(2),o=r(38),i=r(6),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,n,r){"use strict";var e=r(17).forEach,o=r(41),i=r(13),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,r){var e=r(42),o=r(29),i=r(2)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:u?o(n):"Object"==(e=o(n))&&"function"==typeof n.callee?"Arguments":e}},function(t,n,r){"use strict";var e=r(7),o=r(64),i=r(19),u=r(21),c=r(68),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,n){a(this,{type:"Array Iterator",target:e(t),index:0,kind:n})}),(function(){var t=f(this),n=t.target,r=t.kind,e=t.index++;return!n||e>=n.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:e,done:!1}:"values"==r?{value:n[e],done:!1}:{value:[e,n[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n,r){"use strict";var e=r(0),o=r(95),i=r(70),u=r(97),c=r(40),a=r(9),f=r(11),s=r(2),l=r(23),p=r(19),v=r(69),y=v.IteratorPrototype,d=v.BUGGY_SAFARI_ITERATORS,h=s("iterator"),g=function(){return this};t.exports=function(t,n,r,s,v,m,b){o(r,n,s);var x,S,w,O=function(t){if(t===v&&E)return E;if(!d&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},j=n+" Iterator",A=!1,T=t.prototype,P=T[h]||T["@@iterator"]||v&&T[v],E=!d&&P||O(v),I="Array"==n&&T.entries||P;if(I&&(x=i(I.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(u?u(x,y):"function"!=typeof x[h]&&a(x,h,g)),c(x,j,!0,!0),l&&(p[j]=g))),"values"==v&&P&&"values"!==P.name&&(A=!0,E=function(){return P.call(this)}),l&&!b||T[h]===E||a(T,h,E),p[n]=E,v)if(S={values:O("values"),keys:m?E:O("keys"),entries:O("entries")},b)for(w in S)(d||A||!(w in T))&&f(T,w,S[w]);else e({target:n,proto:!0,forced:d||A},S);return S}},function(t,n,r){"use strict";var e,o,i,u=r(70),c=r(9),a=r(5),f=r(2),s=r(23),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,n,r){var e=r(5),o=r(12),i=r(22),u=r(96),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){"use strict";t.exports=(t,n)=>{if(void 0===n&&(n=t,t=0),"number"!=typeof t||"number"!=typeof n)throw new TypeError("Expected all arguments to be numbers");return Math.floor(Math.random()*(n-t+1)+t)}},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(1),o=r(47),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,r){var e=r(3),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(0),o=r(1),i=r(60),u=[].slice,c=function(t){return function(n,r){var e=arguments.length>2,o=e?u.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,r)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},function(t,n,r){"use strict";var e=r(0),o=r(1),i=r(25),u=r(23),c=r(4),a=r(37),f=r(58),s=r(3),l=r(5),p=r(18),v=r(8),y=r(10),d=r(12),h=r(7),g=r(20),m=r(15),b=r(38),x=r(39),S=r(34),w=r(80),O=r(55),j=r(14),A=r(6),T=r(44),P=r(9),E=r(11),I=r(32),k=r(22),C=r(24),L=r(33),_=r(2),M=r(62),F=r(63),N=r(40),R=r(21),q=r(17).forEach,D=k("hidden"),V=_("toPrimitive"),z=R.set,B=R.getterFor("Symbol"),G=Object.prototype,H=o.Symbol,Q=i("JSON","stringify"),U=j.f,W=A.f,Y=w.f,$=T.f,J=I("symbols"),K=I("op-symbols"),X=I("string-to-symbol-registry"),Z=I("symbol-to-string-registry"),tt=I("wks"),nt=o.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,et=c&&s((function(){return 7!=b(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=U(G,n);e&&delete G[n],W(t,n,r),e&&t!==G&&W(G,n,e)}:W,ot=function(t,n){var r=J[t]=b(H.prototype);return z(r,{type:"Symbol",tag:t,description:n}),c||(r.description=n),r},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ut=function(t,n,r){t===G&&ut(K,n,r),y(t);var e=g(n,!0);return y(r),l(J,e)?(r.enumerable?(l(t,D)&&t[D][e]&&(t[D][e]=!1),r=b(r,{enumerable:m(0,!1)})):(l(t,D)||W(t,D,m(1,{})),t[D][e]=!0),et(t,e,r)):W(t,e,r)},ct=function(t,n){y(t);var r=h(n),e=x(r).concat(lt(r));return q(e,(function(n){c&&!at.call(r,n)||ut(t,n,r[n])})),t},at=function(t){var n=g(t,!0),r=$.call(this,n);return!(this===G&&l(J,n)&&!l(K,n))&&(!(r||!l(this,n)||!l(J,n)||l(this,D)&&this[D][n])||r)},ft=function(t,n){var r=h(t),e=g(n,!0);if(r!==G||!l(J,e)||l(K,e)){var o=U(r,e);return!o||!l(J,e)||l(r,D)&&r[D][e]||(o.enumerable=!0),o}},st=function(t){var n=Y(h(t)),r=[];return q(n,(function(t){l(J,t)||l(C,t)||r.push(t)})),r},lt=function(t){var n=t===G,r=Y(n?K:h(t)),e=[];return q(r,(function(t){!l(J,t)||n&&!l(G,t)||e.push(J[t])})),e};(a||(E((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=L(t),r=function(t){this===G&&r.call(K,t),l(this,D)&&l(this[D],n)&&(this[D][n]=!1),et(this,n,m(1,t))};return c&&rt&&et(G,n,{configurable:!0,set:r}),ot(n,t)}).prototype,"toString",(function(){return B(this).tag})),E(H,"withoutSetter",(function(t){return ot(L(t),t)})),T.f=at,A.f=ut,j.f=ft,S.f=w.f=st,O.f=lt,M.f=function(t){return ot(_(t),t)},c&&(W(H.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),u||E(G,"propertyIsEnumerable",at,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),q(x(tt),(function(t){F(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(X,n))return X[n];var r=H(n);return X[n]=r,Z[r]=n,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,n){return void 0===n?b(t):ct(b(t),n)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(d(t))}}),Q)&&e({target:"JSON",stat:!0,forced:!a||s((function(){var t=H();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}))},{stringify:function(t,n,r){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=n,(v(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!it(n))return n}),o[1]=n,Q.apply(null,o)}});H.prototype[V]||P(H.prototype,V,H.prototype.valueOf),N(H,"Symbol"),C[D]=!0},function(t,n,r){var e=r(25);t.exports=e("document","documentElement")},function(t,n,r){var e=r(7),o=r(34).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){"use strict";var e=r(0),o=r(4),i=r(1),u=r(5),c=r(8),a=r(6).f,f=r(49),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,d="Symbol(test)"==String(s("test")),h=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,n=y.call(t);if(u(l,t))return"";var r=d?n.slice(7,-1):n.replace(h,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,n,r){r(63)("iterator")},function(t,n,r){"use strict";var e=r(0),o=r(3),i=r(18),u=r(8),c=r(12),a=r(16),f=r(27),s=r(57),l=r(26),p=r(2),v=r(59),y=p("isConcatSpreadable"),d=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),h=l("concat"),g=function(t){if(!u(t))return!1;var n=t[y];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!d||!h},{concat:function(t){var n,r,e,o,i,u=c(this),l=s(u,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?u:arguments[n],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,r){"use strict";var e=r(0),o=r(17).filter,i=r(26),u=r(13),c=i("filter"),a=u("filter");e({target:"Array",proto:!0,forced:!c||!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){"use strict";var e=r(0),o=r(17).find,i=r(64),u=r(13),c=!0,a=u("find");"find"in[]&&Array(1).find((function(){c=!1})),e({target:"Array",proto:!0,forced:c||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},function(t,n,r){"use strict";var e=r(0),o=r(65);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){var e=r(0),o=r(88);e({target:"Array",stat:!0,forced:!r(92)((function(t){Array.from(t)}))},{from:o})},function(t,n,r){"use strict";var e=r(56),o=r(12),i=r(89),u=r(90),c=r(16),a=r(27),f=r(91);t.exports=function(t){var n,r,s,l,p,v,y=o(t),d="function"==typeof this?this:Array,h=arguments.length,g=h>1?arguments[1]:void 0,m=void 0!==g,b=f(y),x=0;if(m&&(g=e(g,h>2?arguments[2]:void 0,2)),null==b||d==Array&&u(b))for(r=new d(n=c(y.length));n>x;x++)v=m?g(y[x],x):y[x],a(r,x,v);else for(p=(l=b.call(y)).next,r=new d;!(s=p.call(l)).done;x++)v=m?i(l,g,[s.value,x],!0):s.value,a(r,x,v);return r.length=x,r}},function(t,n,r){var e=r(10);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(2),o=r(19),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,n,r){var e=r(66),o=r(19),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(2)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(0),o=r(53).indexOf,i=r(41),u=r(13),c=[].indexOf,a=!!c&&1/[1].indexOf(1,-0)<0,f=i("indexOf"),s=u("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:a||!f||!s},{indexOf:function(t){return a?c.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){r(0)({target:"Array",stat:!0},{isArray:r(18)})},function(t,n,r){"use strict";var e=r(69).IteratorPrototype,o=r(38),i=r(15),u=r(40),c=r(19),a=function(){return this};t.exports=function(t,n,r){var f=n+" Iterator";return t.prototype=o(e,{next:i(1,r)}),u(t,f,!1,!0),c[f]=a,t}},function(t,n,r){var e=r(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,n,r){var e=r(10),o=r(98);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),n=r instanceof Array}catch(t){}return function(r,i){return e(r),o(i),n?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,n,r){var e=r(8);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,r){"use strict";var e=r(0),o=r(28),i=r(7),u=r(41),c=[].join,a=o!=Object,f=u("join",",");e({target:"Array",proto:!0,forced:a||!f},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),o=r(8),i=r(18),u=r(54),c=r(16),a=r(7),f=r(27),s=r(2),l=r(26),p=r(13),v=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),d=s("species"),h=[].slice,g=Math.max;e({target:"Array",proto:!0,forced:!v||!y},{slice:function(t,n){var r,e,s,l=a(this),p=c(l.length),v=u(t,p),y=u(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[d])&&(r=void 0):r=void 0,r===Array||void 0===r))return h.call(l,v,y);for(e=new(void 0===r?Array:r)(g(y-v,0)),s=0;v<y;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},function(t,n,r){var e=r(11),o=Date.prototype,i=o.toString,u=o.getTime;new Date(NaN)+""!="Invalid Date"&&e(o,"toString",(function(){var t=u.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,r){var e=r(4),o=r(6).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;e&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,n,r){var e=r(0),o=r(4);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:r(61)})},function(t,n,r){var e=r(0),o=r(4);e({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:r(6).f})},function(t,n,r){var e=r(0),o=r(3),i=r(7),u=r(14).f,c=r(4),a=o((function(){u(1)}));e({target:"Object",stat:!0,forced:!c||a,sham:!c},{getOwnPropertyDescriptor:function(t,n){return u(i(t),n)}})},function(t,n,r){var e=r(0),o=r(4),i=r(50),u=r(7),c=r(14),a=r(27);e({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){for(var n,r,e=u(t),o=c.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=o(e,n=f[l++]))&&a(s,n,r);return s}})},function(t,n,r){var e=r(0),o=r(12),i=r(39);e({target:"Object",stat:!0,forced:r(3)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,n,r){var e=r(42),o=r(11),i=r(109);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,n,r){"use strict";var e=r(42),o=r(66);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,n,r){"use strict";var e=r(11),o=r(10),i=r(3),u=r(111),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),r=t.flags;return"/"+n+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in c)?u.call(t):r)}),{unsafe:!0})},function(t,n,r){"use strict";var e=r(10);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(113).charAt,o=r(21),i=r(68),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,n=c(this),r=n.string,o=n.index;return o>=r.length?{value:void 0,done:!0}:(t=e(r,o),n.index+=t.length,{value:t,done:!1})}))},function(t,n,r){var e=r(35),o=r(30),i=function(t){return function(n,r){var i,u,c=String(o(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,r){var e=r(1),o=r(71),i=r(65),u=r(9);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,r){var e=r(1),o=r(71),i=r(67),u=r(9),c=r(2),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,n,r){},function(t,n,r){},function(t,n,r){"use strict";r.r(n);var e={},o=[],i=o.map,u=Array.isArray,c="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,a=function(t){var n="";if("string"==typeof t)return t;if(u(t)&&t.length>0)for(var r,e=0;e<t.length;e++)""!==(r=a(t[e]))&&(n+=(n&&" ")+r);else for(var e in t)t[e]&&(n+=(n&&" ")+e);return n},f=function(t,n){var r={};for(var e in t)r[e]=t[e];for(var e in n)r[e]=n[e];return r},s=function(t){return t.reduce((function(t,n){return t.concat(n&&!0!==n?"function"==typeof n[0]?[n]:s(n):0)}),o)},l=function(t,n){return u(t)&&u(n)&&t[0]===n[0]&&"function"==typeof t[0]},p=function(t,n){if(t!==n)for(var r in f(t,n)){if(t[r]!==n[r]&&!l(t[r],n[r]))return!0;n[r]=t[r]}},v=function(t,n,r,e,o,i){if("key"===n);else if("style"===n)for(var u in f(r,e))r=null==e||null==e[u]?"":e[u],"-"===u[0]?t[n].setProperty(u,r):t[n][u]=r;else"o"===n[0]&&"n"===n[1]?((t.actions||(t.actions={}))[n=n.slice(2).toLowerCase()]=e)?r||t.addEventListener(n,o):t.removeEventListener(n,o):!i&&"list"!==n&&n in t?t[n]=null==e?"":e:null==e||!1===e||"class"===n&&!(e=a(e))?t.removeAttribute(n):t.setAttribute(n,e)},y=function(t,n,r){var e=t.props,o=3===t.type?document.createTextNode(t.name):(r=r||"svg"===t.name)?document.createElementNS("http://www.w3.org/2000/svg",t.name,{is:e.is}):document.createElement(t.name,{is:e.is});for(var i in e)v(o,i,null,e[i],n,r);for(var u=0,c=t.children.length;u<c;u++)o.appendChild(y(t.children[u]=m(t.children[u]),n,r));return t.node=o},d=function(t){return null==t?null:t.key},h=function(t,n,r,e,o,i){if(r===e);else if(null!=r&&3===r.type&&3===e.type)r.name!==e.name&&(n.nodeValue=e.name);else if(null==r||r.name!==e.name)n=t.insertBefore(y(e=m(e),o,i),n),null!=r&&t.removeChild(r.node);else{var u,c,a,s,l=r.props,p=e.props,g=r.children,b=e.children,x=0,S=0,w=g.length-1,O=b.length-1;for(var j in i=i||"svg"===e.name,f(l,p))("value"===j||"selected"===j||"checked"===j?n[j]:l[j])!==p[j]&&v(n,j,l[j],p[j],o,i);for(;S<=O&&x<=w&&null!=(a=d(g[x]))&&a===d(b[S]);)h(n,g[x].node,g[x],b[S]=m(b[S++],g[x++]),o,i);for(;S<=O&&x<=w&&null!=(a=d(g[w]))&&a===d(b[O]);)h(n,g[w].node,g[w],b[O]=m(b[O--],g[w--]),o,i);if(x>w)for(;S<=O;)n.insertBefore(y(b[S]=m(b[S++]),o,i),(c=g[x])&&c.node);else if(S>O)for(;x<=w;)n.removeChild(g[x++].node);else{j=x;for(var A={},T={};j<=w;j++)null!=(a=g[j].key)&&(A[a]=g[j]);for(;S<=O;)a=d(c=g[x]),s=d(b[S]=m(b[S],c)),T[a]||null!=s&&s===d(g[x+1])?(null==a&&n.removeChild(c.node),x++):null==s||1===r.type?(null==a&&(h(n,c&&c.node,c,b[S],o,i),S++),x++):(a===s?(h(n,c.node,c,b[S],o,i),T[s]=!0,x++):null!=(u=A[s])?(h(n,n.insertBefore(u.node,c&&c.node),u,b[S],o,i),T[s]=!0):h(n,c&&c.node,null,b[S],o,i),S++);for(;x<=w;)null==d(c=g[x++])&&n.removeChild(c.node);for(var j in A)null==T[j]&&n.removeChild(A[j].node)}}return e.node=n},g=function(t){return"object"==typeof t?t:x(t)},m=function(t,n){return 2===t.type?((!n||!n.lazy||function(t,n){for(var r in t)if(t[r]!==n[r])return!0;for(var r in n)if(t[r]!==n[r])return!0}(n.lazy,t.lazy))&&((n=g(t.lazy.view(t.lazy))).lazy=t.lazy),n):t},b=function(t,n,r,e,o,i){return{name:t,props:n,children:r,node:e,type:i,key:o}},x=function(t,n){return b(t,e,o,n,void 0,3)},S=function(t){return 3===t.nodeType?x(t.nodeValue,t):b(t.nodeName.toLowerCase(),e,i.call(t.childNodes,S),t,void 0,1)},w=function(t,n){for(var r,o=[],i=[],c=arguments.length;c-- >2;)o.push(arguments[c]);for(;o.length>0;)if(u(r=o.pop()))for(c=r.length;c-- >0;)o.push(r[c]);else!1===r||!0===r||null==r||i.push(g(r));return n=n||e,"function"==typeof t?t(n,i):b(t,n,i,void 0,n.key)},O="pending",j="playing",A="ended",T={questions:[],questionIndex:-1,answers:[],answerText:null,status:O,correctness:[],errorText:null},P=(r(43),r(77),r(78),r(81),r(82),r(83),r(84),r(85),r(86),r(87),r(93),r(94),r(67),r(99),r(100),r(101),r(102),r(103),r(104),r(105),r(106),r(107),r(108),r(110),r(112),r(114),r(115),r(72)),E=r.n(P);function I(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return k(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function C(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function L(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?C(Object(r),!0).forEach((function(n){_(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function _(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var M,F=!1,N=function(){var t=speechSynthesis.getVoices();F=!0,M=t.find((function(t){return"fr-FR"===t.lang||"fr_FR"===t.lang}))};N(),window.speechSynthesis.onvoiceschanged=function(){N()};var R=function(t){var n=new SpeechSynthesisUtterance(t);n.voice=M,window.speechSynthesis.speak(n)},q={prepare:function(t){var n=function(t){for(var n=[];n.length<t;){var r=E()(0,99);-1===n.indexOf(r)&&n.push(r)}return n}(10);try{if(void 0===M){var r,e=speechSynthesis.getVoices().map((function(t){return t.lang})).join();return L({},t,{errorText:"".concat(F?"Voices loaded":"Voices not loaded",". Cannot find French voice using speechSynthesis. Available voices: ").concat(e)})}R(n[0])}catch(r){return L({},t,{errorText:r})}return L({},t,{questions:n,questionIndex:0,answers:[],status:j,correctness:[],answerText:null})},setAnswerText:function(t,n){return L({},t,{answerText:n.target.value})},submit:function(t){var n="".concat(t.questions[t.questionIndex])===t.answerText,r=t.questionIndex,e=[].concat(I(t.answers),[t.answerText]),o=[].concat(I(t.correctness),[n]);return 9===r?L({},t,{answers:e,correctness:o,status:A}):(R(t.questions[t.questionIndex+1]),L({},t,{answers:e,correctness:o,questionIndex:r+1,answerText:null}))},sayCurrentQuestion:function(t){return R(t.questions[t.questionIndex]),t},sayQuestion:function(t,n){return R(t.questions[n]),t}},D=function(){return setTimeout((function(){var t=document.getElementById("answerBox");null!==t&&t.focus()}),50)},V=function(t,n){return"Enter"===n.key?q.submit:t},z=function(t){var n=t.firstTime;return w("button",{onclick:[q.prepare,D],class:"start"},n?"Start":"Start again")},B=function(t){var n=t.state;return w("div",null,w("div",{class:"question-row"},w("h2",null,"Question ",n.questionIndex+1),w("button",{class:"speak-icon",onclick:q.sayCurrentQuestion},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"})))),w("div",{class:"help-text"},"Type the number you hear"),w("div",{class:"answer-row"},w("input",{id:"answerBox",type:"number",min:"0",max:"99",minlength:"1",maxlength:"2",onchange:q.setAnswerText,value:n.answerText,onkeyup:V,spellcheck:"false",autocomplete:"off"}),w("button",{onclick:[q.submit,D],class:"submit"},"Submit")))},G=function(t){var n=t.state;return w("ul",null,n.questions.map((function(t,r){return function(t,n,r){return w("li",null,w("button",{class:"speak-icon",onclick:q.sayCurrentQuestion},w("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},w("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}))),w("span",null,r," ",t?"is correct":" is incorrect, answer: ".concat(n)))}(n.correctness[r],t,n.answers[r])})))};r(116),r(117);!function(t){var n={},r=!1,e=t.view,o=t.node,i=o&&S(o),a=t.subscriptions,f=[],l=function(t){y(this.actions[t.type],t)},v=function(t){return n!==t&&(n=t,a&&(f=function(t,n,r){for(var e,o,i=0,u=[];i<t.length||i<n.length;i++)e=t[i],o=n[i],u.push(o?!e||o[0]!==e[0]||p(o[1],e[1])?[o[0],o[1],o[0](r,o[1]),e&&e[2]()]:e:e&&e[2]());return u}(f,s([a(n)]),y)),e&&!r&&c(d,r=!0)),n},y=(t.middleware||function(t){return t})((function(t,r){return"function"==typeof t?y(t(n,r)):u(t)?"function"==typeof t[0]||u(t[0])?y(t[0],"function"==typeof t[1]?t[1](r):t[1]):(s(t.slice(1)).map((function(t){t&&t[0](y,t[1])}),v(t[0])),n):v(t)})),d=function(){r=!1,o=h(o.parentNode,o,i,i=g(e(n)),l)};y(t.init)}({init:T,view:function(t){return w("section",null,w("h1",null,"French number quiz"),t.status===A?w(G,{state:t}):null,t.status===O||t.status===A?w(z,{firstTime:t.status===O}):null,t.status===j?w(B,{state:t}):null,w("div",null,t.errorText))},node:document.getElementById("app")})}]);