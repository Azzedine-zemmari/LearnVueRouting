import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import(/*webpackChunkName:'About'*/'@/views/About.vue')
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: ()=>import(/*webpackChunkName:'Brazil'*/'@/views/Brazil.vue')
  },
  {
    path: '/hawai',
    name: 'hawai',
    component: ()=>import(/*webpackChunkName:'Hawai'*/'@/views/Hawai.vue')
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: ()=>import(/*webpackChunkName:'Jamaica'*/'@/views/Jamaica.vue')
  },
  {
    path: '/panama',
    name: 'panama',
    component: ()=>import(/*webpackChunkName:'Panama'*/'@/views/Panama.vue')
  },
  {
    path:'/destination/:id',
    name:"destination.show",
    component:()=>import('@/views/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass:'ActiveLink'
})

export default router
