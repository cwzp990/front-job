import { RouteRecordRaw } from 'vue-router'

const mobileRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue')
  }
]

export default mobileRoutes
