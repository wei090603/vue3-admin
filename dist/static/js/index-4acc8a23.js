import{G as a,F as e,_ as t}from"./index-bf54a2b0.js";import{b as s,a as r,e as o}from"./element-plus-6d3da066.js";import{s as l}from"./index-2f4a0259.js";import{d as i,a2 as p,b as n,o as m,c,X as d,ab as u,ac as b,u as g,a as f,Q as j,W as h,H as y,F as v,V as F}from"./@vue-b1347690.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./lodash-es-b6050654.js";import"./@vueuse-7bacca58.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";/* empty css                      */import"./pinia-89efd9b3.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-ef0e62c7.js";import"./nprogress-2caf32ee.js";import"./js-cookie-1db5286e.js";const x={class:"operate-wrapper"},w={class:"operate-left-btn"},D=F("删除"),T={class:"operate-right-btn"},z=F("导入"),H=F("导出"),P=i({setup(i){const F=p({searchForm:{limit:10,page:1}}),P=a=>{M.currentPage=1,F.searchForm=a,S()},S=async()=>{F.searchForm.page=M.currentPage,F.searchForm.limit=M.pageSize;const{list:a,total:e}=await(t=F.searchForm,l({url:"login-logger",method:"get",params:t}));var t;M.data=a,M.total=e},_=({id:a})=>{s.confirm("确定删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(a=>l({url:`login-logger/${a}`,method:"delete"}))(a),S(),r({type:"success",message:"删除成功!"})})).catch((()=>{}))},k=p({onClickSearch:P,onClickClear:P,filters:[{type:a.input,key:"name",label:"用户名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),M=p({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"用户名",prop:"manager",useSlot:!0},{label:"登录地址",prop:"loginAddress"},{label:"登录IP",prop:"loginIp"},{label:"登录时间",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"200",data:[{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}});return n((()=>{S()})),(a,s)=>{const r=o,l=t;return m(),c(v,null,[d(e,u(b(g(k))),null,16),f("div",x,[f("div",w,[d(r,{plain:"",type:"danger"},{default:j((()=>[D])),_:1})]),f("div",T,[d(r,{type:"primary"},{default:j((()=>[z])),_:1}),d(r,{type:"primary"},{default:j((()=>[H])),_:1})])]),d(l,{tableOpts:g(M),"onUpdate:tableOpts":s[0]||(s[0]=a=>y(M)?M.value=a:M=a),onGetTableData:S,onHandleDel:_},{manager:j((a=>[f("span",null,h(a.value.account),1)])),_:1},8,["tableOpts"])],64)}}});export{P as default};