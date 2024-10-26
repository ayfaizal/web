import{_ as K}from"./AppCardCode-BH0JmQXj.js";import{_ as W}from"./AppStepper-BbBQpZR-.js";import{V as I}from"./VCardText-uyCvIofY.js";import{V as q}from"./VDivider-BdZVMXth.js";import{V as T}from"./VForm-Dkf4DVK-.js";import{V as _,a as h}from"./VWindowItem-Ax9Ml1qe.js";import{V as S,a as s}from"./VRow-5iodEM2E.js";import{V as m}from"./VTextField-CRe8TF0Y.js";import{V as A}from"./VSelect-CxzQIejo.js";import{r as p,o as k,f as P,e as o,b as e,m as l,a3 as L,d as u,am as w,a2 as F,t as v,aO as B,x as z}from"./index-VU0dmoHZ.js";import{V as R}from"./VCard-DttbPEhw.js";import{r as C,e as M,p as O,d as H,u as N}from"./validators-BTYlBg-y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VSlideGroupItem-D5N5k37u.js";import"./VSlideGroup-CNt9oOkj.js";import"./VAvatar-B0yljh3k.js";import"./VImg-BNqJuZG0.js";import"./form-D37_K2HO.js";import"./forwardRefs-C-GTDzx5.js";import"./lazy-CTD-MLkl.js";import"./ssrBoot-Cx7lQdW-.js";/* empty css              *//* empty css                   */import"./VCounter-BnJ4X-op.js";import"./VField-TfdV7Sv1.js";import"./easing-CjukEv2V.js";import"./VInput-DUnqEF-j.js";import"./VList-DhXfVcoA.js";import"./dialog-transition-ClMl6VK0.js";import"./VMenu-DngO4Bzq.js";import"./VOverlay-BZO4hDjN.js";import"./scopeId-DwszM4ys.js";import"./VCheckboxBtn-DGugApLE.js";import"./VSelectionControl-Dht4FwVx.js";import"./VChip-ClWrs_JY.js";import"./helpers-DK5QwNv0.js";const J={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`},Q={ts:`<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},X={ts:`<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Account Details
                    </h6>
                    <p class="text-sm mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Personal Info
                    </h6>
                    <p class="text-sm mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Social Links
                    </h6>
                    <p class="text-sm mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="ri-arrow-left-line"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="ri-check-line"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="ri-arrow-right-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`,js:`<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Account Details
                    </h6>
                    <p class="text-sm mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Personal Info
                    </h6>
                    <p class="text-sm mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Social Links
                    </h6>
                    <p class="text-sm mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="ri-arrow-left-line"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="ri-check-line"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="ri-arrow-right-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`},Y=u("h6",{class:"text-h6"}," Account Details ",-1),Z=u("p",{class:"text-sm mb-0"}," Enter your Account Details ",-1),ee=u("h6",{class:"text-h6"}," Personal Info ",-1),le=u("p",{class:"text-sm mb-0"}," Setup Information ",-1),oe=u("h6",{class:"text-h6"}," Social Links ",-1),ae=u("p",{class:"text-sm mb-0"}," Add Social Links ",-1),te={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},re={__name:"DemoFormWizardNumberedBasic",setup(U){const y=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),V=p(!1),b=p(!1),r=p({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),x=()=>{console.log(r.value)};return(D,a)=>{const f=W;return k(),P(R,null,{default:o(()=>[e(I,null,{default:o(()=>[e(f,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>L(d)?d.value=t:null),items:y},null,8,["current-step"])]),_:1}),e(q),e(I,null,{default:o(()=>[e(T,null,{default:o(()=>[e(_,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>L(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[Y,Z]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(r).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(r).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(r).password=t),label:"Password",placeholder:"············",type:l(V)?"text":"password","append-inner-icon":l(V)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[4]||(a[4]=t=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(r).cPassword=t),label:"Confirm Password",placeholder:"············",type:l(b)?"text":"password","append-inner-icon":l(b)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[6]||(a[6]=t=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[ee,le]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(r).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(r).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(r).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(r).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(r).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(r).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[oe,ae]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(r).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(r).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(r).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(r).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",te,[e(w,{color:"secondary",variant:"outlined",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(F,{icon:"ri-arrow-left-line",start:"",class:"flip-in-rtl"}),v(" Previous ")]),_:1},8,["disabled"]),y.length-1===l(d)?(k(),P(w,{key:0,color:"success","append-icon":"ri-check-line",onClick:x},{default:o(()=>[v(" submit ")]),_:1})):(k(),P(w,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[v(" Next "),e(F,{icon:"ri-arrow-right-line",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})}}},se=u("h6",{class:"text-h6"}," Account Details ",-1),ie=u("p",{class:"text-sm mb-0"}," Enter your Account Details ",-1),ne={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},de=u("h6",{class:"text-h6"}," Personal Info ",-1),ce=u("p",{class:"text-sm mb-0"}," Setup Information ",-1),me={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},ue=u("h6",{class:"text-h6"}," Social Links ",-1),Ve=u("p",{class:"text-sm mb-0"}," Add Social Links ",-1),pe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},fe={__name:"DemoFormWizardNumberedValidation",setup(U){const y=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),V=p(!1),b=p(!1),r=p(!0),x=p(),D=p(),a=p(),f=p({username:"",email:"",password:"",cPassword:""}),t=p({firstName:"",lastName:"",country:void 0,language:void 0}),g=p({twitter:"",facebook:"",googlePlus:"",linkedIn:""}),$=()=>{var i;(i=x.value)==null||i.validate().then(n=>{n.valid?(d.value++,r.value=!0):r.value=!1})},j=()=>{var i;(i=D.value)==null||i.validate().then(n=>{n.valid?(d.value++,r.value=!0):r.value=!1})},E=()=>{var i;(i=a.value)==null||i.validate().then(n=>{n.valid?(r.value=!0,console.log({...f.value,...t.value,...g.value})):r.value=!1})};return(i,n)=>{const G=W;return k(),P(R,null,{default:o(()=>[e(I,null,{default:o(()=>[e(G,{"current-step":l(d),"onUpdate:currentStep":n[0]||(n[0]=c=>L(d)?d.value=c:null),items:y,"is-active-step-valid":l(r)},null,8,["current-step","is-active-step-valid"])]),_:1}),e(q),e(I,null,{default:o(()=>[e(_,{modelValue:l(d),"onUpdate:modelValue":n[17]||(n[17]=c=>L(d)?d.value=c:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(l(T),{ref_key:"refAccountForm",ref:x,onSubmit:B($,["prevent"])},{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[se,ie]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(f).username,"onUpdate:modelValue":n[1]||(n[1]=c=>l(f).username=c),placeholder:"CarterLeonardo",rules:["requiredValidator"in i?i.requiredValidator:l(C)],label:"Username"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(f).email,"onUpdate:modelValue":n[2]||(n[2]=c=>l(f).email=c),placeholder:"carterleonardo@gmail.com",rules:["requiredValidator"in i?i.requiredValidator:l(C),"emailValidator"in i?i.emailValidator:l(M)],label:"Email"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(f).password,"onUpdate:modelValue":n[3]||(n[3]=c=>l(f).password=c),label:"Password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:l(C),"passwordValidator"in i?i.passwordValidator:l(O)],type:l(V)?"text":"password","append-inner-icon":l(V)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":n[4]||(n[4]=c=>V.value=!l(V))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(f).cPassword,"onUpdate:modelValue":n[5]||(n[5]=c=>l(f).cPassword=c),label:"Confirm Password",placeholder:"············",rules:["requiredValidator"in i?i.requiredValidator:l(C),("confirmedValidator"in i?i.confirmedValidator:l(H))(l(f).cPassword,l(f).password)],type:l(b)?"text":"password","append-inner-icon":l(b)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":n[6]||(n[6]=c=>b.value=!l(b))},null,8,["modelValue","rules","type","append-inner-icon"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[u("div",ne,[e(w,{color:"secondary",variant:"outlined",disabled:""},{default:o(()=>[e(F,{icon:"ri-arrow-left-line",start:"",class:"flip-in-rtl"}),v(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[v(" Next "),e(F,{icon:"ri-arrow-right-line",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(h,null,{default:o(()=>[e(l(T),{ref_key:"refPersonalForm",ref:D,onSubmit:B(j,["prevent"])},{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[de,ce]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(t).firstName,"onUpdate:modelValue":n[7]||(n[7]=c=>l(t).firstName=c),label:"First Name",rules:["requiredValidator"in i?i.requiredValidator:l(C)],placeholder:"Leonard"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(t).lastName,"onUpdate:modelValue":n[8]||(n[8]=c=>l(t).lastName=c),label:"Last Name",rules:["requiredValidator"in i?i.requiredValidator:l(C)],placeholder:"Carter"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(t).country,"onUpdate:modelValue":n[9]||(n[9]=c=>l(t).country=c),label:"Country",rules:["requiredValidator"in i?i.requiredValidator:l(C)],placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(t).language,"onUpdate:modelValue":n[10]||(n[10]=c=>l(t).language=c),label:"Language",rules:["requiredValidator"in i?i.requiredValidator:l(C)],placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[u("div",me,[e(w,{color:"secondary",variant:"tonal",onClick:n[11]||(n[11]=c=>d.value--)},{default:o(()=>[e(F,{icon:"ri-arrow-left-line",start:"",class:"flip-in-rtl"}),v(" Previous ")]),_:1}),e(w,{type:"submit"},{default:o(()=>[v(" Next "),e(F,{icon:"ri-arrow-right-line",end:"",class:"flip-in-rtl"})]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1}),e(h,null,{default:o(()=>[e(l(T),{ref_key:"refSocialLinkForm",ref:a,onSubmit:B(E,["prevent"])},{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[ue,Ve]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).twitter,"onUpdate:modelValue":n[12]||(n[12]=c=>l(g).twitter=c),placeholder:"https://twitter.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(C),"urlValidator"in i?i.urlValidator:l(N)],label:"Twitter"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).facebook,"onUpdate:modelValue":n[13]||(n[13]=c=>l(g).facebook=c),placeholder:"https://facebook.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(C),"urlValidator"in i?i.urlValidator:l(N)],label:"Facebook"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).googlePlus,"onUpdate:modelValue":n[14]||(n[14]=c=>l(g).googlePlus=c),placeholder:"https://plus.google.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(C),"urlValidator"in i?i.urlValidator:l(N)],label:"Google+"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(g).linkedIn,"onUpdate:modelValue":n[15]||(n[15]=c=>l(g).linkedIn=c),placeholder:"https://likedin.com/abc",rules:["requiredValidator"in i?i.requiredValidator:l(C),"urlValidator"in i?i.urlValidator:l(N)],label:"LinkedIn"},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[u("div",pe,[e(w,{color:"secondary",variant:"tonal",onClick:n[16]||(n[16]=c=>d.value--)},{default:o(()=>[e(F,{icon:"ri-arrow-left-line",start:"",class:"flip-in-rtl"}),v(" Previous ")]),_:1}),e(w,{color:"success",type:"submit"},{default:o(()=>[v(" submit ")]),_:1})])]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},be=u("h6",{class:"text-h6"}," Account Details ",-1),Ce=u("p",{class:"text-sm mb-0"}," Enter your Account Details ",-1),we=u("h6",{class:"text-h6"}," Personal Info ",-1),ve=u("p",{class:"text-sm mb-0"}," Setup Information ",-1),Se=u("h6",{class:"text-h6"}," Social Links ",-1),ge=u("p",{class:"text-sm mb-0"}," Add Social Links ",-1),Fe={class:"d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"},he={__name:"DemoFormWizardNumberedVertical",setup(U){const y=[{title:"Account Details",subtitle:"Setup Account Details"},{title:"Personal Info",subtitle:"Add personal info"},{title:"Social Links",subtitle:"Add social links"}],d=p(0),V=p(!1),b=p(!1),r=p({username:"",email:"",password:"",cPassword:"",firstName:"",lastName:"",country:void 0,language:void 0,twitter:"",facebook:"",googlePlus:"",linkedIn:""}),x=()=>{console.log(r.value)};return(D,a)=>{const f=W;return k(),P(R,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12",md:"4",class:z(D.$vuetify.display.smAndDown?"border-b":"border-e")},{default:o(()=>[e(I,null,{default:o(()=>[e(f,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=t=>L(d)?d.value=t:null),direction:"vertical",items:y},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(s,{cols:"12",md:"8"},{default:o(()=>[e(I,null,{default:o(()=>[e(T,null,{default:o(()=>[e(_,{modelValue:l(d),"onUpdate:modelValue":a[15]||(a[15]=t=>L(d)?d.value=t:null),class:"disable-tab-transition"},{default:o(()=>[e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[be,Ce]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).username,"onUpdate:modelValue":a[1]||(a[1]=t=>l(r).username=t),placeholder:"CarterLeonardo",label:"Username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).email,"onUpdate:modelValue":a[2]||(a[2]=t=>l(r).email=t),placeholder:"carterleonardo@gmail.com",label:"Email"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).password,"onUpdate:modelValue":a[3]||(a[3]=t=>l(r).password=t),placeholder:"············",label:"Password",type:l(V)?"text":"password","append-inner-icon":l(V)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[4]||(a[4]=t=>V.value=!l(V))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).cPassword,"onUpdate:modelValue":a[5]||(a[5]=t=>l(r).cPassword=t),placeholder:"············",label:"Confirm Password",type:l(b)?"text":"password","append-inner-icon":l(b)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[6]||(a[6]=t=>b.value=!l(b))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[we,ve]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).firstName,"onUpdate:modelValue":a[7]||(a[7]=t=>l(r).firstName=t),label:"First Name",placeholder:"Leonard"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).lastName,"onUpdate:modelValue":a[8]||(a[8]=t=>l(r).lastName=t),label:"Last Name",placeholder:"Carter"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(r).country,"onUpdate:modelValue":a[9]||(a[9]=t=>l(r).country=t),label:"Country",placeholder:"Select Country",items:["UK","USA","Canada","Australia","Germany"]},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(A,{modelValue:l(r).language,"onUpdate:modelValue":a[10]||(a[10]=t=>l(r).language=t),label:"Language",placeholder:"Select Language",items:["English","Spanish","French","Russian","German"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(h,null,{default:o(()=>[e(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[Se,ge]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).twitter,"onUpdate:modelValue":a[11]||(a[11]=t=>l(r).twitter=t),placeholder:"https://twitter.com/abc",label:"Twitter"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).facebook,"onUpdate:modelValue":a[12]||(a[12]=t=>l(r).facebook=t),placeholder:"https://facebook.com/abc",label:"Facebook"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).googlePlus,"onUpdate:modelValue":a[13]||(a[13]=t=>l(r).googlePlus=t),placeholder:"https://plus.google.com/abc",label:"Google+"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(m,{modelValue:l(r).linkedIn,"onUpdate:modelValue":a[14]||(a[14]=t=>l(r).linkedIn=t),placeholder:"https://linkedin.com/abc",label:"LinkedIn"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),u("div",Fe,[e(w,{color:"secondary",variant:"outlined",disabled:l(d)===0,onClick:a[16]||(a[16]=t=>d.value--)},{default:o(()=>[e(F,{icon:"ri-arrow-left-line",start:"",class:"flip-in-rtl"}),v(" Previous ")]),_:1},8,["disabled"]),y.length-1===l(d)?(k(),P(w,{key:0,color:"success","append-icon":"ri-check-line",onClick:x},{default:o(()=>[v(" submit ")]),_:1})):(k(),P(w,{key:1,onClick:a[17]||(a[17]=t=>d.value++)},{default:o(()=>[v(" Next "),e(F,{icon:"ri-arrow-right-line",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},sl={__name:"form-wizard-numbered",setup(U){return(y,d)=>{const V=K;return k(),P(S,null,{default:o(()=>[e(s,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Basic",code:J},{default:o(()=>[e(re)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Validation",code:Q},{default:o(()=>[e(fe)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(V,{variant:"outlined",title:"Vertical",code:X},{default:o(()=>[e(he)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{sl as default};
