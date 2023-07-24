<script setup lang="ts">
import { ref } from 'vue'
import { StarIcon, TrashIcon } from '@heroicons/vue/24/solid'
import RatingButton from '@/components/RatingButton.vue'

const props = defineProps<{
  id: number
  image: string
  name: string
  genres: string[]
  description: string
  rating?: number
}>()

const emit = defineEmits<{
  (event: 'delete', id: number): void
  (event: 'rate'): void
}>()

const ratingActual = ref(props.rating)

function onClickRate(rating: number) {
  ratingActual.value = rating
  emit('rate')
}
</script>

<template>
  <article class="summary-card">
    <div class="overflow-hidden max-h-[500px] w-full relative">
      <div class="absolute top-0 right-0">
        <div class="relative flex justify-center items-center">
          <StarIcon class="h-16" :class="[ratingActual ? 'color-star-with-rate' : 'color-star-without-rate']" />
          <span class="absolute">{{ ratingActual }}</span>
        </div>
      </div>
      <img :src="image" alt="movie image" class="summary-card-image" style="height: 550px;">
    </div>
    <div class="py-4 px-4">
      <h2 class="summary-card-title">
        {{ name }}
      </h2>
      <div class="flex">
        <span v-for=" gen in genres " :key="`${id}-${gen}`" class="summary-card-genre">
          {{ gen }}
        </span>
      </div>
      <p class="summary-card-desc">
        {{ description }}
      </p>
      <div class="summary-card-rating-area">
        <p class="rating-text">
          Rating: ( {{ ratingActual ? ratingActual : '-' }} / 5 )
        </p>
        <div class="flex">
          <RatingButton
            v-for="rate in 5" :key="rate"
            :rating-actual="ratingActual" :rate="rate"
            @click:rate="onClickRate(rate)"
          />
          <!-- isGraterThanOrEqualTo="ratingActual >= rate"  -->
        </div>
        <button type="button" @click="emit('delete', id)">
          <TrashIcon class="h-8" />
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="postcss" scoped>
.summary-card {
  @apply flex max-w-xl flex-col items-start justify-between rounded-md bg-white static
}

.summary-card-title {
  @apply mt-2 text-xl font-semibold leading-3 text-gray-900
}

.summary-card-genre {
  @apply inline-flex items-center rounded-xl px-2 py-1 mr-2 mt-2 text-xs font-medium text-white bg-indigo-500
}

.summary-card-desc {
  @apply mt-2 line-clamp-3 text-sm leading-6 text-gray-600 h-24
}

.summary-card-image {
  @apply h-full w-full object-cover object-center rounded-md
}

.summary-card-rating-area {
  @apply mt-2 flex items-center
}

.rating-text {
  @apply text-gray-600 pr-2
}
</style>
