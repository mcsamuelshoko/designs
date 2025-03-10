<script lang="ts" setup>

const discordIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M25.7 7.1Q23 5.9 20 5.3h-.1c-.2.4-.5 1-.7 1.5c-2.2-.3-4.3-.3-6.4 0c-.2-.5-.5-1-.7-1.5H12q-3 .45-5.7 1.8C2.7 12.5 1.7 17.8 2.2 23v.1c2.4 1.8 4.7 2.8 7 3.5h.1c.5-.7 1-1.5 1.4-2.3v-.1c-.8-.3-1.5-.6-2.2-1c-.1 0-.1-.1 0-.1c.1-.1.3-.2.4-.3H9c4.6 2.1 9.5 2.1 14.1 0h.1c.1.1.3.2.4.3c.1 0 0 .1 0 .1c-.7.4-1.4.8-2.2 1c0 0-.1.1 0 .1c.4.8.9 1.6 1.4 2.3h.1c2.3-.7 4.6-1.8 7-3.5V23c.6-6-1-11.2-4.2-15.9M11.4 19.9c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8m9.3 0c-1.4 0-2.5-1.3-2.5-2.8s1.1-2.8 2.5-2.8s2.5 1.3 2.5 2.8s-1.1 2.8-2.5 2.8'/%3E%3C/svg%3E";
const xIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M18.234 14.162L26.977 4h-2.072l-7.591 8.824L11.25 4H4.258l9.169 13.343L4.258 28H6.33l8.016-9.318L20.75 28h6.993zm-2.837 3.299l-.93-1.329L7.078 5.56h3.182l5.964 8.532l.93 1.329l7.753 11.09h-3.182z'/%3E%3C/svg%3E";
const linkedInUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z'/%3E%3C/svg%3E";
const emailIconUrl:string  = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z'/%3E%3C/svg%3E";
const githubIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2'/%3E%3C/svg%3E";
const linkTreeIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M18.57 28C17.897 26.725 16 22.226 16 12v-.131l1.117.744A6.46 6.46 0 0 1 20 18h2a8.46 8.46 0 0 0-3.773-7.05L16.803 10h1.53a7.04 7.04 0 0 1 4.2 1.4l1.867 1.4l1.2-1.6l-1.867-1.4a9.06 9.06 0 0 0-5.4-1.8h-1.216A7.03 7.03 0 0 1 22 6h2V4h-2a9.04 9.04 0 0 0-7 3.364A9.04 9.04 0 0 0 8 4H6v2h2a7.03 7.03 0 0 1 4.883 2h-1.216a9.06 9.06 0 0 0-5.4 1.8L4.4 11.2l1.2 1.6l1.867-1.4a7.04 7.04 0 0 1 4.2-1.4h1.53l-1.423.95A8.46 8.46 0 0 0 8 18h2a6.46 6.46 0 0 1 2.883-5.387L14 11.87V12c0 8.944 1.412 13.765 2.361 16H2v2h28v-2Z'/%3E%3C/svg%3E";
const instagramIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Ccircle cx='22.406' cy='9.594' r='1.44' fill='currentColor'/%3E%3Cpath fill='currentColor' d='M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4'/%3E%3Cpath fill='currentColor' d='M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4'/%3E%3C/svg%3E";
const rArrowIconUrl:string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z'/%3E%3C/svg%3E";
const dArrowIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M24.59 16.59L17 24.17V4h-2v20.17l-7.59-7.58L6 18l10 10l10-10z'/%3E%3C/svg%3E";

</script>

<template>
    <section id="contact" class="">
        <div class="border-b grid md:grid-cols-2 md:text-2xl">
            <p class="md:border-r border-b md:border-b-0 p-8 md:py-16 lg:py-24">
                Every pixel has a purpose in my work. <br>
                I focus on clean designs that help <br class="hidden lg:block">
                your business grow and make <br class="hidden lg:block">
                customers happy.</p>
            <p class="p-8  md:py-16 lg:py-24">
                I turn messy thoughts into sharp designs.<br>
                Ideas get a clean look that grabs attention<br class="hidden lg:block">
                and works. My designs don't only look good &mdash; <br class="hidden lg:block">
                they solve problems and help you reach your goals.
            </p>
        </div>
        <div class="border-b grid md:grid-cols-2 p-8">
            <div>
                <p class="text-2xl">
                    Let&apos;s turn great <b class="text-accent">ideas</b> into <br>
                    something real <span class="inline-flex">
                        <img :src="rArrowIconUrl" alt="right arrow-icon" class="h-6 invert hidden md:block"/>
                        <img :src="dArrowIconUrl" alt="right arrow-icon" class="h-6 invert md:hidden"/>
                    </span>
                </p>
            </div>
            <ul class="flex space-x-4 lg:px-8">
                <li><a target="_blank" href="https://www.linkedin.com/in/mc-samuel-shoko-2483731b5" title="visit LinkedIn">
                    <img :src="linkedInUrl" alt="LinkedIn-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a>
                </li>
                <li><a target="_blank" href="https://twitter.com/mcsamuelshoko" title="Visit X(Twitter)" class="">
                    <img :src="xIconUrl" alt="x-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a></li>
                <li><a target="_blank" href="https://discord.com/users/generalseven" title="Visit Discord">
                    <img :src="discordIconUrl" alt="discord-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a>

                </li>
                <li><a target="_blank" href="https://github.com/mcsamuelshoko" title="Visit Github">
                    <img :src="githubIconUrl" alt="github-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a></li>
                <li><a href="https://instagram.com/mcsamuelshoko" title="Visit Instagram">
                    <img :src="instagramIconUrl" alt="github-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a></li>
                <li><a target="_blank" href="https://linktr.ee/mcsamuelshoko" title="visit Linktree profile">
                    <img :src="linkTreeIconUrl" alt="github-icon" class="h-16 invert hover:bg-[#ffa800] hover:p-1 transition-all hover:rounded-xl">
                </a></li>
            </ul>
        </div>
    </section>
</template>