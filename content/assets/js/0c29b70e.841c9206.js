"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3583],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=n,h=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},672:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var r=a(7462),n=a(3366),o=(a(7294),a(4137)),i=["components"],l={title:"Real-time Analytics with Presto and Apache Pinot",author:"PinotDev",author_title:"Pinot Editorial Team",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://www.startree.ai/wp-content/uploads/2021/05/team-xiang-150x150.jpg",description:"Blog gives an overview of our use of Apache Pinot to solve some of biggest challenges around Data Analytics in Large Retail Chain",keywords:["Pinot","LinkedIn","Trino","Presto","User-Facing Analytics","Real-time data platform"],tags:["Pinot","Presto","Trino","PrestoSQL","DevBlog","ThirdEye","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},s=void 0,p={permalink:"/blog/2021/02/02/DevBlog-PrestoPinot",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2021-02-02-DevBlog-PrestoPinot.md",source:"@site/blog/2021-02-02-DevBlog-PrestoPinot.md",title:"Real-time Analytics with Presto and Apache Pinot",description:"Blog gives an overview of our use of Apache Pinot to solve some of biggest challenges around Data Analytics in Large Retail Chain",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"Presto",permalink:"/blog/tags/presto"},{label:"Trino",permalink:"/blog/tags/trino"},{label:"PrestoSQL",permalink:"/blog/tags/presto-sql"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"ThirdEye",permalink:"/blog/tags/third-eye"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.31,truncated:!1,authors:[{name:"PinotDev",title:"Pinot Editorial Team",url:"https://medium.com/apache-pinot-developer-blog",imageURL:"https://www.startree.ai/wp-content/uploads/2021/05/team-xiang-150x150.jpg"}],prevItem:{title:"Introduction to Upserts in Apache Pinot",permalink:"/blog/2021/04/08/DevBlog-UpsertsIntro"},nextItem:{title:"Change Data Analysis with Debezium and Apache Pinot",permalink:"/blog/2021/01/08/DevBlog-DebeziumCDC"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function g(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this world, most analytics products either focus on ad-hoc analytics, which requires query flexibility without guaranteed latency, or low latency analytics with limited query capability. In this blog, we will explore how to get the best of both worlds using Apache Pinot and Presto."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.startree.ai/blogs/real-time-analytics-with-presto-and-apache-pinot-part-i/"},"Read Part 1 at https://www.startree.ai/blogs/real-time-analytics-with-presto-and-apache-pinot-part-i/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.startree.ai/blogs/real-time-analytics-with-presto-and-apache-pinot-part-ii/"},"Read Part 2 at https://www.startree.ai/blogs/real-time-analytics-with-presto-and-apache-pinot-part-ii/")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*hJc6aV9aBJaKyXcx",alt:"Real-time Analytics with Presto and Apache Pinot"})))}g.isMDXComponent=!0}}]);