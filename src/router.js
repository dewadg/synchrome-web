import Vue from 'vue'
import Router from 'vue-router'
import middleware, { auth } from './middleware'

import LoginView from './views/Login/LoginView'
import DashboardView from './views/Dashboard/DashboardView'

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
      component: () => import('@/views/Rank/RankIndex'),
      beforeEnter: middleware([
        auth
      ])
    },

    // Calendars
    {
      path: '/calendars',
      name: 'calendars',
      component: () => import('@/views/Calendar/CalendarIndex'),
      beforeEnter: middleware([
        auth
      ])
    },
    {
      path: '/calendars/new',
      name: 'calendars.create',
      component: () => import('@/views/Calendar/CalendarCreate'),
      beforeEnter: middleware([
        auth
      ])
    },
    {
      path: '/calendars/:id',
      name: 'calendars.edit',
      component: () => import('@/views/Calendar/CalendarEdit'),
      beforeEnter: middleware([
        auth
      ])
    },

    {
      path: '/workshifts',
      name: 'workshifts.index',
      component: () => import('@/views/Workshift/WorkshiftIndex'),
      beforeEnter: middleware([
        auth
      ])
    }
  ]
})
