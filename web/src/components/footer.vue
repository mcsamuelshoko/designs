<script setup lang="ts">
    const currentYear =1 ;
</script>

<template>
    <footer>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div class="flex align-center justify-center">
                <img src="" alt="sub-mark logo">
            </div>
            <div class="flex flex-col">
                <p class="uppercase">Contact</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">Linkedin</a></li>
                    <li><a href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">X (Twitter)</a></li>
                    <li><a href="https://discord.com/users/generalseven" title="Visit Discord">Discord</a></li>
                    <li><a href="https://github.com/mcsamuelshoko" title="Visit Github">Github</a></li>
                    <li><a href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">Instagram</a></li>
                    <li><a href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">Linktree</a></li>
                </ul>

            </div>
            <div class="flex flex-col">
                <p class="uppercase">Credits</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">Linkedin</a></li>
                    <li><a href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">X (Twitter)</a></li>
                    <li><a href="https://discord.com/users/generalseven" title="Visit Discord">Discord</a></li>
                    <li><a href="https://github.com/mcsamuelshoko" title="Visit Github">Github</a></li>
                    <li><a href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">Instagram</a></li>
                    <li><a href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">Linktree</a></li>
                </ul>
            </div>
            <div class="flex flex-col">
                <p class="uppercase">Website stack</p>
                <ul class="flex-1 flex flex-col">
                    <li><a href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">Astro</a></li>
                    <li><a href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)">Vue.js</a></li>
                    <li><a href="https://discord.com/users/generalseven" title="Visit Discord">Tailwind Css</a></li>
                    <li class="flex-1"></li>
                    <li><a href="https://html.com/" title="Visit Html5">Html5</a></li>
                    <li><a href="https://www.typescriptlang.org/" title="Visit Typescript">Typescript</a></li>
                    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html" title="visit Css">Css</a></li>
                </ul>
            </div>
        </div>
        <div class="">
            <p class="uppercase">&copy; All rights reserved &mdash; {{ currentYear }}</p>
        </div>
    </footer>
</template>
