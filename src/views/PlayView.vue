<script setup>
import Header from '@/components/TheHeader.vue';
</script>

<template>
  <div class="theme-screen">
    <Header />
    <h1>Play</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .theme-screen {
    min-height: 100svh;
    display: flex;
    align-items: center;
  }
}
</style>
