import { createRouter, createWebHistory } from 'vue-router'
import { isMobile } from '../utils'
import mobileRoutes from './mobile-routes'
import pcRoutes from './pc-routes'

const routes = isMobile.value ? mobileRoutes : pcRoutes

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
