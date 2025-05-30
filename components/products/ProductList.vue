<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div class="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Search -->
        <div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
          />
        </div>

        <!-- Price Range -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Price Range: ${{ priceRange[0] }} - ${{ priceRange[1] }}</span>
          </div>
          <div class="flex gap-4">
            <input
              v-model="priceRange[0]"
              type="number"
              class="w-full px-3 py-2 border rounded-md"
              :min="0"
              :max="priceRange[1]"
            />
            <input
              v-model="priceRange[1]"
              type="number"
              class="w-full px-3 py-2 border rounded-md"
              :min="priceRange[0]"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { productService } from '@/services/productService'

const products = ref([])
const searchQuery = ref('')
const priceRange = ref([0, 1000])


onMounted(async () => {
  products.value = await productService.fetchProducts()
  
  priceRange.value[1] = Math.ceil(Math.max(...products.value.map(p => p.price)))
})


const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesSearch = searchQuery.value === '' || 
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesPrice = product.price >= priceRange.value[0] && 
      product.price <= priceRange.value[1]

    return matchesSearch && matchesPrice
  })
})

// Add to cart handler
const addToCart = (product) => {
  
  emit('add-to-cart', product)
}
</script>