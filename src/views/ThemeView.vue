<script setup>
import { useHeaderStore } from '@/stores/header';
import { useCategoriesStore } from '@/stores/categories';
import { colors } from '@/utils/constants';

const header = useHeaderStore();
const categories = useCategoriesStore();
header.setTitle('Pick a theme');
</script>

<template>
  <div class="theme-screen py-8 flex mb-auto">
    <ul class="theme-list flex items-start flex-wrap">
      <li
        class="theme-item"
        v-for="(category, index) in categories.data"
        :key="index"
      >
        <RouterLink
          :class="`theme-item-inner theme-item-${colors[index]}`"
          :to="`/themes/${category.name.toLowerCase()}`"
        >
          <span>{{ category.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.theme-list {
  --gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  width: 100%;
  .theme-item {
    display: flex;
    flex: 1 0 0%;
    width: 50%;
    max-width: 50%;
    .theme-item-inner {
      font-size: 18px;
      border-radius: 0.5rem;
      border: 2px solid var(--color-white);
      border-bottom-width: 6px;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
      width: 100%;
      text-align: center;
      position: relative;
      span {
        padding: 0.25rem 1.5rem;
        display: block;
        border-radius: 6px;
        background-color: var(--color-orange);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-orange), var(--color-black) 10%);
      }
      &.theme-item-blue span {
        background-color: var(--color-blue);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-blue), var(--color-black) 10%);
      }
      &.theme-item-pink span {
        background-color: var(--color-pink);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-pink), var(--color-black) 10%);
      }
      &.theme-item-green span {
        background-color: var(--color-green);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-green), var(--color-black) 10%);
      }
      &.theme-item-violet span {
        background-color: var(--color-violet);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-violet), var(--color-black) 10%);
      }
      &.theme-item-red span {
        background-color: var(--color-red);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-red), var(--color-black) 10%);
      }
      &.theme-item-yellow span {
        background-color: var(--color-yellow);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-yellow), var(--color-black) 10%);
      }
      &.theme-item-deepred span {
        background-color: var(--color-deepred);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-deepred), var(--color-black) 10%);
      }
      &.theme-item-navy span {
        background-color: var(--color-navy);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-navy), var(--color-black) 10%);
      }
      &.theme-item-teal span {
        background-color: var(--color-teal);
        box-shadow: 0 4px 0
          color-mix(in srgb, var(--color-teal), var(--color-black) 10%);
      }
      &:active {
        top: 4px;
        border-bottom-width: 2px;
        span {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
