<script lang="ts" setup>
import { BASE_URL } from '../shared/shared-constants';
import { updateWithBaseUrl } from '../shared/shared-functions';
import type { Project } from '../types/project-types';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const emailIconUrl:string  = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z'/%3E%3C/svg%3E";
const dArrowIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'/%3E%3C/svg%3E";



const images = ref<string[]>([]);

onMounted(async () => {
    const response = await fetch(updateWithBaseUrl('/data/projects.json',BASE_URL.href));
    const data = await response.json();
    const projects:Project[] = data;
    const tempImages:string[] = [];

    projects.forEach( project => {
      tempImages.push(project.bannerUrl);
      project.images.forEach(pImage => tempImages.push(pImage.image));
    })

    images.value = tempImages;

});

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

<template>
    <section id="heroLg" class="hidden md:block font-display relative h-[125vh] overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full" :style="{ backgroundImage: `url(${images[currentSlide]})` }">
        <div class="h-[25vh]   border-b flex justify-between p-8 relative bg-primary/30" :style="{ backgroundPosition: '0px -' + (0 * 20) + 'vh' }">
          <p class="capitalize text-8xl lg:text-9xl font-bold items-center ">Mc Samuel</p>
          <p class="capitalize text-3xl backdrop-blur-xl my-auto p-2 px-4 rounded-3xl">Brand Design</p>
        </div>
        <div class="h-[25vh]  border-b flex justify-between p-8 relative bg-primary/30" :style="{ backgroundPosition: '0px -' + (1 * 20) + 'vh' }">
          <p class="text-3xl backdrop-blur-xl my-auto p-2 px-4 rounded-3xl">UI/UX Design</p>
          <p class="capitalize text-3xl backdrop-blur-xl my-auto p-2 px-4 rounded-3xl">Web Design</p>
          <p class="capitalize text-8xl lg:text-9xl font-bold ">Shoko</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/30" :style="{ backgroundPosition: '0px -' + (2 * 20) + 'vh' }">
          <p class="capitalize text-8xl font-bold lg:text-9xl">Digital</p>
          <p class="capitalize text-8xl font-bold lg:text-9xl">Graphic</p>
          <p class="capitalize text-3xl backdrop-blur-xl my-auto p-2 px-4 rounded-3xl">Logo Identity</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/30" :style="{ backgroundPosition: '0px -' + (3 * 20) + 'vh' }">
          <ul class="flex space-x-4 px-8">
                <li><a  href="#contact" title="Goto contact section" class="flex space-x-8 hover:bg-accent hover:p-2 transition-all hover:rounded-xl">
                    <img :src="emailIconUrl" alt="LinkedIn-icon" class="h-16 lg:h-32 invert ">
                    <img :src="dArrowIconUrl" alt="LinkedIn-icon" class="h-16 lg:h-32 invert">
                </a>
                </li>
          </ul>
          <p class="capitalize text-8xl lg:text-9xl font-bold ">Designer</p>
        </div>
        <div class="h-[25vh] border-b flex justify-between p-8 relative bg-primary/30" :style="{ backgroundPosition: '0px -' + (4 * 20) + 'vh' }">
          <p class="capitalize text-8xl font-bold "></p>
        </div>
      </div>
    </section>
  </template>
