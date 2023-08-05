import{l as K,E as I}from"./index-4db48b45.js";import{u as U}from"./index-44cd446c.js";import{u as A}from"./use-global-config-0921ca14.js";import{u as O}from"./use-form-item-d1603f40.js";import{u as J,a as x}from"./use-form-common-props-1b4f9486.js";import{j as f,G as M,k as R,a6 as X,aJ as Z,i as q,U as H,g as w,d as h,a as m,h as k,w as C,c as N,O as L,r as B,e,x as V,ai as $,z as E,m as Q,_ as P,K as W,I as Y,X as T,C as oo,Z as to}from"./index-6178ce7c.js";import{u as eo}from"./index-d9c2f0de.js";import{i as G}from"./index-835db82e.js";import{T as no}from"./index-f8748455.js";const D=Symbol("buttonGroupContextKey"),so=(t,r)=>{U({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},f(()=>t.type==="text"));const n=M(D,void 0),a=A("button"),{form:l}=O(),o=J(f(()=>n==null?void 0:n.size)),i=x(),b=R(),c=X(),p=f(()=>t.type||(n==null?void 0:n.type)||""),S=f(()=>{var u,g,v;return(v=(g=t.autoInsertSpace)!=null?g:(u=a.value)==null?void 0:u.autoInsertSpace)!=null?v:!1}),y=f(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),_=f(()=>{var u;const g=(u=c.default)==null?void 0:u.call(c);if(S.value&&(g==null?void 0:g.length)===1){const v=g[0];if((v==null?void 0:v.type)===Z){const j=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(j.trim())}}return!1});return{_disabled:i,_size:o,_type:p,_ref:b,_props:y,shouldAddSpace:_,handleClick:u=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",u)}}},ao=["default","primary","success","warning","info","danger","text",""],lo=["button","submit","reset"],z=q({size:eo,disabled:Boolean,type:{type:String,values:ao,default:""},icon:{type:G},nativeType:{type:String,values:lo,default:"button"},loading:Boolean,loadingIcon:{type:G,default:()=>K},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:H([String,Object]),default:"button"}}),ro={click:t=>t instanceof MouseEvent};function d(t,r=20){return t.mix("#141414",r).toString()}function io(t){const r=x(),n=w("button");return f(()=>{let a={};const l=t.color;if(l){const o=new no(l),i=t.dark?o.tint(20).toString():d(o,20);if(t.plain)a=n.cssVarBlock({"bg-color":t.dark?d(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?d(o,50):o.tint(50).toString(),"hover-text-color":`var(${n.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${n.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(a[n.cssVarBlockName("disabled-bg-color")]=t.dark?d(o,90):o.tint(90).toString(),a[n.cssVarBlockName("disabled-text-color")]=t.dark?d(o,50):o.tint(50).toString(),a[n.cssVarBlockName("disabled-border-color")]=t.dark?d(o,80):o.tint(80).toString());else{const b=t.dark?d(o,30):o.tint(30).toString(),c=o.isDark()?`var(${n.cssVarName("color-white")})`:`var(${n.cssVarName("color-black")})`;if(a=n.cssVarBlock({"bg-color":l,"text-color":c,"border-color":l,"hover-bg-color":b,"hover-text-color":c,"hover-border-color":b,"active-bg-color":i,"active-border-color":i}),r.value){const p=t.dark?d(o,50):o.tint(50).toString();a[n.cssVarBlockName("disabled-bg-color")]=p,a[n.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${n.cssVarName("color-white")})`,a[n.cssVarBlockName("disabled-border-color")]=p}}}return a})}const co=h({name:"ElButton"}),uo=h({...co,props:z,emits:ro,setup(t,{expose:r,emit:n}){const a=t,l=io(a),o=w("button"),{_ref:i,_size:b,_type:c,_disabled:p,_props:S,shouldAddSpace:y,handleClick:_}=so(a,n);return r({ref:i,size:b,type:c,disabled:p,shouldAddSpace:y}),(s,u)=>(m(),k($(s.tag),Q({ref_key:"_ref",ref:i},e(S),{class:[e(o).b(),e(o).m(e(c)),e(o).m(e(b)),e(o).is("disabled",e(p)),e(o).is("loading",s.loading),e(o).is("plain",s.plain),e(o).is("round",s.round),e(o).is("circle",s.circle),e(o).is("text",s.text),e(o).is("link",s.link),e(o).is("has-bg",s.bg)],style:e(l),onClick:e(_)}),{default:C(()=>[s.loading?(m(),N(L,{key:0},[s.$slots.loading?B(s.$slots,"loading",{key:0}):(m(),k(e(I),{key:1,class:V(e(o).is("loading"))},{default:C(()=>[(m(),k($(s.loadingIcon)))]),_:1},8,["class"]))],64)):s.icon||s.$slots.icon?(m(),k(e(I),{key:1},{default:C(()=>[s.icon?(m(),k($(s.icon),{key:0})):B(s.$slots,"icon",{key:1})]),_:3})):E("v-if",!0),s.$slots.default?(m(),N("span",{key:2,class:V({[e(o).em("text","expand")]:e(y)})},[B(s.$slots,"default")],2)):E("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var mo=P(uo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const bo={size:z.size,type:z.type},po=h({name:"ElButtonGroup"}),fo=h({...po,props:bo,setup(t){const r=t;W(D,Y({size:T(r,"size"),type:T(r,"type")}));const n=w("button");return(a,l)=>(m(),N("div",{class:V(`${e(n).b("group")}`)},[B(a.$slots,"default")],2))}});var F=P(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const $o=oo(mo,{ButtonGroup:F}),No=to(F);export{$o as E,No as a};
