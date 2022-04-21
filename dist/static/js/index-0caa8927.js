import{n as e,m as a,v as l,E as t,w as i,x as o,y as r,z as s,A as d,B as p,C as n,D as u,o as c}from"./element-plus-c3f3467b.js";import{G as m,F as f,_ as g}from"./index-6ed81e67.js";import{g as b,_ as h,s as v}from"./index-1dd190b0.js";import{d as y,a2 as U,r as w,o as j,P as V,Q as _,J as F,K as S,u as z,w as B,c as L,X as P,a as x,U as k,t as C,b as D,ab as q,ac as T,H,V as $,n as A}from"./@vue-722b6523.js";import{p as I}from"./@element-plus-d2a6d80a.js";import{I as M}from"./index-72a889b2.js";import"./lodash-es-b6050654.js";import"./@vueuse-b2b875ad.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./dayjs-2378ce3f.js";import"./axios-aec7d438.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";/* empty css                      */import"./pinia-f7ddc81d.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-f341a4d8.js";import"./path-browserify-42f42cef.js";import"./js-cookie-1db5286e.js";import"./nprogress-2caf32ee.js";const R=y({props:{hideUpload:Boolean,disabled:Boolean,fileList:{type:Array,required:!0},accept:{type:String,default:".jpg, .jpeg, .png"},sizeLimit:{type:Number,default:20},listType:{type:String,default:"picture-card"},onBeforeUpload:Function,onBeforeUploadPromise:Function,onUploadSuccess:{type:Function,required:!0},onPreview:{type:Function,required:!0},onChange:{type:Function,required:!0},onRemove:{type:Function,required:!0},onUploadFail:{type:Function,required:!0}},setup(t){const i=t,o=U({uploadHeaders:{Authorization:"Bearer "+b()},file:null}),r=w(),s=l=>{const t=i.accept.includes(l.name.toLowerCase().split(".").pop()),s=l.size<=1024*i.sizeLimit*1024;t||e.error("文件格式不正确"),s||e.error(`文件大小必须小于 ${i.sizeLimit}MB`);if(!(t&&s))return!1;if(i.onBeforeUpload){const a=i.onBeforeUpload(l);if(a)return e.error(a),!1}return i.onBeforeUploadPromise?i.onBeforeUploadPromise(l).then((()=>(o.file=l,r.value=a.service({lock:!0,text:"上传中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),!0))).catch((a=>(e.error(a),Promise.reject(a)))):(o.file=l,r.value=a.service({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),!0)},d=(a,l)=>{var t,s,d,p;if(200===a.code){const{data:e}=a;null==(t=i.onUploadSuccess)||t.call(i,e.filename)}else e.error(a.message||"上传文件失败"),null==(s=i.onUploadFail)||s.call(i,a.message,o.file);null==(p=(d=r.value).close)||p.call(d)},p=()=>{var a,l,t;e.error("上传文件失败"),null==(a=i.onUploadFail)||a.call(i,"上传文件失败",o.file),null==(t=(l=r.value).close)||t.call(l)};return(e,a)=>{const i=l;return j(),V(i,{limit:1,"list-type":t.listType,accept:t.accept,class:S([{"hide-upload":t.hideUpload,"disabled-upload":t.disabled}]),disabled:t.disabled,data:{},action:"https://adminapi.tobtt.cn//upload/file",headers:z(o).uploadHeaders,"on-preview":t.onPreview,"on-change":t.onChange,"on-remove":t.onRemove,"before-upload":s,"on-success":d,"on-error":p,"file-list":t.fileList},{default:_((()=>[F(e.$slots,"default")])),_:3},8,["list-type","accept","class","disabled","headers","on-preview","on-change","on-remove","file-list"])}}});const E=["src"];var Y=h(y({props:{disabled:Boolean,imageUrl:String,uploaderSize:{type:String,default:"large"},accept:{type:String,default:".jpg, .jpeg, .png"},isShowPreview:{type:Boolean,default:!0},sizeLimit:{type:Number,default:20},listType:{type:String,default:"picture-card"},onBeforeUpload:Function,onUploadSuccess:Function,onRemoveImage:Function,onUploadFail:Function,pixelLimit:Array,scaleLimit:Number},emits:["update:imageUrl"],setup(e,{emit:a}){const l=e,o=w(),r=w("https://adminapi.tobtt.cn/uploads/"),s=U({hideUpload:!1,fileList:[],imgPreviewDialogVisible:!1,file:null});B((()=>l.imageUrl),((e,a)=>{if(e){const e={name:l.imageUrl,url:`${r.value}${l.imageUrl}`};s.fileList=[e],s.hideUpload=!0,s.file=e}}));const d=()=>{s.hideUpload=!0},p=()=>{s.imgPreviewDialogVisible=!0},n=()=>{var e;s.fileList.shift(),s.file=null,s.hideUpload=!1,a("update:imageUrl",""),null==(e=l.onRemoveImage)||e.call(l)},u=e=>{var t,i;s.hideUpload=!0,null==(t=l.onUploadSuccess)||t.call(l,e),a("update:imageUrl",e),null==(i=o.value)||i.close()},c=e=>{var a;null==(a=l.onUploadFail)||a.call(l,e),setTimeout((()=>{n()}),0)};return(a,l)=>{const o=t,m=i;return j(),L("div",{class:S(["uploader-wrapper image-uploader",e.uploaderSize,{"hide-upload":z(s).hideUpload,"hide-preview":!e.isShowPreview}])},[P(R,{disabled:e.disabled,hideUpload:z(s).hideUpload,accept:e.accept,sizeLimit:e.sizeLimit,onBeforeUpload:e.onBeforeUpload,onRemove:n,onPreview:p,onChange:d,onUploadSuccess:u,onUploadFail:c,fileList:z(s).fileList},{default:_((()=>[P(o,{class:"avatar-uploader-icon"},{default:_((()=>[P(z(I))])),_:1})])),_:1},8,["disabled","hideUpload","accept","sizeLimit","onBeforeUpload","fileList"]),e.isShowPreview?(j(),V(m,{key:0,modal:!1,modelValue:z(s).imgPreviewDialogVisible,"onUpdate:modelValue":l[0]||(l[0]=e=>z(s).imgPreviewDialogVisible=e),title:"图片预览","custom-class":"preview-dialog",width:"600px"},{default:_((()=>[x("img",{src:r.value+e.imageUrl,alt:""},null,8,E)])),_:1},8,["modelValue"])):k("",!0)],2)}}}),[["__scopeId","data-v-120db87a"]]);const N={class:"warpper"},O={class:"operate-wrapper"},G={class:"operate-left-btn"},J=$("新增"),K=$("删除"),Q={class:"operate-right-btn"},W=$("导入"),X=$("导出"),Z=$("显示"),ee=$("隐藏"),ae=$("保存"),le=$("重置");var te=h(y({setup(a){const l=U({searchForm:{limit:10,page:1,title:"",type:""},formVisible:!1}),t=U({id:"",title:"",picture:"",type:"home",status:!0,describe:""}),b={home:"首页"},h=e=>{R.currentPage=1,l.searchForm=e,y()},y=async()=>{l.searchForm.page=R.currentPage,l.searchForm.limit=R.pageSize;const{list:e,total:a}=await(t=l.searchForm,v({url:"advertise",method:"get",params:t}));var t;R.data=e,R.total=a},V=w(),F=()=>{V.value.resetFields()},S=()=>{F(),t.id="",l.formVisible=!1},B=async()=>{var a,l;await V.value.validate(),t.id?await(a=t.id,l=t,v({url:`advertise/${a}`,method:"patch",data:l})):await(e=>v({url:"advertise",method:"post",data:e}))(t),y(),e({type:"success",message:t.id?"修改成功":"新增成功"}),S()},k=e=>{l.formVisible=!0,A((()=>{t.id=e.id,t.title=e.title,t.picture=e.picture,t.type=e.type}))},$=({id:a})=>{c.confirm("确定删除该广告, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(e=>v({url:`advertise/${e}`,method:"delete"}))(a),y(),e({type:"success",message:"删除成功!"})})).catch((()=>{}))},I=U({onClickSearch:h,onClickClear:h,filters:[{type:m.input,key:"title",label:"广告标题",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]},{type:m.select,key:"type",label:"广告位置",initialValue:"",options:[{label:"首页",value:"home"}],validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),R=U({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!0,pageHandleFunc:"getTableData",column:[{label:"广告标题",prop:"title"},{label:"广告位置",prop:"type",render:e=>b[e]},{label:"广告图",prop:"picture",width:"100",useSlot:!0},{label:"广告状态",prop:"status",render:e=>e?"显示":"隐藏"},{label:"广告描述",prop:"describe"},{label:"创建日期",prop:"createdAt",minWidth:"80",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"200",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}}),E=U({title:[{required:!0,message:"请输入广告标题",trigger:"blur"}],status:[{required:!0,message:"请选择广告状态",trigger:"change"}],type:[{required:!0,message:"请选择广告位置",trigger:"change"}],picture:[{required:!0,message:"请上传广告图片",trigger:"change"}]}),{formVisible:te}=C(l);return D((()=>{y()})),(e,a)=>{const l=o,c=r,m=s,b=d,h=p,v=n,U=i;return j(),L("div",N,[P(f,q(T(z(I))),null,16),x("div",O,[x("div",G,[P(l,{plain:"",onClick:a[0]||(a[0]=e=>te.value=!0)},{default:_((()=>[J])),_:1}),P(l,{plain:"",type:"danger"},{default:_((()=>[K])),_:1})]),x("div",Q,[P(l,{type:"primary"},{default:_((()=>[W])),_:1}),P(l,{type:"primary"},{default:_((()=>[X])),_:1})])]),P(g,{tableOpts:z(R),onGetTableData:y,onHandleEdit:k,onHandleDel:$},{picture:_((e=>[P(M,{url:z("https://adminapi.tobtt.cn/uploads/")+e.value,size:64},null,8,["url"])])),_:1},8,["tableOpts"]),P(U,{title:(z(t).id?"编辑":"新增")+"广告",modelValue:z(te),"onUpdate:modelValue":a[8]||(a[8]=e=>H(te)?te.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":S},{default:_((()=>[P(z(u),{ref_key:"formEle",ref:V,model:z(t),rules:z(E),"label-width":"100px",class:"demo-form"},{default:_((()=>[P(m,{label:"广告标题",prop:"title"},{default:_((()=>[P(c,{modelValue:z(t).title,"onUpdate:modelValue":a[1]||(a[1]=e=>z(t).title=e),placeholder:"请填写广告标题"},null,8,["modelValue"])])),_:1}),P(m,{label:"广告位置",prop:"type"},{default:_((()=>[P(h,{modelValue:z(t).type,"onUpdate:modelValue":a[2]||(a[2]=e=>z(t).type=e),placeholder:"请选择广告位置"},{default:_((()=>[P(b,{label:"首页",value:"home"})])),_:1},8,["modelValue"])])),_:1}),P(m,{label:"广告位置",prop:"picture"},{default:_((()=>[P(Y,{class:"uploadFile",uploaderSize:"large",imageUrl:z(t).picture,"onUpdate:imageUrl":a[3]||(a[3]=e=>z(t).picture=e)},null,8,["imageUrl"])])),_:1}),P(m,{label:"广告状态",prop:"status"},{default:_((()=>[P(v,{modelValue:z(t).status,"onUpdate:modelValue":a[4]||(a[4]=e=>z(t).status=e),label:!0,size:"large"},{default:_((()=>[Z])),_:1},8,["modelValue"]),P(v,{modelValue:z(t).status,"onUpdate:modelValue":a[5]||(a[5]=e=>z(t).status=e),label:!1,size:"large"},{default:_((()=>[ee])),_:1},8,["modelValue"])])),_:1}),P(m,{label:"描述：",prop:"describe"},{default:_((()=>[P(c,{modelValue:z(t).describe,"onUpdate:modelValue":a[6]||(a[6]=e=>z(t).describe=e),type:"textarea"},null,8,["modelValue"])])),_:1}),P(m,null,{default:_((()=>[P(l,{type:"primary",onClick:B},{default:_((()=>[ae])),_:1}),P(l,{onClick:a[7]||(a[7]=e=>F())},{default:_((()=>[le])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])])}}}),[["__scopeId","data-v-e0e78e56"]]);export{te as default};
