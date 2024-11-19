<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const search = ref('')

const handleSubmit = (e) => {
  e.preventDefault()
  if (!search.value) return
  router.push({ name: 'searchResults', query: { q: search.value } })
  search.value = ''
}
</script>

<template>
  <h1>Search View</h1>
  <form @submit="handleSubmit">
    <input v-model="search" type="text" placeholder="Search..." />
    <button type="submit">Search</button>
  </form>
</template>

<style scoped></style>
