<template>
  <div class="relative">
    <div class="absolute w-full h-full inset-0 bg-[#F3F3F3]">
      <button class="slider__nav slider__nav-left" @click="swiperPrevSlide">
        <Icon name="mdi:chevron-left" size="30" />
      </button>
      <button class="slider__nav slider__nav-right" @click="swiperNextSlide">
        <Icon name="mdi:chevron-right" size="30" />
      </button>
      <div class="container py-20">
        <Transition name="fade" appear>
          <div v-show="isVisible" class="w-4/12 flex flex-col max-h-[500px]">
            <h1 class="text-5xl leading-normal font-semibold mb-4">
              Send <span class="text-primary-500">flowers</span> like<br />
              you mean it
            </h1>
            <p class="leading-loose text-lg text-justify">
              Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make
              it special cursus a sit amet mauris.
            </p>
          </div>
        </Transition>
      </div>
    </div>
    <swiper
      :ref="swiperRef"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="h-[500px]"
    >
      <swiper-slide class="w-full h-full">
        <img src="/images/product/flower-8-removebg.png" class="w-full h-full object-contain slider__img" />
      </swiper-slide>
      <swiper-slide class="w-full h-full">
        <img src="/images/product/flower-7-removebg.png" class="w-full h-full object-contain slider__img" />
      </swiper-slide>
      <swiper-slide class="w-full h-full">
        <img src="/images/product/flower-1-removebg.png" class="w-full h-full object-contain slider__img" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const isVisible = ref(false);

const swiperRef = ref(null);

onMounted(() => {
  isVisible.value = true;
});

const onSwiper = (swiper) => {
  console.log(swiper);
  swiperRef.value = swiper;
};

const swiperNextSlide = () => {
  swiperRef.value.slideNext();
};

const swiperPrevSlide = () => {
  swiperRef.value.slidePrev();
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}

.slider__nav {
  @apply bg-secondary-100 p-2 w-[40px] h-[40px] flex items-center justify-center duration-200;
  &:hover {
    @apply bg-primary-500 text-white;
  }

  &.slider__nav-left {
    @apply absolute z-10 left-2 top-[50%] translate-y-[-50%];
  }

  &.slider__nav-right {
    @apply absolute z-10 right-2 top-[50%] translate-y-[-50%];
  }
}

.slider__img {
  height: 600px;
  object-position: 80% 0px;
  animation: SlowZoom 20s linear infinite;
}

@keyframes SlowZoom {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}
</style>
