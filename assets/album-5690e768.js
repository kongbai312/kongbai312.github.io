import{d as u,u as b,a as s,c as a,q as n,e as _,b as e,w as g,O as h,a0 as f,y as i}from"./index-036cbdfa.js";import{E as v}from"./el-card-25e96b3e.js";import{_ as x}from"./pr_headerImg-3b8fe78f.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const k=[{id:1,image:"https://pic.imgdb.cn/item/64c4bcd71ddac507cc35faa0.jpg",title:"精选壁纸",text:"图片"},{id:2,image:"https://pic.imgdb.cn/item/64c4bcd71ddac507cc35faa0.jpg",title:"测试壁纸",text:"图片"}],y={class:"album_container"},I={class:"album_content"},j=["onClick"],w=["src"],B={class:"albumItem_content"},E={class:"text"},$={class:"textHover"},A=u({__name:"album",setup(L){let l="https://pic.imgdb.cn/item/64c4b14a1ddac507cc1f832d.jpg";const d=b(),r=(c,o)=>{d.push(`/album/${c}?title=${o}`)};return(c,o)=>{const m=x,p=v;return s(),a("div",y,[n(m,{img:_(l),titleArr:["相","册"]},null,8,["img"]),e("div",I,[n(p,{shadow:"hover",class:"album_elCard"},{default:g(()=>[(s(!0),a(h,null,f(_(k),t=>(s(),a("div",{class:"albumItem",onClick:N=>r(t.id,t.title),key:t.id},[e("img",{class:"albumItem_img",src:t.image,alt:""},null,8,w),e("div",B,[e("span",E,i(t.title),1),e("span",$,i(t.text),1)])],8,j))),128))]),_:1})])])}}});const H=C(A,[["__scopeId","data-v-aeb868cd"]]);export{H as default};
