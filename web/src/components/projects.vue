<script lang="ts" setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as z from "zod";

import Playground from './playground.vue';
import Button from './button.vue'
import Carousel from './carousel.vue';
import CarouselH from './carouselH.vue';


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
                <div v-show="activeIndex === index" class="accordion-body px-2">
                    <div class=" bg-primary1C grid grid-cols-1 md:grid-cols-12 transition-all duration-300">
                        <div class="md:col-span-8 w-full bg-primary1B/50 p-8">
                            <div class="w-full">
                                <Carousel />
                            </div>
                        </div>
                        <div class="md:col-span-4 p-8">
                            <p class=" text-2xl capitalize"> <span v-for="(tag, tIndex) in project.tags"
                                    :key="tIndex">{{ tag }}
                                    <span v-if="(project.tags.length - 1) != tIndex">&mdash; </span> </span></p>
                            <br>
                            <p class=" text-2xl opacity-50">{{ project.description }}</p>
                            <br>
                            <div class="flex flex-wrap  space-y-4 space-x-8">
                                <Button title="visit" target="blank" :url="project.openUrl" />
                                <!-- <Button title="expand"  :url="project.openUrl" /> -->
                            </div>
                        </div>
                    </div>
                    <!-- <section class="p-8 bg-blue-50 h-screen flex item-center justify-center">
                        <CarouselH />
                    </section> -->

                </div>

            </div>
        </div>
        <div class="border-b">
            <Playground />
        </div>
    </section>
</template>