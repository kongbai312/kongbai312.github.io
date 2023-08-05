import{ac as de,o as te,R as fe,L as me,l as H,a1 as pe,H as ve,g as x,ad as ye,ae as se,F as G,J as j,af as ge,D as he,ag as Ce,E as be,ah as q,i as Q,U as W,d as O,q as T,r as b,M as we,G as J,j as P,a as S,c as Y,b as A,x as E,e as o,y as Ee,w as C,h as X,ai as ke,z as K,aj as ne,_ as le,ak as _e,k as B,al as Ie,W as De,P as Me,Q as Z,a6 as Se,K as Be,s as Te,m as Le,a9 as $e,A as Fe,T as Pe,B as Ae,C as Oe,p as Re,f as ze}from"./index-5b6677fe.js";import{E as Ne}from"./el-image-viewer-39674166.js";import{P as U}from"./vnode-7deb6e0b.js";import{E as Ve}from"./index-dc65b84b.js";import{i as Ye,C as qe,u as ee}from"./index-946e301d.js";import{u as Ue,a as He}from"./index-f0102bc7.js";import{F as je,E as We}from"./focus-trap-f508729e.js";import{U as ae}from"./config-provider-b508803c.js";import{u as Xe}from"./use-global-config-f6d76791.js";import{g as Ke}from"./scroll-ecf25a80.js";import{u as oe}from"./index-a6593272.js";import{_ as xe}from"./_plugin-vue_export-helper-c27b6911.js";const Qe=(...e)=>t=>{e.forEach(l=>{de(l)?l(t):l.value=t})},Ge=(e,t,l)=>{let s={offsetX:0,offsetY:0};const i=a=>{const d=a.clientX,p=a.clientY,{offsetX:f,offsetY:v}=s,n=e.value.getBoundingClientRect(),m=n.left,k=n.top,R=n.width,z=n.height,N=document.documentElement.clientWidth,L=document.documentElement.clientHeight,V=-m+f,$=-k+v,_=N-m-R+f,I=L-k-z+v,F=w=>{const c=Math.min(Math.max(f+w.clientX-d,V),_),h=Math.min(Math.max(v+w.clientY-p,$),I);s={offsetX:c,offsetY:h},e.value.style.transform=`translate(${H(c)}, ${H(h)})`},y=()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",F),document.addEventListener("mouseup",y)},u=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",i)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",i)};te(()=>{fe(()=>{l.value?u():r()})}),me(()=>{r()})},Je=(e,t={})=>{pe(e)||ve("[useLockscreen]","You need to pass a ref param to this function");const l=t.ns||x("popup"),s=ye(()=>l.bm("parent","hidden"));if(!se||G(document.body,s.value))return;let i=0,u=!1,r="0";const a=()=>{setTimeout(()=>{be(document==null?void 0:document.body,s.value),u&&document&&(document.body.style.width=r)},200)};j(e,d=>{if(!d){a();return}u=!G(document.body,s.value),u&&(r=document.body.style.width),i=Ke(l.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,f=ge(document.body,"overflowY");i>0&&(p||f==="scroll")&&u&&(document.body.style.width=`calc(100% - ${i}px)`),he(document.body,s.value)}),Ce(()=>a())},ce=e=>{if(!e)return{onClick:q,onMousedown:q,onMouseup:q};let t=!1,l=!1;return{onClick:r=>{t&&l&&e(r),t=l=!1},onMousedown:r=>{t=r.target===r.currentTarget},onMouseup:r=>{l=r.target===r.currentTarget}}},Ze=Q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:W([String,Array,Object])},zIndex:{type:W([String,Number])}}),eo={click:e=>e instanceof MouseEvent},oo="overlay";var to=O({name:"ElOverlay",props:Ze,emits:eo,setup(e,{slots:t,emit:l}){const s=x(oo),i=d=>{l("click",d)},{onClick:u,onMousedown:r,onMouseup:a}=ce(e.customMaskEvent?void 0:i);return()=>e.mask?T("div",{class:[s.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:u,onMousedown:r,onMouseup:a},[b(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[b(t,"default")])}});const so=to,re=Symbol("dialogInjectionKey"),ie=Q({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ye},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),no={close:()=>!0},lo=["aria-label"],ao=["id"],co=O({name:"ElDialogContent"}),ro=O({...co,props:ie,emits:no,setup(e){const t=e,{t:l}=Ue(),{Close:s}=qe,{dialogRef:i,headerRef:u,bodyId:r,ns:a,style:d}=J(re),{focusTrapRef:p}=J(je),f=Qe(p,i),v=P(()=>t.draggable);return Ge(i,u,v),(n,m)=>(S(),Y("div",{ref:o(f),class:E([o(a).b(),o(a).is("fullscreen",n.fullscreen),o(a).is("draggable",o(v)),o(a).is("align-center",n.alignCenter),{[o(a).m("center")]:n.center},n.customClass]),style:ne(o(d)),tabindex:"-1"},[A("header",{ref_key:"headerRef",ref:u,class:E(o(a).e("header"))},[b(n.$slots,"header",{},()=>[A("span",{role:"heading",class:E(o(a).e("title"))},Ee(n.title),3)]),n.showClose?(S(),Y("button",{key:0,"aria-label":o(l)("el.dialog.close"),class:E(o(a).e("headerbtn")),type:"button",onClick:m[0]||(m[0]=k=>n.$emit("close"))},[T(o(Ve),{class:E(o(a).e("close"))},{default:C(()=>[(S(),X(ke(n.closeIcon||o(s))))]),_:1},8,["class"])],10,lo)):K("v-if",!0)],2),A("div",{id:o(r),class:E(o(a).e("body"))},[b(n.$slots,"default")],10,ao),n.$slots.footer?(S(),Y("footer",{key:0,class:E(o(a).e("footer"))},[b(n.$slots,"footer")],2)):K("v-if",!0)],6))}});var io=le(ro,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const uo=Q({...ie,appendToBody:{type:Boolean,default:!1},beforeClose:{type:W(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),fo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>_e(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},mo=(e,t)=>{const s=Me().emit,{nextZIndex:i}=He();let u="";const r=ee(),a=ee(),d=B(!1),p=B(!1),f=B(!1),v=B(e.zIndex||i());let n,m;const k=Xe("namespace",Ie),R=P(()=>{const g={},M=`--${k.value}-dialog`;return e.fullscreen||(e.top&&(g[`${M}-margin-top`]=e.top),e.width&&(g[`${M}-width`]=H(e.width))),g}),z=P(()=>e.alignCenter?{display:"flex"}:{});function N(){s("opened")}function L(){s("closed"),s(ae,!1),e.destroyOnClose&&(f.value=!1)}function V(){s("close")}function $(){m==null||m(),n==null||n(),e.openDelay&&e.openDelay>0?{stop:n}=Z(()=>y(),e.openDelay):y()}function _(){n==null||n(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=Z(()=>w(),e.closeDelay):w()}function I(){function g(M){M||(p.value=!0,d.value=!1)}e.beforeClose?e.beforeClose(g):_()}function F(){e.closeOnClickModal&&I()}function y(){se&&(d.value=!0)}function w(){d.value=!1}function c(){s("openAutoFocus")}function h(){s("closeAutoFocus")}function D(g){var M;((M=g.detail)==null?void 0:M.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&Je(d);function ue(){e.closeOnPressEscape&&I()}return j(()=>e.modelValue,g=>{g?(p.value=!1,$(),f.value=!0,v.value=e.zIndex?v.value++:i(),De(()=>{s("open"),t.value&&(t.value.scrollTop=0)})):d.value&&_()}),j(()=>e.fullscreen,g=>{t.value&&(g?(u=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=u)}),te(()=>{e.modelValue&&(d.value=!0,f.value=!0,$())}),{afterEnter:N,afterLeave:L,beforeLeave:V,handleClose:I,onModalClick:F,close:_,doClose:w,onOpenAutoFocus:c,onCloseAutoFocus:h,onCloseRequested:ue,onFocusoutPrevented:D,titleId:r,bodyId:a,closed:p,style:R,overlayDialogStyle:z,rendered:f,visible:d,zIndex:v}},po=["aria-label","aria-labelledby","aria-describedby"],vo=O({name:"ElDialog",inheritAttrs:!1}),yo=O({...vo,props:uo,emits:fo,setup(e,{expose:t}){const l=e,s=Se();oe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},P(()=>!!s.title)),oe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},P(()=>!!l.customClass));const i=x("dialog"),u=B(),r=B(),a=B(),{visible:d,titleId:p,bodyId:f,style:v,overlayDialogStyle:n,rendered:m,zIndex:k,afterEnter:R,afterLeave:z,beforeLeave:N,handleClose:L,onModalClick:V,onOpenAutoFocus:$,onCloseAutoFocus:_,onCloseRequested:I,onFocusoutPrevented:F}=mo(l,u);Be(re,{dialogRef:u,headerRef:r,bodyId:f,ns:i,rendered:m,style:v});const y=ce(V),w=P(()=>l.draggable&&!l.fullscreen);return t({visible:d,dialogContentRef:a}),(c,h)=>(S(),X(Ae,{to:"body",disabled:!c.appendToBody},[T(Pe,{name:"dialog-fade",onAfterEnter:o(R),onAfterLeave:o(z),onBeforeLeave:o(N),persisted:""},{default:C(()=>[Te(T(o(so),{"custom-mask-event":"",mask:c.modal,"overlay-class":c.modalClass,"z-index":o(k)},{default:C(()=>[A("div",{role:"dialog","aria-modal":"true","aria-label":c.title||void 0,"aria-labelledby":c.title?void 0:o(p),"aria-describedby":o(f),class:E(`${o(i).namespace.value}-overlay-dialog`),style:ne(o(n)),onClick:h[0]||(h[0]=(...D)=>o(y).onClick&&o(y).onClick(...D)),onMousedown:h[1]||(h[1]=(...D)=>o(y).onMousedown&&o(y).onMousedown(...D)),onMouseup:h[2]||(h[2]=(...D)=>o(y).onMouseup&&o(y).onMouseup(...D))},[T(o(We),{loop:"",trapped:o(d),"focus-start-el":"container",onFocusAfterTrapped:o($),onFocusAfterReleased:o(_),onFocusoutPrevented:o(F),onReleaseRequested:o(I)},{default:C(()=>[o(m)?(S(),X(io,Le({key:0,ref_key:"dialogContentRef",ref:a},c.$attrs,{"custom-class":c.customClass,center:c.center,"align-center":c.alignCenter,"close-icon":c.closeIcon,draggable:o(w),fullscreen:c.fullscreen,"show-close":c.showClose,title:c.title,onClose:o(L)}),$e({header:C(()=>[c.$slots.title?b(c.$slots,"title",{key:1}):b(c.$slots,"header",{key:0,close:o(L),titleId:o(p),titleClass:o(i).e("title")})]),default:C(()=>[b(c.$slots,"default")]),_:2},[c.$slots.footer?{name:"footer",fn:C(()=>[b(c.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):K("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,po)]),_:3},8,["mask","overlay-class","z-index"]),[[Fe,o(d)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var go=le(yo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const ho=Oe(go);const Co=""+new URL("wechat-8ba79a1e.jpg",import.meta.url).href,bo=""+new URL("qq-2b03b122.jpg",import.meta.url).href,wo=e=>(Re("data-v-5086d833"),e=e(),ze(),e),Eo=wo(()=>A("span",{class:"contactDialog_header"},"添加作者联系",-1)),ko={class:"contactDialog_container"},_o=O({__name:"pr_contactDialog",props:{activeIcon:{default:"qq"},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:t}){const l=s=>{t("update:modelValue",!1),s()};return(s,i)=>{const u=Ne,r=ho;return S(),Y("div",null,[T(r,{modelValue:s.modelValue,class:"contactDialog","show-close":!1,center:"","before-close":l},{header:C(()=>[Eo]),default:C(()=>[A("div",ko,[T(u,{src:s.activeIcon&&s.activeIcon==="qq"?o(bo):o(Co),class:"wechatImg",fit:"contain"},null,8,["src"])])]),_:1},8,["modelValue"])])}}});const Ro=xe(_o,[["__scopeId","data-v-5086d833"]]);const zo=""+new URL("homeCenter-860a95c0.png",import.meta.url).href;export{so as E,zo as H,Ro as _,fo as a,uo as d,mo as u};
