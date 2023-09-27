/*! For license information please see e8193bc1.972b0555.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2362],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[f]="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3366),i=n(7294),o=n(3727),a=n(9962),u=n(2735),c=n(6136),s=(0,i.createContext)({collectLink:function(){}}),l=function(){return(0,i.useContext)(s)},f=n(9524),d=n(3905),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"],m=function(e){return e.startsWith("/")};var v=function(e){var t,n,s=e.isNavLink,v=e.to,b=e.href,h=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,w=void 0===O||O,j=(0,r.Z)(e,p),P=(0,a.Z)().siteConfig.trailingSlash,k=(0,f.C)().withBaseUrl,E=l(),_=v||b,C=(0,u.Z)(_),N=null==_?void 0:_.replace("pathname://",""),x=void 0!==N?(n=N,w&&m(n)?k(n):n):void 0;x&&C&&(x=(0,d.applyTrailingSlash)(x,P));var Z,A=(0,i.useRef)(!1),T=s?o.OL:o.rU,S=c.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!S&&C&&null!=x&&window.docusaurus.prefetch(x),function(){S&&Z&&Z.disconnect()}}),[x,S,C]);var D=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,M=!x||!C||D;return x&&C&&!D&&!g&&E.collectLink(x),M?i.createElement("a",Object.assign({href:x},_&&!C&&{target:"_blank",rel:"noopener noreferrer"},j)):i.createElement(T,Object.assign({},j,{onMouseEnter:function(){A.current||null==x||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(e){var t,n;S&&e&&C&&(t=e,n=function(){null!=x&&window.docusaurus.prefetch(x)},(Z=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(Z.unobserve(t),Z.disconnect(),n())}))}))).observe(t))},to:x||""},s&&{isActive:y,activeClassName:h}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{Z:function(){return i},b:function(){return r}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return a}});var r=n(9962),i=n(2735);function o(){var e=(0,r.Z)().siteConfig,t=void 0===e?{}:e,n=t.baseUrl,o=void 0===n?"/":n,a=t.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,o,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var n,r=e.split(/[#?]/)[0],i="/"===r?"/":t?(n=r).endsWith("/")?n:n+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(r);return e.replace(r,i)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9342:function(e,t,n){"use strict";var r=n(7294),i=n(2511),o=n(4184),a=n.n(o);t.Z=function(e){var t=e.children,n=e.className,o=e.badge,u=e.icon,c=e.size,s=e.target,l=e.to,f=a()("jump-to","jump-to--"+c,n),d=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},o?r.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return s?r.createElement("a",{href:l,target:s,className:f},d):r.createElement(i.Z,{to:l,className:f},d)}},1450:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=n(9342),u=["components"],c={title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0},s=void 0,l={unversionedId:"administration",id:"administration",isDocsHomePage:!1,title:"Adminstration",description:"Adminstration",source:"@site/docs/administration.md",sourceDirName:".",slug:"/administration",permalink:"/docs/administration",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration.md",version:"current",frontMatter:{title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0}},f=[],d={toc:f},p="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provide basic foundation of Pinot."),(0,o.kt)(a.Z,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"Running Pinot locally"),(0,o.kt)(a.Z,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),(0,o.kt)(a.Z,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);