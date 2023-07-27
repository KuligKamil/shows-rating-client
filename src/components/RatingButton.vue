<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

defineProps<{
  ratingActual?: number
  rate: number
}>()

const emit = defineEmits<{
  (event: 'click:rate', rate: number): void
}>()
</script>

<template>
  <button
    type="button" :disabled="ratingActual === rate"
    :class="[ratingActual && ratingActual >= rate ? 'color-star-with-rate' : 'color-star-without-rate', ratingActual === rate ? 'disabled:cursor-not-allowed' : '']"
    @click="emit('click:rate', rate)"
  >
    <StarIcon class="h-8" />
  </button>
</template>
