<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";

const props = defineProps<{
    ratingActual: number,
    rate: number,
    // isGraterThanOrEqualTo: boolean
}>();

const emit = defineEmits<{
    (event: 'click:rate', rate: number): void
}>()

// console.log(props.isGraterThanOrEqualTo.value)
</script>

<template>
    <button type="button" :disabled="ratingActual == rate" @click="emit('click:rate', rate)">
        <StarIcon class="h-8"
            :class="[ratingActual >= rate ? 'text-yellow-500' : 'text-gray-500', ratingActual == rate ? 'pointer-events-none' : '']" />
    </button>
</template>
