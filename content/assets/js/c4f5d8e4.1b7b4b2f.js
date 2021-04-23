(window.webpackJsonp=window.webpackJsonp||[]).push([[31,8,20],{107:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(0),l=t.n(r),c=t(160),i=t(156),s=t(136),o=t(145),m=t(131),u=t(219),g=t(142),p=t(141),h=t(130),d=t.n(h),E=t(16),b=t(108),f=t.n(b),v=(t(109),Object(i.a)("h2")),N=[{title:"Blazing Fast",icon:"zap",description:l.a.createElement(l.a.Fragment,null,"Pinot is designed to answer OLAP queries with low latency on immutable data")},{title:"Pluggable indexing",icon:"unlock",description:l.a.createElement(l.a.Fragment,null,"Pluggable indexing technologies - Sorted Index, Bitmap Index, Inverted Index")},{title:"Near Real time ingestion",icon:"rss",description:l.a.createElement(l.a.Fragment,null,"Near Realtime ingestion with"," ",l.a.createElement(m.a,{to:"https://kafka.apache.org/"},"Apache Kafka")," ","supports StringSerializer or"," ",l.a.createElement(m.a,{to:"https://avro.apache.org/"},"Avro")," formats")},{title:"Horizontally scalable",icon:"code",description:l.a.createElement(l.a.Fragment,null,"Horizontally scalable and fault tolerant")},{title:"Joins using PrestoDB",icon:"shuffle",description:l.a.createElement(l.a.Fragment,null,"Joins are currently not supported, but this problem can be overcome by using"," ",l.a.createElement(m.a,{to:"https://prestodb.io/"},"PrestoDB")," for querying")},{title:"SQL-like Query Interface (PQL)",icon:"search",description:l.a.createElement(l.a.Fragment,null,"SQL like language that supports selection, aggregation, filtering, group by, order by, distinct queries on data")},{title:"Hybrid tables",icon:"list",description:l.a.createElement(l.a.Fragment,null,"Consist of of"," ",l.a.createElement(m.a,{to:"http://pinot.apache.org/img/dynamic-table.png"},"both offline and realtime table"),". Use realtime table only to cover segments for which offline data may not be available yet")},{title:"Anomaly Detection",icon:"bar-chart",description:l.a.createElement(l.a.Fragment,null,"Run ML Algorithms to detect Anomalies on the data stored in Pinot. Use"," ",l.a.createElement(m.a,{to:"https://docs.pinot.apache.org/integrations/thirdeye"},"ThirdEye")," ","with Pinot for Anomaly Detection and Root Cause Analysis")},{title:"Smart Alerts in ThirdEye",icon:"bell",description:l.a.createElement(l.a.Fragment,null,"Detect the right anomalies by customizing anomaly detect flow and notification flow")}];function w(e){var a,t,r=e.features,c=[];for(a=0,t=r.length;a<t;a+=3){var i=r.slice(a,a+3);c.push(l.a.createElement("div",{key:"features"+a,className:"row"},i.map((function(e,a){return l.a.createElement(y,Object(n.a)({key:a},e))}))))}return l.a.createElement("section",{className:f.a.features},l.a.createElement("div",{className:"container"},l.a.createElement(v,{id:"features"},"Features"),c))}function y(e){var a=e.icon,t=e.title,n=e.description;return l.a.createElement("div",{className:d()("col col--4",f.a.feature)},l.a.createElement("div",{className:f.a.featureIcon},l.a.createElement("i",{className:d()("feather","icon-"+a)})),l.a.createElement("h3",null,t),l.a.createElement("p",null,n))}function k(){return l.a.createElement("section",{className:"topologies"},l.a.createElement("div",{className:"container"},l.a.createElement(v,{id:"who-uses"},"Who Uses?"),l.a.createElement("div",{className:"sub-title"},"Pinot powers several big players, including LinkedIn, Uber, Microsoft, Walmart, WePay, Factual, Weibo, Slack and more"),l.a.createElement("div",{className:f.a.installationPlatforms},l.a.createElement(m.a,{to:"https://www.linkedin.com"},l.a.createElement(u.a,{src:"/img/companies/linkedin.svg"})),l.a.createElement(m.a,{to:"https://www.ubereats.com"},l.a.createElement(u.a,{src:"/img/companies/uber.svg"})),l.a.createElement(m.a,{to:"https://teams.microsoft.com"},l.a.createElement(u.a,{src:"/img/companies/MicrosoftTeamPost2018.svg"})),l.a.createElement(m.a,{to:"https://slack.com"},l.a.createElement(u.a,{src:"/img/companies/slack.svg"})),l.a.createElement(m.a,{to:"https://www.factual.com"},l.a.createElement(u.a,{src:"/img/companies/factual.svg"})),l.a.createElement(m.a,{to:"https://www.weibo.com"},l.a.createElement(u.a,{src:"/img/companies/weibo.svg"})),l.a.createElement(m.a,{to:"https://eero.com/"},l.a.createElement(u.a,{src:"/img/companies/eero.svg"})),l.a.createElement(m.a,{to:"https://www.confluera.com/"},l.a.createElement(u.a,{src:"/img/companies/confluera.svg"})),l.a.createElement(m.a,{to:"https://stripe.com"},l.a.createElement(u.a,{src:"/img/companies/stripe.svg"})),l.a.createElement(m.a,{to:"https://www.target.com/"},l.a.createElement(u.a,{src:"/img/companies/target_logo.svg"})),l.a.createElement(m.a,{to:"https://www.walmart.com/"},l.a.createElement(u.a,{src:"/img/companies/walmart_logo.svg"})),l.a.createElement(m.a,{to:"https://cloudkitchens.com/"},l.a.createElement(u.a,{src:"/img/companies/cloudkitchens.svg"})),l.a.createElement(m.a,{to:"https://www.guitarcenter.com/"},l.a.createElement(u.a,{src:"/img/companies/guitarcenter_logo.svg"})),l.a.createElement(m.a,{to:"https://www.publicissapient.com/"},l.a.createElement(u.a,{src:"/img/companies/ps_logo.svg"})),l.a.createElement(m.a,{to:"https://www.asurion.com/"},l.a.createElement(u.a,{src:"/img/companies/asurion.svg"})),l.a.createElement(m.a,{to:"https://go.wepay.com/"},l.a.createElement(u.a,{src:"/img/companies/wepay_logo.svg"})),l.a.createElement(m.a,{to:"https://www.traceable.ai"},l.a.createElement(u.a,{src:"/img/companies/traceableai.svg"})))))}function _(){return l.a.createElement("section",{className:"topologies"},l.a.createElement("div",{className:"container"},l.a.createElement(v,{id:"ingest-query"},"Ingest and Query Options"),l.a.createElement("div",{className:"sub-title"},"Ingest with Kafka, Spark, HDFS or Cloud Storages"),l.a.createElement("div",{className:"sub-title"},"Query using PQL(Pinot Query Language ), SQL or Presto(supports Joins)"),l.a.createElement(u.a,{src:"/img/ingest-query.svg",className:"svg image-overview figure"})))}function P(){return l.a.createElement("section",{className:f.a.installation},l.a.createElement("div",{className:"container"},l.a.createElement(v,{id:"installation"},"Installs Everywhere"),l.a.createElement("div",{className:"sub-title"},"Pinot can be installed using docker with presto"),l.a.createElement("div",{className:f.a.installationChecks},l.a.createElement("div",null,l.a.createElement("i",{className:"feather icon-package"})," Helm or K8s crds"),l.a.createElement("div",null,l.a.createElement("i",{className:"feather icon-cpu"})," On-Premise"),l.a.createElement("div",null,l.a.createElement("i",{className:"feather icon-zap"})," Public Cloud"),l.a.createElement("div",null,l.a.createElement("i",{className:"feather icon-feather"})," Locally")),l.a.createElement("h3",{className:f.a.installSubTitle},"Install:"),l.a.createElement(p.a,{className:"mini",defaultValue:"helm",values:[{label:l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"feather icon-download-cloud"})," ","Using Helm"),value:"helm"},{label:l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"feather icon-download"})," ","Using Binary"),value:"binary"},{label:l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"feather icon-github"})," ","Build From Source"),value:"github"}]},l.a.createElement(g.a,{value:"helm"},l.a.createElement(c.a,{className:"language-bash"},"helm repo add pinot https://raw.githubusercontent.com/apache/incubator-pinot/master/kubernetes/helm\nkubectl create ns pinot\nhelm install pinot pinot/pinot -n pinot --set cluster.name=pinot")),l.a.createElement(g.a,{value:"binary"},l.a.createElement(c.a,{className:"language-bash"},"VERSION=0.7.1\nwget https://downloads.apache.org/incubator/pinot/apache-pinot-incubating-$VERSION/apache-pinot-incubating-$VERSION-bin.tar.gz\ntar vxf apache-pinot-incubating-*-bin.tar.gz\ncd apache-pinot-incubating-*-bin\nbin/quick-start-batch.sh")),l.a.createElement(g.a,{value:"github"},l.a.createElement(c.a,{className:"language-bash"},"# Clone a repo\ngit clone https://github.com/apache/incubator-pinot.git\ncd incubator-pinot\n\n# Build Pinot\nmvn clean install -DskipTests -Pbin-dist\n\n# Run the Quick Demo\ncd pinot-distribution/target/apache-pinot-incubating-*-SNAPSHOT-bin/apache-pinot-incubating-*-SNAPSHOT-bin\nbin/quick-start-batch.sh"))),l.a.createElement("h3",{className:f.a.installSubTitle},"Or choose your preferred method:"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(s.a,{to:"https://docs.pinot.apache.org/getting-started/running-pinot-in-docker"},"Containers")),l.a.createElement("div",{className:"col"},l.a.createElement(s.a,{to:"https://docs.pinot.apache.org/getting-started/kubernetes-quickstart"},"Helm")),l.a.createElement("div",{className:"col"},l.a.createElement(s.a,{to:"https://docs.pinot.apache.org/basics/getting-started/public-cloud-examples"},"Cloud")),l.a.createElement("div",{className:"col"},l.a.createElement(s.a,{to:"https://docs.pinot.apache.org/getting-started/running-pinot-locally"},"Manual/Local")))))}a.default=function(){var e=Object(E.default)().siteConfig,a=void 0===e?{}:e;return l.a.createElement(o.a,{title:a.title+": "+a.tagline,description:a.description},l.a.createElement("header",{className:d()("hero","hero--full-height",f.a.indexHeroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement(m.a,{to:"https://docs.pinot.apache.org/basics/releases/0.7.1",className:f.a.indexAnnouncement},l.a.createElement("span",{className:"badge badge-primary"},"release"),"v0.7.1 has been released! Check the release notes"),l.a.createElement("h1",{className:"hero__title"},a.title),l.a.createElement("p",{className:"hero__subtitle"},a.tagline,", designed to answer OLAP queries with low latency",l.a.createElement(u.a,{src:"/img/pinot-overview.svg",className:"svg image-overview figure"})),l.a.createElement("div",{className:"hero--buttons"},l.a.createElement(m.a,{to:"https://docs.pinot.apache.org/getting-started",className:"button button--primary button--highlight"},"Getting Started"),l.a.createElement(m.a,{to:"https://communityinviter.com/apps/apache-pinot/apache-pinot",className:"button button--primary button--highlight"},"Join our Slack")),l.a.createElement("p",{className:"hero--subsubtitle"},"Pinot is proven at ",l.a.createElement("strong",null,"scale in LinkedIn")," ","powers 50+ user-facing apps and serving"," ",l.a.createElement("strong",null,"100k+ queries")))),l.a.createElement("main",null,N&&N.length&&l.a.createElement(w,{features:N}),l.a.createElement(_,null),l.a.createElement(k,null),l.a.createElement(P,null)))}},136:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(131),c=t(130),i=t.n(c);t(57);a.a=function(e){var a=e.children,t=e.className,n=e.badge,c=e.icon,s=e.size,o=e.target,m=e.to,u=i()("jump-to","jump-to--"+s,t),g=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",a),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return o?r.a.createElement("a",{href:m,target:o,className:u},g):r.a.createElement(l.a,{to:m,className:u},g)}},147:function(e,a,t){"use strict";var n=t(3),r=t(8),l=t(0),c=t.n(l),i=t(133),s=t(131),o=t(135),m=t(134),u=t(60),g=t.n(u),p=t(144);function h(e){var a=e.to,t=e.href,l=e.label,i=e.prependBaseUrlToHref,o=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(a),g=Object(m.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},t?{href:i?g:t}:{to:u},o),l)}var d=function(e){var a=e.sources,t=e.alt;return c.a.createElement(p.a,{className:"footer__logo",alt:t,sources:a})};a.a=function(){var e=Object(o.useThemeConfig)().footer,a=e||{},t=a.copyright,n=a.links,r=void 0===n?[]:n,l=a.logo,u=void 0===l?{}:l,p={light:Object(m.a)(u.src),dark:Object(m.a)(u.srcDark||u.src)};return e?c.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},r&&r.length>0&&c.a.createElement("div",{className:"row footer__links"},r.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(h,e))}))):null)}))),(u||t)&&c.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&c.a.createElement("div",{className:"margin-bottom--sm"},u.href?c.a.createElement(s.a,{href:u.href,className:g.a.footerLogoLink},c.a.createElement(d,{alt:u.alt,sources:p})):c.a.createElement(d,{alt:u.alt,sources:p})),t?c.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);