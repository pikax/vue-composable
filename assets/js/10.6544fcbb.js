(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{163:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return z})),n.d(t,"e",(function(){return D})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return w})),n.d(t,"i",(function(){return O})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return R})),n.d(t,"o",(function(){return _})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return S})),n.d(t,"r",(function(){return C})),n.d(t,"s",(function(){return B})),n.d(t,"t",(function(){return $})),n.d(t,"u",(function(){return q})),n.d(t,"v",(function(){return E})),n.d(t,"w",(function(){return P})),n.d(t,"x",(function(){return N})),n.d(t,"y",(function(){return s}));n(76),n(77),n(159),n(20),n(73),n(157),n(48),n(35),n(105),n(164),n(165),n(70),n(12),n(33),n(50),n(161),n(167);var r=n(187),u=n(166),a=n(37),c=(n(72),n(36)),i=n(158),o=n(43),l=n(69);function v(e){return Object(l.f)(e)?e.value:e}function s(e){return Object(l.f)(e)?e:Object(l.k)(e)}var f=Array.isArray,b=function(e){return"function"==typeof e},d=function(e){return"string"==typeof e},p=function(e){return"boolean"==typeof e},j=function(e){return"number"==typeof e},y=function(e){return null!==e&&"object"===Object(o.a)(e)},O=function(e){return y(e)&&!!e.tagName};function m(e){return y(e)&&b(e.then)&&b(e.catch)}var g=function(){},h=function(){return!1},k={passive:!0};function x(e){return new Promise((function(t){setTimeout(t,e)}))}var w="undefined"!=typeof window;function $(e){var t=s(e.currentPage),n=s(e.pageSize),r=Object(l.k)(0),u=s(e.total),a=Object(l.a)({get:function(){return r.value},set:function(e){j(e)&&(r.value=Math.min(e,u.value))}}),c=Object(l.a)({get:function(){return t.value},set:function(e){var n,r,u;j(e)&&(t.value=(n=e,r=1,u=o.value,n<r?r:n>u?u:n),a.value=(t.value-1)*i.value)}}),i=Object(l.a)({get:function(){return n.value},set:function(e){j(e)&&(n.value=e)}}),o=Object(l.a)((function(){return Math.ceil(u.value/i.value)}));c.value=t.value;return Object(l.l)([u,i],(function(){c.value>o.value&&(c.value=o.value)}),{lazy:!0}),{pageSize:i,total:u,currentPage:c,offset:a,lastPage:o,next:function(){return++c.value},prev:function(){return--c.value},first:function(){return c.value=1},last:function(){return c.value=o.value}}}function R(e,t){var n=s(e),r=$(Object(i.a)({},{currentPage:1,pageSize:10},{},t,{total:Object(l.a)((function(){return n.value.length}))})),u=Object(l.a)((function(){var e=n.value;return Array.isArray(e)?e.slice(r.offset.value,r.offset.value+r.pageSize.value):[]}));return Object(i.a)({},r,{result:u})}function E(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)throw new Error("[usePromise] argument can't be '".concat(e,"'"));if("function"!=typeof e)throw new Error("[usePromise] expects function, but received ".concat(Object(o.a)(e)));var n=Object(l.k)(!1),r=Object(l.k)(null),u=Object(l.k)(null),a=Object(l.k)(),i=function(){var i=Object(c.a)(regeneratorRuntime.mark((function c(){var i,o,l,v,s,f,b=arguments;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:for(n.value=!0,r.value=null,u.value=null,i=b.length,o=new Array(i),l=0;l<i;l++)o[l]=b[l];return v=o&&e.length!==o.length&&o.length>0&&p(o[o.length-1])?o[o.length-1]:t,s=a.value=e.apply(void 0,o),c.prev=6,c.next=9,s;case 9:return f=c.sent,a.value===s&&(u.value=f),c.abrupt("return",f);case 14:return c.prev=14,c.t0=c.catch(6),a.value===s&&(r.value=c.t0,u.value=null),c.abrupt("return",v?s:void 0);case 18:return c.prev=18,a.value===s&&(n.value=!1),c.finish(18);case 21:case"end":return c.stop()}}),c,null,[[6,14,18,21]])})));return function(){return i.apply(this,arguments)}}();return{exec:i,result:u,promise:a,loading:n,error:r}}function _(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(l.k)(!1),r=void 0,u=function(e){return r(e)},a=function(e){return new Promise((function(t,u){r=function(e){n.value=!0,u(e)},e.then(t).catch(u)}))},c=E((function(){return a(e.apply(void 0,arguments))}),t);return Object(i.a)({},c,{cancel:u,cancelled:n})}var T=Symbol(""),M=Symbol(""),A=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n,r,u){var c,i,l,v,s,f,d,p,O,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n[T].value,i=-1,l=t.maxRetries||9001,v=t.retryDelay||I,n.retryErrors.value=[],n.isRetrying.value=!1,n.nextRetry.value=void 0,s=void 0;case 8:if(f=!1,d=null,e.prev=10,++i,!m(d=u?r.apply(void 0,Object(a.a)(u)):r())){e.next=17;break}return e.next=16,d;case 16:d=e.sent;case 17:if(!n[M].value){e.next=19;break}return e.abrupt("return",null);case 19:f=!0,e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),d=null,n.retryErrors.value.push(e.t0);case 26:if(c===n[T].value){e.next=28;break}return e.abrupt("return",d);case 28:if(!f){e.next=32;break}return n.isRetrying.value=!1,n.nextRetry.value=void 0,e.abrupt("return",d);case 32:if(!(i>=l)){e.next=36;break}return n.isRetrying.value=!1,n.nextRetry.value=void 0,e.abrupt("return",Promise.reject(new Error("[useRetry] max retries reached ".concat(l))));case 36:if(n.isRetrying.value=!0,p=Date.now(),!m(O=v(i))){e.next=45;break}return e.next=42,O;case 42:e.t1=e.sent,e.next=46;break;case 45:e.t1=O;case 46:if(g=e.t1,m(O)&&!g){e.next=61;break}if(!j(g)){e.next=52;break}s=g,e.next=57;break;case 52:if(!y(h=g)||!b(h.getTime)){e.next=56;break}s=g.getTime(),e.next=57;break;case 56:throw new Error("[useRetry] invalid value received from options.retryDelay '".concat(Object(o.a)(g),"'"));case 57:if(s<p?n.nextRetry.value=p+s:(n.nextRetry.value=s,s-=p),!(s>0)){e.next=61;break}return e.next=61,x(s);case 61:if(!n[M].value){e.next=63;break}return e.abrupt("return",null);case 63:if(c===n[T].value){e.next=65;break}return e.abrupt("return",d);case 65:if(i<9e3){e.next=8;break}case 66:return e.abrupt("return",null);case 67:case"end":return e.stop()}var h}),e,null,[[10,22]])})));return function(t,n,r,u){return e.apply(this,arguments)}}();function P(e,t){var n,r=!e||b(e)?{}:e,a=b(e)?e:t;if(!b(e)&&!y(e))throw new Error("[useRetry] options needs to be 'object'");if(a&&!b(a))throw new Error("[useRetry] factory needs to be 'function'");var c=Object(l.k)(!1),o=Object(l.k)(),v=Object(l.k)([]),s={value:!1},f=(n={isRetrying:c,retryCount:Object(l.a)((function(){return v.value.length})),nextRetry:o,retryErrors:v},Object(u.a)(n,T,{value:0}),Object(u.a)(n,M,s),n),d=a?function(){++f[T].value;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return A(r,f,a,t)}:function(e){return++f[T].value,A(r,f,e,void 0)};return Object(i.a)({},f,{cancel:function(){f.isRetrying.value=!1,f.retryErrors.value.push(new Error("[useRetry] cancelled")),f.nextRetry.value=void 0,s.value=!0},exec:d})}var D=function(e){var t=100*Math.pow(2,e);return t+.2*t*Math.random()},I=function(){return 0};function S(e,t,n){return z(e,t,n)}function z(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];var i=this,o=function(){t=void 0,r.isImmediate||e.apply(i,a)},l=r.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(o,n),l&&e.apply(i,a)}}function B(e){var t=e&&e.refreshMs||1e3,n=!e||!p(e.sync)||e.sync,r=e&&b(e.timeFn)&&e.timeFn||Date.now;var u=void 0,a=void 0,c=Object(l.k)(r()),i=function(){clearInterval(u),clearTimeout(a)},o=w?function(){return u=setInterval((function(){return c.value=r()}),t)}:g;if(n){var v=1e3-(c.value-1e3*Math.floor(c.value/1e3));a=setTimeout(o,v)}else o();return Object(l.h)(i),{now:c,remove:i}}function F(e){return B({refreshMs:e&&e.refreshMs||1e3,sync:!e||!p(e.sync)||e.sync,timeFn:Date.now})}function q(e){return B({refreshMs:e&&e.refreshMs||1e3,sync:!e||!p(e.sync)||e.sync,timeFn:function(){return performance.now()}})}function C(e,t){return Object(l.a)((function(){var n=Object(l.f)(t)?Object(l.j)(t.value):Object(l.j)(t);return v(e).replace(/({?{[\w\s]*}?})/g,(function(e){var t=e.replace("{","").replace("}","").trim();if(e[0]===e[1]&&"{"===e[0])return"".concat(t);var r=f(n)?n[+t]:n[t];return void 0===r?e:"".concat(v(r))}))}))}function J(e){return void 0!==e.$value}var G=function(e,t,n){var u=function(e){return y(e)}(t)?t:{$validator:t,$message:""},a=u.$message,o=u.$validator,v=Object(r.a)(u,["$message","$validator"]),s=function(e,t,n){var r=Object(l.k)(null),u=Object(l.k)(!1),a=Object(l.k)(),i=Object(l.k)(!1),o=void 0,v=function(e){var n=function(){var n=Object(c.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,u.value=!0,!m(r=t(e,o))){n.next=9;break}return n.next=6,r;case 6:i.value=!n.sent,n.next=10;break;case 9:i.value=!r;case 10:n.next=16;break;case 12:throw n.prev=12,n.t0=n.catch(0),i.value=!0,n.t0;case 16:return n.prev=16,u.value=!1,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[0,12,16,19]])})));return function(){return n.apply(this,arguments)}}();r.value=n().catch((function(e){return a.value=e,i.value=!0,e}))};return n.push((function(n){o=n,Object(l.l)((function(){try{t(e.value,o)}catch(e){}return e.value}),v,{deep:!0})})),{$promise:r,$pending:u,$invalid:i,$error:a}}(e,o,n),f=s.$pending,b=s.$promise,d=s.$invalid,p=s.$error;return Object(i.a)({$pending:f,$error:p,$promise:b,$invalid:d,$message:a},v)};function N(e){var t=[],n=function e(t,n){for(var r={},u=J(t)?t.$value:void 0,a=0,c=Object.keys(t);a<c.length;a++){var o=c[a];if("$"===o[0]){if("$value"!==o){r[o]=t[o];continue}if("continue"===function(){r[o]=u;var e=Object(l.k)(!1),t=Object(l.l)(u,(function(){e.value=!0,t()}),{lazy:!0,deep:!0});return r.$dirty=e,"continue"}())continue}if(u){var v=G(u,t[o],n);r[o]=Object(i.a)({},v,{$value:u})}else!function(){var u=e(t[o],n),a=void 0,c=void 0,v=void 0;if(J(u)){var s=Object.keys(u).filter((function(e){return"$"!==e[0]})).map((function(e){return u[e]}));c=Object(l.a)((function(){return s.map((function(e){return e.$error})).filter((function(e){return Boolean(e)&&Array.isArray(e)?e.some(Boolean):e}))})),v=Object(l.a)((function(){return s.some((function(e){return!!e.$invalid}))}))}else{var f=Object.keys(u).map((function(e){return u[e]}));c=Object(l.a)((function(){return f.map((function(e){return e.$errors})).filter(Boolean).filter((function(e){return e.some(Boolean)}))})),a=Object(l.a)((function(){return f.some((function(e){return e.$anyDirty&&e.$anyDirty||p(e.$dirty)&&e.$dirty}))})),v=Object(l.a)((function(){return f.some((function(e){return!!e.$anyInvalid}))}))}r[o]=Object(i.a)({},u,{$errors:c,$anyInvalid:v}),a&&(r[o].$anyDirty=a)}()}return r}({input:e},t),r=Object(l.j)(n.input);return t.forEach((function(e){return e(r)})),r}},257:function(e,t,n){"use strict";n.r(t);n(33);var r=n(69),u=n(158),a=(n(72),n(36)),c=n(236),i=n.n(c),o=n(163);var l={name:"axios-example",setup:function(){var e=Object(r.k)(1),t=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c=Object(o.l)(e)||Object(o.g)(e)?Object(o.k)(t)?t:void 0:e;n=Object(o.g)(e)?e:Object(o.g)(t)?t:n;var l=i.a.create(c),v=Object(r.a)((function(){return l})),s=Object(r.k)(!1),f=Object(r.k)(null),b=void 0,d=function(e){b&&(b.cancel(e),s.value=!0,f.value=e)},p=Object(o.v)(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=i.a.CancelToken.source(),s.value=!1,f.value=null,n=Object(o.l)(t)?{url:t}:t,e.abrupt("return",l.request(Object(u.a)({cancelToken:b.token},n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n),j=Object(r.a)((function(){return p.result.value&&p.result.value.data||p.error.value&&p.error.value.response&&p.error.value.response.data||null})),y=Object(r.a)((function(){return p.result.value&&p.result.value.status||p.error.value&&p.error.value.response&&p.error.value.response.status||null})),O=Object(r.a)((function(){return p.result.value&&p.result.value.statusText||p.error.value&&p.error.value.response&&p.error.value.response.statusText||null}));return"string"==typeof e?p.exec(Object(u.a)({},c,{url:e}),!1):c&&c.url&&p.exec(c,!1),Object(u.a)({},p,{client:v,data:j,status:y,statusText:O,cancel:d,isCancelled:s,cancelledMessage:f})}(),n=t.data,c=t.loading,l=t.exec,v=(t.error,t.status);return Object(r.l)(e,(function(e){l({method:"GET",url:"https://reqres.in/api/user/"+e})})),{id:e,data:n,loading:c,status:v}}},v=n(19),s=Object(v.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("current Id "+e._s(e.id))]),e._v(" "),n("p",[n("button",{on:{click:function(t){e.id--}}},[e._v("prev")]),e._v(" "),n("button",{on:{click:function(t){e.id++}}},[e._v("next")])]),e._v(" "),e.loading?n("p",[e._v("loading...")]):n("div",[n("p",[e._v("Status: "+e._s(e.status))]),e._v("\n    "+e._s(e.data)+"\n  ")])])}),[],!1,null,null,null);t.default=s.exports}}]);