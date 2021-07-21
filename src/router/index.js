import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/views/Login'
import Layout from '@/layout'


export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    hidden: true
  },
  {
    path: '/login',
    component: login,
    hidden: true
  },
  {
    path: '*',
    component: () => import('@/views/error/404'),
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})