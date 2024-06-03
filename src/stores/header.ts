import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('header', {
  state: () => ({ title: '', health: 0 }),
  actions: {
    setTitle(title: string) {
      this.title = title
    },
    setHealth(healthNumber: number) {
      this.health = healthNumber
    }
  },
});
