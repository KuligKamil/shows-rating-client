<script setup lang="ts">
import { ref } from "vue";
import RatingButton from "@/components/RatingButton.vue";
import { StarIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
    id: number,
    image: string,
    name: string,
    genres: string[],
    description: string,
    rating: number,
}>()

const ratingActual = ref(props.rating);

function onClickRate(rating: number) {
    ratingActual.value = rating;
}

</script>

<template>
    <article class="flex max-w-xl flex-col items-start justify-between rounded-md bg-white static">
        <div class="overflow-hidden max-h-[500px] w-full relative">
            <div class="absolute top-0 right-0">
                <div class="relative flex justify-center items-center">
                    <StarIcon class="h-16" :class="[ratingActual ? 'text-yellow-500' : 'text-gray-500']" />
                    <span class="absolute">{{ ratingActual }}</span>
                </div>

            </div>
            <img :src="image" alt="name" class="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-md"
                style="height: 550px;">
        </div>
        <div class="py-4 px-4">
            <div class="group relative">
                <h2 class="my-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {{ name }}
                </h2>
                <div class="flex">
                    <span v-for=" gen  in  genres " :key="`${id}-${genre}`">
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
                <p class="text-gray-600 pr-2">
                    Rating: ({{ ratingActual ? ratingActual : '-' }} / 5 )
                </p>
                <div class="flex">
                    <RatingButton v-for=" rate  in  5" :ratingActual="ratingActual" :rate="rate"
                        @click:rate="onClickRate(rate)" />
                    <!-- isGraterThanOrEqualTo="ratingActual >= rate"  -->
                </div>
            </div>
        </div>
    </article>
</template>

