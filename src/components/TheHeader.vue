<template>
  <header class="flex justify-between items-center w-full py-4 sticky top-0">
    <button class="button-back rounded-full flex-centered" @click="handleBack">
      <ArrowLeft />
    </button>
    <h1 class="header-title">{{ header.title }}</h1>
    <span
      v-if="header.health > 0"
      :class="`heath-point heath-${header.health}`"
    >
      <span>{{ header.health }} </span>
    </span>
    <span v-else class="w-[32px]"></span>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useHeaderStore } from '@/stores/header';
import ArrowLeft from '@/assets/icons/leftArrow.svg';

const header = useHeaderStore();
const router = useRouter();
defineProps({
  title: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'green',
  },
});

function handleBack() {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.button-back {
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--color-white);
  background-color: var(--color-yellow);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-yellow), #000 10%);
  position: relative;
  &:active {
    top: 4px;
    box-shadow: none;
  }
}
.header-title {
  font-size: 1.25rem;
  line-height: 1.1;
  border-radius: 2rem;
  padding: 0.25rem 1.5rem;
  border: 3px solid var(--color-white);
  background-color: var(--color-purple);
  box-shadow: 0 4px 0 color-mix(in srgb, var(--color-purple), #000 25%);
}
.heath-point {
  width: 2rem;
  height: 2rem;
  border: 3px solid var(--color-white);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &.heath-1 {
    background-color: var(--color-red);
  }
  &.heath-2 {
    background-color: var(--color-pink);
  }
  &.heath-3 {
    background-color: var(--color-yellow);
  }
  &.heath-4 {
    background-color: var(--color-orange);
  }
  &.heath-5 {
    background-color: var(--color-green);
  }
}
</style>
