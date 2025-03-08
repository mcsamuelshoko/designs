<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import type { Image } from '../types/project-types';
import { updateWithBaseUrl } from '../shared/shared-functions';

const { slideImages, baseUrl } = defineProps<{
    slideImages: Image[],
    baseUrl: string
}>()

// Define the slides (can be dynamic or fetched from an API)

const slides = ref<Image[]>(slideImages);

// Reactive property for the current slide
const currentSlide = ref(0);

// Function to go to the next slide
function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

// Function to go to the previous slide
function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}

// Function to go to a specific slide
function goToSlide(index: number) {
    currentSlide.value = index;
}

// Automatic slide change every 3 seconds
let slideInterval: number;
onMounted(() => {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

onBeforeUnmount(() => {
    clearInterval(slideInterval); // Clear the interval when the component is destroyed
});

</script>

<template>
    <section id="dynamicCarousel" class="relative w-full h-[85vh]">
        <!-- Carousel Slides -->
        <div class="relative">
            <div v-for="(slide, index) in slides" :key="index" class="absolute top-0 left-0 w-full duration-300"
                :class="{ 'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index }">
                <img :src="updateWithBaseUrl(slide.image,baseUrl)" :alt="slide.alt" class=" object-contain  w-full h-[83vh]" />
                <div class="absolute bottom-40 -left-24 text-white/50 font-mono font-medium uppercase -rotate-90 ">
                    {{ slide.caption }}
                </div>
            </div>
        </div>

        <!-- Dot Navigation -->
        <div class="absolute p-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button v-for="(slide, index) in slides" :key="index"
                :class="{ 'bg-primary/90': currentSlide === index, 'bg-white/80': currentSlide !== index }"
                @click="goToSlide(index)"
                class="w-3 h-3 rounded-full border-2 border-gray1B hover:cursor-pointer hover:border-accent hover:transition-all">
            </button>
        </div>
    </section>
</template>
