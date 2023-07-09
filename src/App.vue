<script setup lang="ts">
import { ref } from "vue";
import { items } from "./movies.json";

const movies = ref(items)
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="{ id, name, image, description, rating, genres } in movies" key="id"
          class="bg-white flex max-w-xl flex-col items-start justify-between">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="image" alt="name" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                {{ name }}
              </a>
            </h3>
            <span v-for="gen in genres" key="gen">
              <span
                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                {{ gen }}
              </span>
            </span>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              {{ description }}
            </p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <div class="text-sm leading-6">

              <p class="text-gray-600">Rating: {{ rating }} / 5 </p>
              <StarIcon v-for="star in rating" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
