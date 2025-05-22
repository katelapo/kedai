<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Kedai {
  id: number
  name: string
  location: string
  rating: number
  image: string
}

const kedais = ref<Kedai[]>([])

const fetchKedais = async () => {
    const response = await fetch('/api/kedais')
    const data = await response.json()
    kedais.value = data
}

onMounted(() => {
  fetchKedais()
})

</script>

<template>
  <main>
    <div>Selamat Datang Di Kedai Kamii</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="kedai in kedais" :key="kedai.id" class="border p-4 rounded">
        <img :src="kedai.image" alt="" class="w-full h-32 object-cover mb-2 rounded">
        <h2 class="text-lg font-bold">{{ kedai.name }}</h2>
        <p>{{ kedai.location }}</p>
        <p>Rating: {{ kedai.rating }}</p>
      </div>
    </div>
  </main>
</template>
