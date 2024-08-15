<script lang="ts" setup>
import type Swiper from "swiper";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import type { VNodeRef } from "vue";

const isVisible = ref(false);
const swiperRef = ref<VNodeRef | null>(null);
const slideIndex = ref(0);

const sliderImgs = [
  "/images/product/flower-8-removebg.png",
  "/images/product/flower-7-removebg.png",
  "/images/product/flower-1-removebg.png",
];

onMounted(() => {
  isVisible.value = true;
});

const onSwiper = (swiper: Swiper) => {
  swiperRef.value = swiper;
};

const swiperNextSlide = () => {
  swiperRef?.value?.slideNext?.();
};

const swiperPrevSlide = () => {
  swiperRef?.value?.slidePrev?.();
};

const onSlideChange = (swiper: Swiper) => {
  slideIndex.value = swiper.activeIndex;
};
</script>

<template>
  <div class="relative banner">
    <img class="banner__box" src="/images/icon/box.svg" />
    <img class="banner__box--forward" src="/images/icon/store.png" />
    <div class="relative lg:absolute w-full h-[60vh] lg:h-full inset-0 bg-[#F3F3F3]">
      <div class="container py-20">
        <Transition name="fade" appear>
          <div v-show="isVisible" class="w-full lg:w-4/12 flex flex-col max-h-[500px]">
            <h1
              class="text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-normal font-semibold mb-4"
            >
              Send <span class="text-primary-500">flowers</span> like<br class="hidden lg:inline" />
              you mean it
            </h1>
            <p class="leading-loose text-base text-justify text-secondary-500">
              Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will make
              it special cursus a sit amet mauris.
            </p>
          </div>
        </Transition>
      </div>
    </div>
    <swiper-container
      class="h-[450px] swiper__wrap hidden lg:block"
      :autoplay="true"
      :ref="swiperRef"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperNavLeft :is-disabled="slideIndex === 0" @swiper-prev-slide="swiperPrevSlide"></SwiperNavLeft>
      <SwiperNavRight
        :is-disabled="slideIndex === sliderImgs.length - 1"
        @swiper-next-slide="swiperNextSlide"
      ></SwiperNavRight>
      <template v-for="sliderImg in sliderImgs">
        <swiper-slide class="w-full h-full">
          <img :src="sliderImg" class="w-full h-full object-contain slider__img" />
        </swiper-slide>
      </template>
    </swiper-container>
  </div>
</template>

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

.slider__img {
  height: 600px;
  object-position: 80% 0px;
  animation: SlowZoom 20s linear infinite;
}

.banner__box {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.3;
  object-fit: contain;
  inset: 1rem 1rem 0 0;
  transform: rotate(0) translateY(-10px);
  animation: RotateAndMove 10s linear infinite forwards;
  z-index: 20;
}

.banner__box--forward {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0.4;
  bottom: 0;
  left: 0;
  object-fit: contain;
  animation: MovingUpDown 4s linear infinite forwards;
  z-index: 20;

  @media screen and (max-width: 1025px) {
    left: unset;
    right: 0;
  }
}

@keyframes RotateAndMove {
  0% {
    transform: rotate(0) translateY(-10px);
  }
  50% {
    transform: rotate(180deg) translateY(0px);
  }
  100% {
    transform: rotate(360deg) translateY(4px);
  }
}

@keyframes MovingUpDown {
  0%,
  100% {
    transform: translateY(-12px);
  }
  25% {
    transform: translateY(-8px);
  }
  50% {
    transform: translateY(-4px);
  }
  75% {
    transform: translateY(0px);
  }
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
