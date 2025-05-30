<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
    <nav class="container mx-auto px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <h1 class="text-2xl font-serif text-pink-600">Luxe&Lace</h1>
        </NuxtLink>

        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-10">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="text-gray-600 hover:text-pink-600 transition-colors text-sm tracking-wider"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-6">
          <button class="text-gray-600 hover:text-pink-600 transition-colors">
            <i class="fas fa-search"></i>
          </button>
          <button class="text-gray-600 hover:text-pink-600 transition-colors">
            <i class="fas fa-user"></i>
          </button>
           <router-link 
          to="/cart" 
          custom
          v-slot="{ navigate }"
        >
          <div 
            @click="navigate"
            class="relative p-2 cursor-pointer group"
          >
            <i class="fas fa-shopping-bag text-xl text-gray-600 group-hover:text-pink-600 transition-colors"></i>
            <span 
              v-if="cartStore.itemCount > 0" 
              class="absolute -top-1 -right-1 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
            >
              {{ cartStore.itemCount }}
            </span>
          </div>
        </router-link>
          
        </div>
      </div>
    </nav>
  </header>


  <div class="h-[72px]"></div>
</template>

<script setup>
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>