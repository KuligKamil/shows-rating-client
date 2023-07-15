<script setup lang="ts">
import SummaryCard from "@/components/SummaryCard.vue"
const props = defineProps<{
    movies: Any[]
}>()
</script>

<template>
    <div v-for="{ id, name, image, description, rating, genres } in movies" :key="id">
        <SummaryCard :name="name" :image="image" :description="description" :rating="rating" :genres="genres" />
    </div>
</template>
