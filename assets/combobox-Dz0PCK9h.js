import{V as p}from"./VCombobox-DwhKMZuN.js";import{r as u,o as V,f as b,m as r,a3 as d,w as x,aM as I,e as m,b as l,t as a,d as i,v as C}from"./index-VU0dmoHZ.js";import{a as P,b as D}from"./VList-DhXfVcoA.js";import{a as n,V as h}from"./VRow-5iodEM2E.js";import{V as w}from"./VChip-ClWrs_JY.js";import{V as U}from"./VAvatar-B0yljh3k.js";import{_ as L}from"./AppCardCode-BH0JmQXj.js";import"./VSelect-CxzQIejo.js";import"./VTextField-CRe8TF0Y.js";/* empty css                   */import"./VCounter-BnJ4X-op.js";import"./VImg-BNqJuZG0.js";import"./VField-TfdV7Sv1.js";import"./form-D37_K2HO.js";import"./easing-CjukEv2V.js";import"./VInput-DUnqEF-j.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-ClMl6VK0.js";import"./VMenu-DngO4Bzq.js";import"./VOverlay-BZO4hDjN.js";import"./lazy-CTD-MLkl.js";import"./scopeId-DwszM4ys.js";import"./VCheckboxBtn-DGugApLE.js";import"./VSelectionControl-Dht4FwVx.js";import"./filter-J5RtAc8v.js";import"./ssrBoot-Cx7lQdW-.js";import"./VDivider-BdZVMXth.js";/* empty css              */import"./VSlideGroup-CNt9oOkj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VCard-DttbPEhw.js";import"./VCardText-uyCvIofY.js";const k={__name:"DemoComboboxClearable",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),b(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:s,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"]))}},A=i("kbd",null,"enter",-1),R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],s=u(["Vuetify"]),c=u(null);return x(s,t=>{t.length>5&&I(()=>s.value.pop())}),(t,o)=>(V(),b(p,{modelValue:r(s),"onUpdate:modelValue":o[0]||(o[0]=f=>d(s)?s.value=f:null),"search-input":r(c),"onUpdate:searchInput":o[1]||(o[1]=f=>d(c)?c.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":m(()=>[l(P,null,{default:m(()=>[l(D,null,{default:m(()=>[a(' No results matching "'),i("strong",null,C(r(c)),1),a('". Press '),A,a(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},N={__name:"DemoComboboxMultiple",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),b(h,null,{default:m(()=>[l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:s,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=o=>d(e)?e.value=o:null),items:s,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=o=>d(e)?e.value=o:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=o=>d(e)?e.value=o:null),items:s,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:m(({item:o})=>[l(w,{size:"small"},{prepend:m(()=>[l(U,{start:"",color:"primary"},{default:m(()=>[a(C(String(o.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:m(()=>[a(" "+C(o.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},T={__name:"DemoComboboxVariant",setup(g){const e=u(["Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),b(h,null,{default:m(()=>[l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:s,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[1]||(t[1]=o=>d(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[2]||(t[2]=o=>d(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[3]||(t[3]=o=>d(e)?e.value=o:null),multiple:"",items:s,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(n,{cols:"12"},{default:m(()=>[l(p,{modelValue:r(e),"onUpdate:modelValue":t[4]||(t[4]=o=>d(e)?e.value=o:null),multiple:"",items:s,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=u(["Vuetify","Programming"]),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),b(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:s,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"]))}},M={__name:"DemoComboboxBasic",setup(g){const e=u("Programming"),s=["Programming","Design","Vue","Vuetify"];return(c,t)=>(V(),b(p,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:s,placeholder:"deployment"},null,8,["modelValue"]))}},S={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},j={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},z={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},G=i("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),O=i("p",null,[a(" You can use "),i("code",null,"Density"),a(" prop to reduce combobox height and lower max height of list items. Available options are: "),i("code",null,"default"),a(", "),i("code",null,"comfortable"),a(", and "),i("code",null,"compact"),a(". ")],-1),Y=i("p",null,[a("Use "),i("code",null,"solo"),a(", "),i("code",null,"outlined"),a(", "),i("code",null,"underlined"),a(", "),i("code",null,"filled"),a(" and "),i("code",null,"plain"),a(" options of z"),i("code",null,"variant"),a(" prop to change the look of combobox. ")],-1),q=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=i("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=i("p",null,[a("Use "),i("code",null,"clearable"),a(" prop to clear combobox.")],-1),we={__name:"combobox",setup(g){return(e,s)=>{const c=M,t=L,o=$,f=T,y=N,_=R,v=k;return V(),b(h,{class:"match-height"},{default:m(()=>[l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Basic",code:S},{default:m(()=>[G,l(c)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Density",code:B},{default:m(()=>[O,l(o)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Variant",code:F},{default:m(()=>[Y,l(f)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Multiple",code:z},{default:m(()=>[q,l(y)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"No data with chips",code:W},{default:m(()=>[E,l(_)]),_:1},8,["code"])]),_:1}),l(n,{cols:"12",md:"6"},{default:m(()=>[l(t,{title:"Clearable",code:j},{default:m(()=>[H,l(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{we as default};
