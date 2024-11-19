<script setup>
//take the product id from the route
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id)
import products from '../assets/productos.json'

const product = products.find((p) => p.id === route.params.id)
</script>

<template>
  <h1>Product Detail</h1>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>id: {{ product.id }}</p>
  </div>
  <div v-else>
    <p>Product not found</p>
  </div>
  <router-link to="/products">Back to products</router-link>
</template>

<style scoped></style>
