<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

interface Kedai {
  id: number
  name: string
  address: string
  rating: number
  time: string
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

    <div>
      <RouterLink to="/create-kedai" class="bg-blue-500 text-white px-4 py-2 rounded">
        Buat Kedai Baru
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="kedai in kedais" :key="kedai.id" class="border p-4 rounded">
        <img :src="kedai.image" alt="" class="w-full h-32 object-cover mb-2 rounded">
        <h2 class="text-lg font-bold">{{ kedai.name }}</h2>
        <p>{{ kedai.address }}</p>
        <p>{{ new Date(Number(kedai.time) * 1000).toLocaleString() }}</p>
        <p>Rating: {{ kedai.rating }}</p>
      </div>
    </div>
  </main>
</template>
