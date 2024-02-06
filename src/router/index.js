import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('@/views/About.vue')
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: ()=>import('@/views/Brazil.vue')
  },
  {
    path: '/hawai',
    name: 'hawai',
    component: ()=>import('@/views/Hawai.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: ()=>import('@/views/Jamaica.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: ()=>import('@/views/Panama.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
