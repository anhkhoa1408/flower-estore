<template>
  <div class="h-[450px] subscribe flex flex-col items-center justify-center">
    <h1
      class="text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-relaxed lg:leading-normal font-semibold text-white font-semibold mb-5"
    >
      Join The Colorful Bunch!
    </h1>
    <div class="subscribe__input-wrap">
      <input type="email" placeholder="example@email.com" />
      <button>SUBSCRIBE</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  background-image: url("/public/images/background/subscribe.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: -200px 0px;

  &__input-wrap {
    background-color: white;
    height: 50px;
    display: flex;
    align-items: center;

    input {
      @apply outline-none p-4 text-xs lg:text-sm w-[200px] lg:w-[500px];
      height: 100%;
    }

    button {
      @apply outline-none px-4 py-2 lg:px-8 lg:py-4 bg-primary-500 border-2 border-solid border-primary-500 text-white text-xs lg:text-sm;
      height: 100%;
    }

    &:has(input:focus) {
      @apply ring-primary-500 ring-1 ring-offset-1;
    }
  }
}
</style>
