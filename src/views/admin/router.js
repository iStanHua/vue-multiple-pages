import Vue from 'vue'
import Router from 'vue-router'
import Home from './home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "admin-common" */'./login.vue')
    }
  ]
})
