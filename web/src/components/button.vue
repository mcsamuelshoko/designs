<script lang="ts" setup>

const { title, url, target } = defineProps<{
    title: string,
    url: string,
    target?: "blank" | "self",
}>();

const openTarget = (s: "blank" | "self" | undefined) => (s == "blank" ? "_blank" : "_self");




</script>
<template>
    <a :href="url" :target="openTarget(target)">
        <button class="rounded-full uppercase bg-blue-700 p-1 px-8 text-xl  hover:opacity-80 hover:cursor-pointer"
            type="button">{{ title }}</button>
    </a>
</template>