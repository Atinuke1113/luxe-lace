<template>
 <div v-if="product" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
    <!-- Product Image -->
    <div class="relative h-64">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="w-full h-full object-contain p-4"
      />
      <div class="absolute top-2 right-2">
        <span class="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
          {{ product.category }}
        </span>
      </div>
    </div>

    <!-- Product Details -->
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-800 mb-2 line-clamp-2" :title="product.title">
        {{ product.title }}
      </h3>

      <div class="flex items-center mb-3">
        <div class="flex items-center text-yellow-400">
          <i class="fas fa-star text-sm"></i>
          <span class="ml-1 text-sm text-gray-600">{{ product.rating.rate }}</span>
        </div>
        <span class="text-xs text-gray-500 ml-2">({{ product.rating.count }} reviews)</span>
      </div>

      <div class="flex items-center justify-between mb-4">
        <span class="text-xl font-bold text-pink-600">${{ product.price }}</span>
        <span class="text-sm text-gray-500">Stock: {{ product.stock }}</span>
      </div>

      <!-- Add to Cart Section -->
      <div class="flex items-center gap-2">
        <input
          type="number"
          v-model.number="quantity"
          min="1"
          :max="product.stock"
          class="w-20 px-2 py-1 border rounded-md focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
        />
        <button 
          @click="handleAddToCart"
          :disabled="!product.stock"
          class="flex-1 bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const emit = defineEmits(['add-to-cart'])
const quantity = ref(1)

const handleAddToCart = () => {
  if (props.product) {
    emit('add-to-cart', {
      ...props.product,
      quantity: quantity.value
    })
    quantity.value = 1
  }
}
</script>