import{g as e,x as s}from"./element-plus-6d3da066.js";import{_ as a}from"./index-ca8e81d2.js";import{j as l}from"./@element-plus-e6cd7fa9.js";import{d as o,r,o as t,c as i,a as u,J as p,L as c,X as d,Q as m,u as n,P as v,U as f}from"./@vue-b1347690.js";const g={class:"preview-wrapper mt10 mb10"},k={class:"preview-trigger"},y=["src"],w={class:"operate-mask"},x={key:2,class:"empty-text"},b=["src"];var z=a(o({props:{url:String,size:Number,isUseSlot:Boolean},setup(a){const o=r(!1);return(r,z)=>{const j=e,_=s;return t(),i("div",g,[u("span",k,[a.isUseSlot?(t(),i("span",{key:0,onClick:z[0]||(z[0]=e=>o.value=!0)},[p(r.$slots,"default",{},void 0,!0)])):a.url?(t(),i("div",{key:1,class:"image-wrapper",style:c({width:a.size?`${a.size}px`:"auto",height:a.size?`${a.size}px`:"auto"})},[(t(),i("img",{key:a.url,src:a.url,alt:""},null,8,y)),u("div",w,[d(j,{class:"el-icon el-icon-zoom-in",onClick:z[1]||(z[1]=e=>o.value=!0)},{default:m((()=>[d(n(l))])),_:1})])],4)):(t(),i("span",x,"-"))]),a.url?(t(),v(_,{key:0,title:"图片查看",width:"600px",modelValue:o.value,"onUpdate:modelValue":z[2]||(z[2]=e=>o.value=e),"append-to-body":"","custom-class":"preview-dialog","before-close":()=>o.value=!1},{default:m((()=>[u("img",{src:a.url,alt:""},null,8,b)])),_:1},8,["modelValue","before-close"])):f("",!0)])}}}),[["__scopeId","data-v-c486a3fe"]]);export{z as I};