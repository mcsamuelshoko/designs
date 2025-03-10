<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const { baseUrl,} = defineProps<{
    baseUrl: string,
}>();


const currentWordIndex = ref(0);

// Function to cycle through the words every 2 seconds
onMounted(() => {
    setInterval(() => {
        currentWordIndex.value = (currentWordIndex.value + 1) % 5;
    }, 2000);
});

const wordClass = (index: number) => {
    return currentWordIndex.value === index ? 'opacity-100' : 'opacity-50';
};

</script>

<template>
    <section id="about" class="border-b">
        <div class="border-x border-dashed md:mx-40 px-8 flex items-center  h-[75vh]">
            <p class="text-4xl md:text-6xl font-display p-8">
                I take <span class="text-accent">ideas</span> and draw them with clear shapes and smart designs. <span
                    class="inline-flex relative top-4 animate-[ping_7s_infinite]"><img :src="`${baseUrl}/icons/star.svg`"
                        alt="star shape" class="h-16 -mb-4 animate-[spin_7s_infinite]  ease-in" /></span>
            </p>
        </div>
    </section>
    <section id="skills">
        <div class="border-b p-4 px-8">
            <p class="text-4xl md:text-6xl font-display transition-all">I make
                <span :class="wordClass(0)">websites, </span>
                <span :class="wordClass(1)">apps, </span>
                <span :class="wordClass(2)">branding, </span>
                <span :class="wordClass(3)">logos, </span>
                <span :class="wordClass(4)">ads </span>
            </p>
        </div>
        <div class="border-b  p-4 px-8">
            <p class="text-4xl md:text-6xl font-display text-accent"><span class="text-black/0 hidden lg:inline">I make websites,</span> that <span
                    class="text-white"> look good and</span> work great.</p>
        </div>
        <div class="border-b grid grid-cols-2 md:grid-cols-4">
            <div class="flex justify-center items-center border-r border-b md:border-b-0">
                <img :class="wordClass(0)" :src="`${baseUrl}/icons/websites-form.svg`" alt="star shape" class="h-64 p-8 ease-in " />
            </div>
            <div class="flex justify-center items-center md:border-r border-b md:border-b-0">
                <img :class="wordClass(1)" :src="`${baseUrl}/icons/apps-form.svg`" alt="star shape" class="h-64 p-8 ease-in " />
            </div>
            <div class="flex justify-center items-center border-r">
                <img :class="wordClass(2)" :src="`${baseUrl}/icons/branding-form.svg`" alt="star shape" class="h-64 p-8 ease-in " />
            </div>
            <div class="flex justify-center items-center">
                <img :class="wordClass(3)" :src="`${baseUrl}/icons/logo-form.svg`" alt="star shape" class="h-64 p-8 ease-in " />
            </div>
        </div>
        <div class="border-b grid grid-cols-1 md:grid-cols-4 h-16">
            <!-- <div class="hidden md:block">

            </div> -->
            <div class="md:col-span-3  md:border-r overflow-hidden">

                <ul :class="wordClass(4)" class='flex space-x-2 justify-center items-center animate-[wiggle_15s_infinite] text-7xl font-marker'>
                    <!-- Loop through the items and display each one -->
                    <li v-for="i in 19" :key="i" class="px-4">
                        <span >do&nbsp;great&nbsp;things&nbsp;* </span>
                    </li>
                </ul>

            </div>
            <div class="hidden md:block">

            </div>
        </div>

    </section>
    <section id="likes" class="grid md:grid-cols-2 lg:grid-cols-4 border-b">
        <div class="lg:col-span-3 md:border-r p-8 text-2xl md:text-4xl lg:text-6xl h-[30vh] md:h-[50vh] lg:h-[75vh] flex items-center">
            <div class="space-y-3">
                <p class="">I love helping &mdash; <br></p>
                <p class="bg-accent font-bold p-1 pr-4">new businesses grow.</p>
            </div>
        </div>
        <div class="p-8 flex items-center">
            <ul>
                <li>&mdash; Ambitious startups</li>
                <li>&mdash; Forward-thinking brands</li>
                <li>&mdash; Digital-first companies</li>
                <li>&mdash; Design-focused founders</li>
                <li>&mdash; Tech innovators</li>
                <li>&mdash; Modern Businesses</li>
                <li>&mdash; Creative Entrepreneurs</li>
                <li>&mdash; Growth-focused teams</li>
            </ul>
        </div>
    </section>
</template>