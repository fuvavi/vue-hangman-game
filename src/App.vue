<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div
    class="app-container flex flex-col justify-center relative min-h-[100svh] max-w-[320px] w-full"
  >
    <RouterView name="header" class="app-header" />
    <RouterView />
  </div>
</template>
