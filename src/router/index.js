import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Brazil from '@/views/Brazil.vue'
import jamaica from '@/views/Jamaica.vue'
import Hawai from '@/views/Hawai.vue'
import Panama from '@/views/Panama.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/hawai',
    name: 'hawai',
    component: Hawai
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: jamaica
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
