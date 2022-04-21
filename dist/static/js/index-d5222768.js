import{x as e,i as a,y as l,z as t,A as r,B as o,w as s,D as i,n,o as d}from"./element-plus-c3f3467b.js";import{G as m,F as u,_ as p}from"./index-6ed81e67.js";import{I as c}from"./index-72a889b2.js";import{s as b,_ as g}from"./index-1dd190b0.js";import{b as f}from"./roles-f700dded.js";import{d as h,a2 as y,r as v,t as V,b as j,o as _,c as w,X as k,ab as x,ac as F,u as U,a as z,Q as D,V as C,W as P,F as W,a6 as S,H,n as T,P as q}from"./@vue-722b6523.js";import"./lodash-es-b6050654.js";import"./@vueuse-b2b875ad.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";import"./@element-plus-d2a6d80a.js";/* empty css                      */import"./pinia-f7ddc81d.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-f341a4d8.js";import"./path-browserify-42f42cef.js";import"./js-cookie-1db5286e.js";import"./nprogress-2caf32ee.js";const E={class:"operate-wrapper"},M={class:"operate-left-btn"},O=C("新增"),Y=C("删除"),$={class:"operate-right-btn"},B=C("导入"),A=C("导出"),G=C("保存"),I=C("重置");var N=g(h({setup(g){const h=y({rolesData:[],searchForm:{limit:10,page:1,name:"",account:"",phone:""},formVisible:!1}),N=e=>{R.currentPage=1,h.searchForm=e,X()},R=y({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"用户名",prop:"account",minWidth:"80"},{label:"姓名",prop:"name",minWidth:"120"},{label:"邮箱",prop:"email",width:"160"},{label:"头像",prop:"avatar",width:"100",useSlot:!0},{label:"手机号",prop:"phone",minWidth:"120"},{label:"角色",prop:"roles",minWidth:"80",useSlot:!0},{label:"状态",prop:"status",minWidth:"80",useSlot:!0},{label:"备注",prop:"remark",minWidth:"100"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"],minWidth:"100"}],operation:{label:"操作",width:"260",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"重置密码",type:"warning",icon:"el-icon-message",handleFunc:"handleRestPwd"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDelete"}]}}),Q=y({onClickSearch:N,onClickClear:N,filters:[{type:m.input,key:"account",label:"用户名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:m.input,key:"name",label:"姓名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),X=async()=>{h.searchForm.page=R.currentPage,h.searchForm.limit=R.pageSize;const{list:e,total:a}=await(l=h.searchForm,b({url:"manager",method:"get",params:l}));var l;R.data=e,R.total=a},J=v(),K=()=>{J.value.resetFields()},L=()=>{K(),Z.id="",h.formVisible=!1},Z=y({id:"",name:"",account:"",email:"",phone:"",remark:"",roles:[]}),ee=y({account:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],email:[{required:!1,message:"请输入正确的邮箱地址",trigger:"blur"}],roles:[{required:!0,message:"请选择角色",trigger:"blur"}],phone:[{required:!1,trigger:"blur",validator:(e,a,l)=>{if(a){if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(a))return l(new Error("请输入正确的手机号"))}l()},message:"手机号格式错误"}]}),ae=async()=>{var e,a,l;await(null==(e=J.value)?void 0:e.validate()),Z.id?await(a=Z.id,l=Z,b({url:`manager/${a}`,method:"patch",data:l})):await(e=>b({url:"manager",method:"post",data:e}))(Z),X(),n({type:"success",message:Z.id?"修改成功":"新增成功"}),L()},le=async e=>{d.confirm("确定重置该用户密码为123456, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{var a;await(a=e.id,b({url:`manager/restPassword/${a}`,method:"patch"})),n({type:"success",message:"重置成功!"})})).catch((()=>{}))},te=async e=>{await(e=>b({url:`manager/status/${e}`,method:"patch"}))(e),X(),n({message:"修改成功",type:"success"})},re=e=>{h.formVisible=!0,T((()=>{Z.id=e.id,Z.account=e.account,Z.name=e.name,Z.phone=e.phone,Z.email=e.email;const a=e.roles.map((({id:e})=>e));Z.remark=e.remark,Z.roles=a}))},{rolesData:oe,formVisible:se}=V(h);return j((()=>{X(),(async()=>{h.rolesData=await f()})()})),(n,d)=>{const m=e,b=a,g=p,f=l,h=t,y=r,v=o,V=s;return _(),w(W,null,[k(u,x(F(U(Q))),null,16),z("div",E,[z("div",M,[k(m,{plain:"",onClick:d[0]||(d[0]=e=>se.value=!0)},{default:D((()=>[O])),_:1}),k(m,{plain:"",type:"danger"},{default:D((()=>[Y])),_:1})]),z("div",$,[k(m,{type:"primary"},{default:D((()=>[B])),_:1}),k(m,{type:"primary"},{default:D((()=>[A])),_:1})])]),k(g,{tableOpts:U(R),"onUpdate:tableOpts":d[1]||(d[1]=e=>H(R)?R.value=e:R=e),onGetTableData:X,onHandleEdit:re,onHandleRestPwd:le},{avatar:D((e=>[k(c,{url:e.value,size:64},null,8,["url"])])),status:D((e=>[C(P(e.value?"启用":"禁用")+" ",1),k(b,{"active-color":"#409eff",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onChange:a=>te(e.data.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),roles:D((e=>[(_(!0),w(W,null,S(e.data.roles,(e=>(_(),w("span",{key:e.id},[k(m,{type:"success",size:"small"},{default:D((()=>[C(P(e.roleName),1)])),_:2},1024)])))),128))])),_:1},8,["tableOpts"]),k(V,{title:(U(Z).id?"编辑":"新增")+"用户",modelValue:U(se),"onUpdate:modelValue":d[9]||(d[9]=e=>H(se)?se.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":L},{default:D((()=>[k(U(i),{model:U(Z),"status-icon":"",rules:U(ee),ref_key:"managerFormEle",ref:J,"label-width":"100px"},{default:D((()=>[k(h,{label:"用户名：",prop:"account"},{default:D((()=>[k(f,{modelValue:U(Z).account,"onUpdate:modelValue":d[2]||(d[2]=e=>U(Z).account=e),disabled:!!U(Z).id},null,8,["modelValue","disabled"])])),_:1}),k(h,{label:"姓名：",prop:"name"},{default:D((()=>[k(f,{modelValue:U(Z).name,"onUpdate:modelValue":d[3]||(d[3]=e=>U(Z).name=e)},null,8,["modelValue"])])),_:1}),k(h,{label:"角色：",prop:"roles"},{default:D((()=>[k(v,{modelValue:U(Z).roles,"onUpdate:modelValue":d[4]||(d[4]=e=>U(Z).roles=e),multiple:"",placeholder:"请选择",size:"default"},{default:D((()=>[(_(!0),w(W,null,S(U(oe),(e=>(_(),q(y,{key:e.id,label:e.roleName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),k(h,{label:"邮箱：",prop:"email"},{default:D((()=>[k(f,{modelValue:U(Z).email,"onUpdate:modelValue":d[5]||(d[5]=e=>U(Z).email=e)},null,8,["modelValue"])])),_:1}),k(h,{label:"手机号码：",prop:"phone"},{default:D((()=>[k(f,{modelValue:U(Z).phone,"onUpdate:modelValue":d[6]||(d[6]=e=>U(Z).phone=e)},null,8,["modelValue"])])),_:1}),k(h,{label:"描述：",prop:"remark"},{default:D((()=>[k(f,{modelValue:U(Z).remark,"onUpdate:modelValue":d[7]||(d[7]=e=>U(Z).remark=e)},null,8,["modelValue"])])),_:1}),k(h,null,{default:D((()=>[k(m,{type:"primary",onClick:ae},{default:D((()=>[G])),_:1}),k(m,{onClick:d[8]||(d[8]=e=>K())},{default:D((()=>[I])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}}),[["__scopeId","data-v-317b9cec"]]);export{N as default};