<script setup lang="ts">
const filters = ["All", "Popular", "Various", "Sale"];
const activeFilterIdx = ref(0);
</script>

<template>
  <div class="flex items-center justify-start mb-8">
    <button
      v-for="(filter, index) in filters"
      :key="index"
      :class="[
        'bg-transparent  hover:text-primary-500 mr-14 duration-200',
        { '!text-primary-500': activeFilterIdx === index },
        { 'text-secondary-950': activeFilterIdx !== index },
      ]"
      @click="activeFilterIdx = index"
    >
      {{ filter }}
    </button>
  </div>
</template>
