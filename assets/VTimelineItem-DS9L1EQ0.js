import{a5 as v,a6 as m,bO as _,bv as k,bw as z,bx as y,bE as I,bX as P,aw as R,ax as B,$ as r,a9 as g,ad as f,b as t,ab as u,bs as D,bu as h,cl as T,bQ as V,cm as $,by as S,bz as w,bZ as N,a2 as j,bG as x,bP as E,bY as O,a8 as L,r as q,w as F}from"./index-VU0dmoHZ.js";const G=v({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...m(),..._(),...k(),...z()},"VTimeline"),Z=y()({name:"VTimeline",props:G(),setup(e,d){let{slots:i}=d;const{themeClasses:c}=I(e),{densityClasses:a}=P(e),{rtlClasses:o}=R();B({VTimelineDivider:{lineColor:r(e,"lineColor")},VTimelineItem:{density:r(e,"density"),lineInset:r(e,"lineInset")}});const n=g(()=>{const s=e.side?e.side:e.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),l=g(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return f(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,l.value,{"v-timeline--inset-line":!!e.lineInset},c.value,a.value,n.value,o.value,e.class],style:[{"--v-timeline-line-thickness":u(e.lineThickness)},e.style]},i)),{}}}),Q=v({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:D,iconColor:String,lineColor:String,...m(),...h(),...T(),...V()},"VTimelineDivider"),U=y()({name:"VTimelineDivider",props:Q(),setup(e,d){let{slots:i}=d;const{sizeClasses:c,sizeStyles:a}=$(e,"v-timeline-divider__dot"),{backgroundColorStyles:o,backgroundColorClasses:n}=S(r(e,"dotColor")),{roundedClasses:l}=w(e,"v-timeline-divider__dot"),{elevationClasses:s}=N(e),{backgroundColorClasses:C,backgroundColorStyles:b}=S(r(e,"lineColor"));return f(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",C.value],style:b.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",s.value,l.value,c.value],style:a.value},[t("div",{class:["v-timeline-divider__inner-dot",n.value,l.value],style:o.value},[i.default?t(x,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(j,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",C.value],style:b.value},null)])),{}}}),X=v({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:D,iconColor:String,lineInset:[Number,String],...m(),...E(),...V(),...h(),...T(),...k()},"VTimelineItem"),A=y()({name:"VTimelineItem",props:X(),setup(e,d){let{slots:i}=d;const{dimensionStyles:c}=O(e),a=L(0),o=q();return F(o,n=>{var l;n&&(a.value=((l=n.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),f(()=>{var n,l;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":u(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${u(e.lineInset)})`:u(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:c.value},[(n=i.default)==null?void 0:n.call(i)]),t(U,{ref:o,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((l=i.opposite)==null?void 0:l.call(i))])])}),{}}});export{Z as V,A as a};
