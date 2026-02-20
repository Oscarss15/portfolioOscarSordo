<script setup>
import { ref, onMounted } from "vue";
import HamburgerMenu from "./components/menu.vue";
import Loading from "./components/Loading.vue";
import Config from "./components/Config.vue";
import CustomCursor from "./components/CustomCursor.vue";

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3500);
});
</script>

<template>
  <div id="app">
    <Loading :isLoading="isLoading" />

    <template v-if="!isLoading">
      <CustomCursor />
      <HamburgerMenu />
      <Config />
      <router-view />
    </template>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

::selection {
  background-color: transparent;
  color: inherit;
}

::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: rgba(var(--color-primary-rgb), 0.05);
  border-radius: 10px;
  backdrop-filter: blur(6px);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border: 2px solid rgba(var(--color-primary-rgb), 0.05);
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.5),
    rgb(255, 255, 255),
    rgba(49, 49, 49, 0.5)
  );
  background-size: 300% 300%;
  box-shadow: 0 0 8px rgba(var(--color-primary-rgb), 0.5);
  transition:
    transform 0.2s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  transform: scaleX(1.2);
  box-shadow:
    0 0 15px rgba(var(--color-primary-rgb), 0.9),
    0 0 25px rgba(var(--color-primary-rgb), 0.7);
}

body {
  scrollbar-width: thin;
  scrollbar-color: rgba(var(--color-primary-rgb), 0.5)
    rgba(var(--color-primary-rgb), 0.05);
}
</style>
