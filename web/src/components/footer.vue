<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="border-t">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b bg-accent lg:h-[40vh]">
            <div class="bg-primary md:bg-transparent flex align-center justify-center items-center md:border-r md:border-dashed border-white">
                <img src="/favicon.svg" class="h-36" alt="sub-mark logo">
                <!-- <SubMark class="h-6 bg-gree-500" /> -->
            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Contact</p>
                <ul class="flex-1 p-4  lg:border-r lg:border-dashed border-white  space-y-1">
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5"
                            title="visit LinkedIn">Linkedin&nbsp;&nearrow;</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">Twitter&nbsp;&nearrow;</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://discord.com/users/generalseven" title="Visit Discord">Discord&nbsp;&nearrow;</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://github.com/mcsamuelshoko" title="Visit Github">Github&nbsp;&nearrow;</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">Instagram&nbsp;&nearrow;</a></li>
                    <li><a target="_blank" class="hover:bg-black transition-all underline hover:no-underline p-1 hover:px-4 hover:rounded-4xl" href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">Linktree&nbsp;&nearrow;</a></li>
                </ul>

            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Credits</p>
                <ul class="flex-1 p-4 md:border-r md:border-dashed border-white  space-y-1">
                    <li><p>Portfolio inspiration &mdash; French designer Maelan Lemeur via LapaNinja</p></li>
                    <li><p>Icons &mdash; Carbon Icons by IBM</p></li>
                    <li><br></li>
                    <li><p>Design &mdash; Mc Samuel Shoko, in Figma</p></li>
                    <li><p>Developer &mdash; Mc Samuel Shoko, in VSCode</p></li>
                </ul>
            </div>
            <div class="flex flex-col">
                <p class="uppercase bg-primary px-4 pt-8 pb-2 font-display text-2xl">Website stack</p>
                <ul class="flex-1 flex flex-col p-4 space-y-1">
                    <li><a href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">Astro</a>
                    </li>
                    <li><a href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">Vue.js</a></li>
                    <li><a href="https://discord.com/users/generalseven" title="Visit Discord">Tailwind Css</a></li>
                    <li class="h-4"></li>
                    <li><a href="https://html.com/" title="Visit Html5">Html5</a></li>
                    <li><a href="https://www.typescriptlang.org/" title="Visit Typescript">Typescript</a></li>
                    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" title="visit Css">Css</a></li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center items-center h-12 font-display text-2xl">
            <p class="uppercase">&copy; All rights reserved &mdash; {{ currentYear }}</p>
        </div>
    </footer>
</template>
