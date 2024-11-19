<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/" active-class="selected">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" active-class="selected">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact" active-class="selected">Contact</RouterLink>
      </li>
      <li>
        <RouterLink to="/products" active-class="selected">Products</RouterLink>
      </li>
      <li>
        <RouterLink to="/search" active-class="selected">Search</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  justify-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-color: rgba(136, 136, 173, 0.322);
  border-radius: 15px;
  margin: 1rem;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

li {
  margin: 0.5rem 0.7rem;
}

li {
  font-size: 24px;
}

li a {
  text-decoration: none;
  color: black;
  border-radius: 12px;
  padding: 0.5rem;
}

.selected {
  background-color: burlywood;
}
</style>
