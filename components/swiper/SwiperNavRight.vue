<script setup lang="ts">
const { isDisabled } = defineProps(["isDisabled"]);
defineEmits(["swiperNextSlide"]);
</script>

<template>
  <button :disabled="isDisabled" class="slider__nav slider__nav-right" @click="$emit('swiperNextSlide')">
    <Icon name="mdi:chevron-right" size="30" />
  </button>
</template>
