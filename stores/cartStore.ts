import { defineStore } from 'pinia'
import { productService } from '@/services/productService'
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    itemCount: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  },

  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += product.quantity
      } else {
        this.items.push({ ...product })
      }
    },

    removeItem(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    },

   checkout() {
      if (this.items.length === 0) {
        throw new Error('Cart is empty')
      }

      try {
        if (process.client) {
          // Update product stock
          this.items.forEach(async (item) => {
            const product = await productService.getProduct(item.id)
            if (product) {
              const newStock = product.stock - item.quantity
              if (newStock < 0) {
                throw new Error(`Not enough stock for ${item.title}`)
              }
              await productService.updateStock(item.id, newStock)
            }
          })

          const order = {
            id: Date.now(),
            items: [...this.items],
            total: this.total,
            date: new Date().toISOString()
          }

          const orders = JSON.parse(window.localStorage.getItem('orders') || '[]')
          orders.push(order)
          window.localStorage.setItem('orders', JSON.stringify(orders))

          this.items = []
          return order
        }
      } catch (error) {
        console.error('Checkout error:', error)
        throw new Error(error.message || 'Failed to process checkout')
      }
    }
  },

  persist: {
    storage: process.client ? localStorage : null
  }
})
