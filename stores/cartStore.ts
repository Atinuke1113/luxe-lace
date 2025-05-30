// stores/cartStore.ts
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as { id: number; name: string }[]
  }),
  actions: {
    addItem(item: { id: number; name: string }) {
      this.items.push(item)
    },
    clearCart() {
      this.items = []
    }
  },
  getters: {
    itemCount: (state) => state.items.length
  }
})
