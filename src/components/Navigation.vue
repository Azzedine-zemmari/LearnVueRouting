<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brazil</RouterLink>
    <RouterLink to="/hawai">Hawai</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/panama">Panama</RouterLink>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>
<style lang="css">
    #nav .ActiveLink{
        border-bottom: 1px solid white;
    }
</style>