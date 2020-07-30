import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/construction_materials',
    name: 'ConstructionMaterials',
    component: () => import('@/views/ConstructionMaterials')
  },
  {
    path: '/paints',
    name: 'Paints',
    component: () => import('@/views/Paints')
  },
  {
    path: '/plumbing',
    name: 'Plumbing',
    component: () => import('@/views/Plumbing')
  },
  {
    path: '/ceramic_tile',
    name: 'CeramicTile',
    component: () => import('@/views/CeramicTile')
  },
  {
    path: '/household_products',
    name: 'HouseholdProducts',
    component: () => import('@/views/HouseholdProducts')
  },
  {
    path: '/new_year',
    name: 'NewYear',
    component: () => import('@/views/NewYear')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
