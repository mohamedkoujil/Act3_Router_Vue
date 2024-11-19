<script setup>
import { RouterLink } from 'vue-router'
import products from '../assets/productos.json'
</script>

<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <RouterLink :to="'/products/' + product.id">
        {{ product.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped></style>
