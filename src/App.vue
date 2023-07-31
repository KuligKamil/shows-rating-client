<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Movie } from './models'
import { items } from '@/movies.json'
import MovieList from '@/views/MovieList.vue'
import Modal from '@/components/Modal.vue'

const movies = ref(items)
const isOpen = ref(false)
// set from movies generies
const genres: string[] = ['Crime', 'Drama', 'Actions']

const sum = computed(() => movies.value.reduce((accumulator, currentValue) => accumulator + (currentValue.rating || 0), 0))

const averageRate = computed(() => sum.value / movies.value.length)

function cancel() {
  isOpen.value = false
}

function create(movie: Movie) {
  movies.value.push({
    id: movie.id,
    name: movie.name,
    genres: movie.genres,
    image: movie.image,
    description: movie.description,
    inTheaters: movie.inTheaters,
  })
  isOpen.value = false
}

function rate(id: number, rating: number) {
  movies.value.filter(x => x.id === id).map(x => x.rating = rating)
}
function removeRatings() {
  movies.value.map(movie => delete movie.rating)
  // working but not perfect
  // movies.value.map(movie => movie.rating = 0)
  // not assignment for each movie
  // movies.value.map(({ 'rating': _, ...rest }) => rest)
}

function deleteMovie(id: number) {
  movies.value.splice(movies.value.findIndex(movie => movie.id === id), 1)
}
</script>

<template>
  <div class="flex flex-col">
    <div class="header">
      <div class="text-white">
        Total movies: {{ movies.length }} / Average Rating {{ averageRate }}
      </div>
      <button class="button" @click="removeRatings">
        Remove Ratings
      </button>
      <button class="button" @click="isOpen = true">
        Add Movie
      </button>
    </div>
    <div class="content" style="max-height: 80vh;">
      <div class="movie-list">
        <MovieList :movies="movies" @delete="deleteMovie" @rate="rate" />
      </div>
    </div>
    <Modal title="Add Movie" :is-open="isOpen" :genres="genres" @cancel="cancel" @create="create" />
  </div>
</template>

<style lang="postcss" scoped>
.header {
  @apply m-8 flex flex-row
}

.content {
  @apply mx-auto max-w-7xl overflow-auto max-h-96
}

.movie-list {
  @apply mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none grid-cols-3;
}
</style>
