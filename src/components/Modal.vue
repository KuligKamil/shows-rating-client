<script setup lang="ts">
import { ref } from "vue"


const name: string = ref()
const multiSelected: string[] = ref([])

const props = defineProps<{
    title: string,
    isOpen: boolean,
    genres: string[]
}>();

const emit = defineEmits<{
    (event: 'cancel'),
    (event: 'create', movie)
}>()

function onSubmit() {
    emit('create', { name: name.value, genres: multiSelected.value })
    name.value = ''
    multiSelected.value = []
}

function cancelProcess() {
    emit('cancel')
    name.value = ''
    multiSelected.value = []
}

</script>

<template>
    <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">


        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-gray-900 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                    <form class="bg-gray-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4" @submit.prevent="onSubmit">
                        <div class="space-y-12">
                            <div class="pb-12">
                                <h2 class="text-base font-semibold leading-7 text-white">{{ title }}</h2>

                                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div class="sm:col-span-4">
                                        <label for="username"
                                            class="block text-sm font-medium leading-6 text-white">Name</label>
                                        <div class="mt-2">
                                            <div
                                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

                                                <input v-model="name" type="text" name="username" id="name"
                                                    autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white 
                                                 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Lion King 7"
                                                    required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-full">
                                        <label for="description"
                                            class="block text-sm font-medium leading-6 text-white">Description</label>
                                        <div class="mt-2">
                                            <textarea id="description" name="description" rows="3"
                                                class="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white bg-transparent  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                        </div>
                                    </div>

                                    <div class="sm:col-span-4">
                                        <label for="username"
                                            class="block text-sm font-medium leading-6 text-white">Image</label>
                                        <div class="mt-2">
                                            <div
                                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input type="text" name="image" id="image" autocomplete="image"
                                                    class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Link for image">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- TODO: multislect issue, need to click control to select multi -->
                                    <div class="sm:col-span-4">
                                        <label for="country"
                                            class="block text-sm font-medium leading-6 text-white">Genres</label>
                                        <div class="mt-2">
                                            <select v-model="multiSelected" multiple required name="country"
                                                class="block w-full rounded-md border-0 py-1.5 text-white bg-transparent shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                <template v-for="genre in genres">
                                                    <option :value="genre">{{ genre }}</option>
                                                </template>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-4">
                                        <div class="mt-6 space-y-6">
                                            <div class="relative flex gap-x-3">
                                                <div class="flex h-6 items-center">
                                                    <input id="comments" name="comments" type="checkbox"
                                                        class="h-4 w-4 rounded border-white text-indigo-600 focus:ring-indigo-600">
                                                </div>
                                                <div class="text-sm leading-6">
                                                    <label for="comments" class="font-medium text-white">In
                                                        theatres</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="button" class="text-sm font-semibold leading-6 text-white"
                                        @click="cancelProcess">Cancel</button>
                                    <input type="submit" class="button" />
                                    <!-- <input type="submit" class="button" @click="creteProcess" /> -->
                                    <!-- <button type="submit" class="button" @click="creteProcess">Create</button> -->
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
