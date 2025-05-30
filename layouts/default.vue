<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { watch } from 'vue'
import AOS from 'aos'

const route = useRoute()

watch(
  () => route.path,
  () => {
    setTimeout(() => {
      AOS.refresh()
    }, 100)
  }
)
</script>