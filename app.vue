<script setup lang="ts">
const route = useRoute();
const publicPaths = ["/auth/login", "/auth/register"];
const layout = ref(publicPaths.includes(route.path) ? "custom" : "default");

watch(
  () => route.path,
  (val) => {
    if (publicPaths.includes(val)) {
      layout.value = "custom";
    } else {
      layout.value = "default";
    }
  }
);
</script>

<template>
  <Html lang="en">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout :name="layout">
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

<style>
.page-enter-active {
  transition: all 0.1s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.page-enter-from,
.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.layout-enter-active {
  transition: all 0.1s ease-out;
}
.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
