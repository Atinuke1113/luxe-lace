<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div class="relative pb-[100%]">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-contain p-4"
      />
    </div>
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-800 truncate" :title="product.title">
        {{ product.title }}
      </h3>
      <p class="text-sm text-gray-500 mb-2">{{ product.category }}</p>
      
      <div class="flex items-center mb-2">
        <div class="flex items-center text-yellow-400">
          <i class="fas fa-star"></i>
          <span class="ml-1 text-gray-600">{{ product.rating.rate }}</span>
        </div>
        <span class="text-sm text-gray-500 ml-2">({{ product.rating.count }} reviews)</span>
      </div>

      <div class="flex items-center justify-between mb-4">
        <span class="text-xl font-bold text-pink-600">${{ product.price }}</span>
        <span class="text-sm text-gray-500">Stock: {{ product.stock }}</span>
      </div>

      <div class="flex items-center gap-2">
        <input
          type="number"
          v-model="quantity"
          min="1"
          :max="product.stock"
          class="w-20 px-2 py-1 border rounded-md"
        />
        <button 
          @click="addToCart"
          :disabled="!product.stock"
          class="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['product'])
const emit = defineEmits(['add-to-cart'])

const quantity = ref(1)

const addToCart = () => {
  emit('add-to-cart', {
    ...props.product,
    quantity: quantity.value
  })
  quantity.value = 1
}
</script>