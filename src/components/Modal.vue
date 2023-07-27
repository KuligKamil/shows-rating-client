<script setup lang="ts">
import { ref } from 'vue'
import type { Movie } from '@/models'

defineProps<{
  title: string
  isOpen: boolean
  genres: string[]
}>()

const emit = defineEmits<{
  (event: 'cancel'): void
  (event: 'create', movie: Movie): void
}>()

const name = ref<string>('')
const description = ref<string>('')
const image = ref<string>('')
const multiSelected = ref<string[]>([])

function onSubmit() {
  emit('create', { id: 7, name: name.value, genres: multiSelected.value, description: description.value, image: image.value, inTheaters: true })
  name.value = ''
  description.value = ''
  multiSelected.value = []
  image.value = ''
}

function cancelProcess() {
  emit('cancel')
  name.value = ''
  description.value = ''
  multiSelected.value = []
  image.value = ''
}
</script>

<template>
  <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8
            sm:w-full sm:max-w-lg"
        >
          <form class="bg-gray-900 px-4 pt-5 sm:p-6 sm:pb-4 pb-12" @submit.prevent="onSubmit">
            <h2 class="text-base font-semibold leading-7 text-white">
              {{ title }}
            </h2>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="col-span-full">
                <label for="username" class="label">Name</label>
                <div
                  class="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                >
                  <input
                    id="name" v-model="name" type="text" name="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white
                                                 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Lion King 7"
                    required
                  >
                </div>
              </div>
              <div class="col-span-full">
                <label for="description" class="label">Description</label>
                <textarea
                  id="description" v-model="description" name="description" rows="3"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div class="col-span-full">
                <label for="image" class="label">Image</label>
                <div class="mt-2">
                  <div
                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                  >
                    <input
                      id="image" v-model="image" type="text" name="image" autocomplete="image"
                      class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Link for image"
                    >
                  </div>
                </div>
              </div>
              <!-- TODO: multislect issue, need to click control to select multi -->
              <div class="col-span-full">
                <label for="generes" class="label">Genres</label>
                <select
                  v-model="multiSelected" multiple required name="country"
                  class="mt-2 block w-full rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <template v-for="genre in genres" :key="genre">
                    <option :value="genre">
                      {{ genre }}
                    </option>
                  </template>
                </select>
              </div>
              <div class="col-span-full mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <input
                      id="comments" name="comments" type="checkbox"
                      class="h-4 w-4 rounded border-white text-indigo-600 focus:ring-indigo-600"
                    >
                  </div>
                  <div class="text-sm leading-6">
                    <label for="comments" class="font-medium text-white">In theatres</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" class="text-sm font-semibold leading-6 text-white" @click="cancelProcess">
                Cancel
              </button>
              <input type="submit" class="button">
              <!-- <input type="submit" class="button" @click="creteProcess" /> -->
              <!-- <button type="submit" class="button" @click="creteProcess">Create</button> -->
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.label {
  @apply block text-sm font-medium leading-6 text-white
}
</style>
