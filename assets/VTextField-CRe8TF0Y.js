/* empty css                   */import{V as Y}from"./VCounter-BnJ4X-op.js";import{m as $,f as G,V as H}from"./VField-TfdV7Sv1.js";import{m as K,V as b}from"./VInput-DUnqEF-j.js";import{u as L}from"./form-D37_K2HO.js";import{f as Q}from"./forwardRefs-C-GTDzx5.js";import{a5 as W,bx as Z,av as ee,a9 as v,r as x,ad as te,c4 as ne,b as n,q as V,J as le,b$ as ae,F as y,cX as ue,aM as p,cY as oe}from"./index-VU0dmoHZ.js";import{I as ie}from"./VImg-BNqJuZG0.js";const re=["color","file","time","date","datetime-local","week","month"],se=W({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...K(),...$()},"VTextField"),Ce=Z()({name:"VTextField",directives:{Intersect:ie},inheritAttrs:!1,props:se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,S){let{attrs:m,emit:g,slots:l}=S;const o=ee(e,"modelValue"),{isFocused:r,focus:w,blur:A}=L(e),D=v(()=>typeof e.counterValue=="function"?e.counterValue(o.value):typeof e.counterValue=="number"?e.counterValue:(o.value??"").toString().length),M=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),C=v(()=>["plain","underlined"].includes(e.variant));function R(t,a){var u,i;!e.autofocus||!t||(i=(u=a[0].target)==null?void 0:u.focus)==null||i.call(u)}const F=x(),h=x(),s=x(),T=v(()=>re.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||w()}function B(t){g("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),g("click:control",t)}function E(t){t.stopPropagation(),d(),p(()=>{o.value=null,oe(e["onClick:clear"],t)})}function O(t){var u;const a=t.target;if(o.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[a.selectionStart,a.selectionEnd];p(()=>{a.selectionStart=i[0],a.selectionEnd=i[1]})}}return te(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,i]=ne(m),{modelValue:ce,...U}=b.filterProps(e),j=G(e);return n(b,V({ref:F,modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":C.value},e.class],style:e.style},u,U,{centerAffix:!C.value,focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:k,isDirty:P,isReadonly:q,isValid:z}=c;return n(H,V({ref:h,onMousedown:B,onClick:N,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},j,{id:f.value,active:T.value||P.value,dirty:P.value||e.dirty,disabled:k.value,focused:r.value,error:z.value===!1}),{...l,default:J=>{let{props:{class:I,...X}}=J;const _=le(n("input",V({ref:s,value:o.value,onInput:O,autofocus:e.autofocus,readonly:q.value,disabled:k.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:A},X,i),null),[[ae("intersect"),{handler:R},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),_]):ue(_,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(Y,{active:e.persistentCounter||r.value,value:D.value,max:M.value},l.counter)])])}:void 0})}),Q({},F,h,s)}});export{Ce as V,se as m};
