<script setup lang="ts">
import { ref } from "vue"
import { StarIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
    image: string,
    name: string,
    genres: string[],
    description: string,
    rating: number,
}>()

const ratingActual = ref(props.rating);

function greet(rating: number) {
    ratingActual.value = rating
}

// TODO: Disable the button for the currently selected rating to prevent the user from giving the same rating twice.
// TODO: Separate buttons 
</script>

<template>
    <article class="flex max-w-xl flex-col items-start justify-between rounded-md bg-white">
        <div class="overflow-hidden max-h-[500px] w-full">
            <img :src="image" alt="name" class="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
                style="height: 550px;">
        </div>
        <div class="py-4 px-4">
            <div class="group relative">
                <h2 class="my-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {{ name }}
                </h2>
                <div class="flex">
                    <span v-for="gen in genres" key="gen">
                        <span
                            class="inline-flex items-center rounded-xl px-2 py-1 mr-2 text-xs font-medium text-white bg-indigo-500">
                            {{ gen }}
                        </span>
                    </span>
                </div>
                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {{ description }}
                </p>
            </div>
            <div class="mt-8 flex items-center">
                <p class="text-gray-600 pr-2">Rating: ({{ ratingActual }} / 5 )</p>
                <div class="flex">
                    <StarIcon class="h-8" :class="[ratingActual >= rate ? 'text-yellow-500' : 'text-gray-500']"
                        v-for="rate in 5" @click="greet(rate)" :id="rate" />
                </div>
            </div>
        </div>
    </article>
</template>
