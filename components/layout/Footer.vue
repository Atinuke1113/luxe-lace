<template>
  <footer class="bg-gray-100 mt-auto">
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Luxe&Lace</h3>
          <p class="text-gray-600">Your one-stop destination for premium wears and beautiful jewelries.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-600 hover:text-pink-600">Home</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-600 hover:text-pink-600">Products</NuxtLink></li>
            <li><NuxtLink to="/cart" class="text-gray-600 hover:text-pink-600">Cart</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-3">Contact</h3>
          <p class="text-gray-600">Email: support@luxe&lace.com</p>
          <p class="text-gray-600">Phone: (000) 000-0000</p>
        </div>
      </div>
      <div class="text-center mt-8 pt-4 border-t border-gray-200">
        <p class="text-gray-600">&copy; 2025 Luxe&Lace. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>