<script setup lang="ts">
import { ref } from "vue";
import { items } from "./movies.json";
import MovieList from "@/views/MovieList.vue"
import Modal from "@/components/Modal.vue"

const movies = ref(items)
const isOpen = ref(false)
// set from movies generies
const genres: string[] = ['Crime', 'Drama', 'Actions']
function cancel() {
  isOpen.value = false
}

function create(movie) {
  console.log(movie);
  // console.log(movie.value);

  movie.genres.forEach((item) => {
    console.log(item)
  });
  movies.value.push({
    id: 9000,
    name: movie.name,
    genres: movie.genres,
    // description: ''
  })
  console.log(movies)
  isOpen.value = false



}
</script>

<template class="">
  <div>
    <button class="rounded-full" @click="isOpen = true">Add Movie</button>
  </div>
  <div class="mx-auto max-w-7xl">
    <div class="movie-list ">
      <MovieList :movies="movies" />
    </div>
  </div>
  <Modal title="Add Movie" :isOpen="isOpen" :genres="genres" @cancel="cancel" @create="create" />
</template>

<style lang="postcss" scoped>
.movie-list {
  @apply mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none grid-cols-3;
}
</style>