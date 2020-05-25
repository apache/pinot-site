/*! For license information please see e8193bc1.4b181650.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{177:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return l}));var r=n(2),o=n(9),i=(n(0),n(188)),a=n(207),c={title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0},u={id:"administration",title:"Adminstration",description:"Adminstration",source:"@site/docs/administration.md",permalink:"/docs/administration",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration.md",sidebar_label:"hidden"},s=[],f={rightToc:s};function l(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Provide basic foundation of Pinot."),Object(i.b)(a.a,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"Running Pinot locally"),Object(i.b)(a.a,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),Object(i.b)(a.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}l.isMDXComponent=!0},188:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),f=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=f(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),l=f(n),b=r,y=l["".concat(a,".").concat(b)]||l[b]||p[b]||i;return n?o.a.createElement(y,c(c({ref:e},s),{},{components:n})):o.a.createElement(y,c({ref:e},s))}));function y(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},189:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&t.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},190:function(t,e){e.f=Object.getOwnPropertySymbols},191:function(t,e,n){var r=n(76),o=n(53).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},192:function(t,e,n){e.f=n(3)},193:function(t,e,n){"use strict";n(196),n(195),n(202);var r=n(0),o=n.n(r),i=n(39),a=n(194),c=n(27),u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};e.a=function(t){var e,n=t.isNavLink,s=u(t,["isNavLink"]),f=s.to,l=s.href,p=f||l,b=Object(a.a)(p),y=Object(r.useRef)(!1),m=n?i.c:i.b,d=c.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&b&&window.docusaurus.prefetch(p),function(){d&&e&&e.disconnect()}}),[p,d,b]),p&&b&&!p.startsWith("#")?o.a.createElement(m,Object.assign({},s,{onMouseEnter:function(){y.current||(window.docusaurus.preload(p),y.current=!0)},innerRef:function(t){var n,r;d&&t&&b&&(n=t,r=function(){window.docusaurus.prefetch(p)},(e=new window.IntersectionObserver((function(t){t.forEach((function(t){n===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(e.unobserve(n),e.disconnect(),r())}))}))).observe(n))},to:p})):o.a.createElement("a",Object.assign({},s,{href:p}))}},194:function(t,e,n){"use strict";function r(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}n.d(e,"a",(function(){return r}))},195:function(t,e,n){"use strict";var r=n(17),o=n(38),i=n(197),a="".startsWith;r(r.P+r.F*n(198)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return a?a.call(e,r,n):e.slice(n,n+r.length)===r}})},196:function(t,e,n){var r=n(17);r(r.S+r.F,"Object",{assign:n(201)})},197:function(t,e,n){var r=n(72),o=n(28);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},198:function(t,e,n){var r=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},199:function(t,e,n){var r=n(70),o=n(52),i=n(25),a=n(71),c=n(24),u=n(74),s=Object.getOwnPropertyDescriptor;e.f=n(11)?s:function(t,e){if(t=i(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},200:function(t,e,n){var r=n(19);t.exports=Array.isArray||function(t){return"Array"==r(t)}},201:function(t,e,n){"use strict";var r=n(11),o=n(26),i=n(190),a=n(70),c=n(51),u=n(73),s=Object.assign;t.exports=!s||n(18)((function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r}))?function(t,e){for(var n=c(t),s=arguments.length,f=1,l=i.f,p=a.f;s>f;)for(var b,y=u(arguments[f++]),m=l?o(y).concat(l(y)):o(y),d=m.length,h=0;d>h;)b=m[h++],r&&!p.call(y,b)||(n[b]=y[b]);return n}:s},202:function(t,e,n){"use strict";var r=n(6),o=n(24),i=n(11),a=n(17),c=n(13),u=n(203).KEY,s=n(18),f=n(40),l=n(41),p=n(37),b=n(3),y=n(192),m=n(204),d=n(205),h=n(200),v=n(8),g=n(12),O=n(51),j=n(25),w=n(71),E=n(52),S=n(75),P=n(206),x=n(199),N=n(190),T=n(23),k=n(26),F=x.f,A=T.f,D=P.f,_=r.Symbol,J=r.JSON,W=J&&J.stringify,I=b("_hidden"),M=b("toPrimitive"),C={}.propertyIsEnumerable,R=f("symbol-registry"),K=f("symbols"),L=f("op-symbols"),X=Object.prototype,z="function"==typeof _&&!!N.f,U=r.QObject,Y=!U||!U.prototype||!U.prototype.findChild,q=i&&s((function(){return 7!=S(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=F(X,e);r&&delete X[e],A(t,e,n),r&&t!==X&&A(X,e,r)}:A,G=function(t){var e=K[t]=S(_.prototype);return e._k=t,e},Q=z&&"symbol"==typeof _.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof _},B=function(t,e,n){return t===X&&B(L,e,n),v(t),e=w(e,!0),v(n),o(K,e)?(n.enumerable?(o(t,I)&&t[I][e]&&(t[I][e]=!1),n=S(n,{enumerable:E(0,!1)})):(o(t,I)||A(t,I,E(1,{})),t[I][e]=!0),q(t,e,n)):A(t,e,n)},H=function(t,e){v(t);for(var n,r=d(e=j(e)),o=0,i=r.length;i>o;)B(t,n=r[o++],e[n]);return t},V=function(t){var e=C.call(this,t=w(t,!0));return!(this===X&&o(K,t)&&!o(L,t))&&(!(e||!o(this,t)||!o(K,t)||o(this,I)&&this[I][t])||e)},Z=function(t,e){if(t=j(t),e=w(e,!0),t!==X||!o(K,e)||o(L,e)){var n=F(t,e);return!n||!o(K,e)||o(t,I)&&t[I][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=D(j(t)),r=[],i=0;n.length>i;)o(K,e=n[i++])||e==I||e==u||r.push(e);return r},tt=function(t){for(var e,n=t===X,r=D(n?L:j(t)),i=[],a=0;r.length>a;)!o(K,e=r[a++])||n&&!o(X,e)||i.push(K[e]);return i};z||(c((_=function(){if(this instanceof _)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===X&&e.call(L,n),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),q(this,t,E(1,n))};return i&&Y&&q(X,t,{configurable:!0,set:e}),G(t)}).prototype,"toString",(function(){return this._k})),x.f=Z,T.f=B,n(191).f=P.f=$,n(70).f=V,N.f=tt,i&&!n(36)&&c(X,"propertyIsEnumerable",V,!0),y.f=function(t){return G(b(t))}),a(a.G+a.W+a.F*!z,{Symbol:_});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var rt=k(b.store),ot=0;rt.length>ot;)m(rt[ot++]);a(a.S+a.F*!z,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=_(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!z,"Object",{create:function(t,e){return void 0===e?S(t):H(S(t),e)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=s((function(){N.f(1)}));a(a.S+a.F*it,"Object",{getOwnPropertySymbols:function(t){return N.f(O(t))}}),J&&a(a.S+a.F*(!z||s((function(){var t=_();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!Q(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,W.apply(J,r)}}),_.prototype[M]||n(10)(_.prototype,M,_.prototype.valueOf),l(_,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},203:function(t,e,n){var r=n(37)("meta"),o=n(12),i=n(24),a=n(23).f,c=0,u=Object.isExtensible||function(){return!0},s=!n(18)((function(){return u(Object.preventExtensions({}))})),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},onFreeze:function(t){return s&&l.NEED&&u(t)&&!i(t,r)&&f(t),t}}},204:function(t,e,n){var r=n(6),o=n(14),i=n(36),a=n(192),c=n(23).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},205:function(t,e,n){var r=n(26),o=n(190),i=n(70);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,c=n(t),u=i.f,s=0;c.length>s;)u.call(t,a=c[s++])&&e.push(a);return e}},206:function(t,e,n){var r=n(25),o=n(191).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(e){return a.slice()}}(t):o(r(t))}},207:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(193),a=n(189),c=n.n(a);n(127);e.a=function(t){var e=t.children,n=t.className,r=t.badge,a=t.icon,u=t.size,s=t.target,f=t.to,l=c()("jump-to","jump-to--"+u,n),p=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(a||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:f,target:s,className:l},p):o.a.createElement(i.a,{to:f,className:l},p)}}}]);