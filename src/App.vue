<script setup lang="ts">
import { ref } from "vue";
import { items } from "./movies.json";
import { StarIcon } from "@heroicons/vue/24/solid";

const movies = ref(items)

</script>

<template class="">
  <div class="mx-auto max-w-7xl">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none lg:grid-cols-3">
      <article v-for="{ id, name, image, description, rating, genres } in movies" key="id"
        class="flex max-w-xl flex-col items-start justify-between rounded-md bg-white">
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
          <div class="mt-8 flex items-center"> <!-- <div class="text-sm leading-6 flex"> -->
            <p class="text-gray-600 pr-2">Rating: ({{ rating }} / 5 )</p>
            <div class="flex">
              <StarIcon class="h-8 text-amber-300" v-for="_ in rating" />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
