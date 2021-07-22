import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/views/Login'

import Layout from '@/layout'
import index from '@/views/index'
import report from '@/views/system/Report'
import roles from '@/views/system/Roles'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: index,
        hidden: true
      },
      {
        path: '/report',
        component: report,
        hidden: true
      },
      {
        path: '/roles',
        component: roles,
        hidden: true
      },
    ]
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