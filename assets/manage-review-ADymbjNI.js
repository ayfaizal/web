import{p as G}from"./paginationMeta-BbY5dJ0C.js";import{q as J}from"./vue3-apexcharts-CKhpD6vT.js";import{u as K}from"./useApi-DHFWqMSv.js";import{c as X}from"./createUrl-BhvyS9BG.js";import{$ as Y}from"./api-Cp89FJ6x.js";import{V as x,a as p}from"./VRow-5iodEM2E.js";import{V as w}from"./VCard-DttbPEhw.js";import{V as y}from"./VCardText-uyCvIofY.js";import{r as m,aW as Z,a9 as W,a as B,o as A,f as ee,e as s,b as e,d as a,a2 as O,x as D,t as c,c as te,h as ae,v as d,aN as se,F as oe,m as i,a3 as v,am as V}from"./index-VU0dmoHZ.js";import{V as k}from"./VChip-ClWrs_JY.js";import{V as ie}from"./VTextField-CRe8TF0Y.js";import{V as T}from"./VSelect-CxzQIejo.js";import{V as le}from"./VDataTableServer-BlU4se88.js";import{V as U}from"./VAvatar-B0yljh3k.js";import{V as re}from"./VRating-63HRN0tp.js";import{V as ne}from"./VMenu-DngO4Bzq.js";import{V as de,a as L}from"./VList-DhXfVcoA.js";import{V as ce}from"./VDivider-BdZVMXth.js";import"./index-Bbh44Qwm.js";/* empty css              */import"./VImg-BNqJuZG0.js";import"./VSlideGroup-CNt9oOkj.js";/* empty css                   */import"./VCounter-BnJ4X-op.js";import"./VField-TfdV7Sv1.js";import"./form-D37_K2HO.js";import"./easing-CjukEv2V.js";import"./VInput-DUnqEF-j.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-ClMl6VK0.js";import"./VOverlay-BZO4hDjN.js";import"./lazy-CTD-MLkl.js";import"./scopeId-DwszM4ys.js";import"./VCheckboxBtn-DGugApLE.js";import"./VSelectionControl-Dht4FwVx.js";import"./VDataTable-B5tPfkax.js";import"./VPagination-BLh6BNxV.js";import"./VTable-BZlPi4DS.js";import"./filter-J5RtAc8v.js";import"./ssrBoot-Cx7lQdW-.js";const pe={class:"d-flex align-center gap-x-2"},me=a("h4",{class:"text-h3 text-primary"}," 4.89 ",-1),ue=a("h6",{class:"my-2 text-h6"}," Total 187 reviews ",-1),ve=a("div",{class:"mb-2"}," All reviews are from genuine customers ",-1),he={class:"text-sm text-no-wrap"},fe={class:"w-100"},be={class:"text-sm"},ge=a("h5",{class:"text-h5 mb-2"}," Reviews statistics ",-1),_e={class:"mb-9"},xe=a("span",{class:"me-2"},"12 New Reviews",-1),we=a("div",null,[a("div",{class:"text-high-emphasis text-body-1 mb-2"},[a("span",{class:"text-success"},"87%"),c(" Positive Reviews ")]),a("div",{class:"text-body-2"}," Weekly Report ")],-1),ye={class:"d-flex justify-start justify-sm-end"},Ve={class:"d-flex justify-space-between flex-wrap gap-4"},ke={class:"d-flex flex-row gap-4 align-center flex-wrap"},Re={class:"d-flex gap-x-3 align-center"},Ce={class:"d-flex flex-column"},Pe={class:"text-h6"},Se={class:"text-sm text-wrap clamp-text"},ze={class:"d-flex align-center gap-x-3"},We={class:"d-flex flex-column"},Be={class:"text-h6"},Ae={class:"text-body-2"},Oe={class:"py-5"},De={class:"text-h6 mb-1"},Te={class:"text-sm text-medium-emphasis text-wrap mb-0"},Ue={class:"text-body-1"},Le={class:"d-flex justify-end flex-wrap gap-x-6 px-2 py-1"},Me={class:"d-flex align-center gap-x-2 text-medium-emphasis text-base"},$e={class:"d-flex align-center text-base text-high-emphasis me-2 mb-0"},Ie={class:"d-flex gap-x-2 align-center me-2"},Ne="rgba(var(--v-theme-on-surface), var(--v-disabled-opacity))",zt={__name:"manage-review",async setup(Ee){let b,R;const g=m("All"),_=m(""),h=m([]),r=m(10),l=m(1),C=m(),P=m(),{data:S,execute:M}=([b,R]=Z(()=>K(X("/apps/ecommerce/reviews",{query:{q:_,status:g,page:l,itemsPerPage:r,sortBy:C,orderBy:P}}))),b=await b,R(),b),$=W(()=>S.value.reviews),f=W(()=>S.value.total),I=n=>{var o,u;l.value=n.page,C.value=(o=n.sortBy[0])==null?void 0:o.key,P.value=(u=n.sortBy[0])==null?void 0:u.order},N=async n=>{await Y(`/apps/ecommerce/reviews/${n}`,{method:"DELETE"});const o=h.value.findIndex(u=>u===n);o!==-1&&h.value.splice(o,1),M()},E=[{rating:5,value:124},{rating:4,value:40},{rating:3,value:12},{rating:2,value:7},{rating:1,value:2}],j=[{title:"Product",key:"product"},{title:"Reviewer",key:"reviewer"},{title:"Review",key:"review",sortable:!1},{title:"Date",key:"date"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],q=[{data:[20,40,60,80,100,80,60]}],F={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},legend:{show:!1},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:["rgba(var(--v-theme-success), var(--v-activated-opacity))","rgba(var(--v-theme-success), var(--v-activated-opacity))","rgba(var(--v-theme-success), var(--v-activated-opacity))","rgba(var(--v-theme-success), var(--v-activated-opacity))","rgba(var(--v-theme-success), 1)","rgba(var(--v-theme-success), var(--v-activated-opacity))","rgba(var(--v-theme-success), var(--v-activated-opacity))"],plotOptions:{bar:{barHeight:"75%",columnWidth:"35%",borderRadius:5,distributed:!0}},dataLabels:{enabled:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:Ne,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:576,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:3,columnWidth:"30%"}}}}]};return(n,o)=>{const u=J,H=B("RouterLink"),Q=B("IconBtn");return A(),ee(x,{class:"match-height"},{default:s(()=>[e(p,{cols:"12",md:"6"},{default:s(()=>[e(w,null,{default:s(()=>[e(y,null,{default:s(()=>[e(x,null,{default:s(()=>[e(p,{cols:"12",sm:"6"},{default:s(()=>[a("div",{class:D(n.$vuetify.display.smAndUp?"border-e":"border-b")},[a("div",pe,[me,e(O,{icon:"ri-star-smile-line",color:"primary",size:"32"})]),ue,ve,e(k,{color:"primary",size:"small",class:D(n.$vuetify.display.smAndUp?"":"mb-4")},{default:s(()=>[c(" +5 This week ")]),_:1},8,["class"])],2)]),_:1}),e(p,{cols:"12",sm:"6"},{default:s(()=>[(A(),te(oe,null,ae(E,(t,z)=>a("div",{key:z,class:"d-flex align-center gap-2 mb-3"},[a("div",he,d(t.rating)+" Star ",1),a("div",fe,[e(se,{color:"primary",height:"8","model-value":t.value/185*100,rounded:""},null,8,["model-value"])]),a("div",be,d(t.value),1)])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"6"},{default:s(()=>[e(w,null,{default:s(()=>[e(y,null,{default:s(()=>[e(x,null,{default:s(()=>[e(p,{cols:"12",sm:"5"},{default:s(()=>[a("div",null,[ge,a("div",_e,[xe,e(k,{color:"success",size:"small"},{default:s(()=>[c(" +8.4% ")]),_:1})]),we])]),_:1}),e(p,{cols:"12",sm:"7"},{default:s(()=>[a("div",ye,[e(u,{id:"shipment-statistics",type:"bar",height:"150",options:F,series:q})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{cols:"12"},{default:s(()=>[e(w,null,{default:s(()=>[e(y,null,{default:s(()=>[a("div",Ve,[e(ie,{modelValue:i(_),"onUpdate:modelValue":o[0]||(o[0]=t=>v(_)?_.value=t:null),style:{"max-inline-size":"250px","min-inline-size":"200px"},placeholder:"Search",density:"compact"},null,8,["modelValue"]),a("div",ke,[e(T,{modelValue:i(g),"onUpdate:modelValue":o[1]||(o[1]=t=>v(g)?g.value=t:null),style:{"min-inline-size":"6.25rem"},density:"compact",items:[{title:"All",value:"All"},{title:"Published",value:"Published"},{title:"Pending",value:"Pending"}]},null,8,["modelValue"]),e(V,{"prepend-icon":"ri-upload-2-line"},{default:s(()=>[c(" Export ")]),_:1})])])]),_:1}),e(le,{"model-value":i(h),"onUpdate:modelValue":o[5]||(o[5]=t=>v(h)?h.value=t:null),"items-per-page":i(r),"onUpdate:itemsPerPage":o[6]||(o[6]=t=>v(r)?r.value=t:null),page:i(l),"onUpdate:page":o[7]||(o[7]=t=>v(l)?l.value=t:null),headers:j,items:i($),"show-select":"","items-length":i(f),"item-value":"id",class:"text-no-wrap rounded-0","onUpdate:options":I},{"item.product":s(({item:t})=>[a("div",Re,[e(U,{image:t.productImage,size:38,variant:"tonal",rounded:""},null,8,["image"]),a("div",Ce,[a("h6",Pe,d(t.product),1),a("span",Se,d(t.companyName),1)])])]),"item.reviewer":s(({item:t})=>[a("div",ze,[e(U,{image:t.avatar,size:"34"},null,8,["image"]),a("div",We,[a("h6",Be,[e(H,{to:{name:"apps-ecommerce-customer-details-id",params:{id:478426}},class:"font-weight-medium"},{default:s(()=>[c(d(t.reviewer),1)]),_:2},1024)]),a("span",Ae,d(t.email),1)])])]),"item.review":s(({item:t})=>[a("div",Oe,[e(re,{size:24,readonly:"","model-value":t.review},null,8,["model-value"]),a("h6",De,d(t.head),1),a("p",Te,d(t.para),1)])]),"item.date":s(({item:t})=>[a("span",Ue,d(new Date(t.date).toDateString()),1)]),"item.status":s(({item:t})=>[e(k,{color:t.status==="Published"?"success":"warning",size:"small"},{default:s(()=>[c(d(t.status),1)]),_:2},1032,["color"])]),"item.actions":s(({item:t})=>[e(Q,{size:"small"},{default:s(()=>[e(O,{icon:"ri-more-2-line"}),e(ne,{activator:"parent"},{default:s(()=>[e(de,null,{default:s(()=>[e(L,{value:"view",to:{name:"apps-ecommerce-order-details-id",params:{id:t.id}}},{default:s(()=>[c(" View ")]),_:2},1032,["to"]),e(L,{value:"delete",onClick:z=>N(t.id)},{default:s(()=>[c(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:s(()=>[e(ce),a("div",Le,[a("div",Me,[c(" Rows Per Page: "),e(T,{modelValue:i(r),"onUpdate:modelValue":o[2]||(o[2]=t=>v(r)?r.value=t:null),class:"per-page-select",variant:"plain",items:[10,20,25,50,100]},null,8,["modelValue"])]),a("p",$e,d(("paginationMeta"in n?n.paginationMeta:i(G))({page:i(l),itemsPerPage:i(r)},i(f))),1),a("div",Ie,[e(V,{class:"flip-in-rtl",icon:"ri-arrow-left-s-line",variant:"text",density:"comfortable",color:"high-emphasis",disabled:i(l)<=1,onClick:o[3]||(o[3]=t=>i(l)<=1?l.value=1:l.value--)},null,8,["disabled"]),e(V,{class:"flip-in-rtl",icon:"ri-arrow-right-s-line",density:"comfortable",variant:"text",color:"high-emphasis",disabled:i(l)>=Math.ceil(i(f)/i(r)),onClick:o[4]||(o[4]=t=>i(l)>=Math.ceil(i(f)/i(r))?l.value=Math.ceil(i(f)/i(r)):l.value++)},null,8,["disabled"])])])]),_:1},8,["model-value","items-per-page","page","items","items-length"])]),_:1})]),_:1})]),_:1})}}};export{zt as default};
