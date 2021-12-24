/*! For license information please see e8193bc1.d5ede4fc.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2362],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9342:function(e,t,n){"use strict";var r=n(7294),i=n(3699),o=n(4184),a=n.n(o);t.Z=function(e){var t=e.children,n=e.className,o=e.badge,c=e.icon,s=e.size,u=e.target,p=e.to,l=a()("jump-to","jump-to--"+s,n),m=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},o?r.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.createElement("a",{href:p,target:u,className:l},m):r.createElement(i.Z,{to:p,className:l},m)}},3887:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),a=n(9342),c=["components"],s={title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0},u=void 0,p={unversionedId:"administration",id:"administration",title:"Adminstration",description:"Adminstration",source:"@site/docs/administration.md",sourceDirName:".",slug:"/administration",permalink:"/docs/administration",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration.md",tags:[],version:"current",frontMatter:{title:"Adminstration",description:"Adminstration",sidebar_label:"hidden",hide_pagination:!0,draft:!0}},l=[],m={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provide basic foundation of Pinot."),(0,o.kt)(a.Z,{to:"/docs/about/what_is_pinot/",mdxType:"Jump"},"Running Pinot locally"),(0,o.kt)(a.Z,{to:"/docs/about/features_of_pinot/",mdxType:"Jump"},"Features of Pinot"),(0,o.kt)(a.Z,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Who is using Pinot?"))}f.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);