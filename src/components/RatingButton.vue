<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/24/solid'

defineProps<{
  ratingActual?: number
  rate: number
  // isGraterThanOrEqualTo: boolean
}>()

const emit = defineEmits<{
  (event: 'click:rate', rate: number): void
}>()

// console.log(props.isGraterThanOrEqualTo.value)
</script>

<template>
  <button
    type="button" :disabled="ratingActual === rate"
    :class="[ratingActual >= rate ? 'color-star-with-rate' : 'color-star-without-rate', ratingActual === rate ? 'disabled:cursor-not-allowed' : '']"
    @click="emit('click:rate', rate)"
  >
    <StarIcon class="h-8" />
  </button>
</template>
