import{V as T}from"./VTooltip-B61Kcv-O.js";import{o as u,f as O,e,b as t,am as s,b6 as l,b7 as c,q as M,t as i,d as a,r as L,m as B,aZ as x,a3 as y,c as f,F as k,h as C,v as D}from"./index-VU0dmoHZ.js";import{V as p,a as P}from"./VList-DhXfVcoA.js";import{V as r}from"./VMenu-DngO4Bzq.js";import{V as S,d as A}from"./VCard-DttbPEhw.js";import{V as $}from"./VDivider-BdZVMXth.js";import{V as j}from"./VCardText-uyCvIofY.js";import{_ as I}from"./AppCardCode-BH0JmQXj.js";import{V as F,a as _}from"./VRow-5iodEM2E.js";import"./VOverlay-BZO4hDjN.js";import"./easing-CjukEv2V.js";import"./lazy-CTD-MLkl.js";import"./scopeId-DwszM4ys.js";import"./VImg-BNqJuZG0.js";import"./forwardRefs-C-GTDzx5.js";import"./ssrBoot-Cx7lQdW-.js";import"./VAvatar-B0yljh3k.js";import"./dialog-transition-ClMl6VK0.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */const E=a("span",null,"I am a Tooltip",-1),R={__name:"DemoMenuActivatorAndTooltip",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(r,{location:"top"},{activator:e(({props:o})=>[t(T,{location:"top"},{activator:e(({props:v})=>[t(s,l(c(M(o,v))),{default:e(()=>[i(" Dropdown w/ Tooltip ")]),_:2},1040)]),default:e(()=>[E]),_:2},1024)]),default:e(()=>[t(p,{items:n})]),_:1}))}},G={__name:"DemoMenuPopover",setup(V){const n=L(!1);return(d,m)=>(u(),O(r,{modelValue:B(n),"onUpdate:modelValue":m[0]||(m[0]=o=>y(n)?n.value=o:null),location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Menu as Popover ")]),_:2},1040)]),default:e(()=>[t(S,{"max-width":"300"},{default:e(()=>[t(p,null,{default:e(()=>[t(P,{"prepend-avatar":B(x),title:"John Leider",subtitle:"Founder of Vuetify"},null,8,["prepend-avatar"])]),_:1}),t($),t(j,null,{default:e(()=>[i(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ")]),_:1}),t(A,null,{default:e(()=>[t(s,{icon:"ri-heart-line"}),t(s,{icon:"ri-bookmark-line"}),t(s,{icon:"ri-thumb-down-line"})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},H={__name:"DemoMenuOpenOnHover",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),O(r,{"open-on-hover":""},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" On hover ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}))}},J={class:"demo-space-x"},N={__name:"DemoMenuLocation",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",J,[t(r,{location:"top"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Top ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"bottom"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Bottom ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"start"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Start ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{location:"end"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" End ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1})]))}},X={class:"demo-space-x"},Y={__name:"DemoMenuCustomTransitions",setup(V){const n=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(d,m)=>(u(),f("div",X,[t(r,{transition:"scale-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Scale Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{transition:"slide-x-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Slide X Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1}),t(r,{transition:"slide-y-transition"},{activator:e(({props:o})=>[t(s,l(c(o)),{default:e(()=>[i(" Slide Y Transition ")]),_:2},1040)]),default:e(()=>[t(p,{items:n})]),_:1})]))}},U={class:"demo-space-x"},q={__name:"DemoMenuBasic",setup(V){const n=["primary","secondary","success","info","warning","error"],d=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(m,o)=>(u(),f("div",U,[(u(),f(k,null,C(n,v=>t(r,{key:v},{activator:e(({props:h})=>[t(s,M({color:v,ref_for:!0},h),{default:e(()=>[i(D(v),1)]),_:2},1040,["color"])]),default:e(()=>[t(p,{items:d})]),_:2},1024)),64))]))}},z={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},W={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},tt={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="ri-heart-line" />
        <VBtn icon="ri-bookmark-line" />
        <VBtn icon="ri-thumb-down-line" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <VBtn icon="ri-heart-line" />
        <VBtn icon="ri-bookmark-line" />
        <VBtn icon="ri-thumb-down-line" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},et=a("p",null," Remember to put the element that activates the menu in the activator slot. ",-1),ot=a("p",null,[i("Vuetify comes with 3 standard transitions, "),a("code",null,"scale"),i(", "),a("code",null,"slide-x"),i(" and "),a("code",null,"slide-y"),i(". Use "),a("code",null,"transition"),i(" prop to add transition to a menu.")],-1),it=a("p",null,[i("Menu can be offset relative to the activator by using the "),a("code",null,"location"),i(" prop.")],-1),nt=a("p",null,[i("Menus can be accessed using hover instead of clicking with the "),a("code",null,"open-on-hover"),i(" prop.")],-1),at=a("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1),st=a("p",null,[i("With the new "),a("code",null,"v-slot"),i(" syntax, nested activators such as those seen with a "),a("code",null,"v-menu"),i(" and "),a("code",null,"v-tooltip"),i(" attached to the same activator button, need a particular setup in order to function correctly")],-1),xt={__name:"menu",setup(V){return(n,d)=>{const m=q,o=I,v=Y,h=N,b=H,w=G,g=R;return u(),O(F,{class:"match-height"},{default:e(()=>[t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Basic",code:W},{default:e(()=>[et,t(m)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Custom transitions",code:Z},{default:e(()=>[ot,t(v)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Location",code:K},{default:e(()=>[it,t(h)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Open on hover",code:Q},{default:e(()=>[nt,t(b)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Popover",code:tt},{default:e(()=>[at,t(w)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:e(()=>[t(o,{title:"Activator and tooltip",code:z},{default:e(()=>[st,t(g)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{xt as default};
