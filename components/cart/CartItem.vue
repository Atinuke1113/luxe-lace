<template>
  <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
    <img :src="item.image" :alt="item.title" class="w-20 h-20 object-contain" />
    
    <div class="flex-1">
      <h3 class="text-lg font-medium text-gray-800">{{ item.title }}</h3>
      <p class="text-pink-600 font-bold">${{ item.price }}</p>
    </div>

    <div class="flex items-center gap-3">
      <input
        type="number"
        v-model.number="quantity"
        min="1"
        :max="maxQuantity"
        class="w-20 px-2 py-1 border rounded-md"
        @change="$emit('update:quantity', quantity)"
      />
      <button 
        @click="$emit('remove')"
        class="text-red-500 hover:text-red-600"
      >
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  maxQuantity: {
    type: Number,
    required: true
  }
})

const quantity = ref(props.item.quantity)

watch(() => props.item.quantity, (newVal) => {
  quantity.value = newVal
})
</script>