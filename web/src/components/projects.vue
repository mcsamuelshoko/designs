<script lang="ts" setup>
import Project from "./project.vue";

</script>

<template>
    <section id="workTitle" class="border-b">
        <div class="text-8xl p-8 flex">
            <p>See my work</p>
            <div><img src="" alt="down arrow"></div>
        </div>
        <ul class="uppercase font-bold grid grid-cols-3">
            <li class="border-r h-36 flex flex-col justify-end px-8">Name</li>
            <li class="border-r h-36 flex flex-col justify-end px-8">Description</li>
            <li class=" h-36 flex flex-col justify-end px-8">Date</li>
        </ul>
    </section>
    <section id="projects">
        <ul>
            <li class="border-b">
                <a href="">
                    <div class="grid grid-cols-3 items-center h-12">
                        <p class="pl-8">I -- Name|Kaiya Stanton</p>
                        <p class="pl-8">Description|Press</p>
                        <p class="pl-8">Date|2025</p>
                    </div>
                </a>
            </li>
            <li class="border-b">
                <a href="">
                    <div class="grid grid-cols-3 items-center h-12">
                        <p class="pl-8">II -- Name|Kaiya Stanton</p>
                        <p class="pl-8">Description|Press</p>
                        <p class="pl-8">Date|2025 <span class="ml-[50%]">&plus;</span> </p>
                    </div>
                </a>
            </li>
            <li class="border-b">
                <a href="">
                    <div class="grid grid-cols-3 items-center h-12">
                        <p class="pl-8">III -- Name|Kaiya Stanton</p>
                        <p class="pl-8">Description|Press</p>
                        <p class="pl-8">Date|2025</p>
                    </div>
                </a>
            </li>
            <li class="border-b">
                <a href="">
                    <div class="grid grid-cols-3 items-center h-12">
                        <p class="pl-8">IV -- Name|Kaiya Stanton</p>
                        <p class="pl-8">Description|Press</p>
                        <p class="pl-8">Date|2025</p>
                    </div>
                </a>
            </li>
            <li class="border-b">
                <Project />
            </li>
        </ul>
    </section>
</template>