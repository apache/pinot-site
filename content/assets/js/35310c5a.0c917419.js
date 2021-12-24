/*! For license information please see 35310c5a.0c917419.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5924],{4137:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||s;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<s;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8448:function(e,n,t){"use strict";var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},7225:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r=t(7462),a=t(7294),s=t(1048),o=t(2713);var l=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(1297),u=t(6010),c="tabItem_vU9c";function m(e){var n,t,s,o=e.lazy,m=e.block,d=e.defaultValue,p=e.values,f=e.groupId,g=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=h[0])?void 0:s.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,S=k.setTabGroupChoices,T=(0,a.useState)(v),w=T[0],O=T[1],E=[],q=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=N[f];null!=x&&x!==w&&b.some((function(e){return e.value===x}))&&O(x)}var D=function(e){var n=e.currentTarget,t=E.indexOf(n),r=b[t].value;r!==w&&(q(n),O(r),null!=f&&S(f,r))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;t=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},g)},b.map((function(e){var n=e.value,t=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:D,onClick:D},s,{className:(0,u.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,s.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},6261:function(e,n,t){"use strict";var r=t(7294),a=t(4184),s=t.n(a);n.Z=function(e){var n=e.children,t=e.classNames,a=e.fill,o=e.icon,l=e.type,i=null;switch(l){case"danger":case"warning":i="alert-triangle";break;case"success":i="check-circle";break;default:i="info"}return r.createElement("div",{className:s()(t,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.createElement("i",{className:s()("feather","icon-"+(o||i))}),n)}},2:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return g}});var r=t(7462),a=t(3366),s=(t(7294),t(4137)),o=t(6261),l=t(7225),i=t(8448),u=["components"],c={title:"Response Format",sidebar_label:"rest",description:"REST Response Format",draft:!0},m=void 0,d={unversionedId:"user-guide/response-format",id:"user-guide/response-format",title:"Response Format",description:"REST Response Format",source:"@site/docs/user-guide/response-format.md",sourceDirName:"user-guide",slug:"/user-guide/response-format",permalink:"/docs/user-guide/response-format",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/user-guide/response-format.md",tags:[],version:"current",frontMatter:{title:"Response Format",sidebar_label:"rest",description:"REST Response Format",draft:!0}},p=[{value:"Standard-SQL response",id:"standard-sql-response",children:[],level:2},{value:"PQL response",id:"pql-response",children:[],level:2}],f={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"standard-sql-response"},"Standard-SQL response"),(0,s.kt)("p",null,"Response is returned in a SQL-like tabular structure. Note, this is the response returned from the standard-SQL endpoint. For PQL endpoint response, skip to ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-guide/response-format"},"PQL endpoint response\u200b")),(0,s.kt)(l.Z,{block:!0,defaultValue:"Aggregations",urlKey:"arch",values:[{label:"Selections",value:"Selections"},{label:"Aggregations",value:"Aggregations"},{label:"GroupBy",value:"GroupBy"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Selections",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'$ curl -H "Content-Type: application/json" -X POST \\\n   -d \'{"sql":"SELECT moo, bar, foo FROM myTable ORDER BY foo DESC"}\' \\\n   http://localhost:8099/query/sql\n{\n  "exceptions": [],\n  "minConsumingFreshnessTimeMs": 0,\n  "numConsumingSegmentsQueried": 0,\n  "numDocsScanned": 6,\n  "numEntriesScannedInFilter": 0,\n  "numEntriesScannedPostFilter": 18,\n  "numGroupsLimitReached": false,\n  "numSegmentsMatched": 2,\n  "numSegmentsProcessed": 2,\n  "numSegmentsQueried": 2,\n  "numServersQueried": 1,\n  "numServersResponded": 1,\n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "LONG",\n        "INT",\n        "STRING"\n      ],\n      "columnNames": [\n        "moo",\n        "bar",\n        "foo"\n      ]\n    },\n    "rows": [\n      [\n        40015,\n        2019,\n        "xyz"\n      ],\n      [\n        1002,\n        2001,\n        "pqr"\n      ],\n      [\n        20555,\n        1988,\n        "pqr"\n      ],\n      [\n        203,\n        2010,\n        "pqr"\n      ],\n      [\n        500,\n        2008,\n        "abc"\n      ],\n      [\n        60,\n        2003,\n        "abc"\n      ]\n    ]\n  },\n  "segmentStatistics": [],\n  "timeUsedMs": 4,\n  "totalDocs": 6,\n  "traceInfo": {}\n}\n'))),(0,s.kt)(i.Z,{value:"Aggregations",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'$ curl -X POST \\\n  -d \'{"sql":"SELECT SUM(moo), MAX(bar), COUNT(*) FROM myTable"}\' \\\n  localhost:8099/query/sql -H "Content-Type: application/json"\n{\n  "exceptions": [],\n  "minConsumingFreshnessTimeMs": 0,\n  "numConsumingSegmentsQueried": 0,\n  "numDocsScanned": 6,\n  "numEntriesScannedInFilter": 0,\n  "numEntriesScannedPostFilter": 12,\n  "numGroupsLimitReached": false,\n  "numSegmentsMatched": 2,\n  "numSegmentsProcessed": 2,\n  "numSegmentsQueried": 2,\n  "numServersQueried": 1,\n  "numServersResponded": 1,\n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "DOUBLE",\n        "DOUBLE",\n        "LONG"\n      ],\n      "columnNames": [\n        "sum(moo)",\n        "max(bar)",\n        "count(*)"\n      ]\n    },\n    "rows": [\n      [\n        62335,\n        2019.0,\n        6\n      ]\n    ]\n  },\n  "segmentStatistics": [],\n  "timeUsedMs": 87,\n  "totalDocs": 6,\n  "traceInfo": {}\n}\n'))),(0,s.kt)(i.Z,{value:"GroupBy",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'$ curl -X POST \\\n  -d \'{"sql":"SELECT SUM(moo), MAX(bar) FROM myTable GROUP BY foo ORDER BY foo"}\' \\\n  localhost:8099/query/sql -H "Content-Type: application/json"\n{\n  "exceptions": [],\n  "minConsumingFreshnessTimeMs": 0,\n  "numConsumingSegmentsQueried": 0,\n  "numDocsScanned": 6,\n  "numEntriesScannedInFilter": 0,\n  "numEntriesScannedPostFilter": 18,\n  "numGroupsLimitReached": false,\n  "numSegmentsMatched": 2,\n  "numSegmentsProcessed": 2,\n  "numSegmentsQueried": 2,\n  "numServersQueried": 1,\n  "numServersResponded": 1,\n  "resultTable": {\n    "dataSchema": {\n      "columnDataTypes": [\n        "STRING",\n        "DOUBLE",\n        "DOUBLE"\n      ],\n      "columnNames": [\n        "foo",\n        "sum(moo)",\n        "max(bar)"\n      ]\n    },\n    "rows": [\n      [\n        "abc",\n        560.0,\n        2008.0\n      ],\n      [\n        "pqr",\n        21760.0,\n        2010.0\n      ],\n      [\n        "xyz",\n        40015.0,\n        2019.0\n      ]\n    ]\n  },\n  "segmentStatistics": [],\n  "timeUsedMs": 15,\n  "totalDocs": 6,\n  "traceInfo": {}\n}\n')))),(0,s.kt)("p",null,"where:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Response Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultTable"),(0,s.kt)("td",{parentName:"tr",align:null},"This contains everything needed to process the response")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultTable.dataSchema"),(0,s.kt)("td",{parentName:"tr",align:null},"This describes schema of the response (columnNames and their dataTypes)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultTable.dataSchema.columnNames"),(0,s.kt)("td",{parentName:"tr",align:null},"columnNames in the response.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultTable.dataSchema.columnDataTypes"),(0,s.kt)("td",{parentName:"tr",align:null},"DataTypes for each column")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"resultTable.rows"),(0,s.kt)("td",{parentName:"tr",align:null},"Actual content with values. This is an array of arrays. number of rows depends on the limit value in the query. The number of columns in each row is equal to the length of (resultTable.dataSchema.columnNames)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"timeUsedms"),(0,s.kt)("td",{parentName:"tr",align:null},"Total time taken as seen by the broker before sending the response back to the client")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"totalDocs"),(0,s.kt)("td",{parentName:"tr",align:null},"This is number of documents/records in the table")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numServersQueried"),(0,s.kt)("td",{parentName:"tr",align:null},"represents the number of servers queried by the broker (note that this may be less than the total number of servers since broker can apply some optimizations to minimize the number of servers)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numServersResponded"),(0,s.kt)("td",{parentName:"tr",align:null},"This should be equal to the numServersQueried. If this is not the same, then one of more servers might have timed out. If numServersQueried != numServersResponded the results can be considered partial and clients can retry the query with exponential back off.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numSegmentsQueried"),(0,s.kt)("td",{parentName:"tr",align:null},"Total number of segmentsQueried for this query. it may be less than the total number of segments since broker can apply optimizations.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numSegmentsMatched"),(0,s.kt)("td",{parentName:"tr",align:null},"This is the number of segments actually processed. This indicates the effectiveness of pruning logic (based on partitioning, time etc).")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numSegmentsProcessed"),(0,s.kt)("td",{parentName:"tr",align:null},"Actual number of segments that were processed. This is where the majority of the time is spent.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numDocScanned"),(0,s.kt)("td",{parentName:"tr",align:null},"The number of docs/records that were scanned to process the query. This includes the docs scanned in filter phase (this can be zero if columns in query are indexed) and post filter.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numEntriesScannedInFilter"),(0,s.kt)("td",{parentName:"tr",align:null},"This along with numEntriesScannedInPostFilter should give an idea on where most of the time is spent during query processing. If this is high, enabling indexing for columns in tableConfig can be one way to bring it down.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numEntriesScannedPostFilter"),(0,s.kt)("td",{parentName:"tr",align:null},"This along with numEntriesScannedInPostFilter should give an idea on where most of the time is spent during query processing. A high number for this means the selectivity is low (i.e. pinot needs to scan a lot of records to answer the query). If this is high, adding regular inverted/bitmap index will not  help. However, consider using start-tree index.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"numGroupsLimitReached"),(0,s.kt)("td",{parentName:"tr",align:null},"If the query has group by clause and top K, pinot drops new entries after the numGroupsLimit is reached. If this boolean is set to true then the query result may not be accurate. Note that the default value for numGroupsLimit is 100k and should be sufficient for most use cases.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"exceptions"),(0,s.kt)("td",{parentName:"tr",align:null},"Will contain the stack trace if there is any exception processing the query.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"segmentStatistics"),(0,s.kt)("td",{parentName:"tr",align:null},"N/A")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"traceInfo"),(0,s.kt)("td",{parentName:"tr",align:null},"If trace is enabled (can be enabled for each query), this will contain the timing for each stage and each segment. Advanced feature and intended for dev/debugging purposes")))),(0,s.kt)("h2",{id:"pql-response"},"PQL response"),(0,s.kt)(o.Z,{type:"info",mdxType:"Alert"}," PQL endpoint is deprecated, and will soon be removed. The standard sql endpoint is the recommended endpoint.."),(0,s.kt)("p",null,"The response received from PQL endpoint is different depending on the type of the query."),(0,s.kt)(l.Z,{block:!0,defaultValue:"Aggregations",urlKey:"arch",values:[{label:"Selections",value:"Selections"},{label:"Aggregations",value:"Aggregations"},{label:"GroupBy",value:"GroupBy"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Selections",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select * from flights limit 3"}\' \\\n  http://localhost:8099/query\n\n\n{\n "selectionResults":{\n    "columns":[\n       "Cancelled",\n       "Carrier",\n       "DaysSinceEpoch",\n       "Delayed",\n       "Dest",\n       "DivAirports",\n       "Diverted",\n       "Month",\n       "Origin",\n       "Year"\n    ],\n    "results":[\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "SFO",\n          [],\n          "0",\n          "3",\n          "LAX",\n          "2014"\n       ],\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "LAX",\n          [],\n          "0",\n          "3",\n          "SFO",\n          "2014"\n       ],\n       [\n          "0",\n          "AA",\n          "16130",\n          "0",\n          "SFO",\n          [],\n          "0",\n          "3",\n          "LAX",\n          "2014"\n       ]\n    ]\n },\n "traceInfo":{},\n "numDocsScanned":3,\n "aggregationResults":[],\n "timeUsedMs":10,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":102\n}\n'))),(0,s.kt)(i.Z,{value:"Aggregations",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select count(*) from flights"}\' \\\n  http://localhost:8099/query\n\n\n{\n "traceInfo":{},\n "numDocsScanned":17,\n "aggregationResults":[\n    {\n       "function":"count_star",\n       "value":"17"\n    }\n ],\n "timeUsedMs":27,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":17\n}\n'))),(0,s.kt)(i.Z,{value:"GroupBy",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'curl -X POST \\\n  -d \'{"pql":"select count(*) from flights group by Carrier"}\' \\\n  http://localhost:8099/query\n\n\n{\n "traceInfo":{},\n "numDocsScanned":23,\n "aggregationResults":[\n    {\n       "groupByResult":[\n          {\n             "value":"10",\n             "group":["AA"]\n          },\n          {\n             "value":"9",\n             "group":["VX"]\n          },\n          {\n             "value":"4",\n             "group":["WN"]\n          }\n       ],\n       "function":"count_star",\n       "groupByColumns":["Carrier"]\n    }\n ],\n "timeUsedMs":47,\n "segmentStatistics":[],\n "exceptions":[],\n "totalDocs":23\n}\n')))))}g.isMDXComponent=!0},4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var l in t)r.call(t,l)&&t[l]&&e.push(l);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}}]);