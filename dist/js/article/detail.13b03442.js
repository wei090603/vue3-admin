import{y as e,z as a,A as t,B as s,C as o,L as l,x as i,D as r,n as d}from"../element-plus/element-plus.fbbbfa29.js";import{b as m,c as p,d as n}from"../notice/notice.1e8762d5.js";import{u,a as c}from"../vue-router/vue-router.fe365eba.js";import{T as f}from"../index/index.68354582.js";import{_ as j,d as b}from"../../assets/index.755b2133.js";import{d as y,r as v,a2 as _,b as g,o as h,P as V,Q as w,X as x,u as k,V as z}from"../@vue/@vue.0c036a59.js";import"../lodash-es/lodash-es.6278a1be.js";import"../@vueuse/@vueuse.e440a3a6.js";import"../@popperjs/@popperjs.172738d4.js";import"../@ctrl/@ctrl.17547d95.js";import"../dayjs/dayjs.481ce33c.js";import"../axios/axios.d56fff3c.js";import"../async-validator/async-validator.234fb871.js";import"../memoize-one/memoize-one.f0fba034.js";import"../escape-html/escape-html.d572c0fd.js";import"../normalize-wheel-es/normalize-wheel-es.db30398b.js";import"../@floating-ui/@floating-ui.50900a5c.js";import"../@tinymce/@tinymce.8521f0c6.js";/* empty css                                     */import"../pinia/pinia.46e48237.js";import"../vue-demi/vue-demi.4f3c4c97.js";import"../path-browserify/path-browserify.3d3258d8.js";import"../@element-plus/@element-plus.4f9203c7.js";import"../js-cookie/js-cookie.431252a9.js";import"../nprogress/nprogress.491658f2.js";const E=z("显示"),U=z("隐藏"),q=z("保存"),A=z("重置");var C=j(y({setup(j){const y=u(),z=c(),C=v(),B=_({isAdd:"noticeAdd"===z.name,isEdit:"noticeEdit"===z.name}),D=async()=>{await L.value.validate(),B.isEdit?await p(z.params.id,F):await n(F),d({type:"success",message:B.isEdit?"修改成功":"新增成功"}),P(),y.back()},F=_({id:"",title:"",type:1,status:!0,content:""}),I={title:[{required:!0,message:"请输入通告标题",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},L=v(),P=()=>{F.content="",L.value.resetFields()};return g((()=>{z.params.id&&(async e=>{const a=await m(e);F.id=a.id,F.title=a.title,F.type=a.type,F.status=a.status,F.content=a.content})(+z.params.id);b({a:1,b:2})})),(d,m)=>{const p=e,n=a,u=t,c=s,j=o,b=l,y=i;return h(),V(k(r),{ref_key:"formEle",ref:L,model:k(F),rules:I,"label-width":"100px",class:"demo-form"},{default:w((()=>[x(n,{label:"标题：",prop:"title"},{default:w((()=>[x(p,{modelValue:k(F).title,"onUpdate:modelValue":m[0]||(m[0]=e=>k(F).title=e)},null,8,["modelValue"])])),_:1}),x(n,{label:"类型：",prop:"type"},{default:w((()=>[x(c,{modelValue:k(F).type,"onUpdate:modelValue":m[1]||(m[1]=e=>k(F).type=e),placeholder:"请选择类型"},{default:w((()=>[x(u,{label:"通知",value:1}),x(u,{label:"公告",value:2})])),_:1},8,["modelValue"])])),_:1}),x(n,{label:"状态：",prop:"status"},{default:w((()=>[x(b,{modelValue:k(F).status,"onUpdate:modelValue":m[2]||(m[2]=e=>k(F).status=e)},{default:w((()=>[x(j,{label:!0},{default:w((()=>[E])),_:1}),x(j,{label:!1},{default:w((()=>[U])),_:1})])),_:1},8,["modelValue"])])),_:1}),x(n,{label:"内容：",prop:"content"},{default:w((()=>[x(f,{ref_key:"editorRef",ref:C,content:k(F).content,"onUpdate:content":m[3]||(m[3]=e=>k(F).content=e)},null,8,["content"])])),_:1}),x(n,null,{default:w((()=>[x(y,{type:"primary",onClick:D},{default:w((()=>[q])),_:1}),x(y,{onClick:m[4]||(m[4]=e=>P())},{default:w((()=>[A])),_:1})])),_:1})])),_:1},8,["model"])}}}),[["__scopeId","data-v-84394a4a"]]);export{C as default};
