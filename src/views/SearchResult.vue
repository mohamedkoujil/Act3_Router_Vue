<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const query = route.query.q
</script>

<template>
  <div>
    <h1>Search Result</h1>
    <p v-if="query">Search query: {{ query }}</p>
    <div v-else>
      <p>No query provided</p>
      <button @click="$router.push({ name: 'search' })">Go to search page</button>
    </div>
  </div>
</template>

<style scoped></style>
