import{x as e,M as a,y as l,z as t,A as s,B as o,D as p,w as r}from"./element-plus-c3f3467b.js";import{_ as d}from"./index-1dd190b0.js";import{d as u,b as i,r as m,a2 as n,o as c,c as f,a as b,X as j,Q as y,W as _,u as v,V}from"./@vue-722b6523.js";import"./lodash-es-b6050654.js";import"./@vueuse-b2b875ad.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";/* empty css                      */import"./pinia-f7ddc81d.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-f341a4d8.js";import"./path-browserify-42f42cef.js";import"./@element-plus-d2a6d80a.js";import"./js-cookie-1db5286e.js";import"./nprogress-2caf32ee.js";const h={class:"warpper"},x={class:"operate clearfix"},g={class:"operate-btn-list"},k=V("新增资源"),w=V("删除选中"),U=V("导入"),z=V("导出"),q={class:"custom-tree-node"},C=V("添加资源"),I=V("编辑资源"),A=V("删除资源"),B=V("保存"),D=V("重置");var E=d(u({setup(d){i((()=>{E()}));const u=m(""),V=m([]),E=async()=>{},F=m(null),M=()=>{},Q=()=>{W.value=!1},W=m(!1),X=n({parent:"",title:"",path:"",icon:"",type:"menu"}),G=n({title:[{required:!0,message:"请输入资源名称",trigger:"blur"}],path:[{required:!0,message:"请输入资源路径",trigger:"blur"}]});return(d,i)=>{const m=e,n=a,E=l,H=t,J=s,K=o,L=p,N=r;return c(),f("div",h,[b("div",x,[b("div",g,[j(m,{type:"primary",class:"btn-plain",onClick:i[0]||(i[0]=e=>W.value=!0)},{default:y((()=>[k])),_:1}),j(m,{type:"primary",class:"btn-plain"},{default:y((()=>[w])),_:1}),j(m,{type:"primary",class:"btn-plain r"},{default:y((()=>[U])),_:1}),j(m,{type:"primary",class:"btn-plain r"},{default:y((()=>[z])),_:1})])]),j(n,{data:V.value,"show-checkbox":"","node-key":"id",props:{label:"title"},"default-expand-all":"","expand-on-click-node":!1},{default:y((({node:e,data:a})=>[b("span",q,[b("span",null,_(e.label),1),b("span",null,[j(m,{type:"text"},{default:y((()=>[C])),_:1}),j(m,{type:"text"},{default:y((()=>[I])),_:1}),j(m,{class:"notice-text-color",type:"text"},{default:y((()=>[A])),_:1})])])])),_:1},8,["data"]),j(N,{title:(u.value?"编辑":"新增")+"资源",modelValue:W.value,"onUpdate:modelValue":i[5]||(i[5]=e=>W.value=e),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":Q},{default:y((()=>[j(L,{ref_key:"formEle",ref:F,model:v(X),rules:v(G),"label-width":"100px",class:"demo-resourceForm"},{default:y((()=>[j(H,{label:"资源名称",prop:"title"},{default:y((()=>[j(E,{modelValue:v(X).title,"onUpdate:modelValue":i[1]||(i[1]=e=>v(X).title=e)},null,8,["modelValue"])])),_:1}),j(H,{label:"资源路由",prop:"path"},{default:y((()=>[j(E,{modelValue:v(X).path,"onUpdate:modelValue":i[2]||(i[2]=e=>v(X).path=e)},null,8,["modelValue"])])),_:1}),j(H,{label:"Icon",prop:"icon"},{default:y((()=>[j(E,{modelValue:v(X).icon,"onUpdate:modelValue":i[3]||(i[3]=e=>v(X).icon=e)},null,8,["modelValue"])])),_:1}),j(H,{label:"菜单/按钮",prop:"type"},{default:y((()=>[j(K,{modelValue:v(X).type,"onUpdate:modelValue":i[4]||(i[4]=e=>v(X).type=e),placeholder:"资源类型"},{default:y((()=>[j(J,{label:"菜单",value:"menu"}),j(J,{label:"按钮",value:"button"})])),_:1},8,["modelValue"])])),_:1}),j(H,null,{default:y((()=>[j(m,{type:"primary"},{default:y((()=>[B])),_:1}),j(m,{onClick:M},{default:y((()=>[D])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])])}}}),[["__scopeId","data-v-d9e2ac24"]]);export{E as default};
