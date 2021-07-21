import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock'
import './permission'

import '@/assets/styles/index.scss'
import '@/assets/styles/liuyun.scss'

Vue.config.productionTip = false

// 全局组件挂载


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
