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
      <RouterLink to="/kedai">
        Buat Kedai Baru
      </RouterLink>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="kedai in kedais" :key="kedai.id">
        <img :src="kedai.image">
        <div>{{ kedai.name }}</div>
        <div>{{ kedai.address }}</div>
        <div>{{ new Date(Number(kedai.time) * 1000).toLocaleString() }}</div>
        <div>Rating: {{ kedai.rating }}</div>
      </li>
    </div>
     <div>
            <RouterLink :to="`/kedai/${kedai.id}`">Edit</RouterLink>
          </div>
  </main>
</template>
