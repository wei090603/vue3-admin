import{x as e,y as a,z as l,w as r,D as t,n as s}from"./element-plus-c3f3467b.js";import{G as o,F as i,_ as m}from"./index-6ed81e67.js";import{r as d,a as p}from"./roles-f700dded.js";import{d as n,r as u,a2 as c,b,t as f,o as g,c as j,X as y,ab as h,ac as k,u as v,a as V,Q as _,H as F,F as w,V as x}from"./@vue-722b6523.js";import"./lodash-es-b6050654.js";import"./@vueuse-b2b875ad.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";import"./index-1dd190b0.js";/* empty css                      */import"./pinia-f7ddc81d.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-f341a4d8.js";import"./path-browserify-42f42cef.js";import"./@element-plus-d2a6d80a.js";import"./js-cookie-1db5286e.js";import"./nprogress-2caf32ee.js";const N={class:"operate-wrapper"},C={class:"operate-left-btn"},D=x("新增"),z=x("删除"),H={class:"operate-right-btn"},M=x("导入"),P=x("导出"),S={class:"table-container"},T=x("保存"),U=x("重置"),W=n({setup(n){const x=u(),W=c({rolesData:[],searchForm:{limit:10,page:1},formVisible:!1}),Y=async()=>{W.searchForm.page=B.currentPage,W.searchForm.limit=B.pageSize;const{list:e,total:a}=await d(W.searchForm);B.data=e,B.total=a},O=()=>{x.value.resetFields()},q=()=>{O(),W.formVisible=!1},A=e=>{},E=c({id:"",mark:"",roleName:"",remark:""}),G=c({roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],mark:[{required:!0,message:"请输入角色标识",trigger:"blur"}]}),Q=async()=>{var e,a;await(null==(e=x.value)?void 0:e.validate());!0===await(null==(a=x.value)?void 0:a.validate())&&(E.id?(Y(),I.value=!1,s({type:"success",message:"修改成功"})):(await p(E),Y(),I.value=!1,O(),s({type:"success",message:"新增成功"})))},X=c({onClickSearch:A,onClickClear:A,filters:[{type:o.input,key:"roleName",label:"角色名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:o.date,key:"createdAt",label:"创建时间：",className:"date-range",initialValue:""}]}),B=c({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"角色名",prop:"roleName",minWidth:"80"},{label:"标识",prop:"mark",minWidth:"80"},{label:"备注",prop:"remark",minWidth:"80"},{label:"创建日期",prop:"createdAt",minWidth:"80",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"300",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"分配权限",type:"primary",icon:"el-icon-message",handleFunc:"handlePermission"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDelete"}]}});b((()=>{Y()}));const{formVisible:I}=f(W);return(s,o)=>{const d=e,p=a,n=l,u=r;return g(),j(w,null,[y(i,h(k(v(X))),null,16),V("div",N,[V("div",C,[y(d,{plain:"",onClick:o[0]||(o[0]=e=>I.value=!0)},{default:_((()=>[D])),_:1}),y(d,{plain:"",type:"danger"},{default:_((()=>[z])),_:1})]),V("div",H,[y(d,{type:"primary"},{default:_((()=>[M])),_:1}),y(d,{type:"primary",onClick:o[1]||(o[1]=()=>{})},{default:_((()=>[P])),_:1})])]),V("div",S,[y(m,{tableOpts:v(B),onGetTableData:Y},null,8,["tableOpts"])]),y(u,{title:(v(E).id?"编辑":"新增")+"角色",modelValue:v(I),"onUpdate:modelValue":o[5]||(o[5]=e=>F(I)?I.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":q},{default:_((()=>[y(v(t),{ref_key:"formEle",ref:x,model:v(E),rules:v(G),"status-icon":"","label-width":"100px",class:"demo-resourceForm"},{default:_((()=>[y(n,{label:"角色名称",prop:"roleName"},{default:_((()=>[y(p,{modelValue:v(E).roleName,"onUpdate:modelValue":o[2]||(o[2]=e=>v(E).roleName=e)},null,8,["modelValue"])])),_:1}),y(n,{label:"标识",prop:"mark"},{default:_((()=>[y(p,{modelValue:v(E).mark,"onUpdate:modelValue":o[3]||(o[3]=e=>v(E).mark=e)},null,8,["modelValue"])])),_:1}),y(n,{label:"角色描述",prop:"remark"},{default:_((()=>[y(p,{modelValue:v(E).remark,"onUpdate:modelValue":o[4]||(o[4]=e=>v(E).remark=e),type:"textarea"},null,8,["modelValue"])])),_:1}),y(n,null,{default:_((()=>[y(d,{type:"primary",onClick:Q},{default:_((()=>[T])),_:1}),y(d,{onClick:O},{default:_((()=>[U])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}});export{W as default};