import{E as e,w as s}from"./element-plus-c3f3467b.js";import{_ as a}from"./index-1dd190b0.js";import{i as l}from"./@element-plus-d2a6d80a.js";import{d as o,r,o as t,c as i,a as u,J as p,L as c,X as d,Q as m,u as n,P as v,U as f}from"./@vue-722b6523.js";const b={class:"preview-wrapper mt10 mb10"},g={class:"preview-trigger"},k=["src"],w={class:"operate-mask"},y={key:2,class:"empty-text"},x=["src"];var z=a(o({props:{url:String,size:Number,isUseSlot:Boolean},setup(a){const o=r(!1);return(r,z)=>{const _=e,h=s;return t(),i("div",b,[u("span",g,[a.isUseSlot?(t(),i("span",{key:0,onClick:z[0]||(z[0]=e=>o.value=!0)},[p(r.$slots,"default",{},void 0,!0)])):a.url?(t(),i("div",{key:1,class:"image-wrapper",style:c({width:a.size?`${a.size}px`:"auto",height:a.size?`${a.size}px`:"auto"})},[(t(),i("img",{key:a.url,src:a.url,alt:""},null,8,k)),u("div",w,[d(_,{class:"el-icon el-icon-zoom-in",onClick:z[1]||(z[1]=e=>o.value=!0)},{default:m((()=>[d(n(l))])),_:1})])],4)):(t(),i("span",y,"-"))]),a.url?(t(),v(h,{key:0,title:"图片查看",width:"600px",modelValue:o.value,"onUpdate:modelValue":z[2]||(z[2]=e=>o.value=e),"custom-class":"preview-dialog","before-close":()=>o.value=!1},{default:m((()=>[u("img",{src:a.url,alt:""},null,8,x)])),_:1},8,["modelValue","before-close"])):f("",!0)])}}}),[["__scopeId","data-v-f7d740be"]]);export{z as I};
