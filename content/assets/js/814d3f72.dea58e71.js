"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1873],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9345:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return m},default:function(){return b}});var a=r(7462),n=r(3366),o=(r(7294),r(4137)),i=["components"],l={title:"Automating Merchant Live Monitoring with Real-Time Analytics - Charon",author:"Uber",author_title:"Uber Data Team",author_url:"https://eng.uber.com/category/articles/uberdata/",author_image_url:"https://pbs.twimg.com/profile_images/1192909783856103427/6A4s8gW2_400x400.png",description:"Focus on Uber\u2019s real-time data platform components to build a tool called Charon to reduce impact of poor marketplace reliability on the merchants.",keywords:["Pinot","Uber Data","User-Facing Analytics","Real-time data platform"],tags:["Pinot","Uber","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},c=void 0,p={permalink:"/blog/2021/04/29/Uber-Charon",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2021-04-29-Uber-Charon.md",source:"@site/blog/2021-04-29-Uber-Charon.md",title:"Automating Merchant Live Monitoring with Real-Time Analytics - Charon",description:"Focus on Uber\u2019s real-time data platform components to build a tool called Charon to reduce impact of poor marketplace reliability on the merchants.",date:"2021-04-29T00:00:00.000Z",formattedDate:"April 29, 2021",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Uber",permalink:"/blog/tags/uber"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.72,truncated:!1,authors:[{name:"Uber",title:"Uber Data Team",url:"https://eng.uber.com/category/articles/uberdata/",imageURL:"https://pbs.twimg.com/profile_images/1192909783856103427/6A4s8gW2_400x400.png"}],prevItem:{title:"Introduction to Geospatial Queries in Apache Pinot",permalink:"/blog/2021/06/13/DevBlog-Geospatial"},nextItem:{title:"Deploying Apache Pinot at a Large Retail Chain",permalink:"/blog/2021/04/27/DevBlog-PinotInRetailChain"}},s={authorsImageUrls:[void 0]},m=[],u={toc:m};function b(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At Uber, live monitoring and automation of Ops is critical to preserve marketplace health, maintain reliability, and gain efficiency in markets. By the virtue of the word \u201clive\u201d, this monitoring needs to show what is happening now, with prompt access to fresh data, and the ability to recommend appropriate actions based on that data. Uber\u2019s data platform provides the self-serve tools which empower the Ops teams to build their own live monitoring tools, and support their regional teams by building rich solutions."),(0,o.kt)("p",null,"For this project, the requirement was to provide merchant level monitoring and handle the edge cases which remain unaddressed by the sophisticated internal marketplace management tools. We used a variety of Uber\u2019s real-time data platform components to build a tool called Charon to reduce impact of poor marketplace reliability on the merchants."),(0,o.kt)("p",null,"Read More at ",(0,o.kt)("a",{parentName:"p",href:"https://eng.uber.com/charon/"},"https://eng.uber.com/charon/")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/deliverDoor@3x-768x263.png",alt:"Operating Apache Pinot at Uber Scale"})))}b.isMDXComponent=!0}}]);