<script setup>
import Button from '@/components/TheButton.vue';
import NotFoundIcon from '@/assets/icons/findFace.svg';
</script>

<template>
  <main class="flex-centered flex-col mb-20">
    <div>
      <NotFoundIcon class="w-[200px] h-[200px] mx-auto mb-6" />
      <h1 class="mb-6 text-4xl text-center">Page not found</h1>
    </div>
    <div class="text-center">
      <RouterLink to="/">
        <Button color="red" type="default">
          <span class="text-2xl">Back to Home</span>
        </Button>
      </RouterLink>
    </div>
  </main>
</template>
