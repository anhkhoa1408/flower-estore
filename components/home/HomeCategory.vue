<script setup lang="ts">
const filters = ["All", "Popular", "Various", "Sale"];
const activeFilterIdx = ref(0);
</script>

<template>
  <div class="flex flex-nowrap items-center justify-start overflow-y-auto py-5 lg:py-0 mb-4">
    <button
      v-for="(filter, index) in filters"
      :key="index"
      :class="[
        'bg-transparent flex-none lg:flex-initial hover:text-primary-500 mr-5 lg:mr-14 duration-200',
        { '!text-primary-500': activeFilterIdx === index },
        { 'text-secondary-950': activeFilterIdx !== index },
      ]"
      @click="activeFilterIdx = index"
    >
      {{ filter }}
    </button>
  </div>
</template>
