<script setup lang="ts">
import type { Movie } from '@/models'
import SummaryCard from '@/components/SummaryCard.vue'

defineProps<{
  movies: Movie[]
}>()
const emit = defineEmits<{
  (event: 'delete', id: number): void
  (event: 'rate', id: number, rating: number): void
}>()
function rates(id: number, rate: number) {
  emit('rate', id, rate)
}
</script>

<template>
  <div v-for="{ id, name, image, description, rating, genres } in movies" :key="id">
    <SummaryCard
      :id="id" :name="name" :image="image" :description="description" :rating="rating" :genres="genres"
      @delete="emit('delete', id)" @rate="rates"
    />
  </div>
</template>
