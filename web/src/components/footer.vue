<script lang="ts" setup>
const { baseUrl,} = defineProps<{
    baseUrl: string,
}>();

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b bg-accent lg:min-h-[40vh]">
            <div class="bg-primary md:bg-transparent flex align-center justify-center items-center md:border-r md:border-solid border-white">
                <img :src="`${baseUrl}/favicon.svg`" class="h-36" alt="sub-mark logo">
                <!-- <SubMark class="h-6 bg-gree-500" /> -->
            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Contact</p>
                <ul class="flex-1 p-4  lg:border-r lg:border-solid border-white  space-y-1 uppercase">
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5"
                            title="visit LinkedIn">Linkedin</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://behance.com/mcsamuelshoko" title="Visit Behance">Behance</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://dribbble.com/mcsamuelshoko" title="Visit Github">Dribble</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">Twitter</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://discord.com/users/generalseven" title="Visit Discord">Discord</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://gitlab.com/mcsamuelshoko" title="Visit Gitlab">Gitlab</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://github.com/mcsamuelshoko" title="Visit Github">Github</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">Instagram</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">Linktree</a></li>
                </ul>

            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Credits</p>
                <ul class="flex-1 p-4 md:border-r md:border-solid border-white  space-y-2">
                    <li><p><span class="uppercase font-bold">Portfolio inspiration</span> <br> &mdash; French designer Maelan Lemeur via LapaNinja</p></li>
                    <li><p><span class="uppercase font-bold">Icons</span> <br> &mdash; Carbon Icons by IBM</p></li>
                    <li><br></li>
                    <li><p><span class="uppercase font-bold">Design</span> <br> &mdash; Mc Samuel Shoko, in Figma</p></li>
                    <li><p><span class="uppercase font-bold">Developer</span> <br> &mdash; Mc Samuel Shoko, in VSCode</p></li>
                </ul>
            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Website stack</p>
                <ul class="flex-1 flex flex-col p-4 space-y-1">
                    <li><a href="https://astro.build/" target="_blank" title="visit Astro" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Astro</a>
                    </li>
                    <li><a href="https://vuejs.org/" target="_blank" title="Visit Vuejs" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Vue.js</a></li>
                    <li><a href="https://tailwindcss.com/" target="_blank" title="visit Tailwind Css" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Tailwind Css</a></li>
                    <li class="h-4"></li>
                    <li><a href="https://html.com/" target="_blank" title="Visit Html5" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Html5</a></li>
                    <li><a href="https://www.typescriptlang.org/" target="_blank" title="Visit Typescript" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Typescript</a></li>
                    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" title="visit Css" class="hover:bg-black transition-all  hover:no-underline p-1 hover:px-4 hover:rounded-4xl">Css</a></li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center items-center h-12 font-display text-2xl">
            <p class="uppercase">&copy; All rights reserved &mdash; {{ currentYear }}</p>
        </div>
    </footer>
</template>
