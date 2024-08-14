<template>
  <div class="relative">
    <div class="absolute w-full h-full inset-0 bg-[#F3F3F3]">
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
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
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
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/vue";

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const modules = [Navigation];
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
