import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/views/Login'

// import Layout from './'

export const constantRoutes = [
  {
    path: '/login',
    component: login,
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})