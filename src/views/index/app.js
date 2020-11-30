import Vue from 'vue'
import router from './router'
import store from '@/store'

import App from './app.vue'

import './registerServiceWorker'
import '@/styles/base.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
