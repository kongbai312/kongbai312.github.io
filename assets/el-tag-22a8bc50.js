import{i as T,d as v,g as w,j as N,a as n,c as M,b as l,r as f,x as o,e as a,h as c,w as r,q as g,v as k,z as C,aj as h,T as V,_ as $,C as j}from"./index-5b6677fe.js";import{c as y,E as b}from"./index-dc65b84b.js";import{a as I}from"./index-0e578efc.js";import{u as P}from"./use-form-common-props-e6e8cbde.js";const q=T({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:I,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),F={close:t=>t instanceof MouseEvent,click:t=>t instanceof MouseEvent},K=v({name:"ElTag"}),A=v({...K,props:q,emits:F,setup(t,{emit:i}){const _=t,E=P(),s=w("tag"),u=N(()=>{const{type:e,hit:d,effect:S,closable:z,round:B}=_;return[s.b(),s.is("closable",z),s.m(e),s.m(E.value),s.m(S),s.is("hit",d),s.is("round",B)]}),p=e=>{i("close",e)},m=e=>{i("click",e)};return(e,d)=>e.disableTransitions?(n(),M("span",{key:0,class:o(a(u)),style:h({backgroundColor:e.color}),onClick:m},[l("span",{class:o(a(s).e("content"))},[f(e.$slots,"default")],2),e.closable?(n(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:k(p,["stop"])},{default:r(()=>[g(a(y))]),_:1},8,["class","onClick"])):C("v-if",!0)],6)):(n(),c(V,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[l("span",{class:o(a(u)),style:h({backgroundColor:e.color}),onClick:m},[l("span",{class:o(a(s).e("content"))},[f(e.$slots,"default")],2),e.closable?(n(),c(a(b),{key:0,class:o(a(s).e("close")),onClick:k(p,["stop"])},{default:r(()=>[g(a(y))]),_:1},8,["class","onClick"])):C("v-if",!0)],6)]),_:3},8,["name"]))}});var D=$(A,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const O=j(D);export{O as E,q as t};
