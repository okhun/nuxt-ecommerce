<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useRegister } from "@/composables/useRegister";

useHead({
  title: "Nuxt-Commerce/Register",
  meta: [{ name: "description", content: "My amazing e-commerce site." }],
});
const { username, password, name, handleFormSubmit } = useRegister();
</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center p-4">
    <ClientOnly>
      <form
        class="w-full max-w-md shadow-auth p-8 rounded-xl bg-white relative"
        @submit.prevent="handleFormSubmit"
      >
        Register:
        <div class="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
          <BaseInput
            v-model="name.value.value"
            label="Name"
            :success="name.meta.valid && name.meta.dirty"
            :error="!name.meta.valid && !!name.errorMessage.value"
            :message="name.errorMessage.value"
          />
          <BaseInput
            v-model="username.value.value"
            label="Username"
            :success="username.meta.valid && username.meta.dirty"
            :error="!username.meta.valid && !!username.errorMessage.value"
            :message="username.errorMessage.value"
          />
          <BaseInput
            type="password"
            v-model="password.value.value"
            label="Password"
            :success="password.meta.valid && password.meta.dirty"
            :error="!password.meta.valid && !!password.errorMessage.value"
            :message="password.errorMessage.value"
          />
          <BaseButton @click="handleFormSubmit">Register</BaseButton>
          <div class="flex justify-between">
            <NuxtLink href="login" class="text-blue-500 underline"
              >Login-></NuxtLink
            >
            <NuxtLink href="/" class="text-blue-500 underline">Home</NuxtLink>
          </div>
        </div>
      </form>
    </ClientOnly>
  </div>
</template>
