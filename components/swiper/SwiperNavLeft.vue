<script setup lang="ts">
const { isDisabled } = defineProps(["isDisabled"]);
defineEmits(["swiperPrevSlide"]);
</script>

<template>
  <button :disabled="isDisabled" class="slider__nav slider__nav-left" @click="$emit('swiperPrevSlide')">
    <Icon name="mdi:chevron-left" size="30" />
  </button>
</template>
