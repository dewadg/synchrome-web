import Vue from 'vue'
import Router from 'vue-router'

import LoginView from './views/Login/LoginView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
  ]
})
