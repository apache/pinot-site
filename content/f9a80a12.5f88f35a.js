/*! For license information please see f9a80a12.5f88f35a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),o=(n(0),n(188)),i=n(214),l=n(213),c={title:"Running Pinot in Docker",sidebar_label:"Docker",description:"Using Pinot on Docker",source_url:"https://github.com/"},b={id:"administration/installation/containers/docker",title:"Running Pinot in Docker",description:"Using Pinot on Docker",source:"@site/docs/administration/installation/containers/docker.md",permalink:"/docs/administration/installation/containers/docker",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/containers/docker.md",sidebar_label:"Docker",sidebar:"docs",previous:{title:"Running Pinot locally",permalink:"/docs/administration/running_locally"},next:{title:"Running Pinot in Kubernetes",permalink:"/docs/administration/installation/cloud/on-premise"}},p=[{value:"Running",id:"running",children:[]}],u={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apache Pinot started maintaing the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/apachepinot/pinot"}),Object(o.b)("inlineCode",{parentName:"a"},"apachepinot/pinot"))," Docker images\navailable on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/apachepinot/pinot/tags"}),"Docker Hub")),Object(o.b)("blockquote",null,Object(o.b)("b",null,"Prerequisites:")," ",Object(o.b)("br",null)," ",Object(o.b)("p",null,"\xa0 ",Object(o.b)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Install Docker"),Object(o.b)("br",null)," \xa0Try ",Object(o.b)("a",{href:"https://hub.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank"},"Kubernetes Quickstart")," if you already have a minikube cluster or docker kubernetes setup.")),Object(o.b)("h2",{id:"running"},"Running"),Object(o.b)("p",null,"Create an isolated bridge network in docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker network create -d bridge pinot-demo\n")),Object(o.b)("p",null,"We'll be running a docker image apachepinot/pinot:latest to run a quick start, which does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sets up the Pinot cluster QuickStartCluster"),Object(o.b)("li",{parentName:"ul"},"Creates a sample table and loads sample data")),Object(o.b)("p",null,"There's 3 types of quick start"),Object(o.b)(i.a,{block:!0,defaultValue:"Batch",urlKey:"arch",values:[{label:"Batch",value:"Batch"},{label:"Streaming",value:"Streaming"},{label:"Hybrid",value:"Hybrid"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"Batch",mdxType:"TabItem"},Object(o.b)("p",null,"Batch"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Apache Zookeeper"),Object(o.b)("li",{parentName:"ul"},"Pinot Controller"),Object(o.b)("li",{parentName:"ul"},"Pinot Broker"),Object(o.b)("li",{parentName:"ul"},"Pinot Server"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Creates a demo table:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"baseballStats"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"build one Pinot segment for a given csv data file for table baseballStats"),Object(o.b)("li",{parentName:"ul"},"push built segment to Pinot controller"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Issues sample queries to Pinot"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n  --network=pinot-demo \\\n  --name pinot-quickstart \\\n  -p 9000:9000 \\\n  -d apachepinot/pinot:latest QuickStart \\\n  -type batch\n"))))),Object(o.b)(l.a,{value:"Streaming",mdxType:"TabItem"},Object(o.b)("p",null,"Streaming:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Apache Kafka"),Object(o.b)("li",{parentName:"ul"},"Apache Zookeeper"),Object(o.b)("li",{parentName:"ul"},"Pinot Controller"),Object(o.b)("li",{parentName:"ul"},"Pinot Broker"),Object(o.b)("li",{parentName:"ul"},"Pinot Server"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Creates a demo table: ",Object(o.b)("strong",{parentName:"p"},"meetupRsvp"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launches a ",Object(o.b)("strong",{parentName:"p"},"meetup")," stream and publish data to a Kafka: ",Object(o.b)("strong",{parentName:"p"},"meetupRSVPEvents")," to be subscribed by Pinot")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Issues sample queries to Pinot")))),Object(o.b)(l.a,{value:"Hybrid",mdxType:"TabItem"},Object(o.b)("p",null,"Hybrid:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Starts Pinot deployment by starting:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Apache Kafka"),Object(o.b)("li",{parentName:"ul"},"Apache Zookeeper"),Object(o.b)("li",{parentName:"ul"},"Pinot Controller"),Object(o.b)("li",{parentName:"ul"},"Pinot Broker"),Object(o.b)("li",{parentName:"ul"},"Pinot Server"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Creates a demo table: ",Object(o.b)("strong",{parentName:"p"},"airlineStats"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launches a standalone data ingestion job:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"build Pinot segments under a given directory of Avro files for table airlineStats"),Object(o.b)("li",{parentName:"ul"},"push built segments to Pinot controller"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launches a stream of flights stats and publish data to a Kafka topic airlineStatsEvents to be subscribed by Pinot")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Issues sample queries to Pinot"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Stop previous container, if any, or use different network\ndocker run \\\n    --network=pinot-demo \\\n    --name pinot-quickstart \\\n    -p 9000:9000 \\\n    -d apachepinot/pinot:latest QuickStart \\\n    -type hybrid\n")))),Object(o.b)("p",null,"That's it! We've spun up a Pinot cluster."),Object(o.b)("p",null,"It may take a while for all Pinot components to start and for the sample data to be loaded. Use the below command to check the container logs"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker logs pinot-quickstart -f\n")),Object(o.b)("p",null,"You can head over to  Exploring Pinot to check out the data in the ",Object(o.b)("inlineCode",{parentName:"p"},"baseballStats"),", ",Object(o.b)("inlineCode",{parentName:"p"},"meetupRSVP")," or the ",Object(o.b)("inlineCode",{parentName:"p"},"airlineStats")," table."))}s.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||o;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},189:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},212:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},213:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},214:function(e,t,n){"use strict";n(29),n(21),n(20);var a=n(0),r=n.n(a),o=n(212);var i=function(){return Object(a.useContext)(o.a)},l=n(189),c=n.n(l),b=n(129),p=n.n(b),u=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,l=e.values,b=e.groupId,m=i(),d=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(o),f=j[0],h=j[1];if(null!=b){var g=d[b];null!=g&&g!==f&&h(g)}var N=function(e){h(e),null!=b&&O(b,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===t,className:c()("tabs__item",p.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return N(t)},onClick:function(){return N(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}}}]);