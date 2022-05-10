import{i as e,j as n,k as t,s as l,l as r,r as o,w as i,u,m as s,b as a,n as c}from"./@vue-b1347690.js";var f=Object.defineProperty,v=Object.defineProperties,d=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,b=(e,n,t)=>n in e?f(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function h(e,n){var o;const i=l();var u,s;return r((()=>{i.value=e()}),(u=((e,n)=>{for(var t in n||(n={}))m.call(n,t)&&b(e,t,n[t]);if(w)for(var t of w(n))p.call(n,t)&&b(e,t,n[t]);return e})({},n),s={flush:null!=(o=null==n?void 0:n.flush)?o:"sync"},v(u,d(s)))),t(i)}function g(t){return!!e()&&(n(t),!0)}const y="undefined"!=typeof window,F=e=>"boolean"==typeof e,E=e=>"number"==typeof e,O=()=>{};function S(e,n){return function(...t){e((()=>n.apply(this,t)),{fn:n,thisArg:this,args:t})}}function k(e,n=200,t={}){return S(function(e,n={}){let t,l;return r=>{const o=u(e),i=u(n.maxWait);if(t&&clearTimeout(t),o<=0||void 0!==i&&i<=0)return l&&(clearTimeout(l),l=null),r();i&&!l&&(l=setTimeout((()=>{t&&clearTimeout(t),l=null,r()}),i)),t=setTimeout((()=>{l&&clearTimeout(l),l=null,r()}),o)}}(n,t),e)}function T(e,n=200,t={}){if(n<=0)return e;const l=o(e.value),r=k((()=>{l.value=e.value}),n,t);return i(e,(()=>r())),l}function j(e,n=200,t=!0,l=!0){return S(function(e,n=!0,t=!0){let l,r=0,o=!t;const i=()=>{l&&(clearTimeout(l),l=void 0)};return s=>{const a=u(e),c=Date.now()-r;if(i(),a<=0)return r=Date.now(),s();c>a&&(r=Date.now(),o?o=!1:s()),n&&(l=setTimeout((()=>{r=Date.now(),t||(o=!0),i(),s()}),a)),t||l||(l=setTimeout((()=>o=!0),a))}}(n,t,l),e)}function x(e,n,t={}){const{immediate:l=!0}=t,r=o(!1);let i=null;function s(){i&&(clearTimeout(i),i=null)}function a(){r.value=!1,s()}function c(...t){s(),r.value=!0,i=setTimeout((()=>{r.value=!1,i=null,e(...t)}),u(n))}return l&&(r.value=!0,y&&c()),g(a),{isPending:r,start:c,stop:a}}function z(e){var n;const t=u(e);return null!=(n=null==t?void 0:t.$el)?n:t}const P=y?window:void 0,R=y?window.document:void 0;function q(...e){let n,t,l,r;if("string"==typeof e[0]?([t,l,r]=e,n=P):[n,t,l,r]=e,!n)return O;let o=O;const u=i((()=>z(n)),(e=>{o(),e&&(e.addEventListener(t,l,r),o=()=>{e.removeEventListener(t,l,r),o=O})}),{immediate:!0,flush:"post"}),s=()=>{u(),o()};return g(s),s}function C(e,n,t={}){const{window:l=P,ignore:r,capture:i=!0}=t;if(!l)return;const u=o(!0),s=[q(l,"click",(t=>{const l=z(e),o=t.composedPath();l&&l!==t.target&&!o.includes(l)&&u.value&&(r&&r.length>0&&r.some((e=>{const n=z(e);return n&&(t.target===n||o.includes(n))}))||n(t))}),{passive:!0,capture:i}),q(l,"pointerdown",(n=>{const t=z(e);u.value=!!t&&!n.composedPath().includes(t)}),{passive:!0})];return()=>s.forEach((e=>e()))}const _="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},D="__vueuse_ssr_handlers__";function W({document:e=R}={}){if(!e)return o("visible");const n=o(e.visibilityState);return q(e,"visibilitychange",(()=>{n.value=e.visibilityState})),n}_[D]=_[D]||{},_[D];var H=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function M(e,n,t={}){const l=t,{window:r=P}=l,o=((e,n)=>{var t={};for(var l in e)I.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&H)for(var l of H(e))n.indexOf(l)<0&&L.call(e,l)&&(t[l]=e[l]);return t})(l,["window"]);let u;const s=r&&"ResizeObserver"in r,a=()=>{u&&(u.disconnect(),u=void 0)},c=i((()=>z(e)),(e=>{a(),s&&r&&e&&(u=new ResizeObserver(n),u.observe(e,o))}),{immediate:!0,flush:"post"}),f=()=>{a(),c()};return g(f),{isSupported:s,stop:f}}function A(e,n={}){const{reset:t=!0,windowResize:l=!0,windowScroll:r=!0}=n,u=o(0),s=o(0),a=o(0),c=o(0),f=o(0),v=o(0),d=o(0),w=o(0);function m(){const n=z(e);if(!n)return void(t&&(u.value=0,s.value=0,a.value=0,c.value=0,f.value=0,v.value=0,d.value=0,w.value=0));const l=n.getBoundingClientRect();u.value=l.height,s.value=l.bottom,a.value=l.left,c.value=l.right,f.value=l.top,v.value=l.width,d.value=l.x,w.value=l.y}return M(e,m),i((()=>z(e)),(e=>!e&&m())),r&&q("scroll",m,{passive:!0}),l&&q("resize",m,{passive:!0}),{height:u,bottom:s,left:a,right:c,top:f,width:v,x:d,y:w,update:m}}const B=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function $(e,n={}){const{document:t=R,autoExit:l=!1}=n,r=e||(null==t?void 0:t.querySelector("html")),i=o(!1);let u=!1,s=B[0];if(t){for(const o of B)if(o[1]in t){s=o,u=!0;break}}else u=!1;const[a,c,f,,v]=s;async function d(){u&&((null==t?void 0:t[f])&&await t[c](),i.value=!1)}async function w(){if(!u)return;await d();const e=z(r);e&&(await e[a](),i.value=!0)}return t&&q(t,v,(()=>{i.value=!!(null==t?void 0:t[f])}),!1),l&&g(d),{isSupported:u,isFullscreen:i,enter:w,exit:d,toggle:async function(){i.value?await d():await w()}}}var G,J;function K({window:e=P}={}){if(!e)return o(!1);const n=o(e.document.hasFocus());return q(e,"blur",(()=>{n.value=!1})),q(e,"focus",(()=>{n.value=!0})),n}function N({window:e=P,initialWidth:n=1/0,initialHeight:t=1/0}={}){const l=o(n),r=o(t),i=()=>{e&&(l.value=e.innerWidth,r.value=e.innerHeight)};return i(),function(e,n=!0){s()?a(e):n?e():c(e)}(i),q("resize",i,{passive:!0}),{width:l,height:r}}y&&(null==window?void 0:window.navigator)&&(null==(G=null==window?void 0:window.navigator)?void 0:G.platform)&&/iP(ad|hone|od)/.test(null==(J=null==window?void 0:window.navigator)?void 0:J.platform);export{E as a,F as b,z as c,N as d,A as e,M as f,j as g,x as h,y as i,W as j,K as k,h as l,$ as m,C as o,T as r,g as t,q as u};
