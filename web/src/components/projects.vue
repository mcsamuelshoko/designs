<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as z from "zod";

import Playground from './playground.vue';
import Button from './button.vue'


const dArrowIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'/%3E%3C/svg%3E";
const plusLIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M17 15V5h-2v10H5v2h10v10h2V17h10v-2z'/%3E%3C/svg%3E";


const ProjectSchema = z.object({
    "id": z.string(),
    "name": z.string(),
    "category": z.string(),
    "tags": z.array(z.string()),
    "description": z.string(),
    "moreUrl": z.string(),
    "openUrl": z.string(),
    "date": z.string(),
    "bannerUrl": z.string(),
    "imageUrls": z.array(z.string()),
});
type Project = z.infer<typeof ProjectSchema>;



// Define the data for the accordion items
const projects = ref<Project[]>([]);

onMounted(async () => {
    const response = await fetch('/data/projects.json');
    const data = await response.json();
    projects.value = data;
});
// State to track the active index
const activeIndex = ref<number | null>(null);

// Function to toggle the accordion content
const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

// #################################################################################################
// #################################################################################################

// Define the slides (can be dynamic or fetched from an API)
const slides = ref([
    {
        image: "https://images.pexels.com/photos/1799901/pexels-photo-1799901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 1',
        caption: 'Welcome to Slide 1'
    },
    {
        image: "https://images.pexels.com/photos/1532704/pexels-photo-1532704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: 'Slide 2',
        caption: 'This is Slide 2'
    },
    {
        image: "https://images.pexels.com/photos/1840625/pexels-photo-1840625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ,
        alt: 'Slide 3',
        caption: 'And here is Slide 3'
    }
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

// Slide transition styles (calculates the transform for sliding effect)
function getSlideStyle(index: number) {
    const offset = currentSlide.value - index;
    const translateX = offset * 100; // Move the slides horizontally
    return {
        transform: `translateX(${translateX}%)`,
    };
}

// Automatic slide change every 3 seconds
let slideInterval: number;
onMounted(() => {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

onBeforeUnmount(() => {
    clearInterval(slideInterval); // Clear the interval when the component is destroyed
});
// ###################################################################################################
// ###################################################################################################

</script>

<style scoped>
.accordion-body {
    max-height: fit-content;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.accordion-body[style*="max-height: 0"] {
    display: none;
}
</style>

<style scoped>
/* Add transition for sliding effect */
.relative>.absolute {
    transition: transform 0.7s ease-in-out;
    /* Smooth sliding animation */
}

/* Customize the carousel dots and buttons */
.accordion-item {
    margin-bottom: 1rem;
}

.accordion-content {
    padding: 10px;
    background-color: #f0f0f0;
    display: none;
}

.accordion-item h3:hover+.accordion-content {
    display: block;
}
</style>

<template>
    <section id="work" class="border-b pt-8">
        <div class="text-8xl p-8 flex space-x-8 lg:space-x-16 font-bold">
            <p>See my work</p>
            <div>
                <img :src="dArrowIconUrl" alt="right arrow-icon" class="h-24 bg-[#ffa800] invert" />
            </div>
        </div>
        <ul class="uppercase font-bold grid grid-cols-3 font-display text-2xl pt-16">
            <li class="border-r h-16 flex flex-col justify-end px-8">Name</li>
            <li class="border-r h-16 flex flex-col justify-end px-8">Category</li>
            <li class=" h-16 flex flex-col justify-end px-8">Date</li>
        </ul>
    </section>
    <section id="projects">

        <div class="accordion">
            <div v-for="(project, index) in projects" :key="index" class="border-b">
                <button type="button"
                    class=" w-full hover:cursor-pointer hover:bg-white hover:text-accent transition-all"
                    @click="toggle(index)">
                    <div class="grid grid-cols-3 items-center h-12 text-2xl">
                        <p class="pl-8 capitalize">{{ project.name }}</p>
                        <p class="pl-8 capitalize">{{ project.category }}</p>
                        <div class="flex">
                            <p class="pl-8">{{ project.date.split('-')[2] }} </p>
                            <div class="ml-[30%] ">
                                <img :src="plusLIconUrl" alt="LinkedIn-icon" class="h-8 hover:invert transition-all">
                            </div>
                        </div>
                    </div>
                </button>
                <div v-show="activeIndex === index" class="accordion-body p-4">
                    <div class=" bg-primary1C grid grid-cols-1 md:grid-cols-12 transition-all duration-300">
                        <div class="md:col-span-8 w-full bg-primary1B/50 p-8">
                            <div class="w-full">
                                <img src="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="carousel" class="w-full max-h-[47vh] object-cover">
                                <div class="flex justify-end">
                                    <ul class="flex space-x-1 pt-2">
                                        <li>&ofcir;</li>
                                        <li>&cir;</li>
                                        <li>&cir;</li>
                                        <li>&cir;</li>
                                        <li>&cir;</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="md:col-span-4 p-8">
                            <p class=" text-2xl capitalize"> <span v-for="(tag, tIndex) in project.tags"
                                    :key="tIndex">{{ tag }}
                                    <span v-if="(project.tags.length - 1) != tIndex">&mdash; </span> </span></p>
                            <br>
                            <p class=" text-2xl opacity-50">{{ project.description }}</p>
                            <br>
                            <Button title="Visit" target="blank" :url="project.openUrl" />
                        </div>
                    </div>
                    <section id="carouselH">
                        <div class="relative w-full max-w-3xl mx-auto">
                            <!-- Carousel Slides -->
                            <div class="relative overflow-hidden">
                                <div v-for="(slide, index) in slides" :key="index"
                                    class="absolute inset-0 transition-all duration-700 ease-in-out"
                                    :style="getSlideStyle(index)">
                                    <img :src="slide.image" :alt="slide.alt"
                                        class="w-full h-auto object-cover rounded-lg shadow-lg" />
                                    <div class="absolute bottom-4 left-4 text-white font-bold text-xl">
                                        {{ slide.caption }}
                                    </div>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="absolute top-1/2 left-4 transform -translate-y-1/2">
                                <button @click="prevSlide" class="p-2 bg-black bg-opacity-50 text-white rounded-full">
                                    &#10094;
                                </button>
                            </div>
                            <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
                                <button @click="nextSlide" class="p-2 bg-black bg-opacity-50 text-white rounded-full">
                                    &#10095;
                                </button>
                            </div>

                            <!-- Dot Navigation -->
                            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                <button v-for="(slide, index) in slides" :key="index"
                                    :class="{ 'bg-white': currentSlide === index, 'bg-gray-400': currentSlide !== index }"
                                    @click="goToSlide(index)" class="w-3 h-3 rounded-full"></button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="border-b">
            <Playground />
        </div>
    </section>
</template>