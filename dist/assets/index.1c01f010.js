import{d as e,N as a,P as l,as as t,at as i,au as r,av as s,aw as o,ar as d,o as n,c as u,a as p,aA as m,aB as c,u as f,e as b,w as g,R as h,aC as y,F as k,B as V,a1 as v,aD as _,a2 as w}from"./vendor.2df3944f.js";/* empty css                  *//* empty css                */import{G as x,F as D,_ as F}from"./index.3a537d10.js";import{s as M}from"./index.348ad088.js";/* empty css                  *//* empty css                    */const Y={class:"operate-wrapper"},j={class:"operate-left-btn"},C=V("新增"),H=V("删除"),T={class:"operate-right-btn"},P=V("导入"),U=V("导出"),B=V("保存"),O=V("重置"),A=e({setup(e){const V=a({searchForm:{},formVisible:!1}),A=a({id:"",title:"",link:"",sort:""}),E=e=>{J.currentPage=1,V.searchForm=e,S()},S=async()=>{var e;J.data=await(e=V.searchForm,M({url:"menu",method:"get",params:e}))},q=l(),G=()=>{q.value.resetFields()},$=()=>{G(),A.id="",V.formVisible=!1},z=async()=>{var e,a;await q.value.validate(),A.id?await(e=A.id,a=A,M({url:`menu/${e}`,method:"patch",data:a})):await(e=>M({url:"menu",method:"post",data:e}))(A),S(),v({type:"success",message:A.id?"修改成功":"新增成功"}),$()},N=e=>{V.formVisible=!0,_((()=>{A.id=e.id,A.title=e.title,A.link=e.link,A.sort=e.sort}))},R=({id:e})=>{w.confirm("确定删除该导航, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(e=>M({url:`menu/${e}`,method:"delete"}))(e),S(),v({type:"success",message:"删除成功!"})})).catch((()=>{}))},I=a({onClickSearch:E,onClickClear:E,filters:[{type:x.input,key:"title",label:"导航名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),J=a({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!1,pageHandleFunc:"getTableData",column:[{label:"导航名",prop:"title"},{label:"链接",prop:"link"},{label:"排序",prop:"sort"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]},{label:"更新日期",prop:"updateAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"300",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}}),K=a({title:[{required:!0,message:"请输入导航名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],link:[{required:!0,message:"请输入导航链接",trigger:"blur"}]}),{formVisible:L}=t(V);return i((()=>{S()})),(e,a)=>{const l=r,t=F,i=s,V=o,v=d;return n(),u(k,null,[p(D,m(c(f(I))),null,16),b("div",Y,[b("div",j,[p(l,{plain:"",onClick:a[0]||(a[0]=e=>L.value=!0)},{default:g((()=>[C])),_:1}),p(l,{plain:"",type:"danger"},{default:g((()=>[H])),_:1})]),b("div",T,[p(l,{type:"primary"},{default:g((()=>[P])),_:1}),p(l,{type:"primary"},{default:g((()=>[U])),_:1})])]),p(t,{tableOpts:f(J),"onUpdate:tableOpts":a[1]||(a[1]=e=>h(J)?J.value=e:J=e),onGetTableData:S,onHandleEdit:N,onHandleDel:R},null,8,["tableOpts"]),p(v,{title:(f(A).id?"编辑":"新增")+"导航",modelValue:f(L),"onUpdate:modelValue":a[6]||(a[6]=e=>h(L)?L.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":$},{default:g((()=>[p(f(y),{model:f(A),"status-icon":"",rules:f(K),ref_key:"formEle",ref:q,"label-width":"100px"},{default:g((()=>[p(V,{label:"导航标题：",prop:"title"},{default:g((()=>[p(i,{modelValue:f(A).title,"onUpdate:modelValue":a[2]||(a[2]=e=>f(A).title=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"导航链接：",prop:"link"},{default:g((()=>[p(i,{modelValue:f(A).link,"onUpdate:modelValue":a[3]||(a[3]=e=>f(A).link=e)},null,8,["modelValue"])])),_:1}),p(V,{label:"排序：",prop:"sort"},{default:g((()=>[p(i,{modelValue:f(A).sort,"onUpdate:modelValue":a[4]||(a[4]=e=>f(A).sort=e)},null,8,["modelValue"])])),_:1}),p(V,null,{default:g((()=>[p(l,{type:"primary",onClick:z},{default:g((()=>[B])),_:1}),p(l,{onClick:a[5]||(a[5]=e=>G())},{default:g((()=>[O])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}});export{A as default};