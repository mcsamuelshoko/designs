<script lang="ts" setup>
import Button from './button.vue'

const plusLIconUrl: string ="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M17 15V5h-2v10H5v2h10v10h2V17h10v-2z'/%3E%3C/svg%3E";
const subtractLIconUrl: string ="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M5 15v2h22v-2z'/%3E%3C/svg%3E";
const asteriskIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='m28.316 13.949l-.632-1.898L17 15.612V4h-2v11.612L4.316 12.051l-.632 1.898l10.684 3.561L7.2 27.066l1.6 1.201l7.2-9.6l7.2 9.6l1.6-1.201l-7.168-9.556z'/%3E%3C/svg%3E";
const basketballIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m11.95 13h-5.91a14.4 14.4 0 0 1 2.738-7.153A11.94 11.94 0 0 1 27.95 15M17 15V4.05a11.9 11.9 0 0 1 6.287 2.438A16.27 16.27 0 0 0 20.04 15Zm-2 0h-3.04a16.27 16.27 0 0 0-3.247-8.512A11.9 11.9 0 0 1 15 4.051Zm0 2v10.95a11.9 11.9 0 0 1-6.287-2.438A16.27 16.27 0 0 0 11.96 17Zm2 0h3.04a16.27 16.27 0 0 0 3.248 8.512A11.9 11.9 0 0 1 17 27.949ZM7.22 7.847A14.4 14.4 0 0 1 9.96 15H4.051a11.94 11.94 0 0 1 3.17-7.153M4.05 17h5.91a14.4 14.4 0 0 1-2.738 7.153A11.94 11.94 0 0 1 4.05 17m20.73 7.153A14.4 14.4 0 0 1 22.04 17h5.908a11.94 11.94 0 0 1-3.17 7.153'/%3E%3C/svg%3E";
const infinityIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M23 23c-5.656 0-7.858-6.41-7.949-6.684C15.034 16.265 13.208 11 9 11c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.588 0 3.013-.732 4.237-2.176l1.526 1.293C13.164 22.003 11.172 23 9 23c-3.86 0-7-3.14-7-7s3.14-7 7-7c5.656 0 7.858 6.41 7.949 6.684C16.966 15.735 18.792 21 23 21c2.757 0 5-2.243 5-5s-2.243-5-5-5c-1.588 0-3.013.732-4.237 2.176l-1.526-1.293C18.836 9.997 20.828 9 23 9c3.86 0 7 3.14 7 7s-3.14 7-7 7'/%3E%3C/svg%3E";


const currentYear = new Date().getFullYear();

</script>

<template>
    <button type="button" class="hover:bg-accent w-full">
        <div class="grid grid-cols-3 items-center h-12 text-2xl w-full">
            <p class="pl-8 capitalize">Creativity Playground</p>
            <p class="pl-8">No Limits Work</p>
            <div class="flex">
                <p class="pl-8">2023 &mdash; {{ currentYear }}  </p>
                <div class="ml-[30%] ">
                <img :src="basketballIconUrl" alt="LinkedIn-icon" class="h-8 invert hover:invert transition-all">
                </div>
            </div>
        </div>
    </button>
    <div class=" bg-primary1C grid grid-cols-1 md:grid-cols-12">
        <div class="md:col-span-8 w-full bg-primary1B/50 p-8">
            <div class="w-full">
                <img src="https://images.pexels.com/photos/804269/pexels-photo-804269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel" class="w-full max-h-[47vh] object-cover">
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
            <p class=" text-2xl">Branding &mdash; Logo &mdash; Exhibition &mdash; Curated</p>
            <br>
            <Button title="More" url="#!" />
        </div>
    </div>
</template>