var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&s(e,a,t[a]);return e},i=(e,o)=>t(e,a(o));import{g as c,h as d,j as u,k as p,m,n as f,o as h,p as v,q as b,r as g,s as y,t as C,u as k,v as _,w as x}from"./element-plus-6d3da066.js";import{d as w,o as j,c as S,X as T,Q as O,u as z,W as I,U as B,F as P,P as F,M as q,T as M,J as V,a1 as L,a6 as U,D as A,K as H,V as N,a as W,L as E,a2 as J,w as R,r as $,H as D,av as K,aw as Q,a0 as X,aq as Y,I as Z,R as G,S as ee,Y as te,ax as ae}from"./@vue-b1347690.js";import{m as oe,u as le}from"./@vueuse-7bacca58.js";import{b as ne,u as se}from"./vue-router-ef0e62c7.js";import{d as re,s as ie}from"./pinia-89efd9b3.js";import{p as ce}from"./path-browserify-42f42cef.js";import{e as de,c as ue,f as pe,b as me,s as fe,d as he,g as ve,h as be,i as ge}from"./@element-plus-e6cd7fa9.js";import{i as ye}from"./index-f42ce8f1.js";import{_ as Ce,u as ke}from"./index-ca8e81d2.js";import"./lodash-es-b6050654.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";import"./vue-demi-5b9a0fa5.js";/* empty css                      */import"./nprogress-2caf32ee.js";import"./js-cookie-1db5286e.js";const _e=re({id:"app",state:()=>({isCollapse:!1,contentFullScreen:!1,showLogo:!0,fixedTop:!1,showTabs:!0,expandOneMenu:!1,elementSize:"mini",theme:{style:"default",primaryColor:"#409eff",menuType:"side",primaryTextColor:""}}),getters:{},actions:{isCollapseChange(e){this.isCollapse=e},contentFullScreenChange(e){this.contentFullScreen=e}}}),xe={key:0},we=w({props:{icon:{type:String,default:""},title:{type:String,default:""}},setup:e=>(t,a)=>{const o=c;return j(),S(P,null,[T(o,null,{default:O((()=>[T(z(de))])),_:1}),e.title?(j(),S("span",xe,I(e.title),1)):B("",!0)],64)}}),je=w({name:"AppLink"}),Se=w(i(r({},je),{props:{to:{type:String,required:!0}},setup(e){const t=_e(),{isCollapse:a,expandOneMenu:o}=ie(t),l=()=>{document.body.clientWidth<=1e3&&!a.value&&(t.isCollapse=!0)};return(t,a)=>(j(),F(M("router-link"),q({to:e.to},{onClick:l}),{default:O((()=>[V(t.$slots,"default")])),_:3},16))}})),Te=w({props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=e=>ye(e)?e:ye(t.basePath)?t.basePath:ce.resolve(t.basePath,e);return(t,o)=>{var l;const n=L("menu-item",!0),s=d,r=u;return(null==(l=e.item.children)?void 0:l.length)?(j(),F(r,{key:0,index:a(e.item.path),"popper-append-to-body":""},{title:O((()=>[e.item.meta&&!e.item.meta.hidden?(j(),F(we,{key:0,icon:e.item.meta.icon,title:e.item.meta.title},null,8,["icon","title"])):B("",!0)])),default:O((()=>[(j(!0),S(P,null,U(e.item.children,(e=>{var t,o;return j(),S(P,null,[(null==(t=e.children)?void 0:t.length)?(j(),F(n,{key:0,"is-nest":!0,item:e,"base-path":a(e.path)},null,8,["item","base-path"])):B("",!0),(null==(o=e.children)?void 0:o.length)||e.meta.hidden?B("",!0):(j(),F(Se,{key:1,to:a(e.path)},{default:O((()=>[T(s,{index:a(e.path)},{default:O((()=>[e.meta?(j(),F(we,{key:0,icon:e.meta.icon,title:e.meta.title},null,8,["icon","title"])):B("",!0)])),_:2},1032,["index"])])),_:2},1032,["to"]))],64)})),256))])),_:1},8,["index"])):(j(),S(P,{key:1},[e.item.meta?(j(),F(Se,{key:0,to:a(e.item.path),type:a(e.item.path)},{default:O((()=>[T(s,{index:a(e.item.path)},{default:O((()=>[T(we,{icon:e.item.meta.icon,title:e.item.meta.title},null,8,["icon","title"])])),_:1},8,["index"])])),_:1},8,["to","type"])):B("",!0)],64))}}});var Oe=Ce(w({setup(e){const t=_e(),a=ke(),{isCollapse:o,expandOneMenu:l}=ie(t),n=a.showRoutes.map((e=>"/"===e.path&&e.children?i(r({},e.children[0]),{path:`/${e.children[0].path}`}):e)),s=ne(),c=A((()=>{const{meta:e,path:t}=s;return e.activeMenu?e.activeMenu:t}));return(e,t)=>{const a=p,s=m;return j(),F(s,null,{default:O((()=>[T(a,{class:H(["layout-menu system-scrollbar",z(o)?"collapse":""]),"background-color":"var(--system-menu-background)","text-color":"var(--system-menu-text-color)","active-text-color":"var(--system-primary-color)","default-active":z(c),collapse:z(o),"collapse-transition":!1,"unique-opened":z(l)},{default:O((()=>[(j(!0),S(P,null,U(z(n),((e,t)=>(j(),F(Te,{key:t,item:e,"base-path":e.path},null,8,["item","base-path"])))),128))])),_:1},8,["default-active","class","collapse","unique-opened"])])),_:1})}}}),[["__scopeId","data-v-221b00b0"]]);const ze={class:"logo-container"},Ie={key:0};var Be=Ce(w({setup(e){const t=_e(),{isCollapse:a}=ie(t);return(e,t)=>(j(),S("div",ze,[z(a)?B("",!0):(j(),S("h1",Ie,I(z("后台管理系统")),1))]))}}),[["__scopeId","data-v-bd898c20"]]);const Pe={class:"el-dropdown-link"},Fe=w({setup(e){const t=_e(),a=ne(),o=se(),{elementSize:l}=ie(t),n=[{size:"default",name:"默认"},{size:"medium",name:"中"},{size:"small",name:"小"},{size:"mini",name:"迷你"}];z(a);const s=e=>{t.elementSize=e,r()},r=()=>{o.replace({path:"/redirect"+a.fullPath})};return(e,t)=>{const a=c,o=f,r=h,i=v;return j(),F(i,{size:"medium",onCommand:s},{dropdown:O((()=>[T(r,null,{default:O((()=>[(j(),S(P,null,U(n,(e=>T(o,{key:e.size,command:e.size,disabled:z(l)===e.size},{default:O((()=>[N(I(e.name),1)])),_:2},1032,["command","disabled"]))),64))])),_:1})])),default:O((()=>[W("span",Pe,[T(a,{class:"sfont system-zuixiaohua"},{default:O((()=>[T(z(ue))])),_:1})])])),_:1})}}});const qe=["title"];var Me=Ce(w({setup(e){const{isFullscreen:t,toggle:a}=oe();return(e,o)=>{const l=c;return j(),S("div",{title:z(t)?"退出全屏":"内容全屏"},[T(l,{class:H(["sfont",z(t)?"system-quanping":"system-quanping1"]),onClick:z(a)},{default:O((()=>[T(z(pe))])),_:1},8,["class","onClick"])],8,qe)}}}),[["__scopeId","data-v-067ac18f"]]);const Ve=w({components:{Check:me},props:{name:{type:String,default:"default"},active:{type:String,default:""},menu:{type:String,defualt:""},logo:{type:String,defualt:""},header:{type:String,defualt:""},main:{type:String,defualt:""},tip:{type:String,default:"默认菜单风格"},activeColor:{type:String,default:""}},setup:(e,t)=>({handleClick:()=>{t.emit("update:active",e.name)}})}),Le={class:"theme-icon-sidebar"},Ue={class:"theme-icon-content"},Ae={key:0,class:"active"};var He=Ce(Ve,[["render",function(e,t,a,o,l,n){const s=L("Check"),r=c,i=b;return j(),F(i,{class:"item",effect:"dark",content:e.tip,placement:"top"},{default:O((()=>[W("div",{class:"theme-icon",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[W("div",Le,[W("div",{class:"theme-icon-sidebar-logo",style:E({"background-color":e.logo})},null,4),W("div",{class:"theme-icon-sidebar-menu",style:E({"background-color":e.menu})},null,4)]),W("div",Ue,[W("div",{class:"theme-icon-content-header",style:E({"background-color":e.header})},null,4),W("div",{class:"theme-icon-content-main",style:E({"background-color":e.main})},[e.active===e.name?(j(),S("div",Ae,[T(r,{style:E({color:e.activeColor})},{default:O((()=>[T(s)])),_:1},8,["style"])])):B("",!0)],4)])])])),_:1},8,["content"])}],["__scopeId","data-v-e2e0ea04"]]);const Ne=w({props:{active:{type:String,default:""},activeTextColor:{type:String,default:""},tip:{type:String,default:"默认蓝"},color:{type:String,default:"#409eff"},textColor:{type:String,default:"#fff"}},setup:(e,t)=>({handleClick:()=>{t.emit("update:active",e.color),t.emit("update:activeTextColor",e.textColor)}})}),We={key:0,class:"active"};var Ee=Ce(Ne,[["render",function(e,t,a,o,l,n){const s=b;return j(),F(s,{class:"item",effect:"dark",content:e.tip,placement:"top"},{default:O((()=>[W("div",{class:"theme-color",style:E({"background-color":e.color}),onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},[e.active===e.color?(j(),S("div",We,[W("i",{class:"el-icon-check",style:E({color:e.textColor})},null,4)])):B("",!0)],4)])),_:1},8,["content"])}],["__scopeId","data-v-1fa259b0"]]);const Je={default:{name:"默认菜单风格",menu:{textColor:"#bfcbd9",background:"#181f31",childrenBackground:"#1f2d3d",hoverBackground:"#203448",submenuActiveColor:"#fff"},logo:{color:"#f1f1f1",background:"#181f31"},header:{background:"#fff",textColor:"#303133",itemHoverColor:"rgba(0,0,0,.025)",breadcrumbTextColor:"#606266",borderColor:"#d8dce5",tabBackground:"#fff"},container:{background:"#f0f2f5",mainBackground:"#fff"},page:{background:"#fff",color:"#303133",tipColor:"rgba(0, 0, 0, 0.45)",borderColor:"#ebeef5"}},light:{name:"亮色菜单风格",menu:{textColor:"#272727",background:"#fff",childrenBackground:"#fff",hoverBackground:"#f1f1f1",submenuActiveColor:"var(--system-primary-color)"},logo:{color:"#000",background:"#fff"},header:{background:"#fff",textColor:"#303133",itemHoverColor:"rgba(0,0,0,.025)",breadcrumbTextColor:"#606266",borderColor:"#d8dce5",tabBackground:"#fff"},container:{background:"#f0f2f5",mainBackground:"#fff"},page:{background:"#fff",color:"#303133",tipColor:"rgba(0, 0, 0, 0.45)",borderColor:"#ebeef5"}},dark:{name:"暗色菜单风格",menu:{textColor:"#bbb",background:"#18181c",childrenBackground:"#18181c",hoverBackground:"#000",submenuActiveColor:"#fff"},logo:{color:"#fff",background:"#18181c"},header:{background:"#18181c",textColor:"#e3e3e4",itemHoverColor:"#000",breadcrumbTextColor:"#fff",borderColor:"#3e3e3e",tabBackground:"#1b1b1b"},container:{background:"#000",mainBackground:"#18181c"},page:{background:"#18181c",color:"#c7c7c7",tipColor:"rgba(255, 255, 255, 0.45)",borderColor:"#3e3e3e"}}};const Re=e=>(K("data-v-65ed874c"),e=e(),Q(),e),$e=Re((()=>W("h3",null,"整体风格设置",-1))),De={class:"theme-box"},Ke=Re((()=>W("h3",null,"主题色",-1))),Qe={class:"theme-box"},Xe=Re((()=>W("h3",null,"其他设置",-1))),Ye={class:"list"};var Ze=Ce(w({setup(e){const t=_e(),{theme:a,showLogo:o,showTabs:l,expandOneMenu:n}=ie(t),s=J({style:a.value.style,primaryColor:a.value.primaryColor,primaryTextColor:a.value.primaryTextColor,menuType:a.value.menuType}),r=[{color:"#409eff",textColor:"#fff",tip:"默认蓝"},{color:"#d60f20",textColor:"#fff",tip:"玫瑰红"},{color:"#ac25e6",textColor:"#fff",tip:"优雅紫"},{color:"#4dc86f",textColor:"#fff",tip:"故事绿"},{color:"#13c2c2",textColor:"#fff",tip:"明青"},{color:"#333",textColor:"#fff",tip:"极客黑"}],i=()=>{const e=Je[s.style],t=document.getElementsByTagName("body")[0];t.className=s.style,t.style.setProperty("--system-primary-color",s.primaryColor);for(let a in e){const o=e[a];for(let e in o){let l="--system-"+a+"-"+e.replace(/([A-Z])/g,"-$1").toLowerCase();t.style.setProperty(l,o[e])}}};R(s,(e=>{t.theme=e,i()}));let d=$(!1);const u=J([{name:"显示logo",value:o,store:"showLogo"},{name:"显示面包屑导航",value:l,store:"showTabs"},{name:"保持一个菜单展开",value:n,store:"expandOneMenu"}]);return i(),(e,a)=>{const o=c,l=g,n=y;return j(),S(P,null,[W("div",{title:"系统设置",onClick:a[0]||(a[0]=e=>{return t=!0,void(d.value=t);var t})},[T(o,{class:"sfont system-shezhi"},{default:O((()=>[T(z(fe))])),_:1})]),T(n,{modelValue:z(d),"onUpdate:modelValue":a[4]||(a[4]=e=>D(d)?d.value=e:d=e),title:"系统设置",size:"300px","show-close":!1,direction:"rtl"},{default:O((()=>[$e,W("div",De,[(j(!0),S(P,null,U(z(Je),((e,t)=>(j(),F(He,{key:t,active:z(s).style,"onUpdate:active":a[1]||(a[1]=e=>z(s).style=e),name:t+"",tip:e.name,logo:e.logo.background,menu:e.menu.background,header:e.header.background,main:e.container.background,"active-color":e.page.color},null,8,["active","name","tip","logo","menu","header","main","active-color"])))),128))]),Ke,W("div",Qe,[(j(),S(P,null,U(r,((e,t)=>T(Ee,{key:t,active:z(s).primaryColor,"onUpdate:active":a[2]||(a[2]=e=>z(s).primaryColor=e),activeTextColor:z(s).primaryTextColor,"onUpdate:activeTextColor":a[3]||(a[3]=e=>z(s).primaryTextColor=e),color:e.color,"text-color":e.textColor,tip:e.tip},null,8,["active","activeTextColor","color","text-color","tip"]))),64))]),Xe,W("div",Ye,[(j(!0),S(P,null,U(z(u),(e=>(j(),S("div",{key:e.name,class:"list-item"},[W("span",null,I(e.name),1),T(l,{modelValue:e.value,"onUpdate:modelValue":t=>e.value=t,"active-color":"#13ce66","inactive-color":"#ff4949",onChange:a=>(e=>{t[e.store]=e.value})(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])])))),128))])])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-65ed874c"]]);const Ge={key:0,class:"no-redirect"},et=["onClick"];var tt=Ce(w({setup(e){const t=$([]),a=ne(),o=se(),l=()=>{let e=a.matched.filter((e=>e.meta&&e.meta.title));e[0],t.value=e.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))};l(),R((()=>a.path),(()=>l()));return(e,a)=>{const l=C,n=k;return j(),F(n,{class:"app-breadcrumb hidden-sm-and-down",separator:"/"},{default:O((()=>[T(Y,{appear:"",name:"breadcrumb"},{default:O((()=>[(j(!0),S(P,null,U(t.value,((e,a)=>(j(),F(l,{key:e.path},{default:O((()=>{var l,n;return["noRedirect"===e.redirect||a==t.value.length-1?(j(),S("span",Ge,I(null==(l=e.meta)?void 0:l.title),1)):(j(),S("a",{key:1,onClick:X((t=>(e=>{const{redirect:t,path:a}=e;t?o.push(t.toString()):o.push(a)})(e)),["prevent"])},I(null==(n=e.meta)?void 0:n.title),9,et))]})),_:2},1024)))),128))])),_:1})])),_:1})}}}),[["__scopeId","data-v-1bacd4fc"]]);const at={class:"left-box"},ot={class:"right-box"},lt={class:"function-list"},nt={class:"function-list-item hidden-sm-and-down"},st={class:"function-list-item"},rt={class:"function-list-item hidden-sm-and-down"},it={class:"user-info"},ct={class:"el-dropdown-link"},dt=N("修改密码"),ut=N("退出登录");var pt=Ce(w({setup(e){const t=_e(),a=ke(),o=J({show:!1,showButton:!0}),{isCollapse:l}=ie(t),n=()=>{t.isCollapse=!t.isCollapse},s=()=>{a.loginOut()},r=()=>{o.show=!0};return(e,t)=>{const o=c,i=f,d=h,u=v;return j(),S("header",null,[W("div",at,[W("div",{class:"menu-icon",onClick:n},[T(o,null,{default:O((()=>[(j(),F(M(z(l)?z(he):z(ve))))])),_:1})]),T(tt)]),W("div",ot,[W("div",lt,[W("div",nt,[T(Me)]),W("div",st,[T(Fe)]),W("div",rt,[T(Ze)])]),W("div",it,[T(u,null,{dropdown:O((()=>[T(d,null,{default:O((()=>[T(i,{onClick:r},{default:O((()=>[dt])),_:1}),T(i,{onClick:s},{default:O((()=>[ut])),_:1})])),_:1})])),default:O((()=>[W("span",ct,[N(I(z(a).info.name)+" ",1),T(o,{class:"el-icon-arrow-down el-icon--right"},{default:O((()=>[T(z(be))])),_:1})])])),_:1})])])])}}}),[["__scopeId","data-v-748f1a40"]]);var mt=Ce(w({props:{menu:{type:Object,default:()=>({path:"",meta:{title:"",hideClose:!1}})},active:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){const a=()=>{t("close")};return(t,o)=>{const l=L("router-link"),n=c;return j(),S("div",{class:H(["tags-view-item",e.active?"active":""])},[e.menu.meta.title?(j(),F(l,{key:0,to:e.menu.path},{default:O((()=>[N(I(e.menu.meta.title),1)])),_:1},8,["to"])):B("",!0),e.menu.meta.hideClose?B("",!0):(j(),F(n,{key:1,class:"el-icon-close",onClick:X(a,["stop"])},{default:O((()=>[T(z(ge))])),_:1},8,["onClick"]))],2)}}}),[["__scopeId","data-v-3109218a"]]);const ft=function(e){localStorage.setItem("tabs",JSON.stringify(e))},ht=function(){return JSON.parse(localStorage.getItem("tabs")||"[]")};const vt={class:"tabs"},bt={class:"item-main"},gt={class:"handle"},yt={class:"el-dropdown-link"},Ct=N("关闭当前标签"),kt=N("关闭其他标签"),_t=N("关闭所有标签");var xt=Ce(w({setup(e){const t=_e(),a=ne(),o=se(),l={path:"/dashboard",meta:{title:"首页",hideClose:!0}},{contentFullScreen:n}=ie(t),s=A((()=>a.path===l.path));let r=$(""),i=$(ht());0===i.value.length&&g(l),R(i,((e,t)=>{ft(e)})),o.afterEach(((e,t)=>{g(e)}));const d=()=>{t.contentFullScreen=!t.contentFullScreen};function u(){a.path!==l.path&&y(a)}function p(){i.value=[l],a.path!==l.path&&g(a)}function m(){i.value=[l],o.push(l.path)}function g(e){let{path:t,meta:a,name:o}=e;r.value=t,(null==a?void 0:a.hidden)||i.value.some((e=>e.path===t))||i.value.push({path:t,meta:a,name:o})}function y(e){let t=0;e.meta.hideClose||(t=i.value.findIndex((t=>t.path===e.path)),i.value.splice(t,1)),e.path===r.value&&(t-1>0?o.push(i.value[t-1].path):o.push(l.path))}return g(a),(e,t)=>{const a=c,o=f,l=h,g=v,C=b;return j(),S("div",vt,[W("div",bt,[z(i).length?(j(!0),S(P,{key:0},U(z(i),(e=>(j(),F(mt,{key:e.path,menu:e,active:z(r)===e.path,onClose:t=>y(e)},null,8,["menu","active","onClose"])))),128)):B("",!0)]),W("div",gt,[T(g,{placement:"bottom"},{dropdown:O((()=>[T(l,null,{default:O((()=>[T(o,{icon:"el-icon-circle-close",disabled:z(s),onClick:u},{default:O((()=>[Ct])),_:1},8,["disabled"]),T(o,{icon:"el-icon-circle-close",disabled:z(i).length<3,onClick:p},{default:O((()=>[kt])),_:1},8,["disabled"]),T(o,{icon:"el-icon-circle-close",disabled:z(i).length<=1,onClick:m},{default:O((()=>[_t])),_:1},8,["disabled"])])),_:1})])),default:O((()=>[W("div",yt,[T(a,null,{default:O((()=>[T(z(be))])),_:1})])])),_:1}),T(C,{class:"item",effect:"dark",content:z(n)?"退出全屏":"内容全屏",placement:"bottom"},{default:O((()=>[T(a,{class:"el-icon-full-screen",onClick:d},{default:O((()=>[T(z(pe))])),_:1})])),_:1},8,["content"])])])}}}),[["__scopeId","data-v-29db86bc"]]);const wt={class:"app-wrapper"},jt={class:"app-main"};var St=Ce(w({setup(e){const t=_e(),a=(e=!0)=>{t.isCollapse=e},{isCollapse:o,contentFullScreen:l,showLogo:n,showTabs:s}=ie(t),r=()=>{document.body.clientWidth<=1e3&&!o.value?a():document.body.clientWidth>1e3&&o.value&&a(!1)};return r(),Z((()=>{le("resize",r)})),(e,t)=>{const a=_,r=x,i=m,c=L("router-view");return j(),S("div",wt,[G(T(a,{width:z(o)?"60px":"250px",class:H(z(o)?"hide-aside":"show-side")},{default:O((()=>[z(n)?(j(),F(Be,{key:0})):B("",!0),T(Oe)])),_:1},8,["width","class"]),[[ee,!z(l)]]),W("div",{class:H([{active:z(o)},"main-container"])},[G(T(r,null,{default:O((()=>[T(pt)])),_:1},512),[[ee,!z(l)]]),G(T(xt,null,null,512),[[ee,z(s)]]),W("div",jt,[T(c,null,{default:O((({Component:e,route:t})=>[T(te,{appear:"",name:"fade-transform",mode:"out-in"},{default:O((()=>[(j(),F(ae,null,[(j(),F(i,{"max-height":"100%","wrap-class":"app-container",key:t.path},{default:O((()=>[(j(),F(M(e)))])),_:2},1024))],1024))])),_:2},1024)])),_:1})])],2)])}}}),[["__scopeId","data-v-454ae01c"]]);export{St as default};