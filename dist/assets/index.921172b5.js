import{G as a,F as e,_ as t}from"./index.d9bd8e3f.js";import{d as l,$ as s,r,v as i,x as n,a0 as o,a1 as p,o as c,c as d,l as m,D as u,F as b,u as y,b as f,w as g,f as h,m as x,H as F,L as v,I as D,K as _,E as k}from"./index.83fac2ba.js";/* empty css                  */import{n as H,a as M}from"./notice.d2d9e02a.js";/* empty css                *//* empty css                    */const Y={class:"operate-wrapper"},T={class:"operate-left-btn"},j=D("新增"),w=D("删除"),P={class:"operate-right-btn"},S=D("导入"),E=D("导出"),O=D("通知"),B=D("公告"),C=l({setup(l){const D=s(),C=r({searchForm:{limit:10,page:1}}),z=a=>{K.currentPage=1,C.searchForm=a,A()},A=async()=>{C.searchForm.page=K.currentPage,C.searchForm.limit=K.pageSize;const{list:a,total:e}=await H(C.searchForm);K.data=a,K.total=e},G=a=>{D.push({name:"noticeEdit",params:{id:a.id}})},V=({id:a})=>{_.confirm("确定删除该标签, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await M(a),A(),k({type:"success",message:"删除成功!"})})).catch((()=>{}))},I=r({onClickSearch:z,onClickClear:z,filters:[{type:a.input,key:"title",label:"标题：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:a.input,key:"title",label:"创建人：",initialValue:"",validator:[{max:50,message:"请输入 50 个以内字符",trigger:["blur","change"]}]}]}),K=r({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"标题",prop:"title"},{label:"类型",prop:"type",useSlot:!0},{label:"状态",prop:"status",render:a=>a?"正常":"关闭"},{label:"创建人",prop:"createBy"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]},{label:"更新日期",prop:"updatedAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"200",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}});return i((()=>{A()})),(a,l)=>{const s=n,r=o("router-link"),i=p,D=t;return c(),d(v,null,[m(e,u(b(y(I))),null,16),f("div",Y,[f("div",T,[m(r,{to:"/system/notice/add"},{default:g((()=>[m(s,{plain:""},{default:g((()=>[j])),_:1})])),_:1}),m(s,{plain:"",type:"danger"},{default:g((()=>[w])),_:1})]),f("div",P,[m(s,{type:"primary"},{default:g((()=>[S])),_:1}),m(s,{type:"primary"},{default:g((()=>[E])),_:1})])]),m(D,{tableOpts:y(K),"onUpdate:tableOpts":l[0]||(l[0]=a=>F(K)?K.value=a:K=a),onGetTableData:A,onHandleEdit:G,onHandleDel:V},{type:g((a=>[1===a.value?(c(),h(i,{key:0,class:"ml-2",type:"success"},{default:g((()=>[O])),_:1})):x("",!0),2===a.value?(c(),h(i,{key:1,class:"ml-2",type:"success"},{default:g((()=>[B])),_:1})):x("",!0)])),_:1},8,["tableOpts"])],64)}}});export{C as default};
