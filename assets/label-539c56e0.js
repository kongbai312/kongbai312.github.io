import{d as y,k,o as x,a5 as E,j as v,u as w,a as n,c as d,q as A,w as i,O as C,a0 as I,e as p,h as M,Y as L,y as B}from"./index-9f26c53c.js";import{E as S}from"./el-card-acc5f602.js";import{E as j}from"./el-tag-f6fc9dc8.js";import{b as D}from"./index-ed11610a.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-a6f4e912.js";import"./index-acfb91c4.js";import"./use-form-common-props-9628bfc5.js";import"./constants-8ece7a3d.js";const T={class:"label_container"},V=y({__name:"label",setup($){let l=["","success","info","danger","warning"],c=k([]);const _=async()=>{let a=await D();u(a.data)},u=a=>{let r=[];a.forEach(t=>{t.tags.forEach(o=>{r.findIndex(g=>g===o)===-1&&r.push(o)})});let e,s;r.forEach(t=>{if(e=Math.round(Math.random()*(l.length-1)),e===s)for(;e===s;)e=Math.round(Math.random()*(l.length-1));let o={type:l[e],label:t};c.value.push(o),s=e})};x(()=>{_()});const f=E();let m=v(()=>f.themeStatus);const h=w(),b=a=>{h.push(`/labelList/${a}`)};return(a,r)=>{const e=j,s=S;return n(),d("div",T,[A(s,{shadow:"hover",class:"label_elCard"},{default:i(()=>[(n(!0),d(C,null,I(p(c),t=>(n(),M(e,{key:t.label,type:t.type,size:"large",effect:p(m)?"dark":"plain",class:"tagItem",onClick:o=>b(t.label)},{default:i(()=>[L(B(t.label),1)]),_:2},1032,["type","effect","onClick"]))),128))]),_:1})])}}});const J=N(V,[["__scopeId","data-v-fa45dc50"]]);export{J as default};
