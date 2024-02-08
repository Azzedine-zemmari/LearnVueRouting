<template>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>
  </template>
  
<script setup>
import { useRoute } from 'vue-router';
import sourceData from '@/data.json';

// Get the current route
const route = useRoute();

// Access the id parameter from the route params and convert it to an integer
const destinationId = parseInt(route.params.id);

// Find the destination with the matching ID
const destination = sourceData.destinations.find(dest => dest.id === destinationId);
console.log(destinationId)
console.log(sourceData.destinations.id)
console.log(destination)

</script>
