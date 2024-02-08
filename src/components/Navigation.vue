<template>
  <div id="nav">
    <RouterLink 
      v-for="destination in destinations"
      :key="destination.id"
      :to="{name:'destinationShow', params :{id:destination.id}}"
      >
      {{ destination.name }}
      {{ console.log(route.params.id) }}
    </RouterLink>       
  </div>
</template>                                         
<script setup>
import {destinations} from '@/data.json';
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<style lang="css">
    #nav .ActiveLink{
        border-bottom: 1px solid white;
    }
</style>