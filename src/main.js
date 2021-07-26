import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/loginMock.js'
import './permission'
// element引入
import 'element-ui/lib/theme-chalk/index.css'
import element from '@/utils/element'
// echarts引入
import echarts from 'echarts'
// 基础样式
import '@/assets/styles/index.scss'
import '@/assets/styles/liuyun.scss'

Vue.config.productionTip = false

// 全局组件挂载
Vue.use(element)
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
