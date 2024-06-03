<script setup>
import Button from '@/components/TheButton.vue';
import Logo from '@/assets/logo.svg';
</script>

<template>
  <main class="flex-centered flex-col mb-20">
    <div class="logo">
      <Logo />
    </div>
    <div class="text-center">
      <RouterLink to="/themes">
        <Button color="green" type="default">Play</Button>
      </RouterLink>
    </div>
  </main>
</template>
