import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as g,b as e,aN as l,r as v,m as _,a3 as h,e as r,d as o,v as P,f as L,G as k,b2 as B,w as $,t as s}from"./index-VU0dmoHZ.js";import{_ as M}from"./AppCardCode-BH0JmQXj.js";import{V as x,a as p}from"./VRow-5iodEM2E.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCard-DttbPEhw.js";import"./VAvatar-B0yljh3k.js";import"./VImg-BNqJuZG0.js";import"./VCardText-uyCvIofY.js";import"./VDivider-BdZVMXth.js";/* empty css              */const I={},D={class:"demo-space-y"};function U(m,t){return i(),g("div",D,[e(l,{"model-value":"75",striped:""}),e(l,{color:"success","model-value":"55",striped:""}),e(l,{color:"warning","model-value":"35",striped:""})])}const j=f(I,[["render",U]]),R={class:"demo-space-y"},T={__name:"DemoProgressLinearSlots",setup(m){const t=v(20),d=v(33),u=v(78);return(n,c)=>(i(),g("div",R,[e(l,{modelValue:_(u),"onUpdate:modelValue":c[0]||(c[0]=a=>h(u)?u.value=a:null),height:"8"},null,8,["modelValue"]),e(l,{modelValue:_(t),"onUpdate:modelValue":c[1]||(c[1]=a=>h(t)?t.value=a:null),height:"20"},{default:r(({value:a})=>[o("span",null,P(Math.ceil(a))+"%",1)]),_:1},8,["modelValue"]),e(l,{modelValue:_(d),"onUpdate:modelValue":c[2]||(c[2]=a=>h(d)?d.value=a:null),height:"20"},{default:r(()=>[o("span",null,P(Math.ceil(_(d)))+"%",1)]),_:1},8,["modelValue"])]))}},C={},S={class:"demo-space-y"};function N(m,t){return i(),g("div",S,[e(l,{"model-value":"78",height:"8",rounded:""}),e(l,{"model-value":"20",height:"20",rounded:""}),e(l,{"model-value":"33",height:"20",rounded:""})])}const A=f(C,[["render",N]]),E={};function G(m,t){return i(),L(l,{indeterminate:"",reverse:""})}const Y=f(E,[["render",G]]),q={};function z(m,t){return i(),L(l,{indeterminate:""})}const F=f(q,[["render",z]]),H={class:"demo-space-y"},J={__name:"DemoProgressLinearBuffering",setup(m){const t=v(10),d=v(20),u=v(),n=()=>{clearInterval(u.value),u.value=setInterval(()=>{t.value+=Math.random()*10+5,d.value+=Math.random()*10+6},2e3)};return k(n),B(()=>{clearInterval(u.value)}),$(t,()=>{if(t.value<100)return!1;t.value=0,d.value=10,n()}),(c,a)=>(i(),g("div",H,[e(l,{modelValue:_(t),"onUpdate:modelValue":a[0]||(a[0]=V=>h(t)?t.value=V:null),height:"8","buffer-value":_(d)},null,8,["modelValue","buffer-value"])]))}},K={},O={class:"demo-space-y"};function Q(m,t){return i(),g("div",O,[e(l,{"model-value":"15"}),e(l,{"model-value":"30",color:"secondary"}),e(l,{"model-value":"45",color:"success"})])}const W=f(K,[["render",Q]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear model-value="15" />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear model-value="15" />

    <VProgressLinear
      model-value="30"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear indeterminate />
</template>
`,js:`<template>
  <VProgressLinear indeterminate />
</template>
`},oe={ts:`<template>
  <VProgressLinear
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    reverse
  />
</template>
`},te={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      rounded
    />

    <VProgressLinear
      model-value="20"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      rounded
    />

    <VProgressLinear
      model-value="20"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      rounded
    />
  </div>
</template>
`},re={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      height="20"
    >
      <template #default="{ value }">
        <span>{{ Math.ceil(value) }}%</span>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
    >
      <span>{{ Math.ceil(knowledge) }}%</span>
    </VProgressLinear>
  </div>
</template>
`},se={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="75"
      striped
    />

    <VProgressLinear
      color="success"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="warning"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="75"
      striped
    />

    <VProgressLinear
      color="success"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="warning"
      model-value="35"
      striped
    />
  </div>
</template>
`},le=o("p",null,[s("Use the props "),o("code",null,"color"),s(" and "),o("code",null,"background-color"),s(" to set colors.")],-1),ae=o("p",null,[s("The primary value is controlled by "),o("code",null,"v-model"),s(", whereas the buffer is controlled by the "),o("code",null,"buffer-value"),s(" prop.")],-1),ne=o("p",null,[s("for continuously animating progress bar,use prop "),o("code",null,"indeterminate"),s(". This indicates continuous process. ")],-1),de=o("p",null,[s("Use prop "),o("code",null,"reverse"),s(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ue=o("p",null,[s("The "),o("code",null," rounded "),s(" prop is used to apply a border radius to the v-progress-linear component.")],-1),ce=o("p",null,[s("we can bind user input using "),o("code",null,"v-model"),s(".You can also use the default slot for the same.")],-1),ie=o("p",null,[s(" The "),o("code",null,"striped"),s(" prop is used to apply striped background.")],-1),be={__name:"progress-linear",setup(m){return(t,d)=>{const u=W,n=M,c=J,a=F,V=Y,y=A,b=T,w=j;return i(),L(x,{class:"match-height"},{default:r(()=>[e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Color",code:Z},{default:r(()=>[le,e(u)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Buffering",code:X},{default:r(()=>[ae,e(c)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Indeterminate",code:ee},{default:r(()=>[ne,e(a)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Reversed",code:oe},{default:r(()=>[de,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Rounded",code:te},{default:r(()=>[ue,e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Slots",code:re},{default:r(()=>[ce,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:r(()=>[e(n,{title:"Striped",code:se},{default:r(()=>[ie,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{be as default};
