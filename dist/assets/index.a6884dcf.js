import{G as a,F as e,_ as t}from"./index.d9bd8e3f.js";import{s as l,d as r,r as s,v as n,x as o,o as i,c as p,l as c,D as d,F as m,u,b as g,w as b,O as h,H as f,L as y,I as x,K as F,E as v}from"./index.83fac2ba.js";/* empty css                *//* empty css                  *//* empty css                    */const D={class:"operate-wrapper"},w={class:"operate-left-btn"},T=x("删除"),j={class:"operate-right-btn"},H=x("导入"),O=x("导出"),P=r({setup(r){const x=s({searchForm:{limit:10,page:1}}),P=a=>{M.currentPage=1,x.searchForm=a,S()},S=async()=>{x.searchForm.page=M.currentPage,x.searchForm.limit=M.pageSize;const{list:a,total:e}=await(t=x.searchForm,l({url:"login-logger",method:"get",params:t}));var t;M.data=a,M.total=e},_=({id:a})=>{F.confirm("确定删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(a=>l({url:`login-logger/${a}`,method:"delete"}))(a),S(),v({type:"success",message:"删除成功!"})})).catch((()=>{}))},k=s({onClickSearch:P,onClickClear:P,filters:[{type:a.input,key:"name",label:"用户名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),M=s({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"用户名",prop:"manager",useSlot:!0},{label:"登录地址",prop:"loginAddress"},{label:"登录IP",prop:"loginIp"},{label:"登录时间",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"200",data:[{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}});return n((()=>{S()})),(a,l)=>{const r=o,s=t;return i(),p(y,null,[c(e,d(m(u(k))),null,16),g("div",D,[g("div",w,[c(r,{plain:"",type:"danger"},{default:b((()=>[T])),_:1})]),g("div",j,[c(r,{type:"primary"},{default:b((()=>[H])),_:1}),c(r,{type:"primary"},{default:b((()=>[O])),_:1})])]),c(s,{tableOpts:u(M),"onUpdate:tableOpts":l[0]||(l[0]=a=>f(M)?M.value=a:M=a),onGetTableData:S,onHandleDel:_},{manager:b((a=>[g("span",null,h(a.value.account),1)])),_:1},8,["tableOpts"])],64)}}});export{P as default};
