import Home from '@components/views/Home/Home.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function lazyLoadRoute(route: string) {
  return (): Promise<InstanceType<typeof Home>> =>
    import(`../components/views/${route}/${route}.vue`)
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:country',
    name: 'Detail',
    component: lazyLoadRoute('Detail'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
