<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
  <Navigation></Navigation>
  <div class="container">
    <RouterView />
  </div>
</template>
