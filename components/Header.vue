<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import BaseButton from "@/components/BaseButton.vue";

const store = useAuthStore();
const { isAuthenticated } = storeToRefs(store);
const { logout } = store;
</script>

<template>
  <div class="sticky top-0 z-50 bg-white/90">
    <div
      class="flex justify-between items-center border-b border-dark-lighter p-3 md:p-4 lg:px-6"
    >
      <div class="flex items-center gap-4">
        <nuxt-link class="text-lg font-bold" href="/">E-Commerce</nuxt-link>
      </div>
      <div class="flex items-center gap-3 md:gap-4 xl:gap-8">
        <ClientOnly placeholder="Loading...">
          <template v-if="!getItem('Authorization')">
            <NuxtLink href="/auth/login">Login</NuxtLink>
            <NuxtLink href="/auth/register">Register</NuxtLink>
          </template>
          <template v-else>
            <BaseButton class="px-4" @click="logout">Logout</BaseButton>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
