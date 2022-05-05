import{f as e,c as a,g as l,h as t,j as s,d as r,e as o,k as i,m as n,n as d,o as p,a as u,b as m,p as c}from"./element-plus-9b4bdf92.js";import{d as b,_ as h,e as y,o as f,c as g,T as k,L as v,F as w,a2 as O,K as V,u as _,I as x,Q as C,E as S,G as j,a as P,R as Y,S as z,av as F,Y as M,M as D,O as T,ad as H,i as U,a8 as B,a9 as $,B as N,n as R}from"./@vue-0125bb15.js";import{d as E}from"./dayjs-2378ce3f.js";import{_ as W,s as q}from"./index-05550dc6.js";import"./lodash-es-b6050654.js";import"./@vueuse-e88faed5.js";import"./@popperjs-91a2fff2.js";import"./@ctrl-eb0b847c.js";import"./async-validator-ec45d329.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";import"./axios-aec7d438.js";/* empty css                      */import"./pinia-499f0078.js";import"./vue-demi-5b9a0fa5.js";import"./vue-router-d64fcc73.js";import"./nprogress-2caf32ee.js";import"./js-cookie-1db5286e.js";var A=(e=>(e.input="input",e.select="simpleSelect",e.dateRange="dateRange",e.datetimeRange="datetimeRange",e.date="date",e.custom="custom",e))(A||{});const I={class:"search-wrapper"},L={class:"search-btn-list"};var G=W(b({props:{labelWidth:{type:Number,default:100},isShowClearBtn:{type:Boolean,default:!0},clearBtnText:{type:String,default:"清除条件"},searchBtnText:{type:String,default:"搜索"},onClickSearch:{type:Function,required:!0},onClickClear:{type:Function,required:!0},filters:{type:Array,required:!0}},setup(i){const n=i,d=h({}),p=h({}),u=y(new Date);n.filters.forEach((e=>{const a=e.key;d[a]=e.initialValue,e.validator&&(p[a]=e.validator)}));const m=y(),c=async()=>{await m.value.validate()&&n.onClickSearch(d)},b=()=>{m.value.clearValidate(),n.filters.forEach((e=>{const a=e.key;d[a]=e.initialValue})),u.value=new Date,n.onClickClear(d)};return(n,h)=>{const y=a,F=l,M=t,D=s,T=r,H=o;return f(),g("div",I,[k(_(e),{ref_key:"searchForm",ref:m,rules:_(p),inline:!0,model:_(d),class:"search-form clearfix","label-width":`${i.labelWidth}px`},{default:v((()=>[(f(!0),g(w,null,O(i.filters,(e=>(f(),V(T,{key:e.key,label:e.label,class:j(e.className),prop:e.key},{default:v((()=>{var a,l;return[e.type===_(A).input?(f(),V(y,x({key:0,modelValue:_(d)[e.key],"onUpdate:modelValue":a=>_(d)[e.key]=a,placeholder:"请输入搜索内容",clearable:""},e.inputConfig),null,16,["modelValue","onUpdate:modelValue"])):C("",!0),e.type===_(A).select?(f(),V(M,x({key:1,modelValue:_(d)[e.key],"onUpdate:modelValue":a=>_(d)[e.key]=a,placeholder:"请选择",clearable:""},e.selectConfig),{default:v((()=>[e.isShowAll?(f(),V(F,{key:0,label:"全部",value:""})):C("",!0),e.getOptions?(f(!0),g(w,{key:1},O(e.getOptions(_(d)),(e=>(f(),V(F,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128)):(f(!0),g(w,{key:2},O(e.options,(e=>(f(),V(F,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1040,["modelValue","onUpdate:modelValue"])):C("",!0),e.type===_(A).date?(f(),V(D,x({key:2,modelValue:_(d)[e.key],"onUpdate:modelValue":a=>_(d)[e.key]=a,type:"date",size:"default","value-format":null!=(a=e.filterParams)?a:"YYYY-MM-DD",placeholder:"选择日期"},e.dateConfig,{"default-value":u.value}),null,16,["modelValue","onUpdate:modelValue","value-format","default-value"])):C("",!0),e.type===_(A).dateRange?(f(),V(D,x({key:3,modelValue:_(d)[e.key],"onUpdate:modelValue":a=>_(d)[e.key]=a,type:"daterange",size:"default","value-format":e.filterParams?e.filterParams:"YYYY-MM-DD","start-placeholder":"开始日期","end-placeholder":"结束日期"},e.dateConfig),null,16,["modelValue","onUpdate:modelValue","value-format"])):C("",!0),e.type===_(A).datetimeRange?(f(),V(D,x({key:4,modelValue:_(d)[e.key],"onUpdate:modelValue":a=>_(d)[e.key]=a,type:"datetimerange",size:"default","value-format":e.filterParams?e.filterParams:"YYYY-MM-DD","start-placeholder":"开始日期","end-placeholder":"结束日期"},e.dateConfig),null,16,["modelValue","onUpdate:modelValue","value-format"])):C("",!0),e.type===_(A).custom?S(n.$slots,e.key,{key:5,slotValue:_(d)[e.key],item:e,change:(l=e.key,e=>{d[l]=e})},void 0,!0):C("",!0)]})),_:2},1032,["label","class","prop"])))),128)),P("div",L,[S(n.$slots,"operate-before",{},void 0,!0),k(H,{type:"primary",class:"btn-primary",onClick:c},{default:v((()=>[Y(z(i.searchBtnText),1)])),_:1}),i.isShowClearBtn?(f(),V(H,{key:0,type:"primary",class:"btn-search",onClick:b},{default:v((()=>[Y(z(i.clearBtnText),1)])),_:1})):C("",!0),S(n.$slots,"operate-after",{},void 0,!0)])])),_:3},8,["rules","model","label-width"])])}}}),[["__scopeId","data-v-3dd2a700"]]);const K={formatTime:(e,a="YYYY-MM-DD HH:MM:ss")=>e?E(e).format(a):""};var Q={filterFun:(e,a)=>K[a[0]](e,a[1])};const J={class:"table"},X={key:2},Z={slot:"reference",class:"text-hidden"},ee={key:4};var ae=W(b({props:{tableOpts:{type:Object,default:()=>({currentPage:1,pageSize:10,total:0,data:[],column:[{hidden:!1,label:"",prop:"",width:"",minWidth:"",className:"",filterParams:[],showPopover:!1,emptyText:"",useSlot:!1,useHeaderSlot:!1}],indexes:["编号",60],hasOperation:!1,dynamic:!0,pagination:!0,pageList:null,pageHandleFunc:"",multipleTable:!1,multipleSelection:[],hideBorder:!1,spanMethod:()=>[1,1],operation:{label:"操作",width:"200",minWidth:"",className:"show",data:[{label:"通过",handleFunc:"handleSubmit",size:"mini",className:"show",type:"primary",icon:"",isShow:e=>"show"===e.status,dataTestId:""}]}})}},emits:["handleEdit","handleRestPwd","handlePermission","handleDel","getTableData","handleCreate"],setup(e,{emit:a}){const l=e,t=e=>{l.tableOpts.pageSize=e,l.tableOpts.pageHandleFunc&&a(l.tableOpts.pageHandleFunc)},s=y(null);F((()=>{s.value.doLayout()}));const r=e=>{l.tableOpts.currentPage=e,l.tableOpts.pageHandleFunc&&a(l.tableOpts.pageHandleFunc)},u=e=>{l.tableOpts.multipleSelection=e};return(l,m)=>{const c=i,b=n,h=o,y=d,x=p;return f(),g("div",J,[k(y,{ref_key:"table",ref:s,data:e.tableOpts.dynamic?e.tableOpts.data:e.tableOpts.data.slice((e.tableOpts.currentPage-1)*e.tableOpts.pageSize,e.tableOpts.currentPage*e.tableOpts.pageSize),border:!e.tableOpts.hideBorder,"span-method":e.tableOpts.spanMethod,"row-key":"id","child-key":e.tableOpts.rowKey,"default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},style:{width:"100%"},onSelectionChange:u},{default:v((()=>[e.tableOpts.multipleTable?(f(),V(c,{key:0,type:"selection","class-name":"multiple-column",width:"45"})):C("",!0),e.tableOpts.indexes?(f(),V(c,{key:1,type:"index",label:e.tableOpts.indexes[0],"class-name":"serial-number",width:e.tableOpts.indexes[1]||60},null,8,["label","width"])):C("",!0),(f(!0),g(w,null,O(e.tableOpts.column,((e,a)=>(f(),g(w,null,[e.hidden?C("",!0):(f(),V(c,{key:a,label:e.label,prop:e.prop,"class-name":e.className||"",width:e.width||"","min-width":e.minWidth||"",align:"center"},{header:v((a=>[e.useHeaderSlot?S(l.$slots,e.prop+"Header",{key:0,data:a,column:e},void 0,!0):(f(),g(w,{key:1},[Y(z(e.label),1)],64))])),default:v((a=>[e.useSlot?S(l.$slots,e.prop,{key:0,data:a.row,index:a.$index,value:a.row[e.prop],column:e},void 0,!0):e.render?(f(),g(w,{key:1},[Y(z(e.render(a.row[e.prop],a.$index,a.row)),1)],64)):e.filterParams?(f(),g("span",X,z(_(Q).filterFun(a.row[e.prop],e.filterParams)),1)):e.showPopover&&a.row[e.prop]&&a.row[e.prop].length>20?(f(),V(b,{key:3,placement:"bottom-start",width:"200",trigger:"hover",content:a.row[e.prop]},{default:v((()=>[P("div",Z,z(a.row[e.prop]),1)])),_:2},1032,["content"])):(f(),g("span",ee,z(a.row[e.prop]),1))])),_:2},1032,["label","prop","class-name","width","min-width"]))],64)))),256)),e.tableOpts.hasOperation?(f(),V(c,{key:2,fixed:"right",label:e.tableOpts.operation.label,width:e.tableOpts.operation.width||"","min-width":e.tableOpts.operation.minWidth||"","class-name":e.tableOpts.operation.className||""},{default:v((l=>[(f(!0),g(w,null,O(e.tableOpts.operation.data,(e=>(f(),g(w,null,[!e.isShow||e.isShow(l.row)?(f(),V(h,{key:e.id,type:e.type||"text",size:e.size||"default",class:j(e.classNameFun?e.classNameFun(l.row):e.className||""),onClick:M((t=>{return s=e.handleFunc,r=l.row,o=l.$index,void a(s,r,o);var s,r,o}),["stop"])},{default:v((()=>[Y(z(e.label),1)])),_:2},1032,["type","size","class","onClick"])):C("",!0)],64)))),256))])),_:1},8,["label","width","min-width","class-name"])):C("",!0)])),_:3},8,["data","border","span-method","child-key"]),e.tableOpts.pagination?D((f(),V(x,{key:0,currentPage:e.tableOpts.currentPage,"onUpdate:currentPage":m[0]||(m[0]=a=>e.tableOpts.currentPage=a),background:"","page-sizes":e.tableOpts.pageList||[10,20,30,40],"page-size":e.tableOpts.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.tableOpts.total,onSizeChange:t,onCurrentChange:r},null,8,["currentPage","page-sizes","page-size","total"])),[[T,e.tableOpts.total]]):C("",!0)])}}}),[["__scopeId","data-v-3a16b3a5"]]);const le={class:"operate-wrapper"},te={class:"operate-left-btn"},se=Y("新增"),re=Y("删除"),oe={class:"operate-right-btn"},ie=Y("导入"),ne=Y("导出"),de=Y("保存"),pe=Y("重置"),ue=b({setup(l){const t=h({searchForm:{},formVisible:!1}),s=h({id:"",title:"",link:"",sort:""}),i=e=>{S.currentPage=1,t.searchForm=e,n()},n=async()=>{var e;S.data=await(e=t.searchForm,q({url:"menu",method:"get",params:e}))},d=y(),p=()=>{d.value.resetFields()},b=()=>{p(),s.id="",t.formVisible=!1},O=async()=>{var e,a;await d.value.validate(),s.id?await(e=s.id,a=s,q({url:`menu/${e}`,method:"patch",data:a})):await(e=>q({url:"menu",method:"post",data:e}))(s),n(),u({type:"success",message:s.id?"修改成功":"新增成功"}),b()},V=e=>{t.formVisible=!0,R((()=>{s.id=e.id,s.title=e.title,s.link=e.link,s.sort=e.sort}))},x=({id:e})=>{m.confirm("确定删除该导航, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await(e=>q({url:`menu/${e}`,method:"delete"}))(e),n(),u({type:"success",message:"删除成功!"})})).catch((()=>{}))},C=h({onClickSearch:i,onClickClear:i,filters:[{type:A.input,key:"title",label:"导航名：",initialValue:"",validator:[{max:20,message:"请输入 20 个以内字符",trigger:["blur","change"]}]}]}),S=h({currentPage:1,pageSize:10,total:1,data:[],multipleTable:!0,multipleSelection:[],indexes:["序号"],dynamic:!0,hasOperation:!0,pagination:!1,pageHandleFunc:"getTableData",column:[{label:"导航名",prop:"title"},{label:"链接",prop:"link"},{label:"排序",prop:"sort"},{label:"创建日期",prop:"createdAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]},{label:"更新日期",prop:"updateAt",filterParams:["formatTime","YYYY-MM-DD HH:MM:ss"]}],operation:{label:"操作",width:"300",data:[{label:"编辑",type:"primary",icon:"el-icon-edit",handleFunc:"handleEdit"},{label:"删除",type:"danger",icon:"el-icon-delete",handleFunc:"handleDel"}]}}),j=h({title:[{required:!0,message:"请输入导航名",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}],link:[{required:!0,message:"请输入导航链接",trigger:"blur"}]}),{formVisible:Y}=H(t);return U((()=>{n()})),(l,t)=>{const i=o,u=ae,m=a,h=r,y=c;return f(),g(w,null,[k(G,B($(_(C))),null,16),P("div",le,[P("div",te,[k(i,{plain:"",onClick:t[0]||(t[0]=e=>Y.value=!0)},{default:v((()=>[se])),_:1}),k(i,{plain:"",type:"danger"},{default:v((()=>[re])),_:1})]),P("div",oe,[k(i,{type:"primary"},{default:v((()=>[ie])),_:1}),k(i,{type:"primary"},{default:v((()=>[ne])),_:1})])]),k(u,{tableOpts:_(S),"onUpdate:tableOpts":t[1]||(t[1]=e=>N(S)?S.value=e:S=e),onGetTableData:n,onHandleEdit:V,onHandleDel:x},null,8,["tableOpts"]),k(y,{title:(_(s).id?"编辑":"新增")+"导航",modelValue:_(Y),"onUpdate:modelValue":t[6]||(t[6]=e=>N(Y)?Y.value=e:null),"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%","before-close":b},{default:v((()=>[k(_(e),{model:_(s),"status-icon":"",rules:_(j),ref_key:"formEle",ref:d,"label-width":"100px"},{default:v((()=>[k(h,{label:"导航标题：",prop:"title"},{default:v((()=>[k(m,{modelValue:_(s).title,"onUpdate:modelValue":t[2]||(t[2]=e=>_(s).title=e)},null,8,["modelValue"])])),_:1}),k(h,{label:"导航链接：",prop:"link"},{default:v((()=>[k(m,{modelValue:_(s).link,"onUpdate:modelValue":t[3]||(t[3]=e=>_(s).link=e)},null,8,["modelValue"])])),_:1}),k(h,{label:"排序：",prop:"sort"},{default:v((()=>[k(m,{modelValue:_(s).sort,"onUpdate:modelValue":t[4]||(t[4]=e=>_(s).sort=e)},null,8,["modelValue"])])),_:1}),k(h,null,{default:v((()=>[k(i,{type:"primary",onClick:O},{default:v((()=>[de])),_:1}),k(i,{onClick:t[5]||(t[5]=e=>p())},{default:v((()=>[pe])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])],64)}}});export{ue as default};