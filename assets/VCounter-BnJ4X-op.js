import{a5 as r,a6 as s,cM as u,bx as i,a9 as l,ad as m,b as n,J as c,K as v}from"./index-VU0dmoHZ.js";import{m as d,M as f}from"./VImg-BNqJuZG0.js";const x=r({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...s(),...d({transition:{component:u}})},"VCounter"),b=i()({name:"VCounter",functional:!0,props:x(),setup(e,o){let{slots:a}=o;const t=l(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return m(()=>n(f,{transition:e.transition},{default:()=>[c(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[v,e.active]])]})),{}}});export{b as V};
