<script setup lang="ts">
import BaseHeader from "./../components/Header.vue";
</script>

<template>
  <div class="flex relative">
    <div class="flex-auto flex flex-row min-h-screen max-w-full relative">
      <div class="w-full">
        <BaseHeader />
        <div class="mx-auto p-4 md:p-5 lg:p-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
