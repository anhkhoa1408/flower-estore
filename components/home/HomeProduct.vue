<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>

<template>
  <a class="product-card">
    <div class="product-card__img">
      <img :src="data.imgUrl" class="w-full h-full object-cover" />
    </div>
    <div class="mt-4 flex items-center justify-between">
      <h3 class="font-semibold text-sm text-slate-700">{{ data.name }}</h3>
      <p class="font-semibold text-sm text-slate-700">{{ data.price }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.product-card {
  @apply m-4 relative;
  flex-basis: 25%;
  max-width: 25%;

  &__img {
    @apply h-[300px] relative;

    img {
      @apply ease-linear duration-200;
    }
  }

  &__img::before {
    content: "";
    z-index: 20;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    width: 100%;
    height: 0;
    transition: all 0.5s ease;
    background-color: rgba($color: #000000, $alpha: 0.1);
  }

  &:hover {
    .product-card__img img {
      object-position: center calc(50% - 5px);
    }

    .product-card__img::before {
      top: 0;
      bottom: 0;
      height: 100%;
    }
  }
}
</style>
