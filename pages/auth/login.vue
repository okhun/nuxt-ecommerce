<script setup lang="ts">
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useLogin } from "@/composables/useLogin";

useHead({
  title: "Nuxt-Commerce/Login",
  meta: [{ name: "description", content: "My amazing e-commerce site." }],
});
const { username, password, handleFormSubmit } = useLogin();
</script>

<template>
  <div class="w-full min-h-screen flex justify-center items-center p-4">
    <ClientOnly>
      <form
        class="w-full max-w-md shadow-auth p-8 rounded-xl bg-white relative"
        @submit.prevent="handleFormSubmit"
      >
        Login:
        <div class="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
          <BaseInput
            v-model="username.value.value"
            :success="username.meta.valid && username.meta.dirty"
            :error="!username.meta.valid && !!username.errorMessage.value"
            :message="username.errorMessage.value"
          />
          <BaseInput
            type="password"
            v-model="password.value.value"
            :success="password.meta.valid && password.meta.dirty"
            :error="!password.meta.valid && !!password.errorMessage.value"
            :message="password.errorMessage.value"
          />
          <BaseButton @click="handleFormSubmit">Login</BaseButton>
          <div class="flex justify-between">
            <NuxtLink href="register" class="text-blue-500 underline"
              >Register-></NuxtLink
            >
            <NuxtLink href="/" class="text-blue-500 underline">Home</NuxtLink>
          </div>
        </div>
      </form>
    </ClientOnly>
  </div>
</template>
