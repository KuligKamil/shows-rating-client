<script setup lang="ts">
import { ref } from "vue";
import { items } from "./movies.json";
import MovieList from "@/views/MovieList.vue"
import Modal from "@/components/Modal.vue"

const movies = ref(items)
const isOpen = ref(true)

</script>

<template class="">
  <div>
    <button class="rounded-full">Add Movie</button>
  </div>
  <div class="mx-auto max-w-7xl">
    <div class="movie-list ">
      <MovieList :movies="movies" />
    </div>
  </div>
  <Modal :isOpen="isOpen" />
</template>

<style lang="postcss" scoped>
.movie-list {
  @apply mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none grid-cols-3;
}
</style>