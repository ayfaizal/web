import{_ as E}from"./AppDateTimePicker-u6CFpMGn.js";import{a as p,V as U}from"./VRow-5iodEM2E.js";import{V as S}from"./VSelect-CxzQIejo.js";import{V as P}from"./VTextarea-C23gbXyu.js";import{V as D}from"./VTextField-CRe8TF0Y.js";import{V as T}from"./VTooltip-B61Kcv-O.js";import{r as f,b1 as F,w as z,a9 as M,a as q,o as v,c as C,d as e,b as t,e as l,m as s,a3 as $,t as V,v as r,x as g,a2 as H,F as R,f as O,H as B,y as W,h as J,am as L,Q,R as G}from"./index-VU0dmoHZ.js";import{V as Y}from"./VCard-DttbPEhw.js";import{V as K}from"./VNodeRenderer-BelNBPWP.js";import{u as X}from"./useApi-DHFWqMSv.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as I}from"./VDivider-BdZVMXth.js";const ee={class:"add-products-header mb-2 d-none d-md-flex mb-4"},te=e("h6",{class:"text-h6"}," Item ",-1),se=e("h6",{class:"text-h6 ps-2"}," Cost ",-1),oe=e("h6",{class:"text-h6 ps-2"}," Hours ",-1),le=e("h6",{class:"text-h6"}," Price ",-1),ae={class:"pa-5 flex-grow-1"},ne={class:"text-high-emphasis mt-5"},de=e("p",{class:"mb-1"}," Discount ",-1),ie=e("span",null,"0%",-1),ce={class:"mx-2"},me={class:"my-2"},re=e("span",{class:"d-inline d-md-none"},"Price: ",-1),ue={class:"text-high-emphasis"},pe={__name:"InvoiceProductEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0,default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(h,{emit:k}){const c=h,b=k,a=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],_=f("App Customization"),m=f(structuredClone(F(c.data)));z(_,()=>{const w=a.filter(u=>u.title===_.value);m.value=w[0]});const y=()=>{b("removeProduct",c.id)},x=M(()=>Number(m.value.cost)*Number(m.value.hours));return z(x,()=>{b("totalAmount",x.value)},{immediate:!0}),(w,u)=>{const A=q("IconBtn");return v(),C(R,null,[e("div",ee,[t(U,{class:"me-10"},{default:l(()=>[t(p,{cols:"12",md:"6"},{default:l(()=>[te]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[se]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[oe]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[le]),_:1})]),_:1})]),t(Y,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:l(()=>[e("div",ae,[t(U,null,{default:l(()=>[t(p,{cols:"12",md:"6"},{default:l(()=>[t(S,{modelValue:s(_),"onUpdate:modelValue":u[0]||(u[0]=d=>$(_)?_.value=d:null),items:a,"item-title":"title","item-value":"title",label:"Select Item",placeholder:"Select Item",class:"mb-5"},null,8,["modelValue"]),t(P,{modelValue:s(m).description,"onUpdate:modelValue":u[1]||(u[1]=d=>s(m).description=d),rows:"2",label:"Description",placeholder:"Item description"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(D,{modelValue:s(m).cost,"onUpdate:modelValue":u[2]||(u[2]=d=>s(m).cost=d),type:"number",label:"Cost",placeholder:"100"},null,8,["modelValue"]),e("div",ne,[de,ie,e("span",ce,[V(" 0% "),t(T,{activator:"parent"},{default:l(()=>[V("Tax 1")]),_:1})]),e("span",null,[V(" 0% "),t(T,{activator:"parent"},{default:l(()=>[V("Tax 2")]),_:1})])])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(D,{modelValue:s(m).hours,"onUpdate:modelValue":u[3]||(u[3]=d=>s(m).hours=d),type:"number",label:"Hours",placeholder:"5"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[e("p",me,[re,e("span",ue,"$"+r(s(x)),1)])]),_:1})]),_:1})]),e("div",{class:g(["d-flex flex-column align-end item-actions",w.$vuetify.display.smAndUp?"border-s":"border-b"])},[t(A,{onClick:y},{default:l(()=>[t(H,{size:24,icon:"ri-close-line"})]),_:1})],2)]),_:1})],64)}}},o=h=>(Q("data-v-37312bc1"),h=h(),G(),h),_e={class:"d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6"},he={class:"app-logo mb-6"},fe={class:"app-logo-title"},xe=o(()=>e("p",{class:"text-high-emphasis mb-0 text-body-1"}," Office 149, 450 South Brand Brooklyn ",-1)),be=o(()=>e("p",{class:"text-high-emphasis mb-0 text-body-1"}," San Diego County, CA 91905, USA ",-1)),ye=o(()=>e("p",{class:"text-high-emphasis mb-0 text-body-1"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1)),ve={class:"d-flex gap-2 flex-column"},Ve={class:"d-flex align-start align-sm-center font-weight-medium justify-sm-end flex-column flex-sm-row text-lg"},ge=o(()=>e("span",{class:"text-high-emphasis me-4",style:{"inline-size":"5.625rem"}},"Invoice",-1)),De={class:"d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row"},we=o(()=>e("span",{class:"text-high-emphasis me-4",style:{"inline-size":"5.625rem"}},"Date Issued:",-1)),Ie={style:{"inline-size":"9.5rem"}},Ce={class:"d-flex align-start align-sm-center justify-sm-end flex-column flex-sm-row"},$e=o(()=>e("span",{class:"text-high-emphasis me-4",style:{"inline-size":"5.625rem"}},"Due Date:",-1)),ke={style:{"min-inline-size":"9.5rem"}},Ae=o(()=>e("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1)),Ue={class:"mb-0 text-body-1"},Ne={class:"mb-0 text-body-1"},Te={key:0,class:"mb-0 text-body-1"},ze={class:"mb-0 text-body-1"},Be={class:"mb-0 text-body-1"},Se=o(()=>e("h6",{class:"text-h6 mb-4"}," Bill To: ",-1)),Pe={class:"text-body-1"},Re=o(()=>e("td",{class:"pe-6"}," Total Due: ",-1)),Ye=o(()=>e("td",{class:"pe-6"}," Bank Name: ",-1)),je=o(()=>e("td",{class:"pe-6"}," Country: ",-1)),Ee=o(()=>e("td",{class:"pe-6"}," IBAN: ",-1)),Fe={class:"mb-0 text-wrap me-4"},Me=o(()=>e("td",{class:"pe-6"}," SWIFT Code: ",-1)),qe={class:"add-products-form"},He={class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},Oe={class:"mb-6 mb-sm-0"},We={class:"d-flex align-center mb-4"},Je=o(()=>e("h6",{class:"text-h6 me-2"}," Salesperson: ",-1)),Le={class:"w-100"},Qe=o(()=>e("td",{class:"pe-16 text-body-1"}," Subtotal: ",-1)),Ge=o(()=>e("h6",{class:"text-h6"}," $1800 ",-1)),Ke=[Ge],Xe=o(()=>e("td",{class:"pe-16 text-body-1"}," Discount: ",-1)),Ze=o(()=>e("h6",{class:"text-h6"}," $28 ",-1)),et=[Ze],tt=o(()=>e("td",{class:"pe-16 text-body-1"}," Tax: ",-1)),st=o(()=>e("h6",{class:"text-h6"}," 21% ",-1)),ot=[st],lt={class:"w-100"},at=o(()=>e("td",{class:"pe-16 text-body-1"}," Total: ",-1)),nt=o(()=>e("h6",{class:"text-h6"}," $1690 ",-1)),dt=[nt],it=o(()=>e("h6",{class:"text-h6 mb-1"}," Note: ",-1)),ct={__name:"InvoiceEditable",props:{data:{type:null,required:!0}},emits:["push","remove"],setup(h,{emit:k}){const c=h,b=k,a=f(c.data.invoice),_=f(c.data.salesperson),m=f(c.data.thanksNote),y=f(c.data.note),x=f([]);(async()=>{const{data:d,error:n}=await X("/apps/invoice/clients");n.value?console.log(n.value):x.value=d.value})();const u=()=>{b("push",{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},A=d=>{b("remove",d)};return(d,n)=>{const N=E;return v(),O(Y,{class:"pa-sm-12 pa-6"},{default:l(()=>[e("div",_e,[e("div",null,[e("div",he,[t(s(K),{nodes:s(B).app.logo},null,8,["nodes"]),e("h1",fe,r(s(B).app.title),1)]),xe,be,ye]),e("div",ve,[e("div",Ve,[ge,e("span",null,[t(D,{modelValue:s(a).id,"onUpdate:modelValue":n[0]||(n[0]=i=>s(a).id=i),disabled:"",density:"compact",prefix:"#",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",De,[we,e("span",Ie,[t(N,{modelValue:s(a).issuedDate,"onUpdate:modelValue":n[1]||(n[1]=i=>s(a).issuedDate=i),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",Ce,[$e,e("span",ke,[t(N,{modelValue:s(a).dueDate,"onUpdate:modelValue":n[2]||(n[2]=i=>s(a).dueDate=i),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),t(U,null,{default:l(()=>[t(p,{class:"text-no-wrap"},{default:l(()=>[Ae,t(S,{modelValue:s(a).client,"onUpdate:modelValue":n[3]||(n[3]=i=>s(a).client=i),items:s(x),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-4",style:{"inline-size":"11.875rem"}},null,8,["modelValue","items"]),e("p",Ue,r(s(a).client.name),1),e("p",Ne,r(s(a).client.company),1),s(a).client.address?(v(),C("p",Te,r(s(a).client.address)+", "+r(s(a).client.country),1)):W("",!0),e("p",ze,r(s(a).client.contact),1),e("p",Be,r(s(a).client.companyEmail),1)]),_:1}),t(p,{class:"text-no-wrap"},{default:l(()=>[Se,e("table",Pe,[e("tbody",null,[e("tr",null,[Re,e("td",null,r(c.data.paymentDetails.totalDue),1)]),e("tr",null,[Ye,e("td",null,r(c.data.paymentDetails.bankName),1)]),e("tr",null,[je,e("td",null,r(c.data.paymentDetails.country),1)]),e("tr",null,[Ee,e("td",null,[e("p",Fe,r(c.data.paymentDetails.iban),1)])]),e("tr",null,[Me,e("td",null,r(c.data.paymentDetails.swiftCode),1)])])])]),_:1})]),_:1}),t(I,{class:"my-6 border-dashed"}),e("div",qe,[(v(!0),C(R,null,J(c.data.purchasedProducts,(i,j)=>(v(),C("div",{key:i.title,class:"mb-4"},[t(pe,{id:j,data:i,onRemoveProduct:A},null,8,["id","data"])]))),128)),t(L,{size:"small","prepend-icon":"ri-add-line",onClick:u},{default:l(()=>[V(" Add Item ")]),_:1})]),t(I,{class:"my-6 border-dashed"}),e("div",He,[e("div",Oe,[e("div",We,[Je,t(D,{modelValue:s(_),"onUpdate:modelValue":n[4]||(n[4]=i=>$(_)?_.value=i:null),style:{"inline-size":"8rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(D,{modelValue:s(m),"onUpdate:modelValue":n[5]||(n[5]=i=>$(m)?m.value=i:null),placeholder:"Thanks for your business"},null,8,["modelValue"])]),e("div",null,[e("table",Le,[e("tbody",null,[e("tr",null,[Qe,e("td",{class:g(d.$vuetify.locale.isRtl?"text-start":"text-end")},Ke,2)]),e("tr",null,[Xe,e("td",{class:g(d.$vuetify.locale.isRtl?"text-start":"text-end")},et,2)]),e("tr",null,[tt,e("td",{class:g(d.$vuetify.locale.isRtl?"text-start":"text-end")},ot,2)])])]),t(I,{class:"my-2"}),e("table",lt,[e("tbody",null,[e("tr",null,[at,e("td",{class:g(d.$vuetify.locale.isRtl?"text-start":"text-end")},dt,2)])])])])]),t(I,{class:"my-6 border-dashed"}),e("div",null,[it,t(P,{modelValue:s(y),"onUpdate:modelValue":n[6]||(n[6]=i=>$(y)?y.value=i:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])])]),_:1})}}},gt=Z(ct,[["__scopeId","data-v-37312bc1"]]);export{gt as I};
