import { RouteRecordRaw } from 'vue-router'

const pcRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: import('@/views/Layout/index.vue'),
    children: []
  }
]

export default pcRoutes
