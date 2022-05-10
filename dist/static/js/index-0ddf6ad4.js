import{f as e,a,b as l,e as t,c as s,d as i,x as r}from"./element-plus-6d3da066.js";import{G as o,F as n,_ as d}from"./index-bf54a2b0.js";import{s as p}from"./index-2f4a0259.js";import{d as m,a2 as u,r as c,t as b,b as f,o as g,c as h,X as j,ab as y,ac as V,u as k,a as v,Q as _,H as w,F as x,V as F,n as D}from"./@vue-b1347690.js";import"./lodash-es-b6050654.js";import"./@vueuse-7bacca58.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";/* empty css                      */import"./pinia-89efd9b3.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-ef0e62c7.js";import"./nprogress-2caf32ee.js";import"./js-cookie-1db5286e.js";const H={class:"operate-wrapper"},M={class:"operate-left-btn"},Y=F("新增"),T=F("删除"),C={class:"operate-right-btn"},U=F("导入"),z=F("导出"),O=F("保存"),P=F("重置"),E=m({setup(m){const F=u({searchForm:{},formVisible:!1}),E=u({id:"",title:"",link:"",sort:""}),S=e=>{J.currentPage=1,F.searchForm=e,q()},q=async()=>{var e;J.data=await(e=F.searchForm,p({url:"menu",method:"get",params:e}))},A=c(),B=()=>{A.value.resetFields()},G=()=>{B(),E.id="",F.formVisible=!1},$=async()=>{var e,l;await A.value.validate(),E.id?await(e=E.id,l=E,p({url:`menu/${e}`,method:"patch",data:l})):await(e=>p({url:"menu",method:"post",data:e}))(E),q(),a({type:"success",message:E.id?"修改成功":"新增成功"}),G()},Q=e=>{F.formVisible=!0,D((()=>{E.id=e.id,E.title=e.title,E.link=e.link,E.sort=e.sort}))},X=({id:e})=>{l.confirm("确定删除该导航, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(e=>p({url:`menu/${e}`,method:"delete"}))(e),q(),a({type:"success",message:"删除成功!"})})).catch((()=>{}))},I=u({onClickSearch:S,onClickClear:S,filters:[{type:o.input,key:"title",label:"导航名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),J=u({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!1,pageHandleFunc:"getTableData",column:[{label:"导航名",prop:"title"},{label:"链接",prop:"link"},{label:"排序",prop:"sort"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]},{label:"更新日期",prop:"updateAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"300",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}}),K=u({title:[{required:!0,message:"请输入导航名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],link:[{required:!0,message:"请输入导航链接",trigger:"blur"}]}),{formVisible:L}=b(F);return f((()=>{q()})),(a,l)=>{const o=t,p=d,m=s,u=i,c=r;return g(),h(x,null,[j(n,y(V(k(I))),null,16),v("div",H,[v("div",M,[j(o,{plain:"",onClick:l[0]||(l[0]=e=>L.value=!0)},{default:_((()=>[Y])),_:1}),j(o,{plain:"",type:"danger"},{default:_((()=>[T])),_:1})]),v("div",C,[j(o,{type:"primary"},{default:_((()=>[U])),_:1}),j(o,{type:"primary"},{default:_((()=>[z])),_:1})])]),j(p,{tableOpts:k(J),"onUpdate:tableOpts":l[1]||(l[1]=e=>w(J)?J.value=e:J=e),onGetTableData:q,onHandleEdit:Q,onHandleDel:X},null,8,["tableOpts"]),j(c,{title:(k(E).id?"编辑":"新增")+"导航",modelValue:k(L),"onUpdate:modelValue":l[6]||(l[6]=e=>w(L)?L.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":G},{default:_((()=>[j(k(e),{model:k(E),"status-icon":"",rules:k(K),ref_key:"formEle",ref:A,"label-width":"100px"},{default:_((()=>[j(u,{label:"导航标题：",prop:"title"},{default:_((()=>[j(m,{modelValue:k(E).title,"onUpdate:modelValue":l[2]||(l[2]=e=>k(E).title=e)},null,8,["modelValue"])])),_:1}),j(u,{label:"导航链接：",prop:"link"},{default:_((()=>[j(m,{modelValue:k(E).link,"onUpdate:modelValue":l[3]||(l[3]=e=>k(E).link=e)},null,8,["modelValue"])])),_:1}),j(u,{label:"排序：",prop:"sort"},{default:_((()=>[j(m,{modelValue:k(E).sort,"onUpdate:modelValue":l[4]||(l[4]=e=>k(E).sort=e)},null,8,["modelValue"])])),_:1}),j(u,null,{default:_((()=>[j(o,{type:"primary",onClick:$},{default:_((()=>[O])),_:1}),j(o,{onClick:l[5]||(l[5]=e=>B())},{default:_((()=>[P])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}});export{E as default};
