<template>
    <section id="heroLg" class="hidden md:block font-display relative h-[125vh] overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full" :style="{ backgroundImage: `url(${images[currentSlide]})` }">
        <div class="h-[25vh]   border-b flex justify-between p-8 relative bg-primary/20" :style="{ backgroundPosition: '0px -' + (0 * 20) + 'vh' }">
          <p class="capitalize text-9xl font-bold items-center ">Markos</p>
          <p class="capitalize text-3xl ">Brand Design</p>
        </div>
        <div class="h-[25vh]  border-b flex justify-between p-8 relative bg-primary/20" :style="{ backgroundPosition: '0px -' + (1 * 20) + 'vh' }">
          <p class="text-3xl ">UI/UX Design</p>
          <p class="capitalize text-3xl ">Web Design</p>
          <p class="capitalize text-8xl font-bold ">Savant</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/20" :style="{ backgroundPosition: '0px -' + (2 * 20) + 'vh' }">
          <p class="capitalize text-8xl font-bold ">Digital</p>
          <p class="capitalize text-9xl font-bold ">Graphic</p>
          <p class="capitalize text-3xl ">Logo Identity</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/20" :style="{ backgroundPosition: '0px -' + (3 * 20) + 'vh' }">
          <p class="capitalize text-9xl font-bold ">Designer</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/20" :style="{ backgroundPosition: '0px -' + (4 * 20) + 'vh' }">
          <p class="capitalize text-9xl font-bold "></p>
        </div>
      </div>
    </section>
  </template>

  <script lang="ts" setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const images = ref([
    'https://images.pexels.com/photos/1799912/pexels-photo-1799912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=2',
    'https://images.pexels.com/photos/1840625/pexels-photo-1840625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=2',
    'https://images.pexels.com/photos/1532704/pexels-photo-1532704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=2',
    'https://images.pexels.com/photos/1799912/pexels-photo-1799912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=2',
  ]);

  const currentSlide = ref(0);

  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % images.value.length;
  }

  let intervalId: number | null = null;

  onMounted(() => {
    intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });

  onBeforeUnmount(() => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval when the component is destroyed
    }
  });
  </script>

  <style lang="css" scoped>
  section {
    transition: all 1s ease-in-out;
  }
  </style>