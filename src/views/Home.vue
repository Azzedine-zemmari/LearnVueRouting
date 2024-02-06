<template>
  <div class="home">
    <h1>All Destination</h1>
    <div class="destinations">
      <RouterLink 
      v-for="destination in destinations"
      :key="destination.id"
      :to="destination.slug"
      >
      {{ destination.name }}
      <img :src="`/images/${destination.image}`" :alt="destination.name">
    </RouterLink>
    </div>
  </div>
</template>
<script setup>
import sourceData from '@/data.json'
const destinations = sourceData.destinations
</script>
