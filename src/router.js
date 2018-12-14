import Vue from 'vue'
import Router from 'vue-router'
import middleware, { auth } from './middleware'

import LoginView from './views/Login/LoginView'
import DashboardView from './views/Dashboard/DashboardView'

// Ranks
import RankIndex from './views/Rank/RankIndex'

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: middleware([
        auth
      ])
    },

    // Ranks
    {
      path: '/ranks',
      name: 'ranks',
      component: RankIndex,
      beforeEnter: middleware([
        auth
      ])
    },

    // Calendars
    {
      path: '/calendars/new',
      name: 'calendars.create',
      component: () => import('@/views/Calendar/CalendarCreate'),
      beforeEnter: middleware([
        auth
      ])
    }
  ]
})
