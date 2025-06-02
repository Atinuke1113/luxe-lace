<template>
  <div class="max-w-2xl mx-auto px-4 py-16 text-center">
    <div class="mb-8 text-green-500">
      <i class="fas fa-check-circle text-6xl"></i>
    </div>
    <h1 class="text-3xl font-serif text-gray-800 mb-4">Order Placed Successfully!</h1>
    <p class="text-gray-600 mb-8">Thank you for your purchase. Your order has been confirmed.</p>
    <router-link 
      to="/" 
      class="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors"
    >
      Continue Shopping
    </router-link>
  </div>
</template>