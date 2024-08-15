<script setup lang="ts">
const products = [
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-1.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-2.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-3.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-4.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-1.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-2.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-3.jpg",
  },
  {
    name: "Majesty Palm",
    price: "259$",
    imgUrl: "/images/product/flower-4.jpg",
  },
];
</script>

<template>
  <div class="container py-10">
    <HomeCategory></HomeCategory>
    <div class="flex items-center flex-wrap justify-start -mx-4">
      <template v-for="(product, index) of products" :key="index">
        <HomeProduct :data="product" />
      </template>
    </div>
  </div>
</template>
