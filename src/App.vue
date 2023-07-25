<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Movie } from './models'
import { items } from '@/movies.json'
import MovieList from '@/views/MovieList.vue'
import Modal from '@/components/Modal.vue'

const movies = ref(items)
const isOpen = ref(false)
const rates = ref<number>(0)
// set from movies generies
const genres: string[] = ['Crime', 'Drama', 'Actions']
const sum = computed(() => {
  return movies.value.reduce(
    (accumulator, currentValue) => {
      return accumulator + (currentValue.rating || 0)
    }, 0)
})
const averageRate = computed(() => {
  // rates.value++
  // const sum = movies.value.filter(x => 'rating' in x)

  return sum.value / movies.value.length
},
)

function cancel() {
  isOpen.value = false
}

function create(movie: Movie) {
  movies.value.push({
    id: 9000,
    name: movie.name,
    genres: movie.genres,
    image: movie.image,
    description: movie.description,
    // rating: ,
    inTheaters: false,
  })
  isOpen.value = false
}

function rate(id: number, rating: number) {
  movies.value.filter(x => x.id === id).map(x => x.rating = rating)
}
function deleteMovie(id: number) {
  movies.value.splice(movies.value.findIndex(movie => movie.id === id), 1)
}
</script>

<template>
  <div class="flex flex-col">
    <div class="header">
      <div class="text-white">
        Total movies: {{ movies.length }} / Avarage Rating {{ averageRate }}
      </div>
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
