import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/pages/products.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/pages/cart.vue')
    },
    {
      path: '/checkout-success',
      name: 'CheckoutSuccess',
      component: () => import('@/pages/checkout-success.vue')
    }
  ]
})

export default router