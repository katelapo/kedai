<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const name = ref('')
const address = ref('')
const rating = ref('')
const image = ref('')
const time = ref('')

const saveData = async () => {
    const newKedai = JSON.stringify({
        name: name.value,
        address: address.value,
        rating: rating.value,
        image: image.value,
        time:  Date.parse(time.value)/1000,
    })

    const response = await fetch('/api/kedai', {
        method: 'POST',
        body: newKedai
    })

    const data = await response.json()

    
    router.push ('/')
}
</script>


<template>
    <h1>Buat Kedai Baru</h1>
     <form @submit.prevent="saveData">
        <div>
            <label>Nama</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label>Tempat</label>
            <input type="text" v-model="address">
        </div>
        <div>
            <label>Rating</label>
            <input type="number" v-model="rating">
        </div>
        <div>
            <label>Waktu</label>
            <input type="datetime-local" v-model="time">
        </div>
        <div>
            <input type="submit">
        </div>
    </form>
</template>