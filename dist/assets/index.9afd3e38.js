import{d as e,e as a,r as l,v as t,t as r,x as s,y as i,z as o,q as d,o as m,c as n,l as u,D as p,F as c,u as b,b as f,w as g,G as y,H as h,L as k,I as v,E as V}from"./index.83fac2ba.js";/* empty css                  *//* empty css                */import{G as _,F,_ as w}from"./index.d9bd8e3f.js";import{r as x,a as N}from"./roles.8bca32c1.js";/* empty css                  *//* empty css                    */const j={class:"operate-wrapper"},C={class:"operate-left-btn"},D=v("新增"),H=v("删除"),M={class:"operate-right-btn"},P=v("导入"),S=v("导出"),T={class:"table-container"},U=v("保存"),W=v("重置"),Y=e({setup(e){const v=a(),Y=l({rolesData:[],searchForm:{limit:10,page:1},formVisible:!1}),q=async()=>{Y.searchForm.page=B.currentPage,Y.searchForm.limit=B.pageSize;const{list:e,total:a}=await x(Y.searchForm);B.data=e,B.total=a},z=()=>{v.value.resetFields()},E=()=>{z(),Y.formVisible=!1},G=e=>{},O=l({id:"",mark:"",roleName:"",remark:""}),A=l({roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],mark:[{required:!0,message:"请输入角色标识",trigger:"blur"}]}),I=async()=>{var e,a;await(null==(e=v.value)?void 0:e.validate());!0===await(null==(a=v.value)?void 0:a.validate())&&(O.id?(q(),J.value=!1,V({type:"success",message:"修改成功"})):(await N(O),q(),J.value=!1,z(),V({type:"success",message:"新增成功"})))},L=l({onClickSearch:G,onClickClear:G,filters:[{type:_.input,key:"roleName",label:"角色名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:_.date,key:"createdAt",label:"创建时间：",className:"date-range",initialValue:""}]}),B=l({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"角色名",prop:"roleName",minWidth:"80"},{label:"标识",prop:"mark",minWidth:"80"},{label:"备注",prop:"remark",minWidth:"80"},{label:"创建日期",prop:"createdAt",minWidth:"80",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"300",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"分配权限",type:"primary",icon:"el-icon-message",handleFunc:"handlePermission"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDelete"}]}});t((()=>{q()}));const{formVisible:J}=r(Y);return(e,a)=>{const l=s,t=i,r=o,V=d;return m(),n(k,null,[u(F,p(c(b(L))),null,16),f("div",j,[f("div",C,[u(l,{plain:"",onClick:a[0]||(a[0]=e=>J.value=!0)},{default:g((()=>[D])),_:1}),u(l,{plain:"",type:"danger"},{default:g((()=>[H])),_:1})]),f("div",M,[u(l,{type:"primary"},{default:g((()=>[P])),_:1}),u(l,{type:"primary",onClick:a[1]||(a[1]=()=>{})},{default:g((()=>[S])),_:1})])]),f("div",T,[u(w,{tableOpts:b(B),onGetTableData:q},null,8,["tableOpts"])]),u(V,{title:(b(O).id?"编辑":"新增")+"角色",modelValue:b(J),"onUpdate:modelValue":a[5]||(a[5]=e=>h(J)?J.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":E},{default:g((()=>[u(b(y),{ref_key:"formEle",ref:v,model:b(O),rules:b(A),"status-icon":"","label-width":"100px",class:"demo-resourceForm"},{default:g((()=>[u(r,{label:"角色名称",prop:"roleName"},{default:g((()=>[u(t,{modelValue:b(O).roleName,"onUpdate:modelValue":a[2]||(a[2]=e=>b(O).roleName=e)},null,8,["modelValue"])])),_:1}),u(r,{label:"标识",prop:"mark"},{default:g((()=>[u(t,{modelValue:b(O).mark,"onUpdate:modelValue":a[3]||(a[3]=e=>b(O).mark=e)},null,8,["modelValue"])])),_:1}),u(r,{label:"角色描述",prop:"remark"},{default:g((()=>[u(t,{modelValue:b(O).remark,"onUpdate:modelValue":a[4]||(a[4]=e=>b(O).remark=e),type:"textarea"},null,8,["modelValue"])])),_:1}),u(r,null,{default:g((()=>[u(l,{type:"primary",onClick:I},{default:g((()=>[U])),_:1}),u(l,{onClick:z},{default:g((()=>[W])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}});export{Y as default};