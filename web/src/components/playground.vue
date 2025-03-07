<script lang="ts" setup>
import Button from './button.vue'

const plusLIconUrl: string ="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M17 15V5h-2v10H5v2h10v10h2V17h10v-2z'/%3E%3C/svg%3E";
const subtractLIconUrl: string ="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='M5 15v2h22v-2z'/%3E%3C/svg%3E";
const asteriskIconUrl: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 32 32'%3E%3C!-- Icon from Carbon by IBM - undefined --%3E%3Cpath fill='currentColor' d='m28.316 13.949l-.632-1.898L17 15.612V4h-2v11.612L4.316 12.051l-.632 1.898l10.684 3.561L7.2 27.066l1.6 1.201l7.2-9.6l7.2 9.6l1.6-1.201l-7.168-9.556z'/%3E%3C/svg%3E";
</script>

<template>
    <a href="">
        <div class="grid grid-cols-3 items-center h-12 text-2xl">
            <p class="pl-8 capitalize">Best Project and counting</p>
            <p class="pl-8">Branding</p>
            <div class="flex">
                <p class="pl-8">2025  </p>
                <div class="ml-[30%] ">
                <img :src="plusLIconUrl" alt="LinkedIn-icon" class="h-8 invert hover:invert transition-all">
                </div>
            </div>
        </div>
    </a>
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
            <Button />
        </div>
    </div>
</template>