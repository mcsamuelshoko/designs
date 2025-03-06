<script lang="ts">
const linkStyling: string = "hover:text-accent hover:underline hover:cursor-pointer transition-all";

export default {
    name: 'Header',
    data() {
        return {
            stickyClass: 'opacity-0', // Initially hidden
            linkStyling: linkStyling
        };
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            const heroSectionHeight = window.innerHeight; // 100vh of the hero section
            if (scrollPosition >= heroSectionHeight) {
                this.stickyClass = 'opacity-100';
            } else {
                this.stickyClass = 'opacity-0';
            }
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<template>
    <header :class="stickyClass" class=" transition-all fixed top-0 left-0 w-full shadow z-50">
        <nav class="border-b h-12 bg-primary1C text-white capitalize flex items-center font-display">
            <ul class="flex-1 flex justify-between px-8 text-2xl">
                <li class="capitalize">
                    <a :class="linkStyling" href="/">Mc Samuel Shoko</a>
                </li>
                <li>
                    <a :class="linkStyling" href="#work">work</a>
                </li>
                <li>
                    <ul class="flex justify-between space-x-8 md:pr-16">
                        <li><a :class="linkStyling" href="#contact">contact</a></li>
                        <li><a :class="linkStyling" href="#about">about</a></li>
                    </ul>
                </li>

            </ul>
        </nav>
    </header>
</template>
