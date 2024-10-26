import{V as X}from"./VNodeRenderer-BelNBPWP.js";import{a as M,o as u,c as f,b as t,e as o,d as e,m as i,H as z,v as x,am as N,t as b,F as V,h as C,f as L,y as G,a2 as I,Q as ee,R as te,a5 as Q,r as H,a8 as T,a9 as k,aa as ae,w as R,G as oe,b2 as se,c9 as ne,bx as W,av as le,cc as ie,ce as re,$ as Y,ad as q,q as D,cD as ce,d2 as de,bb as ue,i as me,j as pe,eX as ve,x as A,a3 as ge,I as he}from"./index-VU0dmoHZ.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as j}from"./VContainer-BEAw-R1m.js";import{V as fe,a as F}from"./VRow-5iodEM2E.js";import{V as be}from"./VForm-Dkf4DVK-.js";import{V as ye}from"./VTextField-CRe8TF0Y.js";import{V as Ae}from"./VChip-ClWrs_JY.js";import{V as _e}from"./VImg-BNqJuZG0.js";import{V as we}from"./VSheet-vF1htD-c.js";import{P as xe}from"./vue3-perfect-scrollbar.esm-CKkShybS.js";import ke from"./NavbarThemeSwitcher-E0o0vS1Q.js";import{V as K}from"./VAvatar-B0yljh3k.js";import{V as Ve}from"./VNavigationDrawer-Dm7lBkUR.js";import{m as Ce,V as $,b as Se,a as Be}from"./VToolbar-Dh8m8ph3.js";import{V as Pe}from"./VMenu-DngO4Bzq.js";import{V as Ie}from"./VCard-DttbPEhw.js";import{V as Te}from"./VCardText-uyCvIofY.js";import{V as Ee}from"./VSpacer-DIW3Gp5e.js";import{u as Re}from"./ssrBoot-Cx7lQdW-.js";const Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAYAAACHIWrsAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4Ab2X3XHaQBDHd0+yH/xECWiCPUP4sNUBqSB0YKiAUEFMB3YFhgriVGB1ADEmnkmckdKBHoAHI269J4EtiS+PzPk3wwjt7Omv29vdOyHsCdd1c9PprD5H4Vc/F242+QnYA8PRv+/jiXQliWsh8es2XxPegZrVZCJviehsaSOS/0GX4Hgy/8GXs5TZAR2Cd6PHBhDU4jYE9MqVgrNtXOY1RMJW2jYzxJdd4zIJPjy4eV6tRChJQtMuWt6usZkEgyDIx26dAA27Wi103zJ26xr2+27+8HCWOzo68CzL8l8FzQHbm09PB45tR7NSvqYZvYgQ5JdKJ4N1z8S0QaX6eCpbnBDfOFC5V0f0CKFrCtErLkIX862nQ8wjfAS6MQyjU4yFOiE4/O22QMqLuNAGHETMxetvC74E6pyWjy8TgiPuFpLoAjSBYDTKZasXJo3KOp1iKrxEQdiBwqSZz+UtaAP9wBC2XfzkqTsxHP6tEVAeNEFI7Xh9ckixDvpwqqVkfQpezVPQBJdRL20TBPiW1M6EAXKl+AXurrnMcCfyVwRBI6otpm0qpD5oQ6wsF4cUPNCEJDhfESQ5/wX6qKk6TwoKYwAaQRTX0Ya9EJQz0QWNqC6mWudSNNwthvePqpfWQDO8TbVF9Ad/wgeAAr1IkMOqtzyiE4P6BAgF+VziI8kr0IhE6qjrS6fhg9GlegvQQDi7xa7xIqhmyd8FTdBA/ICc6KWVyrHDCdSGPcJHl4696dS25O7+TxdBnMM7IZC9avmkEbet3S1CJ4J1SRRGIJgZVvjjEzdvss0Na3+VFlOsneGSPncHMwgakr9quekOVMg3+aqeyX7h7rDN9xl8jxag23mS+gAAAABJRU5ErkJggg==",Ne="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAACs0lEQVR4Ae2XTWgTQRiG30nENMVDoidPXfHWgyhIFRTNQcWCPz0L6nrxVmwOJhUUGy+CpDSiQqXSFCwoIjQKYiW25iJpRUkoHlq0JuBFQ2RjqU2qzY4zTdPmZ7fJZrPppQ8kbGa+bB6+d78lC2xSDdLVvZBcHWggpGxF6hYAGmFHNvaKAyYn7LcDMBhT2Upml7giwREAeQSS258TbKRI8jLw6wKwZC9cFZe7JLluomEinHRrTqhYhnWJ9LDuxCBdq/v1Y1Ld4RI/3MD84dIdwYi4TBUrUqfY67TSjljPuCqLcOYP5bpTHBWnIK5uETqoToTDJfh1k2lV2hVYd/x64qpeZFWGTdTcMbUKkQnFaolLm0geLlI+4gVoj6s2EY7yiBciaImrdhGO+oiv2fybE2Pf+mN0wtRHw1zOCJE8KiN+RfqESHyIyfxmn2gXCHlHw2YRholwCkbcJi+iLzEOX2KMHWcKqwQQ2c864zBOhMMkWqbPYuzVOLqkj+sUmhylK1tQR85EwhgY9MK2sBPZ9gWY22eVC81ywDAR75N+dL5dO3/29W7Qr9thPvcZZEc6vxwHoU7Shmjp93VH05L8ieAdV5FEHvmLHUv39rMxb06BUg8sdB85AMU/Wbo6cnR6Cs8eeFgUf9SLpOYheI87SSiQWu9cNYvceDGM6y+HVfcJIaEsgcc6MRpCFWgW4VE8GuzFkZkptZIUZQKWyVEfNKBJhEcx4O9dllGCCdy1WK09lWLQJdIZHIH36UPFPa0x1CTCL0R+b+D3CAVqikGzyJ7vs3h+/5ZiFHpi0CSiFgWP4a+cdW77EIyijpSJCMkEG8vHOP8+WGLA7oqUOrdOvjHkqa9MZMZ9kb3TojUZxNNkbfLVK4aqRNjPRvOPxCvTcIlNQxwbwWLbiY70wZMObLKB/AdzLxv9z4WKCgAAAABJRU5ErkJggg==",E=a=>(ee("data-v-9f9d7efd"),a=a(),te(),a),Ue={class:"footer"},Fe={class:"footer-form"},ze={class:"d-flex gap-2 py-1 mb-6"},He={class:"footer-title"},Me=E(()=>e("div",{class:"text-body-1 footer-text mb-6"},[b(" Most Powerful & Comprehensive "),e("span",{class:"text-high-emphasis"},"🤩"),b(" Vuejs Admin Template with Elegant Material Design & Unique Layouts. ")],-1)),Qe={class:"footer-links"},We=E(()=>e("div",{class:"footer-heading mb-6"}," Pages ",-1)),qe={style:{"list-style":"none"}},De={class:"d-flex align-center"},Oe={class:"footer-links"},Je=E(()=>e("div",{class:"footer-heading mb-6"}," Products ",-1)),Ye=E(()=>e("div",{class:"footer-heading mb-6"}," Download our app ",-1)),je={class:"d-flex gap-x-6 footer-logo-buttons align-center"},Ke={class:"d-flex flex-column align-start"},$e=E(()=>e("div",{class:"text-body-2 footer-text"}," Download on the ",-1)),Xe={class:"text-body-1 font-weight-medium footer-heading"},Ze={class:"footer-line w-100"},Ge={class:"d-flex justify-space-between flex-wrap gap-y-4"},et={class:"d-flex align-center text-body-2 footer-heading font-weight-regular"},tt=E(()=>e("a",{href:"https://pixinvent.com/",target:"_blank",rel:"noopener noreferrer",class:"ms-1 footer-heading font-weight-regular",style:{color:"rgba(255, 255, 255, var(--v-high-emphasis-opacity))"}},"Pixinvent",-1)),at={class:"d-flex gap-x-1"},ot={__name:"front-page-footer",setup(a){const y=[{name:"Pricing",to:{name:"front-pages-pricing"}},{name:"Payment",to:{name:"front-pages-payment"},isNew:!0},{name:"Maintenance",to:{name:"pages-misc-under-maintenance"}},{name:"Comming Soon",to:{name:"pages-misc-coming-soon"}}];return(h,S)=>{const m=M("RouterLink"),l=M("IconBtn");return u(),f("div",Ue,[t(we,{class:"footer-top pt-8 pb-4",theme:"dark"},{default:o(()=>[t(j,null,{default:o(()=>[t(fe,null,{default:o(()=>[t(F,{cols:"12",md:"5"},{default:o(()=>[e("div",Fe,[e("div",ze,[t(i(X),{nodes:i(z).app.logo},null,8,["nodes"]),e("h1",He,x(i(z).app.title),1)]),Me,t(be,{class:"subscribe-form d-flex align-center gap-4"},{default:o(()=>[t(ye,{label:"Subscribe to newsletter",placeholder:"john@email.com",theme:"dark",density:"compact",class:"footer-text"}),t(N,{size:"large"},{default:o(()=>[b(" Subscribe ")]),_:1})]),_:1})])]),_:1}),t(F,{md:"2",sm:"4",xs:"6"},{default:o(()=>[e("div",Qe,[We,e("ul",qe,[(u(),f(V,null,C(y,(s,r)=>e("li",{key:r,class:"mb-4"},[t(m,{class:"text-body-1 footer-text text-no-wrap",to:s.to},{default:o(()=>[e("div",De,[e("div",null,x(s.name),1),s.isNew?(u(),L(Ae,{key:0,color:"primary",variant:"elevated",size:"small",class:"ms-2"},{default:o(()=>[b(" New ")]),_:1})):G("",!0)])]),_:2},1032,["to"])])),64))])])]),_:1}),t(F,{md:"2",sm:"4",xs:"6"},{default:o(()=>[e("div",Oe,[Je,e("ul",null,[(u(),f(V,null,C(["Page Builder","Admin Dashboards","UI Kits","Illustrations"],(s,r)=>e("li",{key:r,class:"mb-4 text-body-1",style:{"list-style":"none"}},[t(m,{to:"",class:"footer-text text-no-wrap"},{default:o(()=>[b(x(s),1)]),_:2},1024)])),64))])])]),_:1}),t(F,{cols:"12",md:"3",sm:"4"},{default:o(()=>[e("div",null,[Ye,e("div",null,[(u(!0),f(V,null,C([{image:i(Le),store:"App Store"},{image:i(Ne),store:"Google Play"}],(s,r)=>(u(),L(N,{key:r,color:"#211B2C",height:"56",size:"large",class:"mb-4 d-block"},{default:o(()=>[e("div",je,[e("div",null,[t(_e,{src:s.image,height:"34",width:"34"},null,8,["src"])]),e("div",Ke,[$e,e("div",Xe,x(s.store),1)])])]),_:2},1024))),128))])])]),_:1})]),_:1})]),_:1})]),_:1}),e("div",Ze,[t(j,null,{default:o(()=>[e("div",Ge,[e("span",et,[b(" © "+x(new Date().getFullYear())+", Made with ",1),e("span",null,[t(I,{icon:"ri-heart-fill",color:"#FF4D49"})]),b(" by "),tt]),e("div",at,[(u(!0),f(V,null,C([{title:"github",icon:"bxl-github",href:"https://github.com/pixinvent"},{title:"facebook",icon:"bxl-facebook",href:"https://www.facebook.com/pixinvents/"},{title:"twitter",icon:"bxl-twitter",href:"https://twitter.com/pixinvents"},{title:"instagram",icon:"bxl-linkedin",href:"https://www.linkedin.com/company/pixinvent"}],(s,r)=>(u(),L(l,{key:r,href:s.href,size:"x-small",target:"_blank",color:"#fff",rel:"noopener noreferrer"},{default:o(()=>[t(I,{icon:s.icon,size:"16",color:"white"},null,8,["icon"])]),_:2},1032,["href"]))),128))])])]),_:1})])])}}},Jt=Z(ot,[["__scopeId","data-v-9f9d7efd"]]),st="https://github.com/ayfaizal/js/assets/nav-img-9d0QBmkf.png",nt=Q({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function lt(a){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:h}=y;let S=0;const m=H(null),l=T(0),s=T(0),r=T(0),B=T(!1),P=T(!1),_=k(()=>Number(a.scrollThreshold)),v=k(()=>ae((_.value-l.value)/_.value||0)),d=()=>{const c=m.value;!c||h&&!h.value||(S=l.value,l.value="window"in c?c.pageYOffset:c.scrollTop,P.value=l.value<S,r.value=Math.abs(l.value-_.value))};return R(P,()=>{s.value=s.value||l.value}),R(B,()=>{s.value=0}),oe(()=>{R(()=>a.scrollTarget,c=>{var w;const n=c?document.querySelector(c):window;n&&n!==m.value&&((w=m.value)==null||w.removeEventListener("scroll",d),m.value=n,m.value.addEventListener("scroll",d,{passive:!0}))},{immediate:!0})}),se(()=>{var c;(c=m.value)==null||c.removeEventListener("scroll",d)}),h&&R(h,d,{immediate:!0}),{scrollThreshold:_,currentScroll:l,currentThreshold:r,isScrollActive:B,scrollRatio:v,isScrollingUp:P,savedScroll:s}}const it=Q({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:a=>["top","bottom"].includes(a)},...Ce(),...ne(),...nt(),height:{type:[Number,String],default:64}},"VAppBar"),rt=W()({name:"VAppBar",props:it(),emits:{"update:modelValue":a=>!0},setup(a,y){let{slots:h}=y;const S=H(),m=le(a,"modelValue"),l=k(()=>{var U;const g=new Set(((U=a.scrollBehavior)==null?void 0:U.split(" "))??[]);return{hide:g.has("hide"),inverted:g.has("inverted"),collapse:g.has("collapse"),elevate:g.has("elevate"),fadeImage:g.has("fade-image")}}),s=k(()=>{const g=l.value;return g.hide||g.inverted||g.collapse||g.elevate||g.fadeImage||!m.value}),{currentScroll:r,scrollThreshold:B,isScrollingUp:P,scrollRatio:_}=lt(a,{canScroll:s}),v=k(()=>a.collapse||l.value.collapse&&(l.value.inverted?_.value>0:_.value===0)),d=k(()=>a.flat||l.value.elevate&&(l.value.inverted?r.value>0:r.value===0)),c=k(()=>l.value.fadeImage?l.value.inverted?1-_.value:_.value:void 0),n=k(()=>{var O,J;if(l.value.hide&&l.value.inverted)return 0;const g=((O=S.value)==null?void 0:O.contentHeight)??0,U=((J=S.value)==null?void 0:J.extensionHeight)??0;return g+U});ie(k(()=>!!a.scrollBehavior),()=>{ce(()=>{l.value.hide?l.value.inverted?m.value=r.value>B.value:m.value=P.value||r.value<B.value:m.value=!0})});const{ssrBootStyles:w}=Re(),{layoutItemStyles:p}=re({id:a.name,order:k(()=>parseInt(a.order,10)),position:Y(a,"location"),layoutSize:n,elementSize:T(void 0),active:m,absolute:Y(a,"absolute")});return q(()=>{const g=$.filterProps(a);return t($,D({ref:S,class:["v-app-bar",{"v-app-bar--bottom":a.location==="bottom"},a.class],style:[{...p.value,"--v-toolbar-image-opacity":c.value,height:void 0,...w.value},a.style]},g,{collapse:v.value,flat:d.value}),h)}),{}}}),ct=Q({...de({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),dt=W()({name:"VAppBarNavIcon",props:ct(),setup(a,y){let{slots:h}=y;return q(()=>t(N,D(a,{class:["v-app-bar-nav-icon"]}),h)),{}}}),ut=W()({name:"VAppBarTitle",props:Se(),setup(a,y){let{slots:h}=y;return q(()=>t(Be,D(a,{class:"v-app-bar-title"}),h)),{}}}),mt={class:"d-flex flex-column gap-y-4 pa-4"},pt={class:"d-flex align-center gap-x-3 mb-4"},vt={class:"text-body-1 text-high-emphasis font-weight-medium"},gt={class:"mb-6"},ht={class:"front-page-navbar"},ft={class:"d-flex align-center"},bt={class:"d-flex gap-x-3 align-center"},yt={class:"nav-menu"},At={class:"d-flex align-center gap-x-3 mb-6"},_t={class:"text-body-1 text-high-emphasis font-weight-medium"},wt={class:"d-flex align-center"},xt=["src","width","height"],kt={class:"d-flex gap-x-4 align-center"},Vt={__name:"front-page-navbar",props:{activeId:{type:String,required:!1},navbarInitialOpacity:{type:Number,required:!1,default:.64}},setup(a){const y=a,h=ue(),S=me(),m=pe(),{y:l}=ve(),s=H(!1);R(()=>h,()=>h.mdAndUp?s.value=!1:s.value,{deep:!0});const r=H(!1),B=[{listTitle:"Page",listIcon:"ri-layout-grid-line",navItems:[{name:"Pricing",to:{name:"front-pages-pricing"}},{name:"Payment",to:{name:"front-pages-payment"}},{name:"Checkout",to:{name:"front-pages-checkout"}},{name:"Help Center",to:{name:"front-pages-help-center"}}]},{listTitle:"Auth Demo",listIcon:"ri-lock-unlock-line",navItems:[{name:"Login (Basic)",to:{name:"pages-authentication-login-v1"}},{name:"Login (Cover)",to:{name:"pages-authentication-login-v2"}},{name:"Register (Basic)",to:{name:"pages-authentication-register-v1"}},{name:"Register (Cover)",to:{name:"pages-authentication-register-v2"}},{name:"Register (Multi-steps)",to:{name:"pages-authentication-register-multi-steps"}},{name:"Forgot Password (Basic)",to:{name:"pages-authentication-forgot-password-v1"}},{name:"Forgot Password (Cover)",to:{name:"pages-authentication-forgot-password-v2"}},{name:"Reset Password (Basic)",to:{name:"pages-authentication-reset-password-v1"}},{name:"Reset Password (cover  )",to:{name:"pages-authentication-reset-password-v2"}}]},{listTitle:"Other",listIcon:"ri-image-line",navItems:[{name:"Under Maintenance",to:{name:"pages-misc-under-maintenance"}},{name:"Coming Soon",to:{name:"pages-misc-coming-soon"}},{name:"Not Authorized",to:{path:"/not-authorized"}},{name:"Verify Email (Basic)",to:{name:"pages-authentication-verify-email-v1"}},{name:"Verify Email (Cover)",to:{name:"pages-authentication-verify-email-v2"}},{name:"Two Steps (Basic)",to:{name:"pages-authentication-two-steps-v1"}},{name:"Two Steps (Cover)",to:{name:"pages-authentication-two-steps-v2"}}]}],P=v=>S.matched.some(d=>d.path.startsWith(m.resolve(v).path)),_=k(()=>B.some(v=>v.navItems.some(d=>P(d.to))));return(v,d)=>{const c=M("RouterLink");return u(),f(V,null,[t(Ve,{modelValue:i(s),"onUpdate:modelValue":d[2]||(d[2]=n=>ge(s)?s.value=n:null),"disable-resize-watcher":""},{default:o(()=>[t(i(xe),{options:{wheelPropagation:!1},class:"h-100"},{default:o(()=>[e("div",null,[e("div",mt,[(u(),f(V,null,C(["Home","Features","Team","FAQ","Contact us"],(n,w)=>{var p;return t(c,{key:w,to:{name:"front-pages-landing-page",hash:`#${n.toLowerCase().replace(" ","-")}`},class:A(["font-weight-medium",[((p=y.activeId)==null?void 0:p.toLocaleLowerCase().replace("-"," "))===n.toLocaleLowerCase()?"active-link":"text-high-emphasis"]])},{default:o(()=>[b(x(n),1)]),_:2},1032,["to","class"])}),64)),e("div",{class:A(["text-high-emphasis font-weight-medium cursor-pointer",i(_)?"active-link":"text-high-emphasis"])},[e("div",{class:A(i(r)?"mb-6":""),onClick:d[0]||(d[0]=n=>r.value=!i(r))},[b(" Pages "),t(I,{icon:i(r)?"ri-arrow-up-s-line":"ri-arrow-down-s-line"},null,8,["icon"])],2),(u(),f(V,null,C(B,(n,w)=>e("div",{key:w,class:A(i(r)?"d-block":"d-none")},[e("div",pt,[t(K,{variant:"tonal",color:"primary",rounded:"",icon:n.listIcon},null,8,["icon"]),e("div",vt,x(n.listTitle),1)]),e("ul",gt,[(u(!0),f(V,null,C(n.navItems,p=>(u(),f("li",{key:p.name,style:{"list-style":"none"},class:"text-body-1 mb-4"},[t(c,{to:p.to,target:n.listTitle==="Page"?"_self":"_blank",class:A(["mega-menu-item",P(p.to)?"active-link":""])},{default:o(()=>[t(I,{icon:"ri-circle-line",size:10,class:"me-2"}),e("span",null,x(p.name),1)]),_:2},1032,["to","target","class"])]))),128))])],2)),64))],2),t(c,{to:"/",target:"_blank",class:"text-body-1 font-weight-medium nav-link px-0"},{default:o(()=>[b(" Admin ")]),_:1})])]),t(I,{id:"navigation-drawer-close-btn",icon:"ri-close-line",size:"20",onClick:d[1]||(d[1]=n=>s.value=!i(s))})]),_:1})]),_:1},8,["modelValue"]),e("div",ht,[t(rt,{class:A([i(l)>20?"front-page-navbar-box-shadow":"","rounded-b-xl"]),border:i(l)<20?"1px solid rgba(var(--v-theme-surface), 0.78)":"none",elevation:"0",style:he(i(l)>20?"":`background-color: rgba(var(--v-theme-surface),${y.navbarInitialOpacity})`),height:"62"},{default:o(()=>[t(dt,{class:A([v.$vuetify.display.mdAndUp?"d-none":"d-inline-block","ms-0 me-1"]),color:"high-emphasis",onClick:d[3]||(d[3]=()=>s.value=!i(s))},null,8,["class"]),e("div",ft,[t(ut,{class:"me-3 me-sm-6"},{default:o(()=>[t(c,{to:"/",class:A(["d-flex gap-x-4",v.$vuetify.display.mdAndUp?"d-none":"d-block"])},{default:o(()=>[e("div",bt,[t(i(X),{nodes:i(z).app.logo},null,8,["nodes"]),e("div",{class:A(["nav-title text-truncate",[v.$vuetify.display.lgAndUp?"d-block":"d-none",v.$vuetify.display.mdAndUp?"d-none":"d-block"]])},x(i(z).app.title),3)])]),_:1},8,["class"])]),_:1}),e("div",{class:A([v.$vuetify.display.mdAndUp?"d-flex":"d-none","text-base align-center gap-x-2"])},[(u(),f(V,null,C(["Home","Features","Team","FAQ","Contact us"],(n,w)=>{var p;return t(c,{key:w,to:{name:"front-pages-landing-page",hash:`#${n.toLowerCase().replace(" ","-")}`},class:A(["nav-link font-weight-medium",[((p=y.activeId)==null?void 0:p.toLocaleLowerCase().replace("-"," "))===n.toLocaleLowerCase()?"active-link":""]])},{default:o(()=>[b(x(n),1)]),_:2},1032,["to","class"])}),64)),e("span",{class:A(["font-weight-medium cursor-pointer nav-link",i(_)?"active-link":"text-high-emphasis"])},[b(" Pages "),t(I,{icon:"ri-arrow-down-s-line",size:"20",class:"ms-2"}),t(Pe,{"open-on-hover":"",activator:"parent",transition:"slide-y-transition",location:"bottom center",offset:"16","content-class":"mega-menu","location-strategy":"static","close-on-content-click":""},{default:o(()=>[t(Ie,{"max-width":"1000"},{default:o(()=>[t(Te,{class:"pa-8"},{default:o(()=>[e("div",yt,[(u(),f(V,null,C(B,(n,w)=>e("div",{key:w},[e("div",At,[t(K,{variant:"tonal",color:"primary",rounded:"",icon:n.listIcon},null,8,["icon"]),e("div",_t,x(n.listTitle),1)]),e("ul",null,[(u(!0),f(V,null,C(n.navItems,p=>(u(),f("li",{key:p.name,style:{"list-style":"none"},class:"text-body-1 mb-4 text-no-wrap"},[t(c,{class:A(["mega-menu-item",P(p.to)?"active-link":""]),to:p.to,target:n.listTitle==="Page"?"_self":"_blank"},{default:o(()=>[e("div",wt,[t(I,{icon:"ri-circle-line",size:10,class:"me-2"}),e("span",null,x(p.name),1)])]),_:2},1032,["to","target","class"])]))),128))])])),64)),e("img",{src:i(st),alt:"Navigation Image",class:"d-inline-block rounded-lg",style:{border:"10px solid rgb(var(--v-theme-background))"},width:v.$vuetify.display.lgAndUp?"330":"250",height:v.$vuetify.display.lgAndUp?"330":"250"},null,8,xt)])]),_:1})]),_:1})]),_:1})],2),t(c,{to:"/",target:"_blank",class:"nav-link font-weight-medium"},{default:o(()=>[b(" Admin ")]),_:1})],2)]),t(Ee),e("div",kt,[t(ke,{class:"me-0 me-sm-2"}),v.$vuetify.display.lgAndUp?(u(),L(N,{key:0,"prepend-icon":"ri-shopping-cart-line",variant:"elevated",color:"primary",href:"https://1.envato.market/materialize_admin",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[b(" Purchase Now ")]),_:1})):(u(),L(N,{key:1,icon:"",rounded:"",variant:"elevated",color:"primary",href:"https://1.envato.market/materialize_admin",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[t(I,{icon:"ri-shopping-cart-line"})]),_:1}))])]),_:1},8,["class","border","style"])])],64)}}},Yt=Z(Vt,[["__scopeId","data-v-991c9d6c"]]);export{Jt as F,Yt as N};
