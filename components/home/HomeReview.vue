<script lang="ts" setup>
import type Swiper from "swiper";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import type { VNodeRef } from "vue";

const isVisible = ref(false);
const swiperRef = ref<VNodeRef | null>(null);
const slideIndex = ref(0);

const sliderImgs = [
  "/images/user/user-1.png",
  "/images/user/user-2.png",
  "/images/user/user-3.png",
  "/images/user/user-4.png",
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
  <div class="container flex items-center justify-center py-10">
    <swiper-container
      class="h-[500px] w-10/12 swiper__wrap"
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
        <swiper-slide class="w-full h-full flex flex-col items-center justify-center">
          <img :src="sliderImg" class="w-[100px] h-[100px] rounded-full mb-5" />
          <p class="text-xl leading-loose text-center text-secondary-800 font-medium mb-8">
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus lingua.
          </p>
          <p class="text-base font-semibold mb-3">Reviewer</p>
          <p class="text-sm text-secondary-400">Florist</p>
        </swiper-slide>
      </template>
    </swiper-container>
  </div>
</template>
