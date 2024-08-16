<script setup lang="ts">
const headerRef = ref<HTMLDivElement>();
const scrollHandler = () => {
  if (headerRef.value) {
    if (window.scrollY <= headerRef.value.offsetHeight + 50) {
      headerRef.value.classList.add("translate-y-0");
      headerRef.value.classList.remove(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "translate-y-[calc(-100%-100px)]",
        "border-solid",
        "border-b-[1px]",
        "border-b-secondary-200",
      );
    } else if (window.scrollY > headerRef.value.offsetHeight + 50 && window.scrollY <= 200) {
      headerRef.value.classList.remove("translate-y-0");
      headerRef.value.classList.add("translate-y-[calc(-100%-100px)]");
    } else {
      headerRef.value.classList.remove("translate-y-[calc(-100%-100px)]");
      headerRef.value.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "right-0",
        "translate-y-0",
        "border-solid",
        "border-b-[1px]",
        "border-b-secondary-200",
      );
    }
  }
};
onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div class="h-[60px] lg:h-[80px] bg-white">
    <div ref="headerRef" class="z-50 bg-white duration-1000 ease-linear py-5">
      <div class="container grid grid-cols-4">
        <div class="h-[15px] lg:h-[25px] col-span-2 lg:col-span-1">
          <img src="/images/logos/logo.png" class="h-full object-contain" />
        </div>
        <div class="nav items-center justify-center hidden lg:flex lg:col-span-2">
          <NuxtLink href="/" class="nav__link active">Home</NuxtLink>
          <NuxtLink href="/product" class="nav__link pointer-events-none opacity-50">Products</NuxtLink>
          <NuxtLink href="/about" class="nav__link pointer-events-none opacity-50">About</NuxtLink>
        </div>
        <div class="col-span-2 lg:col-span-1 flex items-center justify-end">
          <div class="cart">
            <div class="cart__badge">0</div>
            <Icon name="mdi:cart-outline" size="24" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/core/variables";

.nav {
  &__link {
    @apply duration-200 ease-out relative block mx-10;
    color: $secondary-color;

    &::before {
      @apply absolute duration-200 ease-out left-0 right-0 -bottom-1 w-full h-[1px] -translate-x-full;
      content: "";
    }

    &.active,
    &:hover {
      color: darken($color: $primary-color, $amount: 20%);
    }

    &.active::before,
    &:hover::before {
      @apply translate-x-0;
      background-color: $primary-color;
    }
  }
}

.cart {
  position: relative;

  &:hover {
    @apply duration-200 ease-out -translate-y-1;
  }

  &__badge {
    right: -4px;
    top: -4px;
    z-index: 1;
    position: absolute;
    min-width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary-color;
    color: white;
    font-size: 0.7rem;
  }
}
</style>
