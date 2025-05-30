<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-8 bg-white p-6 rounded-lg shadow-sm">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Search Input -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Search Products</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by title or category..."
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-400"
          />
        </div>

        <!-- Price Range Filter -->
        <div>
          <label class="block text-sm text-gray-600 mb-2">Price Range: ${{ priceRange[0] }} - ${{ priceRange[1] }}</label>
          <div class="flex gap-4">
            <input
              v-model.number="priceRange[0]"
              type="number"
              min="0"
              :max="priceRange[1]"
              class="w-full px-3 py-2 border rounded-md"
            />
            <input
              v-model.number="priceRange[1]"
              type="number"
              :min="priceRange[0]"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Products -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-600">Loading products...</p>
    </div>

    <div v-else-if="error" class="text-center py-12">
      <p class="text-red-600">{{ error }}</p>
    </div>

    <!-- Filtered Products Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useCartStore } from '@/stores/cartStore'

const products = ref([])
const loading = ref(true)
const error = ref(null)
const cartStore = useCartStore()


const searchQuery = ref('')
const priceRange = ref([0, 1000])

const filteredProducts = computed(() => {
  return products.value.filter(product => {
  
    const searchMatch = searchQuery.value === '' || 
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    
   
    const priceMatch = product.price >= priceRange.value[0] && 
      product.price <= priceRange.value[1]

    return searchMatch && priceMatch
  })
})

onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    products.value = response.data.map(product => ({
      ...product,
      price: Number((product.price * 1.022).toFixed(2)),
      stock: Math.floor(Math.random() * 50) + 10
    }))
    
    
    priceRange.value[1] = Math.ceil(Math.max(...products.value.map(p => p.price)))
  } catch (err) {
    error.value = 'Failed to load products. Please try again later.'
    console.error('Error fetching products:', err)
  } finally {
    loading.value = false
  }
})

const addToCart = (product) => {
  cartStore.addItem(product)
}
</script>