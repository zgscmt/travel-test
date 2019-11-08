import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
      path:'/selectAddress',
      name:"selectAddress",
      component:()=>import('../views/selectAddress.vue')
  },
  {
    path:'/addressInfo',
    name:"addressInfo",
    component:()=>import('../views/addressInfo.vue')    
  },
  {
      path:'/addressAll',
      name:"addressAll",
      component:()=>import('../views/addressAll.vue')
  },{
      path:'/searchAddress',
      name:"searchAddress",
      component:()=>import('../views/searchAddress.vue')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
