import{f as e,b as a,a as l,e as t,J as o,c as s,d as r,K as d,H as i,r as n,x as u}from"./element-plus-6d3da066.js";import{r as p,a as m,b as c,c as f}from"./resources-6f3f47de.js";import{_ as b}from"./index-68e6e469.js";import{d as V,r as y,a2 as j,b as _,t as g,o as v,c as h,a as k,X as x,Q as w,W as C,u as U,P as I,H as q,U as N,V as z,n as D}from"./@vue-b1347690.js";import"./lodash-es-b6050654.js";import"./@vueuse-7bacca58.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";/* empty css                      */import"./pinia-89efd9b3.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-ef0e62c7.js";import"./nprogress-2caf32ee.js";import"./js-cookie-1db5286e.js";const B={class:"warpper"},F={class:"operate-wrapper"},H={class:"operate-left-btn"},T=z("新增"),E={class:"custom-tree-node"},J=z("添加资源"),K=z("编辑资源"),L=z("删除资源"),P=z("菜单"),Q=z("按钮"),W=z("保存"),X=z("重置");var A=b(V({setup(b){const V=y(),z=j({formVisible:!1,resourcesData:[],parentName:""}),A=async()=>{z.resourcesData=await p({})},G=()=>{V.value.resetFields()},M=()=>{G(),O.id="",z.parentName="",O.parentId="",z.formVisible=!1},O=j({id:"",parentId:"",title:"",path:"",icon:"",component:"",type:"menu",status:!1}),R=j({title:[{required:!0,message:"请输入资源名称",trigger:"blur"}],path:[{required:!0,message:"请输入资源路径",trigger:"blur"}],component:[{required:!0,message:"请输入资源组件",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]}),S=async()=>{await V.value.validate(),O.id?await c(+O.id,O):await f(O),A(),l({type:"success",message:O.id?"修改成功":"新增成功"}),M()};_((()=>{A()}));const{formVisible:Y,resourcesData:Z,parentName:$}=g(z);return(p,c)=>{const f=t,b=o,y=s,j=r,_=d,g=i,ee=n,ae=u;return v(),h("div",B,[k("div",F,[k("div",H,[x(f,{plain:"",onClick:c[0]||(c[0]=e=>Y.value=!0)},{default:w((()=>[T])),_:1})])]),x(b,{data:U(Z),"show-checkbox":"","node-key":"id",props:{label:"title"},"default-expand-all":"","expand-on-click-node":!1},{default:w((({node:e,data:t})=>[k("span",E,[k("span",null,C(e.label),1),k("span",null,[x(f,{type:"text",onClick:e=>{return a=t,z.parentName=a.title,O.parentId=a.id,void(z.formVisible=!0);var a}},{default:w((()=>[J])),_:2},1032,["onClick"]),x(f,{type:"text",onClick:e=>{return a=t,O.id=a.id,z.formVisible=!0,void D((()=>{O.title=a.title,O.path=a.path,O.icon=a.icon,O.type=a.type,O.status=a.status,O.component=a.component}));var a}},{default:w((()=>[K])),_:2},1032,["onClick"]),x(f,{class:"notice-text-color",type:"text",onClick:e=>(async e=>{a.confirm("确定删除该资源, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await m(e),A(),l({type:"success",message:"删除成功!"})})).catch((()=>{}))})(t.id)},{default:w((()=>[L])),_:2},1032,["onClick"])])])])),_:1},8,["data"]),x(ae,{title:(U(O).id?"编辑":"新增")+"资源",modelValue:U(Y),"onUpdate:modelValue":c[8]||(c[8]=e=>q(Y)?Y.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":M},{default:w((()=>[x(U(e),{ref_key:"formEle",ref:V,model:U(O),rules:U(R),"label-width":"100px",class:"demo-resourceForm"},{default:w((()=>[U(O).parentId?(v(),I(j,{key:0,label:"父对象",prop:"parentLable"},{default:w((()=>[x(y,{modelValue:U($),"onUpdate:modelValue":c[1]||(c[1]=e=>q($)?$.value=e:null),disabled:""},null,8,["modelValue"])])),_:1})):N("",!0),x(j,{label:"资源名称",prop:"title"},{default:w((()=>[x(y,{modelValue:U(O).title,"onUpdate:modelValue":c[2]||(c[2]=e=>U(O).title=e)},null,8,["modelValue"])])),_:1}),x(j,{label:"资源路由",prop:"path"},{default:w((()=>[x(y,{modelValue:U(O).path,"onUpdate:modelValue":c[3]||(c[3]=e=>U(O).path=e)},null,8,["modelValue"])])),_:1}),"menu"===U(O).type?(v(),I(j,{key:1,label:"资源组件",prop:"component"},{default:w((()=>[x(y,{modelValue:U(O).component,"onUpdate:modelValue":c[4]||(c[4]=e=>U(O).component=e)},null,8,["modelValue"])])),_:1})):N("",!0),x(j,{label:"Icon",prop:"icon"},{default:w((()=>[x(y,{modelValue:U(O).icon,"onUpdate:modelValue":c[5]||(c[5]=e=>U(O).icon=e)},null,8,["modelValue"])])),_:1}),x(j,{label:"菜单/按钮",prop:"type"},{default:w((()=>[x(g,{modelValue:U(O).type,"onUpdate:modelValue":c[6]||(c[6]=e=>U(O).type=e)},{default:w((()=>[x(_,{label:"menu",value:""},{default:w((()=>[P])),_:1}),x(_,{label:"button",value:"menu"},{default:w((()=>[Q])),_:1})])),_:1},8,["modelValue"])])),_:1}),x(j,{label:"是否隐藏",prop:"status"},{default:w((()=>[x(ee,{modelValue:U(O).status,"onUpdate:modelValue":c[7]||(c[7]=e=>U(O).status=e)},null,8,["modelValue"])])),_:1}),x(j,null,{default:w((()=>[x(f,{type:"primary",onClick:S},{default:w((()=>[W])),_:1}),x(f,{onClick:G},{default:w((()=>[X])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])])}}}),[["__scopeId","data-v-7bd3c194"]]);export{A as default};