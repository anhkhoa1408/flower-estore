<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>

<template>
  <a class="product-card">
    <div class="product-card__img">
      <img :src="data.imgUrl" class="w-full h-full object-cover" />
      <div class="product-card__action">
        <button>Add to cart</button>
        <button>View detail</button>
      </div>
    </div>

    <div class="mt-4 flex items-center justify-between">
      <h3 class="font-semibold text-sm text-slate-700">{{ data.name }}</h3>
      <p class="font-semibold text-sm text-slate-700">{{ data.price }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.product-card {
  @apply m-4 relative basis-[calc(100%-32px)] max-w-[calc(100%-32px)] md:basis-[calc(50%-32px)] md:max-w-[calc(50%-32px)] xl:basis-[calc(25%-32px)] xl:max-w-[calc(25%-32px)];

  &__img {
    @apply h-[300px] md:h-[330px] relative;

    img {
      @apply ease-linear duration-200;
    }

    &::before {
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
  }

  &__action {
    transition: all 0.5s ease;
    opacity: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      @apply px-4 py-2 my-1 bg-secondary-50 hover:bg-white active:bg-white z-10 text-xs font-medium;
    }
  }

  &:hover {
    .product-card__img img {
      filter: blur(1px);
      object-position: center calc(50% - 5px);
    }

    .product-card__img::before {
      top: 0;
      bottom: 0;
      height: 100%;
    }

    .product-card__action {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
