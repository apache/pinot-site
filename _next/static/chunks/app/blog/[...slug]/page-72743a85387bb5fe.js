(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{9840:function(e,t,r){Promise.resolve().then(r.bind(r,1514)),Promise.resolve().then(r.bind(r,5185)),Promise.resolve().then(r.bind(r,7246)),Promise.resolve().then(r.t.bind(r,3756,23)),Promise.resolve().then(r.t.bind(r,1182,23)),Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.t.bind(r,8326,23)),Promise.resolve().then(r.bind(r,2434)),Promise.resolve().then(r.bind(r,2529))},2134:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var a=r(3920),n=r(550);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},1514:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2914),o=r.n(n),i=r(2265);t.default=()=>{var e;let[t,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=()=>{window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsxs)("div",{className:"fixed bottom-8 right-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[(null===(e=o().comments)||void 0===e?void 0:e.provider)&&(0,a.jsx)("button",{"aria-label":"Scroll To Comment",onClick:()=>{var e;null===(e=document.getElementById("comment"))||void 0===e||e.scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.jsx)("button",{"aria-label":"Scroll To Top",onClick:()=>{window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},5185:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265),o=r(1396),i=r.n(o),s=r(2134);t.default=function(e){let{chapters:t}=e,[r,o]=(0,n.useState)(t.length>0?t[0].url:"");return(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{(null==e?void 0:e.isIntersecting)&&o("#".concat(e.target.id))})},{rootMargin:"-30% 0px"});return t.forEach(t=>{let r=document.querySelector(t.url);r&&e.observe(r)}),()=>e.disconnect()},[t]),(0,a.jsx)("nav",{className:"flex items-center self-start","aria-label":"Table of Contents",children:(0,a.jsx)("ol",{className:"list-none space-y-3",children:t.map(e=>(0,a.jsx)("li",{className:(0,s.cn)("text-sm font-normal leading-tight",3===e.depth&&"ml-6 font-normal",4===e.depth&&"ml-8 font-normal",5===e.depth&&"ml-10 font-normal",r===e.url&&"font-bold"),children:(0,a.jsx)(i(),{href:"".concat(e.url),children:e.value})},e.url))})})}},7246:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2265);t.default=e=>{let{src:t,title:r}=e,[o,i]=(0,n.useState)(!1);return(0,a.jsx)("div",{className:"aspect-h-9 aspect-w-16",children:(0,a.jsx)("div",{className:"video-placeholder flex h-full cursor-pointer items-center justify-center bg-cover bg-center",onClick:()=>{i(!0),window.open(t,"_blank")},onKeyPress:e=>{("Enter"===e.key||" "===e.key)&&(i(!0),window.open(t,"_blank"))},role:"button",tabIndex:0,style:{backgroundImage:"url(".concat("/static/images/video_thumbnail.png",")")},"aria-label":r||"Open video in new tab"})})}},2914:function(e,t,r){"use strict";var a=r(2601);let n={title:"Apache Pinot™",author:"Apache Pinot™",headerTitle:"",description:"Realtime distributed OLAP datastore",language:"en-us",theme:"light",siteUrl:"https://pinot.apache.org",siteRepo:"https://github.com/apache/pinot-site/tree/dev/website",siteLogo:"/static/images/logo.png",socialBanner:"/static/images/twitter-card.png",mastodon:"https://mastodon.social/explore",email:"address@example.com",github:"https://github.com/apache/pinot",twitter:"https://twitter.com/Twitter",facebook:"https://facebook.com",youtube:"https://youtube.com",linkedin:"https://www.linkedin.com",locale:"en-US",video:{videoUrl:"https://www.youtube.com/embed/_lqdfq2c9cQ",title:"What is Apache Pinot?",description:"Apache Pinot"},cta:{getStarted:"https://docs.pinot.apache.org/basics/getting-started",learnMore:"https://docs.pinot.apache.org/",slackInvite:"https://apache-pinot.slack.com/join/shared_invite/zt-5z7pav2f-yYtjZdVA~EDmrGkho87Vzw#/shared-invite/email"},codeSection:{header:"Start your real-time analytics journey."},analytics:{googleAnalytics:{googleAnalyticsId:"G-ZXG79NJEBY"}},newsletter:{provider:"buttondown"},comments:{provider:"",giscusConfig:{repo:a.env.NEXT_PUBLIC_GISCUS_REPO,repositoryId:a.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,category:a.env.NEXT_PUBLIC_GISCUS_CATEGORY,categoryId:a.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,mapping:"pathname",reactions:"1",metadata:"0",theme:"light",darkTheme:"transparent_dark",themeURL:"",lang:"en"}},search:{provider:"algolia",algoliaConfig:{appId:"CKRA00L2X9",apiKey:"6531f8f7783a88d76629190843f1801e",indexName:"prod_apache_pinot_docs"}},announcement:{buttonText:"learn more",link:"https://github.com/apache/pinot/releases/tag/release-1.1.0"},communityLinks:[{name:"Slack",icon:"/static/images/socials/slack.svg",link:"https://join.slack.com/t/apache-pinot/shared_invite/zt-5z7pav2f-yYtjZdVA~EDmrGkho87Vzw"},{name:"GitHub",icon:"/static/images/socials/github.svg",link:"https://github.com/apache/pinot"},{name:"Meetups",icon:"/static/images/socials/meetup.svg",link:"https://www.meetup.com/apache-pinot/"},{name:"RTA Summit",icon:"/static/images/socials/rta.svg",link:"https://rtasummit.com",isWide:!0}],shareStory:{link:"https://forms.gle/75MbXyz7BztNQ78k9"}};e.exports=n},3756:function(){},1182:function(){},2434:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(2265),n=r(7437),o=(e,t,r)=>new Promise((a,n)=>{var o=e=>{try{s(r.next(e))}catch(e){n(e)}},i=e=>{try{s(r.throw(e))}catch(e){n(e)}},s=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,i);s((r=r.apply(e,t)).next())}),i=({title:e="Subscribe to the newsletter",apiUrl:t="/api/newsletter"})=>{let r=(0,a.useRef)(null),[i,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(""),[d,u]=(0,a.useState)(!1);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100",children:e}),(0,n.jsxs)("form",{className:"flex flex-col sm:flex-row",onSubmit:e=>o(void 0,null,function*(){e.preventDefault();let a=yield fetch(t,{body:JSON.stringify({email:r.current.value}),headers:{"Content-Type":"application/json"},method:"POST"}),{error:n}=yield a.json();if(n){s(!0),c("Your e-mail address is invalid or you are already subscribed!");return}r.current.value="",s(!1),u(!0)}),children:[(0,n.jsx)("div",{children:(0,n.jsxs)("label",{htmlFor:"email-input",children:[(0,n.jsx)("span",{className:"sr-only",children:"Email address"}),(0,n.jsx)("input",{autoComplete:"email",className:"focus:ring-primary-600 w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black",id:"email-input",name:"email",placeholder:d?"You're subscribed !  \uD83C\uDF89":"Enter your email",ref:r,required:!0,type:"email",disabled:d})]})}),(0,n.jsx)("div",{className:"mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3",children:(0,n.jsx)("button",{className:`bg-primary-500 w-full rounded-md py-2 px-4 font-medium text-white sm:py-0 ${d?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"} focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`,type:"submit",disabled:d,children:d?"Thank you!":"Sign up"})})]}),i&&(0,n.jsx)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:l})]})},s=({title:e,apiUrl:t})=>(0,n.jsx)("div",{className:"flex items-center justify-center",children:(0,n.jsx)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,n.jsx)(i,{title:e,apiUrl:t})})})},2529:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(2265),n=r(7437),o=({children:e})=>{let t=(0,a.useRef)(null),[r,o]=(0,a.useState)(!1),[i,s]=(0,a.useState)(!1);return(0,n.jsxs)("div",{ref:t,onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1),s(!1)},className:"relative",children:[r&&(0,n.jsx)("button",{"aria-label":"Copy code",className:`absolute right-2 top-2 h-8 w-8 rounded border-2 bg-gray-700 p-1 dark:bg-gray-800 ${i?"border-green-400 focus:border-green-400 focus:outline-none":"border-gray-300"}`,onClick:()=>{s(!0),navigator.clipboard.writeText(t.current.textContent),setTimeout(()=>{s(!1)},2e3)},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor",fill:"none",className:i?"text-green-400":"text-gray-300",children:i?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"})})})}),(0,n.jsx)("pre",{children:e})]})}}},function(e){e.O(0,[326,413,980,971,472,744],function(){return e(e.s=9840)}),_N_E=e.O()}]);