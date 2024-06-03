import { defineStore } from 'pinia';
import {type ICategory} from '@/types/category.type';
import categories from '@/data.json';

const categoryData = categories as ICategory[];
export const useCategoriesStore = defineStore('categories', {
  state: () => ({ data: categoryData }),
  actions: {
    getCategoryBySlug(slug: string) {
      return this.data.filter((category) => category.name.toLocaleLowerCase() === slug)[0];
    },
  },
});
