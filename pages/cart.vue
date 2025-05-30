<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-serif text-gray-800 mb-8">Shopping Cart</h1>

    <div v-if="cartStore.items.length" class="space-y-4">
      <!-- Cart Items -->
      <CartItem
        v-for="item in cartStore.items"
        :key="item.id"
        :item="item"
        :maxQuantity="getMaxQuantity(item.id)"
        @update:quantity="updateQuantity(item.id, $event)"
        @remove="cartStore.removeItem(item.id)"
      />

      <!-- Cart Summary -->
      <div class="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg text-gray-600">Total:</span>
          <span class="text-2xl font-bold text-pink-600">${{ cartStore.total.toFixed(2) }}</span>
        </div>

        <button 
          @click="checkout"
          class="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>

    <!-- Empty Cart -->
    <div v-else class="text-center py-12">
      <i class="fas fa-shopping-cart text-4xl text-gray-300 mb-4"></i>
      <p class="text-gray-500 mb-4">Your cart is empty</p>
      <NuxtLink 
        to="/" 
        class="text-pink-600 hover:text-pink-700"
      >
        Continue Shopping
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { productService } from '@/services/productService'
import CartItem from '@/components/cart/CartItem.vue'  
import { useRouter } from 'vue-router'  

const cartStore = useCartStore()
const router = useRouter()

const getMaxQuantity = (productId: number) => {
  const product = productService.getProducts().find(p => p.id === productId)
  return product?.stock || 0
}

const updateQuantity = (productId: number, quantity: number) => {
  const item = cartStore.items.find(item => item.id === productId)
  if (item) {
    item.quantity = quantity
  }
}

const checkout = async () => {
  try {
    cartStore.checkout()
    
    alert('Order placed successfully!')

    router.push('/')
  } catch (error) {
    console.error('Checkout failed:', error)
    alert('Failed to place order. Please try again.')
  }
}
</script>