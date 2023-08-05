import{i as de,U as oe,an as ue,d as U,a_ as ce,g as fe,k as w,a$ as ke,aw as he,j as y,J as le,W as ve,o as me,a as m,h as re,q as l,w as h,b as v,x as i,e as a,aj as ie,v as be,z as b,c as E,O as K,ai as Ie,a0 as _e,s as ze,A as Le,r as J,T as Ce,B as Ee,_ as pe,ap as R,C as ge,aP as Se,ae as H,b0 as Ne,y as Oe,m as xe,as as Te,N as $e}from"./index-9f26c53c.js";import{p as Ae,q as Ve,E as N,c as Be,h as Re,b as Me,z as Ye,r as De,t as Pe,u as Xe}from"./index-a6f4e912.js";import{m as we,E as B,u as Fe}from"./index-53dde772.js";import{u as ye,a as He,k as je}from"./index-4c194da6.js";import{t as ne}from"./throttle-bde9afc3.js";import{a as We,i as qe}from"./scroll-d98f9fac.js";const Ze=de({urlList:{type:oe(Array),default:()=>we([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Ge={close:()=>!0,switch:p=>ue(p)},Je=["src"],Ke=U({name:"ElImageViewer"}),Ue=U({...Ke,props:Ze,emits:Ge,setup(p,{expose:O,emit:d}){const r=p,x={CONTAIN:{name:"contain",icon:ce(Ae)},ORIGINAL:{name:"original",icon:ce(Ve)}},{t:I}=ye(),n=fe("image-viewer"),{nextZIndex:Q}=He(),T=w(),S=w([]),_=ke(),k=w(!0),u=w(r.initialIndex),c=he(x.CONTAIN),o=w({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),M=y(()=>{const{urlList:e}=r;return e.length<=1}),$=y(()=>u.value===0),j=y(()=>u.value===r.urlList.length-1),ee=y(()=>r.urlList[u.value]),Y=y(()=>{const{scale:e,deg:t,offsetX:s,offsetY:f,enableTransition:L}=o.value;let g=s/e,C=f/e;switch(t%360){case 90:case-270:[g,C]=[C,-g];break;case 180:case-180:[g,C]=[-g,-C];break;case 270:case-90:[g,C]=[-C,g];break}const V={transform:`scale(${e}) rotate(${t}deg) translate(${g}px, ${C}px)`,transition:L?"transform .3s":""};return c.value.name===x.CONTAIN.name&&(V.maxWidth=V.maxHeight="100%"),V}),ae=y(()=>ue(r.zIndex)?r.zIndex:Q());function A(){te(),d("close")}function D(){const e=ne(s=>{switch(s.code){case B.esc:r.closeOnPressEscape&&A();break;case B.space:X();break;case B.left:Z();break;case B.up:z("zoomIn");break;case B.right:G();break;case B.down:z("zoomOut");break}}),t=ne(s=>{const f=s.deltaY||s.deltaX;z(f<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});_.run(()=>{R(document,"keydown",e),R(document,"wheel",t)})}function te(){_.stop()}function se(){k.value=!1}function W(e){k.value=!1,e.target.alt=I("el.image.error")}function q(e){if(k.value||e.button!==0||!T.value)return;o.value.enableTransition=!1;const{offsetX:t,offsetY:s}=o.value,f=e.pageX,L=e.pageY,g=ne(V=>{o.value={...o.value,offsetX:t+V.pageX-f,offsetY:s+V.pageY-L}}),C=R(document,"mousemove",g);R(document,"mouseup",()=>{C()}),e.preventDefault()}function P(){o.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function X(){if(k.value)return;const e=je(x),t=Object.values(x),s=c.value.name,L=(t.findIndex(g=>g.name===s)+1)%e.length;c.value=x[e[L]],P()}function F(e){const t=r.urlList.length;u.value=(e+t)%t}function Z(){$.value&&!r.infinite||F(u.value-1)}function G(){j.value&&!r.infinite||F(u.value+1)}function z(e,t={}){if(k.value)return;const{zoomRate:s,rotateDeg:f,enableTransition:L}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,...t};switch(e){case"zoomOut":o.value.scale>.2&&(o.value.scale=Number.parseFloat((o.value.scale/s).toFixed(3)));break;case"zoomIn":o.value.scale<7&&(o.value.scale=Number.parseFloat((o.value.scale*s).toFixed(3)));break;case"clockwise":o.value.deg+=f;break;case"anticlockwise":o.value.deg-=f;break}o.value.enableTransition=L}return le(ee,()=>{ve(()=>{const e=S.value[0];e!=null&&e.complete||(k.value=!0)})}),le(u,e=>{P(),d("switch",e)}),me(()=>{var e,t;D(),(t=(e=T.value)==null?void 0:e.focus)==null||t.call(e)}),O({setActiveItem:F}),(e,t)=>(m(),re(Ee,{to:"body",disabled:!e.teleported},[l(Ce,{name:"viewer-fade",appear:""},{default:h(()=>[v("div",{ref_key:"wrapper",ref:T,tabindex:-1,class:i(a(n).e("wrapper")),style:ie({zIndex:a(ae)})},[v("div",{class:i(a(n).e("mask")),onClick:t[0]||(t[0]=be(s=>e.hideOnClickModal&&A(),["self"]))},null,2),b(" CLOSE "),v("span",{class:i([a(n).e("btn"),a(n).e("close")]),onClick:A},[l(a(N),null,{default:h(()=>[l(a(Be))]),_:1})],2),b(" ARROW "),a(M)?b("v-if",!0):(m(),E(K,{key:0},[v("span",{class:i([a(n).e("btn"),a(n).e("prev"),a(n).is("disabled",!e.infinite&&a($))]),onClick:Z},[l(a(N),null,{default:h(()=>[l(a(Re))]),_:1})],2),v("span",{class:i([a(n).e("btn"),a(n).e("next"),a(n).is("disabled",!e.infinite&&a(j))]),onClick:G},[l(a(N),null,{default:h(()=>[l(a(Me))]),_:1})],2)],64)),b(" ACTIONS "),v("div",{class:i([a(n).e("btn"),a(n).e("actions")])},[v("div",{class:i(a(n).e("actions__inner"))},[l(a(N),{onClick:t[1]||(t[1]=s=>z("zoomOut"))},{default:h(()=>[l(a(Ye))]),_:1}),l(a(N),{onClick:t[2]||(t[2]=s=>z("zoomIn"))},{default:h(()=>[l(a(De))]),_:1}),v("i",{class:i(a(n).e("actions__divider"))},null,2),l(a(N),{onClick:X},{default:h(()=>[(m(),re(Ie(a(c).icon)))]),_:1}),v("i",{class:i(a(n).e("actions__divider"))},null,2),l(a(N),{onClick:t[3]||(t[3]=s=>z("anticlockwise"))},{default:h(()=>[l(a(Pe))]),_:1}),l(a(N),{onClick:t[4]||(t[4]=s=>z("clockwise"))},{default:h(()=>[l(a(Xe))]),_:1})],2)],2),b(" CANVAS "),v("div",{class:i(a(n).e("canvas"))},[(m(!0),E(K,null,_e(e.urlList,(s,f)=>ze((m(),E("img",{ref_for:!0,ref:L=>S.value[f]=L,key:s,src:s,style:ie(a(Y)),class:i(a(n).e("img")),onLoad:se,onError:W,onMousedown:q},null,46,Je)),[[Le,f===u.value]])),128))],2),J(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var Qe=pe(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const ea=ge(Qe),aa=de({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:oe([String,Object])},previewSrcList:{type:oe(Array),default:()=>we([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ta={load:p=>p instanceof Event,error:p=>p instanceof Event,switch:p=>ue(p),close:()=>!0,show:()=>!0},sa=["src","loading"],na={key:0},oa=U({name:"ElImage",inheritAttrs:!1}),la=U({...oa,props:aa,emits:ta,setup(p,{emit:O}){const d=p;let r="";const{t:x}=ye(),I=fe("image"),n=Se(),Q=Fe(),T=w(),S=w(!1),_=w(!0),k=w(!1),u=w(),c=w(),o=H&&"loading"in HTMLImageElement.prototype;let M,$;const j=y(()=>n.style),ee=y(()=>{const{fit:e}=d;return H&&e?{objectFit:e}:{}}),Y=y(()=>{const{previewSrcList:e}=d;return Array.isArray(e)&&e.length>0}),ae=y(()=>{const{previewSrcList:e,initialIndex:t}=d;let s=t;return t>e.length-1&&(s=0),s}),A=y(()=>d.loading==="eager"?!1:!o&&d.loading==="lazy"||d.lazy),D=()=>{H&&(_.value=!0,S.value=!1,T.value=d.src)};function te(e){_.value=!1,S.value=!1,O("load",e)}function se(e){_.value=!1,S.value=!0,O("error",e)}function W(){qe(u.value,c.value)&&(D(),X())}const q=Ne(W,200,!0);async function P(){var e;if(!H)return;await ve();const{scrollContainer:t}=d;Te(t)?c.value=t:$e(t)&&t!==""?c.value=(e=document.querySelector(t))!=null?e:void 0:u.value&&(c.value=We(u.value)),c.value&&(M=R(c,"scroll",q),setTimeout(()=>W(),100))}function X(){!H||!c.value||!q||(M==null||M(),c.value=void 0)}function F(e){if(e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function Z(){Y.value&&($=R("wheel",F,{passive:!1}),r=document.body.style.overflow,document.body.style.overflow="hidden",k.value=!0,O("show"))}function G(){$==null||$(),document.body.style.overflow=r,k.value=!1,O("close")}function z(e){O("switch",e)}return le(()=>d.src,()=>{A.value?(_.value=!0,S.value=!1,X(),P()):D()}),me(()=>{A.value?P():D()}),(e,t)=>(m(),E("div",{ref_key:"container",ref:u,class:i([a(I).b(),e.$attrs.class]),style:ie(a(j))},[S.value?J(e.$slots,"error",{key:0},()=>[v("div",{class:i(a(I).e("error"))},Oe(a(x)("el.image.error")),3)]):(m(),E(K,{key:1},[T.value!==void 0?(m(),E("img",xe({key:0},a(Q),{src:T.value,loading:e.loading,style:a(ee),class:[a(I).e("inner"),a(Y)&&a(I).e("preview"),_.value&&a(I).is("loading")],onClick:Z,onLoad:te,onError:se}),null,16,sa)):b("v-if",!0),_.value?(m(),E("div",{key:1,class:i(a(I).e("wrapper"))},[J(e.$slots,"placeholder",{},()=>[v("div",{class:i(a(I).e("placeholder"))},null,2)])],2)):b("v-if",!0)],64)),a(Y)?(m(),E(K,{key:2},[k.value?(m(),re(a(ea),{key:0,"z-index":e.zIndex,"initial-index":a(ae),infinite:e.infinite,"zoom-rate":e.zoomRate,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:G,onSwitch:z},{default:h(()=>[e.$slots.viewer?(m(),E("div",na,[J(e.$slots,"viewer")])):b("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):b("v-if",!0)],64)):b("v-if",!0)],6))}});var ra=pe(la,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const ma=ge(ra);export{ma as E};
