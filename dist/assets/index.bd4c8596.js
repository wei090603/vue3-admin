import{s as e,_ as a,d as l,r as t,e as r,t as o,v as s,x as i,a9 as n,y as d,z as u,A as m,B as p,q as c,o as g,c as b,l as h,D as f,F as y,u as V,b as v,w as _,I as w,O as k,L as x,M as F,H as U,G as D,E as j,K as C,J as P,f as S}from"./index.83fac2ba.js";/* empty css                  *//* empty css                  *//* empty css                */import{G as W,F as q,_ as z}from"./index.d9bd8e3f.js";import{I as H}from"./index.4f26f9fd.js";import{b as T}from"./roles.8bca32c1.js";/* empty css                    */const E={class:"operate-wrapper"},M={class:"operate-left-btn"},O=w("新增"),Y=w("删除"),$={class:"operate-right-btn"},B=w("导入"),G=w("导出"),I=w("保存"),A=w("重置");var N=a(l({setup(a){const l=t({rolesData:[],searchForm:{limit:10,page:1,name:"",account:"",phone:""},formVisible:!1}),N=e=>{R.currentPage=1,l.searchForm=e,K()},R=t({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"用户名",prop:"account",minWidth:"80"},{label:"姓名",prop:"name",minWidth:"120"},{label:"邮箱",prop:"email",width:"160"},{label:"头像",prop:"avatar",width:"100",useSlot:!0},{label:"手机号",prop:"phone",minWidth:"120"},{label:"角色",prop:"roles",minWidth:"80",useSlot:!0},{label:"状态",prop:"status",minWidth:"80",useSlot:!0},{label:"备注",prop:"remark",minWidth:"100"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"],minWidth:"100"}],operation:{label:"操作",width:"260",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"重置密码",type:"warning",icon:"el-icon-message",handleFunc:"handleRestPwd"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDelete"}]}}),J=t({onClickSearch:N,onClickClear:N,filters:[{type:W.input,key:"account",label:"用户名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:W.input,key:"name",label:"姓名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),K=async()=>{l.searchForm.page=R.currentPage,l.searchForm.limit=R.pageSize;const{list:a,total:t}=await(r=l.searchForm,e({url:"manager",method:"get",params:r}));var r;R.data=a,R.total=t},L=r(),Q=()=>{L.value.resetFields()},X=()=>{Q(),Z.id="",l.formVisible=!1},Z=t({id:"",name:"",account:"",email:"",phone:"",remark:"",roles:[]}),ee=t({account:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],email:[{required:!1,message:"请输入正确的邮箱地址",trigger:"blur"}],roles:[{required:!0,message:"请选择角色",trigger:"blur"}],phone:[{required:!1,trigger:"blur",validator:(e,a,l)=>{if(a){if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(a))return l(new Error("请输入正确的手机号"))}l()},message:"手机号格式错误"}]}),ae=async()=>{var a,l,t;await(null==(a=L.value)?void 0:a.validate()),Z.id?await(l=Z.id,t=Z,e({url:`manager/${l}`,method:"patch",data:t})):await(a=>e({url:"manager",method:"post",data:a}))(Z),K(),j({type:"success",message:Z.id?"修改成功":"新增成功"}),X()},le=async a=>{C.confirm("确定重置该用户密码为123456, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{var l;await(l=a.id,e({url:`manager/restPassword/${l}`,method:"patch"})),j({type:"success",message:"重置成功!"})})).catch((()=>{}))},te=async a=>{await(a=>e({url:`manager/status/${a}`,method:"patch"}))(a),K(),j({message:"修改成功",type:"success"})},re=e=>{l.formVisible=!0,P((()=>{Z.id=e.id,Z.account=e.account,Z.name=e.name,Z.phone=e.phone,Z.email=e.email;const a=e.roles.map((({id:e})=>e));Z.remark=e.remark,Z.roles=a}))},{rolesData:oe,formVisible:se}=o(l);return s((()=>{K(),(async()=>{l.rolesData=await T()})()})),(e,a)=>{const l=i,t=n,r=z,o=d,s=u,j=m,C=p,P=c;return g(),b(x,null,[h(q,f(y(V(J))),null,16),v("div",E,[v("div",M,[h(l,{plain:"",onClick:a[0]||(a[0]=e=>se.value=!0)},{default:_((()=>[O])),_:1}),h(l,{plain:"",type:"danger"},{default:_((()=>[Y])),_:1})]),v("div",$,[h(l,{type:"primary"},{default:_((()=>[B])),_:1}),h(l,{type:"primary"},{default:_((()=>[G])),_:1})])]),h(r,{tableOpts:V(R),"onUpdate:tableOpts":a[1]||(a[1]=e=>U(R)?R.value=e:R=e),onGetTableData:K,onHandleEdit:re,onHandleRestPwd:le},{avatar:_((e=>[h(H,{url:e.value,size:64},null,8,["url"])])),status:_((e=>[w(k(e.value?"启用":"禁用")+" ",1),h(t,{"active-color":"#409eff",modelValue:e.value,"onUpdate:modelValue":a=>e.value=a,onChange:a=>te(e.data.id)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),roles:_((e=>[(g(!0),b(x,null,F(e.data.roles,(e=>(g(),b("span",{key:e.id},[h(l,{type:"success",size:"small"},{default:_((()=>[w(k(e.roleName),1)])),_:2},1024)])))),128))])),_:1},8,["tableOpts"]),h(P,{title:(V(Z).id?"编辑":"新增")+"用户",modelValue:V(se),"onUpdate:modelValue":a[9]||(a[9]=e=>U(se)?se.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":X},{default:_((()=>[h(V(D),{model:V(Z),"status-icon":"",rules:V(ee),ref_key:"managerFormEle",ref:L,"label-width":"100px"},{default:_((()=>[h(s,{label:"用户名：",prop:"account"},{default:_((()=>[h(o,{modelValue:V(Z).account,"onUpdate:modelValue":a[2]||(a[2]=e=>V(Z).account=e),disabled:!!V(Z).id},null,8,["modelValue","disabled"])])),_:1}),h(s,{label:"姓名：",prop:"name"},{default:_((()=>[h(o,{modelValue:V(Z).name,"onUpdate:modelValue":a[3]||(a[3]=e=>V(Z).name=e)},null,8,["modelValue"])])),_:1}),h(s,{label:"角色：",prop:"roles"},{default:_((()=>[h(C,{modelValue:V(Z).roles,"onUpdate:modelValue":a[4]||(a[4]=e=>V(Z).roles=e),multiple:"",placeholder:"请选择",size:"default"},{default:_((()=>[(g(!0),b(x,null,F(V(oe),(e=>(g(),S(j,{key:e.id,label:e.roleName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(s,{label:"邮箱：",prop:"email"},{default:_((()=>[h(o,{modelValue:V(Z).email,"onUpdate:modelValue":a[5]||(a[5]=e=>V(Z).email=e)},null,8,["modelValue"])])),_:1}),h(s,{label:"手机号码：",prop:"phone"},{default:_((()=>[h(o,{modelValue:V(Z).phone,"onUpdate:modelValue":a[6]||(a[6]=e=>V(Z).phone=e)},null,8,["modelValue"])])),_:1}),h(s,{label:"描述：",prop:"remark"},{default:_((()=>[h(o,{modelValue:V(Z).remark,"onUpdate:modelValue":a[7]||(a[7]=e=>V(Z).remark=e)},null,8,["modelValue"])])),_:1}),h(s,null,{default:_((()=>[h(l,{type:"primary",onClick:ae},{default:_((()=>[I])),_:1}),h(l,{onClick:a[8]||(a[8]=e=>Q())},{default:_((()=>[A])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}}),[["__scopeId","data-v-64422e1d"]]);export{N as default};