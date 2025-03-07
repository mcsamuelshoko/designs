<script lang="ts" setup>

import { onBeforeUnmount, onMounted, ref } from 'vue';

// Define the slides (can be dynamic or fetched from an API)
const slides = ref([
    {
        image: "https://images.pexels.com/photos/1799912/pexels-photo-1799912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 1',
        caption: 'Welcome to Slide 1'
    },
    {
        image: "https://images.pexels.com/photos/1840625/pexels-photo-1840625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 2',
        caption: 'This is Slide 2'
    },
    {
        image: "https://www.makistudio.online/_next/image?url=%2Fimages%2Fsite%2Fwaves-abstract.png&w=1920&q=75",
        alt: 'Slide 3',
        caption: 'And here is Slide 3'
    },
    {
        image: "https://images.pexels.com/photos/1840625/pexels-photo-1840625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 2a',
        caption: 'This is Slide 2a'
    },
    {
        image: "https://images.pexels.com/photos/1532704/pexels-photo-1532704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 3a',
        caption: 'And here is Slide 3a'
    },
]);

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
        <div
            v-for="(slide, index) in slides"
            :key="index"
            class="absolute top-0 left-0 w-full duration-300"
            :class="{'opacity-100': currentSlide === index, 'opacity-0': currentSlide !== index}"
        >
            <img
            :src="slide.image"
            :alt="slide.alt"
            class=" object-contain rounded-lg shadow-lg"
            />
            <div class="absolute bottom-4 left-4 text-white font-bold text-xl">
            {{ slide.caption }}
            </div>
        </div>
        </div>

        <!-- Buttons -->
        <!-- <div class="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button @click="prevSlide" class="p-2 bg-black bg-opacity-50 text-white rounded-full">
                &#10094;
            </button>
            </div>
            <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button @click="nextSlide" class="p-2 bg-black bg-opacity-50 text-white rounded-full">
                &#10095;
            </button>
        </div> -->

        <!-- Dot Navigation -->
        <div class="absolute p-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <button
                v-for="(slide, index) in slides"
                :key="index"
                :class="{'bg-primary/90': currentSlide === index, 'bg-white/80': currentSlide !== index}"
                @click="goToSlide(index)"
                class="w-3 h-3 rounded-full border-2 border-gray1B hover:cursor-pointer hover:border-accent hover:transition-all"
            >
            </button>
        </div>
    </section>
</template>

