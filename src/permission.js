// 路由拦截
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach((to, form, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === 'login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登陆白名单
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
      //重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => [
  NProgress.done()
])