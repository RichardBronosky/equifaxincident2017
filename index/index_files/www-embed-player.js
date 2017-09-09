(function(){var k,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={va:!0},ea={};try{ea.__proto__=da;ca=ea.va;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.u=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function u(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function pa(){}
function qa(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function sa(a){return"array"==ra(a)}
function ta(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==ra(a)}
function wa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var xa="closure_uid_"+(1E9*Math.random()>>>0),ya=0;function za(a,b,c){return a.call.apply(a.bind,arguments)}
function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=za:v=Aa;return v.apply(null,arguments)}
function x(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var y=Date.now||function(){return+new Date};
function z(a,b){function c(){}
c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function A(a){if(Error.captureStackTrace)Error.captureStackTrace(this,A);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
z(A,Error);A.prototype.name="CustomError";var Ba=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Ca(a,b){return a<b?-1:a>b?1:0}
function Da(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var B=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ea=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e},Fa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function Ga(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Ha(a,b){var c=B(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ia(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ja(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ka;a:{var La=p.navigator;if(La){var Na=La.userAgent;if(Na){Ka=Na;break a}}Ka=""}function D(a){return-1!=Ka.indexOf(a)}
;function Oa(a,b){var c=ta(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Pa(a){var b=Qa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ra(a){for(var b in a)return!1;return!0}
function Sa(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ua="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Va(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ua.length;f++)c=Ua[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Wa(a,b){var c=Xa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ya=D("Opera"),Za=D("Trident")||D("MSIE"),$a=D("Edge"),ab=D("Gecko")&&!(-1!=Ka.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),bb=-1!=Ka.toLowerCase().indexOf("webkit")&&!D("Edge");function cb(){var a=p.document;return a?a.documentMode:void 0}
var db;a:{var eb="",fb=function(){var a=Ka;if(ab)return/rv\:([^\);]+)(\)|;)/.exec(a);if($a)return/Edge\/([\d\.]+)/.exec(a);if(Za)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(bb)return/WebKit\/(\S+)/.exec(a);if(Ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
fb&&(eb=fb?fb[1]:"");if(Za){var gb=cb();if(null!=gb&&gb>parseFloat(eb)){db=String(gb);break a}}db=eb}var hb=db,Xa={};
function ib(a){return Wa(a,function(){for(var b=0,c=Ba(String(hb)).split("."),d=Ba(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ca(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ca(0==g[2].length,0==h[2].length)||Ca(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var jb;var kb=p.document;jb=kb&&Za?cb()||("CSS1Compat"==kb.compatMode?parseInt(hb,10):5):void 0;!ab&&!Za||Za&&9<=Number(jb)||ab&&ib("1.9.1");Za&&ib("9");function lb(){this.b="";this.g=mb}
lb.prototype.ha=!0;lb.prototype.ga=function(){return this.b};
function nb(a){return a instanceof lb&&a.constructor===lb&&a.g===mb?a.b:"type_error:TrustedResourceUrl"}
var mb={};function E(){this.b="";this.g=ob}
E.prototype.ha=!0;E.prototype.ga=function(){return this.b};
function pb(a){return a instanceof E&&a.constructor===E&&a.g===ob?a.b:"type_error:SafeUrl"}
var qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function rb(a){if(a instanceof E)return a;a=a.ha?a.ga():String(a);qb.test(a)||(a="about:invalid#zClosurez");return sb(a)}
var ob={};function sb(a){var b=new E;b.b=a;return b}
sb("about:blank");function tb(){this.b=""}
tb.prototype.ha=!0;tb.prototype.ga=function(){return this.b};
function ub(a){var b=new tb;b.b=a;return b}
ub("<!DOCTYPE html>");ub("");ub("<br>");function vb(a,b){var c=b instanceof E?b:rb(b);a.href=pb(c)}
function wb(a,b){a.src=nb(b)}
;function xb(a,b){this.x=q(a)?a:0;this.y=q(b)?b:0}
xb.prototype.equals=function(a){return a instanceof xb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
xb.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
xb.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
xb.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function yb(a,b){this.width=a;this.height=b}
k=yb.prototype;k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function zb(a){var b=document;return r(a)?b.getElementById(a):a}
function Ab(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Bb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Cb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Db(a){Eb();var b=new lb;b.b=a;return b}
var Eb=pa;var Fb=document,G=window;function Gb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hb=(new Date).getTime();function Ib(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Jb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;w=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var F=1518500249}else m=d^f^h,F=1859775393;else 60>c?(m=d&f|h&(d|f),F=2400959708):(m=d^f^h,F=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+F+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64;for(;d<c;)if(f[m++]=a[d++],w++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,w+=64}
function d(){var a=[],d=8*w;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,w;a();return{reset:a,update:c,digest:d,xa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Kb(a,b,c){var d=[],e=[];if(1==(sa(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Lb(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Lb(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Lb(a){var b=Jb();b.update(a);return b.xa().toLowerCase()}
;function Mb(a){this.b=a||{cookie:""}}
k=Mb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(y()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ba(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ba(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Nb=new Mb("undefined"==typeof document?null:document);Nb.g=3950;function Ob(){var a=[],b=Ib(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Mb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Mb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Kb(Ib(d),b,a||null)].join(" "):null}return null}
;function Pb(a,b,c){this.h=c;this.f=a;this.i=b;this.g=0;this.b=null}
Pb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function Qb(a,b){a.i(b);a.g<a.h&&(a.g++,b.next=a.b,a.b=b)}
;function Rb(a){p.setTimeout(function(){throw a;},0)}
var Sb;
function Tb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.na;c.na=null;a()}};
return function(a){d.next={na:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function Ub(){this.g=this.b=null}
var Wb=new Pb(function(){return new Vb},function(a){a.reset()},100);
Ub.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function Vb(){this.next=this.scope=this.b=null}
Vb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Vb.prototype.reset=function(){this.next=this.scope=this.b=null};function Xb(a,b){Yb||Zb();$b||(Yb(),$b=!0);var c=ac,d=Wb.get();d.set(a,b);c.g?c.g.next=d:c.b=d;c.g=d}
var Yb;function Zb(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);Yb=function(){a.then(bc)}}else Yb=function(){var a=bc;
!ua(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(Sb||(Sb=Tb()),Sb(a)):p.setImmediate(a)}}
var $b=!1,ac=new Ub;function bc(){for(var a;a=ac.remove();){try{a.b.call(a.scope)}catch(b){Rb(b)}Qb(Wb,a)}$b=!1}
;var cc=D("Firefox"),dc=(D("Chrome")||D("CriOS"))&&!D("Edge");function H(){this.g=this.g;this.F=this.F}
H.prototype.g=!1;H.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function ec(a,b){a.g?q(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(q(void 0)?v(b,void 0):b))}
H.prototype.l=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function fc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ta(d)?gc.apply(null,d):fc(d)}}
;function hc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function ic(a,b){if(a.classList)var c=a.classList.contains(b);else c=hc(a),c=0<=B(c,b);return c}
function jc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ic(a,"inverted-hdpi")&&(a.className=Ea(hc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var kc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function lc(){}
lc.prototype.next=function(){throw kc;};
lc.prototype.X=function(){return this};
function mc(a){if(a instanceof lc)return a;if("function"==typeof a.X)return a.X(!1);if(ta(a)){var b=0,c=new lc;c.next=function(){for(;;){if(b>=a.length)throw kc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function nc(a,b){if(ta(a))try{C(a,b,void 0)}catch(c){if(c!==kc)throw c;}else{a=mc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==kc)throw c;}}}
function oc(a){if(ta(a))return Ia(a);a=mc(a);var b=[];nc(a,function(a){b.push(a)});
return b}
;function pc(a){var b=[];qc(new rc,a,b);return b.join("")}
function rc(){}
function qc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(sa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),qc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),sc(d,c),c.push(":"),qc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":sc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var tc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},uc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function sc(a,b){b.push('"',a.replace(uc,function(a){var b=tc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),tc[a]=b);return b}),'"')}
;function vc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function wc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function I(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){xc(c,2,a)},function(a){xc(c,3,a)})}catch(d){xc(this,3,d)}}
function yc(){this.next=this.context=this.g=this.f=this.b=null;this.h=!1}
yc.prototype.reset=function(){this.context=this.g=this.f=this.b=null;this.h=!1};
var zc=new Pb(function(){return new yc},function(a){a.reset()},100);
function Ac(a,b,c){var d=zc.get();d.f=a;d.g=b;d.context=c;return d}
function Bc(a){return new I(function(b,c){c(a)})}
I.prototype.then=function(a,b,c){return Cc(this,ua(a)?a:null,ua(b)?b:null,c)};
vc(I);function Dc(a,b){return Cc(a,null,b,void 0)}
I.prototype.cancel=function(a){0==this.b&&Xb(function(){var b=new Ec(a);Fc(this,b)},this)};
function Fc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Fc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Gc(c),Hc(c,e,3,b)))}a.f=null}else xc(a,3,b)}
function Ic(a,b){a.g||2!=a.b&&3!=a.b||Jc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Cc(a,b,c,d){var e=Ac(null,null,null);e.b=new I(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Ec?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Ic(a,e);return e.b}
I.prototype.w=function(a){this.b=0;xc(this,2,a)};
I.prototype.A=function(a){this.b=0;xc(this,3,a)};
function xc(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof I){Ic(d,Ac(e||pa,f||null,a));var g=!0}else if(wc(d))d.then(e,f,a),g=!0;else{if(wa(d))try{var h=d.then;if(ua(h)){Kc(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.m=c,a.b=b,a.f=null,Jc(a),3!=b||c instanceof Ec||Lc(a,c))}}
function Kc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Jc(a){a.j||(a.j=!0,Xb(a.o,a))}
function Gc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
I.prototype.o=function(){for(var a;a=Gc(this);)Hc(this,a,this.b,this.m);this.j=!1};
function Hc(a,b,c,d){if(3==c&&b.g&&!b.h)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,Mc(b,c,d);else try{b.h?b.f.call(b.context):Mc(b,c,d)}catch(e){Nc.call(null,e)}Qb(zc,b)}
function Mc(a,b,c){2==b?a.f.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Lc(a,b){a.i=!0;Xb(function(){a.i&&Nc.call(null,b)})}
var Nc=Rb;function Ec(a){A.call(this,a)}
z(Ec,A);Ec.prototype.name="cancel";function J(a){H.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
z(J,H);k=J.prototype;k.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Oc(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ga(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
k.D=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Ha(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Pc(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.D(c)}}return 0!=e}return!1};
function Pc(a,b,c){Xb(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.D,this),delete this.f[a])}else this.b.length=0,this.f={}};
k.l=function(){J.u.l.call(this);this.clear();this.h.length=0};function Qc(a){this.b=a}
Qc.prototype.set=function(a,b){q(b)?this.b.set(a,pc(b)):this.b.remove(a)};
Qc.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qc.prototype.remove=function(a){this.b.remove(a)};function Rc(a){this.b=a}
z(Rc,Qc);function Sc(a){this.data=a}
function Tc(a){return!q(a)||a instanceof Sc?a:new Sc(a)}
Rc.prototype.set=function(a,b){Rc.u.set.call(this,a,Tc(b))};
Rc.prototype.g=function(a){a=Rc.u.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Rc.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function K(a){this.b=a}
z(K,Rc);K.prototype.set=function(a,b,c){if(b=Tc(b)){if(c){if(c<y()){K.prototype.remove.call(this,a);return}b.expiration=c}b.creation=y()}K.u.set.call(this,a,b)};
K.prototype.g=function(a,b){var c=K.u.g.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<y()||!!d&&d>y()}if(d)K.prototype.remove.call(this,a);else return c}};function Uc(a){this.b=a}
z(Uc,K);function Vc(){}
;function Wc(){}
z(Wc,Vc);Wc.prototype.clear=function(){var a=oc(this.X(!0)),b=this;C(a,function(a){b.remove(a)})};function Xc(a){this.b=a}
z(Xc,Wc);k=Xc.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.X=function(a){var b=0,c=this.b,d=new lc;d.next=function(){if(b>=c.length)throw kc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Yc(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
z(Yc,Xc);function Zc(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
z(Zc,Xc);var $c=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function L(a){return a.match($c)}
function ad(a){return a?decodeURI(a):a}
function bd(a,b,c){if(sa(b))for(var d=0;d<b.length;d++)bd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cd(a){var b=[],c;for(c in a)bd(c,a[c],b);return b.join("&")}
function dd(a,b){var c=cd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var ed=!1,fd="";function gd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(ed=!0,a.description)){fd=gd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){ed=!0;fd="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],ed=!(!a||!a.enabledPlugin))){fd=gd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");ed=!0;fd=gd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");ed=!0;fd="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),ed=!0,fd=gd(b.GetVariable("$version"))}catch(c){}})();
var hd=ed,id=fd;function jd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var M=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},kd="Microsoft Internet Explorer"==navigator.appName;var ld=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",ld,void 0);function N(a){jd(ld,arguments)}
function O(a,b){return a in ld?ld[a]:b}
function P(a){return O(a,void 0)}
;function md(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b){var c=u("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=O("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),N("ERRORS",c))}
;function R(a){return O("EXPERIMENT_FLAGS",{})[a]}
;function nd(a){a&&(a.dataset?a.dataset[od("loaded")]="true":a.setAttribute("data-loaded","true"))}
function rd(a,b){return a?a.dataset?a.dataset[od(b)]:a.getAttribute("data-"+b):null}
var sd={};function od(a){return sd[a]||(sd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function S(a,b){ua(a)&&(a=md(a));return window.setTimeout(a,b)}
;var td=u("ytPubsubPubsubInstance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.D;J.prototype.publish=J.prototype.K;J.prototype.clear=J.prototype.clear;t("ytPubsubPubsubInstance",td,void 0);var ud=u("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",ud,void 0);var vd=u("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",vd,void 0);var wd=u("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",wd,void 0);
function xd(a,b){var c=yd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){ud[d]&&b.apply(window,c)};
try{wd[a]?f():S(f,0)}catch(g){Q(g)}},void 0);
ud[d]=!0;vd[a]||(vd[a]=[]);vd[a].push(d);return d}return 0}
function zd(a){var b=yd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete ud[a]}))}
function Ad(a,b){var c=yd();c&&c.publish.apply(c,arguments)}
function Bd(a){var b=yd();if(b)if(b.clear(a),a)Cd(a);else for(var c in vd)Cd(c)}
function yd(){return u("ytPubsubPubsubInstance")}
function Cd(a){vd[a]&&(a=vd[a],C(a,function(a){ud[a]&&delete ud[a]}),a.length=0)}
;var Dd=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Ed=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Fd(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Dd,""),c=c.replace(Ed,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Gd(a,b)}
function Gd(a,b){var c=Hd(a),d=document.getElementById(c),e=d&&rd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=xd(c,b);var g=""+(b[xa]||(b[xa]=++ya));Id[g]=e}f||(d=Jd(a,c,function(){rd(d,"loaded")||(nd(d),Ad(c),S(x(Bd,c),0))}))}}
function Jd(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
wb(d,Db(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Kd(a){a=Hd(a);var b=document.getElementById(a);b&&(Bd(a),b.parentNode.removeChild(b))}
function Ld(a,b){if(a&&b){var c=""+(b[xa]||(b[xa]=++ya));(c=Id[c])&&zd(c)}}
function Hd(a){var b=document.createElement("a");vb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Da(a)}
var Id={};var Md=null;function Nd(){var a=O("BG_I",null),b=O("BG_IU",null),c=O("BG_P",void 0);b?Fd(b,function(){window.botguard?Od(c):(Kd(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),Od(c))}
function Od(a){Md=new window.botguard.bg(a);R("botguard_periodic_refresh")&&M()}
function Pd(){return null!=Md}
function Qd(){return Md?Md.invoke():null}
;y();var Rd=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Sd(){if(!Rd)return null;var a=Rd();return"open"in a?a:null}
function Td(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ud(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?sa(b[f])?Ja(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Vd(a,b){var c=a.split("#",2);a=c[0];c=1<c.length?"#"+c[1]:"";var d=a.split("?",2);a=d[0];d=Ud(d[1]||"");for(var e in b)d[e]=b[e];return dd(a,d)+c}
;var Wd={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Xd=!1;
function Yd(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(a)[1]||null,e=ad(L(a)[3]||null);d&&e?(d=c,c=L(a),d=L(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ad(L(c)[3]||null)==e&&(Number(L(c)[4]||null)||null)==(Number(L(a)[4]||null)||null):!0;for(var f in Wd){if((e=d=O(Wd[f]))&&!(e=c)){e=f;var g=O("CORS_HEADER_WHITELIST")||{},h=ad(L(a)[3]||null);e=h?(g=g[h])?0<=B(g,e):!1:!0}e&&(b[f]=d)}return b}
function Zd(a,b){var c=O("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hb&&(!ad(L(a)[3]||null)||b.withCredentials||ad(L(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function $d(a,b){var c=b.format||"JSON";b.Ca&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=O("XSRF_FIELD_NAME",void 0),e=O("XSRF_TOKEN",void 0),f=b.ab;f&&(f[d]&&delete f[d],a=Vd(a,f||{}));f=b.postBody||"";var g=b.B;Zd(a,b)&&(g||(g={}),g[d]=e);g&&r(f)&&(d=Ud(f),Va(d,g),f=b.qa&&"JSON"==b.qa?JSON.stringify(d):cd(d));d=f||g&&!Ra(g);!Xd&&d&&"POST"!=b.method&&(Xd=!0,Q(Error("AJAX request with postData should use POST")));var h=
!1,l,m=ae(a,function(a){if(!h){h=!0;l&&window.clearTimeout(l);var d=Td(a),e=null;if(d||400<=a.status&&500>a.status)e=be(c,a,b.gb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}e=e||{};var f=b.context||p;d?b.P&&b.P.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Ia&&b.Ia.call(f,a,e)}},b.method,f,b.headers,b.responseType,b.withCredentials);
b.Z&&0<b.timeout&&(l=S(function(){h||(h=!0,m.abort(),window.clearTimeout(l),b.Z.call(b.context||p,m))},b.timeout))}
function be(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?ce(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=de(a)})}c&&ee(d);
return d}
function ee(a){if(wa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=ub(a[b]);a[c]=d}else ee(a[b])}}
function ce(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function de(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function fe(a,b){b.method="POST";b.B||(b.B={});$d(a,b)}
function ae(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&md(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=Sd();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c;if(e=Yd(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);return l}
;var ge={},he=0;function ie(a,b){a&&(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?ae(a,b,"GET","",void 0):je(a,b))}
function je(a,b){var c=new Image,d=""+he++;ge[d]=c;c.onload=c.onerror=function(){b&&ge[d]&&b();delete ge[d]};
c.src=a}
;var ke={},le=0;
function me(a,b,c,d,e,f){f=f||{};f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=le)){e=a.stacktrace;c=a.columnNumber;d=u("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(F){h="Not available",g=!0}try{var l=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(F){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(ke[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=e;h={ab:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},B:{url:O("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.B.stack=l);for(var m in f)h.B["client."+m]=f[m];if(m=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var w in m)h.B[w]=m[w];$d("/error_204",h);ke[a.message]=!0;le++}}}
;var ne=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",ne,void 0);function oe(a){jd(ne,arguments)}
;function pe(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
function qe(a){if(!isNaN(a)){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}
;var re=[],se=!1;function te(){function a(){se=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)}
Fd("//static.doubleclick.net/instream/ad_status.js",a);re.push(pe(function(){se||"google_ad_status"in window||(Ld("//static.doubleclick.net/instream/ad_status.js",a),N("DCLKSTAT",3))},1))}
function ue(){return parseInt(O("DCLKSTAT",0),10)}
;var ve=0;t("ytDomDomGetNextId",u("ytDomDomGetNextId")||function(){return++ve},void 0);var we={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in we||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
xe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Qa=u("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Qa,void 0);var ye=u("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",ye,void 0);function ze(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Pa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Ae(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ze(a,b,c,d);if(e)return e;e=++ye.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new xe(d);if(!Cb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new xe(b);
b.currentTarget=a;return c.call(a,b)};
g=md(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Qa[e]=[a,b,c,g,d];return e}
function Be(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Qa){var b=Qa[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Qa[a]}}))}
;function Ce(){if(null==u("_lact",window)){var a=parseInt(O("LACT"),10);a=isFinite(a)?y()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&T();Ae(document,"keydown",T);Ae(document,"keyup",T);Ae(document,"mousedown",T);Ae(document,"mouseup",T);xd("page-mouse",T);xd("page-scroll",T);xd("page-resize",T)}}
function T(){null==u("_lact",window)&&Ce();var a=y();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function De(){var a=u("_lact",window);return null==a?-1:Math.max(y()-a,0)}
;function Ee(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
var Fe=1;function Ge(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=Ge(a.b));return b}
;var He={log_event:"events",log_event2:"events",log_interaction:"interactions"},Ie=Object.create(null);Ie.log_event="GENERIC_EVENT_LOGGING";Ie.log_event2="GENERIC_EVENT_LOGGING";Ie.log_interaction="INTERACTION_LOGGING";var Je={},Ke={},Le=0,U=u("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",U,void 0);var Me=u("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",Me,void 0);var Ne=u("ytLoggingTransportDispatchedStats_")||{};
t("ytLoggingTransportDispatchedStats_",Ne,void 0);t("ytytLoggingTransportCapturedTime_",u("ytLoggingTransportCapturedTime_")||{},void 0);function Oe(a,b){Ke[a.endpoint]=b;if(a.Y){var c=a.Y;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Me[a.Y.token]=d;c=Pe(a.endpoint,a.Y.token)}else c=Pe(a.endpoint);c.push(a.payload);c.length>=(Number(R("web_logging_max_batch")||0)||20)?Qe():Re()}
function Qe(){window.clearTimeout(Le);if(!Ra(U)){for(var a in U){var b=Je[a];if(!b){var c=Ke[a];if(!c)continue;b=new c;Je[a]=b}c=void 0;var d=a,e=b,f=He[d],g=Ne[d]||{};Ne[d]=g;b=Math.round(M());for(c in U[d]){var h=e.b;h={client:{hl:h.Fa,gl:h.Ea,clientName:h.Da,clientVersion:h.innertubeContextClientVersion}};O("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});h={context:h};h[f]=Pe(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;
h.requestTimeMs=b;var l=Me[c];if(l)a:{var m=h,w=c;if(l.videoId)var F="VIDEO";else if(l.playlistId)F="PLAYLIST";else break a;m.credentialTransferTokenTargetId=l;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:w,scope:F}]}delete Me[c];Se(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete U[a]}Ra(U)||
Re()}}
function Re(){window.clearTimeout(Le);Le=S(Qe,O("LOGGING_BATCH_TIMEOUT",1E4))}
function Pe(a,b){b||(b="");U[a]=U[a]||{};U[a][b]=U[a][b]||[];return U[a][b]}
;function Te(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||M());f[a]=b;f.context={lastActivityMs:String(d?-1:De())};Oe({endpoint:"log_event",payload:f,Y:e},c)}
;function Ue(a,b,c){Ve(We,{attachChild:{csn:a,parentVisualElement:Ge(b),visualElements:[Ge(c)]}})}
function Ve(a,b,c){b.eventTimeMs=c?c:Math.round(M());b.lactMs=De();Oe({endpoint:"log_interaction",payload:b},a)}
;function Xe(){if(!Ye&&!Ze||!window.JSON)return null;try{var a=Ye.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=Ze.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Ze,$e=new Yc;Ze=$e.isAvailable()?new Uc($e):null;var Ye,af=new Zc;Ye=af.isAvailable()?new Uc(af):null;function bf(){var a=O("ROOT_VE_TYPE",void 0);return a?new Ee(void 0,a,void 0):null}
function cf(){var a=O("client-screen-nonce")||O("EVENT_ID");return a?a:null}
;function df(a,b,c){Nb.set(""+a,b,c,"/","youtube.com",!1)}
;function ef(a){if(a){a=a.itct||a.ved;var b=u("yt.logging.screen.storeParentElement");a&&b&&b(new Ee(a))}}
;function ff(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=ad(L(window.location.href)[3]||null);f&&e.push(f);f=ad(L(d)[3]||null);if(0<=B(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),vb(e,d),d=e.href),d){f=L(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
cf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Da(d).toString(36),e=b?cd(b):"",df(d,e,h||5),ef(b))}else h="ST-"+Da(d).toString(36),d=b?cd(b):"",df(h,d,5),ef(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var w=void 0===w?window:w;c=w.location;a=dd(a,l)+m;a=a instanceof E?a:rb(a);c.href=pb(a)}return!0}
;t("yt.abuse.botguardInitialized",u("yt.abuse.botguardInitialized")||Pd,void 0);t("yt.abuse.invokeBotguard",u("yt.abuse.invokeBotguard")||Qd,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",u("yt.abuse.dclkstatus.checkDclkStatus")||ue,void 0);t("yt.player.exports.navigate",u("yt.player.exports.navigate")||ff,void 0);t("yt.util.activity.init",u("yt.util.activity.init")||Ce,void 0);t("yt.util.activity.getTimeSinceActive",u("yt.util.activity.getTimeSinceActive")||De,void 0);
t("yt.util.activity.setTimestamp",u("yt.util.activity.setTimestamp")||T,void 0);function gf(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function We(a){this.b=a||{apiaryHost:P("APIARY_HOST"),eb:P("APIARY_HOST_FIRSTPARTY"),gapiHintOverride:!!O("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:P("GAPI_HINT_PARAMS"),innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Da:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Fa:P("INNERTUBE_CONTEXT_HL"),Ea:P("INNERTUBE_CONTEXT_GL"),xhrApiaryHost:P("XHR_APIARY_HOST")||"",Ga:P("INNERTUBE_HOST_OVERRIDE")||""}}
function Se(a,b,c){var d={};!O("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":O("VISITOR_DATA","")},B:c,qa:"JSON",Z:d.Z,P:function(a,b){d.P&&d.P(b)},
onError:function(a,b){if(d.onError)d.onError(b)},
timeout:d.timeout,withCredentials:!0},f=Ob();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=O("SESSION_INDEX",0));var g="",h=a.b.Ga;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);fe(""+g+gf(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey,e)}
;function hf(a){a=a||{};this.url=a.url||"";this.args=a.args||Ta(jf);this.assets=a.assets||{};this.attrs=a.attrs||Ta(kf);this.params=a.params||Ta(lf);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var jf={enablejsapi:1},kf={},lf={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function mf(a){a instanceof hf||(a=new hf(a));return a}
function nf(a){var b=new hf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?Ta(d):d}return b}
;function of(a){H.call(this);this.b=[];this.f=a||this}
n(of,H);function pf(a,b,c,d){d=md(v(d,a.f));d={target:b,name:c,ma:d};b.addEventListener(c,d.ma,void 0);a.b.push(d)}
function qf(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ma)}}
of.prototype.l=function(){qf(this);H.prototype.l.call(this)};function rf(){this.b=this.minor=this.major=0;var a=u("window.navigator.plugins"),b=u("window.navigator.mimeTypes");a=a&&a["Shockwave Flash"];b=b&&b["application/x-shockwave-flash"];if(b=a&&b&&b.enabledPlugin&&a.description||""){a=b.indexOf("Shockwave Flash");0<=a&&(b=b.substr(a+15));a=b.split(" ");var c="";b="";for(var d=0,e=a.length;d<e;d++)if(c)if(b)break;else b=a[d];else c=a[d];c=c.split(".");a=parseInt(c[0],10)||0;c=parseInt(c[1],10)||0;d=0;if("r"==b.charAt(0)||"d"==b.charAt(0))d=parseInt(b.substr(1),
10)||0;b=[a,c,d]}else b=[0,0,0];this.major=b[0];this.minor=b[1];this.b=b[2];if(0>=this.major){if(kd)try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(m){f=null}else{var g=document.body;var h=document.createElement("object");h.setAttribute("type","application/x-shockwave-flash");f=g.appendChild(h)}if(f&&"GetVariable"in f)try{var l=f.GetVariable("$version")}catch(m){l=""}g&&h&&g.removeChild(h);(f=l||"")?(f=f.split(" ")[1].split(","),f=[parseInt(f[0],10)||0,parseInt(f[1],10)||0,parseInt(f[2],
10)||0]):f=[0,0,0];this.major=f[0];this.minor=f[1];this.b=f[2]}}
qa(rf);var sf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function tf(a){a=a||"";if(window.spf){var b=a.match(sf);spf.style.load(a,b?b[1]:"",void 0)}else uf(a)}
function uf(a){var b=vf(a),c=document.getElementById(b),d=c&&rd(c,"loaded");d||c&&!d||(c=wf(a,b,function(){rd(c,"loaded")||(nd(c),Ad(b),S(x(Bd,b),0))}))}
function wf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Db(a);d.rel="stylesheet";d.href=nb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function vf(a){var b=document.createElement("A");a=sb(a);vb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Da(b)}
;var V={},xf=(V["api.invalidparam"]=2,V.auth=150,V["drm.auth"]=150,V["heartbeat.net"]=150,V["heartbeat.servererror"]=150,V["heartbeat.stop"]=150,V["html5.unsupportedads"]=5,V["fmt.noneavailable"]=5,V["fmt.decode"]=5,V["fmt.unplayable"]=5,V["html5.missingapi"]=5,V["html5.unsupportedlive"]=5,V["drm.unavailable"]=5,V);var yf={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},zf;var Af=Ka;Af=Af.toLowerCase();if(-1!=Af.indexOf("android")){var Bf=Af.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Bf)zf=parseFloat(Bf[1]);else{var Cf=[],Df=0,Ef;for(Ef in yf)Cf[Df++]=Ef;var Ff=Af.match("("+Cf.join("|")+")");zf=Ff?yf[Ff[0]]:0}}else zf=void 0;var Gf=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Hf=['audio/mp4; codecs="mp4a.40.2"'];var If=u("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",If,void 0);var Jf=0;function Kf(a){If[a]=If[a]||{count:0};var b=If[a];b.count++;b.time=M();Jf||(Jf=pe(Lf,0));return 10<b.count?(11==b.count&&me(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function Lf(){var a=M(),b;for(b in If)6E4<a-If[b].time&&delete If[b];Jf=0}
;function Mf(a,b){this.version=a;this.args=b}
;function Nf(a){this.topic=a}
Nf.prototype.toString=function(){return this.topic};var Of=u("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.D;J.prototype.publish=J.prototype.K;J.prototype.clear=J.prototype.clear;t("ytPubsub2Pubsub2Instance",Of,void 0);t("ytPubsub2Pubsub2SubscribedKeys",u("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",u("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",u("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Pf(a,b){var c=u("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;function Qf(){var a=O("TIMING_TICK_EXPIRATION");a||(a={},N("TIMING_TICK_EXPIRATION",a));return a}
function Rf(){var a=Qf(),b;for(b in a)qe(a[b]);N("TIMING_TICK_EXPIRATION",{})}
;function Sf(a,b){Mf.call(this,1,arguments)}
n(Sf,Mf);function Tf(a,b){Mf.call(this,1,arguments)}
n(Tf,Mf);var Uf=new Nf("aft-recorded"),Vf=new Nf("timing-sent");var W=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};var Wf=y().toString();var Xf={vc:!0},Yf={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",plid:"videoId",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},Zf="ap c cver ei srt yt_fss yt_li ba vpil vpni yt_eil pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),$f="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),ag=!1;
function bg(a){if("_"!=a[0]){var b=a;W.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),W.mark(b))}b=cg();var c=M();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=Qf();if(c=b[a])qe(c),b[a]=0;dg()["tick_"+a]=void 0;M();R("csi_on_gel")?(b=eg(),"_start"==a?Kf("baseline_"+b)||Te("latencyActionBaselined",{clientActionNonce:b},We,void 0,void 0):Kf("tick_"+a+"_"+b)||Te("latencyActionTicked",{tickName:a,clientActionNonce:b},We,void 0,void 0),a=!0):a=!1;if(a=!a)a=!u("yt.timing.pingSent_");if(a&&
(b=P("TIMING_ACTION"),a=cg(),u("ytglobal.timingready_")&&b&&a._start&&(b=fg()))){R("tighter_critical_section")&&!ag&&(Pf(Uf,new Sf(Math.round(b-a._start),void 0)),ag=!0);b=!0;c=O("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&gg()}}
function hg(){var a=ig().info.yt_lt="hot_bg";dg().info_yt_lt=a;if(R("csi_on_gel"))if("yt_lt"in Yf){var b={},c=Yf.yt_lt;0<=B($f,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=eg();c=Object.keys(b).join("");Kf("info_"+c+"_"+a)||(b.clientActionNonce=a,Te("latencyActionInfo",b,We,void 0,void 0))}else 0<=B(Zf,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function fg(){var a=cg();if(a.aft)return a.aft;for(var b=O("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function gg(){Rf();if(!R("csi_on_gel")){var a=cg(),b=ig().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&sa(a[d])){var e=d.slice(1);if(e in Xf){var f=Fa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=u("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))jg(f,e),kg(),lg(),mg(!1,void 0),O("TIMING_ACTION")&&N("PREVIOUS_ACTION",O("TIMING_ACTION")),N("TIMING_ACTION","")}else{var g=O("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:O("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var l=window.location.protocol+u("ytplayer.config.assets.js");(l=W.getEntriesByName?W.getEntriesByName(l)[0]:null)?b.h5jse=Math.round(b.h5jse-l.responseEnd):
delete b.h5jse}a.aft=fg();ng()&&"youtube"==g&&(hg(),g=a.vc,l=a.pbs,delete a.aft,b.aft=Math.round(l-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=M();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=u("ytdebug.logTiming"))&&a(f,b);jg(f,e,void 0);Pf(Vf,new Tf(b.aft+(h||0),void 0))}}}
var lg=v(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||pa,W);
function jg(a,b,c){if(R("debug_csi_data")){var d=u("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||ie(a,void 0)}catch(f){ie(a,void 0)}else ie(a);mg(!0,c)}
function eg(){var a=ig().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=y();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(Wf)for(b=1,c=0;c<Wf.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^Wf.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");ig().nonce=a}return a}
function cg(){return ig().tick}
function dg(){var a=ig();"gel"in a||(a.gel={});return a.gel}
function ig(){return u("ytcsi.data_")||kg()}
function kg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function mg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function ng(){var a=cg(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==ig().info.yt_pvis}
;function og(a,b){H.call(this);this.o=this.j=a;this.O=b;this.A=!1;this.f={};this.U=this.N=null;this.J=new J;ec(this,x(fc,this.J));this.i={};this.G=this.V=this.h=this.da=this.b=null;this.R=!1;this.H=this.w=this.m=this.M=null;this.W={};this.ua=["onReady"];this.S=new of(this);ec(this,x(fc,this.S));this.ba=null;this.ka=NaN;this.T={};pg(this);this.C("onDetailedError",v(this.La,this));this.C("onTabOrderChange",v(this.wa,this));this.C("onTabAnnounce",v(this.la,this));this.C("WATCH_LATER_VIDEO_ADDED",v(this.Ma,
this));this.C("WATCH_LATER_VIDEO_REMOVED",v(this.Na,this));cc||(this.C("onMouseWheelCapture",v(this.Ja,this)),this.C("onMouseWheelRelease",v(this.Ka,this)));this.C("onAdAnnounce",v(this.la,this));this.I=new of(this);ec(this,x(fc,this.I));this.ca=!1;this.aa=null}
n(og,H);k=og.prototype;k.ja=function(a,b){this.g||(qg(this,a),rg(this,b),this.A&&sg(this))};
function qg(a,b){a.da=b;a.b=nf(b);a.h=a.b.attrs.id||a.h;"video-player"==a.h&&(a.h=a.O,a.b.attrs.id=a.O);a.o.id==a.h&&(a.h+="-player",a.b.attrs.id=a.h);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.O;a.V||(a.V=tg(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.o.style.width=Gb(Number(c)||c));if(c=a.b.attrs.height)a.o.style.height=Gb(Number(c)||c)}
k.za=function(){return this.da};
function sg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function ug(a){var b=a.b&&a.b.args;if(b&&b.fflags){var c=b.el;b=b.fflags;if(!c||"profilepage"==c||"embedded"==c&&0<=b.indexOf("web_player_disable_flash_embed=true")||0<=b.indexOf("web_player_disable_flash_playerproxy=true"))return!1}if(!q(a.b.disable.flash)){c=a.b.disable;b=rf.getInstance();var d=a.b.minVersion;d="string"==typeof d?d.split("."):[d,void 0,void 0];d[0]=parseInt(d[0],10)||0;d[1]=parseInt(d[1],10)||0;d[2]=parseInt(d[2],10)||0;c.flash=!(b.major>d[0]||b.major==d[0]&&b.minor>d[1]||b.major==
d[0]&&b.minor==d[1]&&b.b>=d[2])}return!a.b.disable.flash}
function vg(a,b){var c=a.b,d=c&&c.args&&c.args.fflags;!d||0>d.indexOf("web_player_flash_fallback_killswitch=true")||b&&(5!=(xf[b.errorCode]||5)||-1==wg.indexOf(b.errorCode))||!ug(a)||((d=X(a))&&d.stopVideo&&d.stopVideo(),d&&d.getUpdatedConfigurationData&&(c=d.getUpdatedConfigurationData(),c=mf(c)),c.args.autoplay=1,c.args.html5_unavailable="1",qg(a,c),rg(a,"flash"))}
function rg(a,b){if(!a.g){if(!b){var c;if(!(c=!a.b.html5&&ug(a))){if(!q(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==zf)var d=!0;else{a:{var e=c;c=u("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),t("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType){e=e?Gf:Hf;for(var f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=xg(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ug(a)?"flash":"unsupported":"html5"}("flash"==b?a.bb:a.cb).call(a)}}
function xg(a){var b=!0,c=X(a);c&&a.b&&(a=a.b,b=rd(c,"version")==a.assets.js);return b&&!!u("yt.player.Application.create")}
k.cb=function(){if(!this.R){var a=xg(this);if(a&&"html5"==yg(this))this.G="html5",this.A||this.L();else if(zg(this),this.G="html5",a&&this.m)this.j.appendChild(this.m),this.L();else{this.b.loaded=!0;var b=!1;this.M=v(function(){b=!0;var a=nf(this.b);u("yt.player.Application.create")(this.j,a);this.L()},this);
this.R=!0;a?this.M():(Fd(this.b.assets.js,this.M),tf(this.b.assets.css),Ag(this)&&!b&&t("yt.player.Application.create",null,void 0))}}};
k.bb=function(){var a=nf(this.b);if(!this.w){var b=X(this);b&&(this.w=document.createElement("SPAN"),this.w.tabIndex=0,pf(this.S,this.w,"focus",this.oa),this.H=document.createElement("SPAN"),this.H.tabIndex=0,pf(this.S,this.H,"focus",this.oa),b.parentNode&&b.parentNode.insertBefore(this.w,b),b.parentNode&&b.parentNode.insertBefore(this.H,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==yg(this))this.G="flash",this.A||this.L();else{zg(this);this.G=
"flash";this.b.loaded=!0;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;var c=a.url;if(c){b=r(b)?zb(b):b;var d=Ta(a.attrs);d.tabindex=0;var e=Ta(a.params);e.flashvars=cd(a.args);if(kd){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;a=document.createElement("object");for(var f in d)a.setAttribute(f,d[f]);for(var g in e)f=document.createElement("param"),f.setAttribute("name",g),f.setAttribute("value",e[g]),a.appendChild(f)}else{d.type=
"application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var l in e)a.setAttribute(l,e[l])}g=document.createElement("div");g.appendChild(a);b.innerHTML=g.innerHTML}this.L()}};
k.oa=function(){X(this).focus()};
function X(a){var b=zb(a.h);!b&&a.o&&a.o.querySelector&&(b=a.o.querySelector("#"+a.h));return b}
k.L=function(){if(!this.g){var a=X(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.R=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))vg(this);else{pg(this);this.A=!0;a=X(this);a.addEventListener&&(this.N=Bg(this,a,"addEventListener"));a.removeEventListener&&(this.U=Bg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Bg(this,a,d))}for(var e in this.i)this.N(e,
this.i[e]);sg(this);this.V&&this.V(this.f);this.J.K("onReady",this.f)}else this.ka=S(v(this.L,this),50)}};
function Bg(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.ba=e,Q(e,"WARNING"))}}}
function pg(a){a.A=!1;if(a.U)for(var b in a.i)a.U(b,a.i[b]);for(var c in a.T)window.clearTimeout(parseInt(c,10));a.T={};a.N=null;a.U=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=v(a.C,a);a.f.removeEventListener=v(a.Sa,a);a.f.destroy=v(a.dispose,a);a.f.getLastError=v(a.Aa,a);a.f.getPlayerType=v(a.Ba,a);a.f.getCurrentVideoConfig=v(a.za,a);a.f.loadNewVideoConfig=v(a.ja,a);a.f.isReady=v(a.Ha,a)}
k.Ha=function(){return this.A};
k.C=function(a,b){if(!this.g){var c=tg(this,b);if(c){if(!(0<=B(this.ua,a)||this.i[a])){var d=Cg(this,a);this.N&&this.N(a,d)}this.J.subscribe(a,c);"onReady"==a&&this.A&&S(x(c,this.f),0)}}};
k.Sa=function(a,b){if(!this.g){var c=tg(this,b);c&&Oc(this.J,a,c)}};
function tg(a,b){var c=b;if("string"==typeof b){if(a.W[b])return a.W[b];c=function(){var a=u(b);a&&a.apply(p,arguments)};
a.W[b]=c}return c?c:null}
function Cg(a,b){var c="ytPlayer"+b+a.O,d=v(function(a){if("html5"==yg(this)){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true")){this.J.K(b,a);return}}var d=S(v(function(){if(!this.g){this.J.K(b,a);var c=this.T,e=String(d);e in c&&delete c[e]}},this),0);
Sa(this.T,String(d))},a);
a.i[b]=c;p[c]=d;return c}
k.wa=function(a){a=a?Bb:Ab;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.w||b==this.H||(b.focus(),b!=document.activeElement));)b=a(b)};
k.la=function(a){Ad("a11y-announce",a)};
k.La=function(a){vg(this,a)};
k.Ma=function(a){Ad("WATCH_LATER_VIDEO_ADDED",a)};
k.Na=function(a){Ad("WATCH_LATER_VIDEO_REMOVED",a)};
k.Ja=function(){if(!this.ca){if(dc){var a=document,b=a.scrollingElement?a.scrollingElement:bb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement;a=a.parentWindow||a.defaultView;this.aa=Za&&ib("10")&&a.pageYOffset!=b.scrollTop?new xb(b.scrollLeft,b.scrollTop):new xb(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);pf(this.I,window,"scroll",this.Qa);pf(this.I,this.j,"touchmove",this.Pa)}else pf(this.I,this.j,"mousewheel",this.pa),pf(this.I,this.j,"wheel",this.pa);this.ca=
!0}};
k.Ka=function(){qf(this.I);this.ca=!1};
k.pa=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
k.Qa=function(){window.scrollTo(this.aa.x,this.aa.y)};
k.Pa=function(a){a.preventDefault()};
k.Ba=function(){return this.G||yg(this)};
k.Aa=function(){return this.ba};
function yg(a){return(a=X(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function zg(a){bg("dcp");a.cancel();pg(a);a.G=null;a.b&&(a.b.loaded=!1);var b=X(a);"html5"==yg(a)?xg(a)||!Ag(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null):b&&b.destroy&&b.destroy();b=a.j;for(var c;c=b.firstChild;)b.removeChild(c);qf(a.S);a.w=null;a.H=null}
k.cancel=function(){this.M&&Ld(this.b.assets.js,this.M);window.clearTimeout(this.ka);this.R=!1};
k.l=function(){zg(this);if(this.m&&this.b&&this.m.destroy)try{this.m.destroy()}catch(b){Q(b)}this.W=null;for(var a in this.i)p[this.i[a]]=null;this.da=this.b=this.f=null;delete this.j;delete this.o;H.prototype.l.call(this)};
function Ag(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
var wg=["fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];var Dg={},Eg="player_uid_"+(1E9*Math.random()>>>0);function Fg(a){var b="player";b=r(b)?zb(b):b;a=mf(a);var c=Eg+"_"+(b[xa]||(b[xa]=++ya)),d=Dg[c];if(d)return d.ja(a),d.f;d=new og(b,c);Dg[c]=d;Ad("player-added",d.f);ec(d,x(Gg,d));S(function(){d.ja(a)},0);
return d.f}
function Gg(a){delete Dg[a.O]}
;function Hg(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Ig(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Jg(a)}
function Jg(a,b,c){if(wa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Kg(a,b,c,d){if(wa(a)&&!sa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Y(a){var b=a.video_id||a.videoId;if(r(b)){var c=Xe()||{},d=Xe()||{};q(void 0)?d[b]=void 0:delete d[b];var e=y()+3E5,f=Ze;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function Lg(a){H.call(this);this.f=a;this.f.subscribe("command",this.ra,this);this.h={};this.i=!1}
z(Lg,H);k=Lg.prototype;k.start=function(){this.i||this.g||(this.i=!0,Mg(this.f,"RECEIVING"))};
k.ra=function(a,b){if(this.i&&!this.g){var c=b||{};switch(a){case "addEventListener":if(r(c.event)&&(c=c.event,!(c in this.h))){var d=v(this.Ua,this,c);this.h[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":r(c.event)&&Ng(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=Og(a,b||{}),c=this.b[a].apply(this.b,c),(c=Pg(a,c))&&this.i&&!this.g&&Mg(this.f,a,c))}}};
k.Ua=function(a,b){this.i&&!this.g&&Mg(this.f,a,this.ea(a,b))};
k.ea=function(a,b){if(null!=b)return{value:b}};
function Ng(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
k.l=function(){var a=this.f;a.g||Oc(a.b,"command",this.ra,this);this.f=null;for(var b in this.h)Ng(this,b);Lg.u.l.call(this)};function Qg(a,b){Lg.call(this,b);this.b=a;this.start()}
z(Qg,Lg);Qg.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
Qg.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function Og(a,b){switch(a){case "loadVideoById":return b=Jg(b),Y(b),[b];case "cueVideoById":return b=Jg(b),Y(b),[b];case "loadVideoByPlayerVars":return Y(b),[b];case "cueVideoByPlayerVars":return Y(b),[b];case "loadPlaylist":return b=Kg(b),Y(b),[b];case "cuePlaylist":return b=Kg(b),Y(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function Pg(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Qg.prototype.ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Qg.u.ea.call(this,a,b)};
Qg.prototype.l=function(){Qg.u.l.call(this);delete this.b};function Rg(a,b,c,d){H.call(this);this.f=b||null;this.o="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.A=!!a;this.m=v(this.w,this);window.addEventListener("message",this.m)}
n(Rg,H);Rg.prototype.w=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.A&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.o=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=B(this.j,b.func))&&this.i(b.func,b.args)}}};
Rg.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=pc(a);c.postMessage(d,this.o)}catch(e){Q(e,"WARNING")}}};
Rg.prototype.l=function(){window.removeEventListener("message",this.m);H.prototype.l.call(this)};function Sg(a,b,c){Rg.call(this,a,b,c||O("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(Sg,Rg);function Tg(){var a=this.g=new Sg(!!O("WIDGET_ID_ENFORCE")),b=v(this.Ra,this);a.i=b;a.j=null;this.g.channel="widget";if(a=O("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=Tg.prototype;k.Ra=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.i[c]||"onReady"==c||(this.addEventListener(c,Ug(this,c)),this.i[c]=!0)}else this.ta(a,b)};
k.ta=function(){};
function Ug(a,b){return v(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.ya=function(){this.j=!0;this.sendMessage("initialDelivery",this.fa());this.sendMessage("onReady");C(this.h,this.sa,this);this.h=[]};
k.fa=function(){return null};
function Vg(a,b){a.sendMessage("infoDelivery",b)}
k.sa=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.g=null};function Wg(a){Tg.call(this);this.b=a;this.f=[];this.addEventListener("onReady",v(this.Oa,this));this.addEventListener("onVideoProgress",v(this.Ya,this));this.addEventListener("onVolumeChange",v(this.Za,this));this.addEventListener("onApiChange",v(this.Ta,this));this.addEventListener("onPlaybackQualityChange",v(this.Va,this));this.addEventListener("onPlaybackRateChange",v(this.Wa,this));this.addEventListener("onStateChange",v(this.Xa,this))}
z(Wg,Tg);k=Wg.prototype;k.ta=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Hg(a)){var c=b;if(wa(c[0])&&!sa(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Jg.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Ig.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Kg.apply(window,c)}c=d}Y(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Hg(a)&&Vg(this,this.fa())}};
k.Oa=function(){var a=v(this.ya,this);this.g.b=a};
k.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.fa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ha(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=y()/1E3;return b};
k.Xa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());Vg(this,a)};
k.Va=function(a){Vg(this,{playbackQuality:a})};
k.Wa=function(a){Vg(this,{playbackRate:a})};
k.Ta=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);if(f){b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}else Q(Error("getOptions() returns ["+a.join(", ")+"], but getOption("+e+") returns null."))}this.sendMessage("apiInfoDelivery",b)};
k.Za=function(){Vg(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Ya=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:y()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());Vg(this,a)};
k.dispose=function(){Wg.u.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function Xg(){H.call(this);this.b=new J;ec(this,x(fc,this.b))}
z(Xg,H);Xg.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
Xg.prototype.D=function(a){return this.g?!1:this.b.D(a)};
Xg.prototype.j=function(a,b){this.g||this.b.K.apply(this.b,arguments)};function Yg(a,b,c){Xg.call(this);this.f=a;this.h=b;this.i=c}
z(Yg,Xg);function Mg(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(pc(a),d.h))}}
Yg.prototype.l=function(){this.h=this.f=null;Yg.u.l.call(this)};function Zg(a,b,c){H.call(this);this.b=a;this.h=c;this.i=Ae(window,"message",v(this.j,this));this.f=new Yg(this,a,b);ec(this,x(fc,this.f))}
z(Zg,H);Zg.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,r(a))){try{a=JSON.parse(a)}catch(d){return}a.command&&(b=this.f,b.g||b.j("command",a.command,a.data))}};
Zg.prototype.l=function(){Be(this.i);this.b=null;Zg.u.l.call(this)};function $g(){var a=Oa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie")||O("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1)||R("html5_serverside_pagead_id_sets_cookie")?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=Ta(ah);return new I(function(c,d){b.P=function(a){Td(a)?c(a):d(new bh("Request failed, status="+a.status,"net.badstatus"))};
b.onError=function(){d(new bh("Unknown request error","net.unknown"))};
b.Z=function(){d(new bh("Request timed out","net.timeout"))};
$d(a,b)})}
function bh(a,b){A.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(bh,A);function ch(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
ch.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),wc(a)?a:dh(a)):2===this.g&&b?(a=b.call(c,this.b),wc(a)?a:eh(a)):this};
ch.prototype.getValue=function(){return this.b};
vc(ch);function eh(a){var b=new ch;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function dh(a){var b=new ch;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function fh(a){A.call(this,a.message||a.description||a.name);this.isMissing=a instanceof gh;this.isTimeout=a instanceof bh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Ec}
n(fh,A);fh.prototype.name="BiscottiError";function gh(){A.call(this,"Biscotti ID is missing from server")}
n(gh,A);gh.prototype.name="BiscottiMissingError";var ah={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},hh=null;function ih(){if("1"===Oa(O("PLAYER_CONFIG",{}),"args","privembed"))return Bc(Error("Biscotti ID is not available in private embed mode"));hh||(hh=Dc($g().then(jh),function(a){return kh(2,a)}));
return hh}
function jh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new gh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new gh;a=a.id;lh(a);hh=dh(a);mh(18E5,2);return a}
function kh(a,b){var c=new fh(b);lh("");hh=eh(c);0<a&&mh(12E4,a-1);throw c;}
function mh(a,b){S(function(){Dc($g().then(jh,function(a){return kh(b,a)}),pa)},a)}
function lh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
;function nh(){}
function oh(a){if("1"!==Oa(O("PLAYER_CONFIG",{}),"args","privembed")){a&&!u("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",ih,void 0);try{try{var b=u("yt.ads.biscotti.getId_");var c=b?b():ih()}catch(d){c=Bc(d)}c.then(ph,nh);S(oh,18E5)}catch(d){Q(d)}}}
var qh=0;
function ph(a){a:{try{var b=window.top.location.href}catch(Ma){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:Hb,flash:id||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c=void 0===c?G:c;try{var d=c.history.length}catch(Ma){d=0}b.u_his=d;b.u_java=!!G.navigator&&"unknown"!==typeof G.navigator.javaEnabled&&!!G.navigator.javaEnabled&&G.navigator.javaEnabled();G.screen&&(b.u_h=G.screen.height,b.u_w=G.screen.width,b.u_ah=G.screen.availHeight,b.u_aw=G.screen.availWidth,b.u_cd=
G.screen.colorDepth);G.navigator&&G.navigator.plugins&&(b.u_nplug=G.navigator.plugins.length);G.navigator&&G.navigator.mimeTypes&&(b.u_nmime=G.navigator.mimeTypes.length);b.bid=a;b.ca_type=hd?"flash":"image";if(R("enable_server_side_search_pyv")||R("enable_server_side_mweb_search_pyv")){a=window;try{var e=a.screenX;var f=a.screenY}catch(Ma){}try{var g=a.outerWidth;var h=a.outerHeight}catch(Ma){}try{var l=a.innerWidth;var m=a.innerHeight}catch(Ma){}e=[a.screenLeft,a.screenTop,e,f,a.screen?a.screen.availWidth:
void 0,a.screen?a.screen.availTop:void 0,g,h,l,m];f=window.top;try{if(f.document&&!f.document.body)var w=new yb(-1,-1);else{var F=(f||window).document,pd="CSS1Compat"==F.compatMode?F.documentElement:F.body;w=(new yb(pd.clientWidth,pd.clientHeight)).round()}var va=w}catch(Ma){va=new yb(-12245933,-12245933)}w=0;p.SVGElement&&p.document.createElementNS&&(w|=1);va={bc:w,bih:va.height,biw:va.width,brdim:e.join(),vis:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Fb.webkitVisibilityState||Fb.mozVisibilityState||
Fb.visibilityState||""]||0,wgl:!!G.WebGLRenderingContext};for(var qd in va)b[qd]=va[qd]}b.bsq=qh++;fe("//www.youtube.com/ad_data_204",{Ca:!1,B:b})}
;var Z=u("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function rh(){this.b=O("ALT_PREF_COOKIE_NAME","PREF");var a=Nb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
rh.prototype.get=function(a,b){sh(a);th(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
rh.prototype.set=function(a,b){sh(a);th(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
rh.prototype.remove=function(a){sh(a);th(a);delete Z[a]};
rh.prototype.clear=function(){for(var a in Z)delete Z[a]};
function th(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function sh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function uh(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
qa(rh);var vh=null,wh=null,xh=null,yh={};function zh(a){Te(a.payload_name,a.payload,We,void 0,void 0)}
function Ah(a){var b=a.id;a=a.ve_type;var c=Fe++;a=new Ee(void 0,a,c,void 0,void 0);yh[b]=a;b=cf();c=bf();b&&c&&Ue(b,c,a)}
function Bh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(N("client-screen-nonce",b),N("ROOT_VE_TYPE",a),a=bf()))for(var c in yh){var d=yh[c];d&&Ue(b,a,d)}}
function Ch(a){yh[a.id]=new Ee(a.tracking_params)}
function Dh(a){var b=cf();a=yh[a.id];b&&a&&Ve(We,{click:{csn:b,visualElement:Ge(a)}})}
function Eh(a){a=a.ids;var b=cf();if(b)for(var c=0;c<a.length;c++){var d=yh[a[c]];if(d){var e=b,f=We;R("interaction_logging_on_gel_web")?Te("visualElementShown",{csn:e,ve:Ge(d),eventType:1},f):Ve(f,{visibilityUpdate:{csn:e,visualElements:[Ge(d)]}},void 0)}}}
function Fh(){var a=vh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",N,void 0);t("yt.config.set",N,void 0);t("yt.setMsg",oe,void 0);t("yt.msgs.set",oe,void 0);t("yt.logging.errors.log",me,void 0);
t("writeEmbed",function(){var a=O("PLAYER_CONFIG",void 0);oh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=O("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);O("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Y(a.args);vh=a=Fg(a);a.addEventListener("onScreenChanged",Bh);a.addEventListener("onLogClientVeCreated",Ah);a.addEventListener("onLogServerVeCreated",Ch);a.addEventListener("onLogToGel",zh);
a.addEventListener("onLogVeClicked",Dh);a.addEventListener("onLogVesShown",Eh);a.addEventListener("onReady",Fh);b=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?xh=new Wg(a):O("ENABLE_POST_API")&&r(b)&&r(c)&&(wh=new Zg(window.parent,b,c),xh=new Qg(a,wh.f));O("BG_P")&&(O("BG_I")||O("BG_IU"))&&Nd();te()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){ie(a+"mac_204?action_fcts=1");return!0},void 0);
var Gh=md(function(){bg("ol");var a=rh.getInstance(),b=!!((uh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&ic(document.body,"exp-invert-logo"))if(c&&!ic(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):ic(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&ic(document.body,"inverted-hdpi")&&jc();if(b!=c){b="f"+(Math.floor(119/31)+1);d=uh(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Z[b]:Z[b]=d.toString(16).toString();a=a.b;c=[];for(var e in Z)c.push(e+"="+encodeURIComponent(String(Z[e])));df(a,c.join("&"),63072E3)}}),Hh=md(function(){var a=vh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();O("PL_ATT")&&(Md=null);a=0;for(var b=re.length;a<b;a++)qe(re[a]);re.length=0;Kd("//static.doubleclick.net/instream/ad_status.js");se=!1;N("DCLKSTAT",0);gc(xh,wh);if(a=vh)a.removeEventListener("onScreenChanged",Bh),a.removeEventListener("onLogClientVeCreated",Ah),a.removeEventListener("onLogServerVeCreated",Ch),a.removeEventListener("onLogToGel",zh),a.removeEventListener("onLogVeClicked",Dh),a.removeEventListener("onLogVesShown",Eh),a.removeEventListener("onReady",
Fh),a.destroy();yh={}});
window.addEventListener?(window.addEventListener("load",Gh),window.addEventListener("unload",Hh)):window.attachEvent&&(window.attachEvent("onload",Gh),window.attachEvent("onunload",Hh));}).call(this);
