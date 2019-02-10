import Router from 'vue-router'
import baseRoutes from '@/routes/baseRoutes'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...baseRoutes

    // // Ranks
    // {
    //   path: '/ranks',
    //   name: 'ranks',
    //   component: () => import('@/views/Rank/RankIndex'),
    //   beforeEnter: chainMiddlewares([
    //     auth
    //   ])
    // },

    // // Calendars
    // {
    //   path: '/calendars',
    //   name: 'calendars',
    //   component: () => import('@/views/Calendar/CalendarIndex'),
    //   beforeEnter: chainMiddlewares([
    //     auth
    //   ])
    // },
    // {
    //   path: '/calendars/new',
    //   name: 'calendars.create',
    //   component: () => import('@/views/Calendar/CalendarCreate'),
    //   beforeEnter: chainMiddlewares([
    //     auth
    //   ])
    // },
    // {
    //   path: '/calendars/:id',
    //   name: 'calendars.edit',
    //   component: () => import('@/views/Calendar/CalendarEdit'),
    //   beforeEnter: chainMiddlewares([
    //     auth
    //   ])
    // },

    // {
    //   path: '/workshifts',
    //   name: 'workshifts.index',
    //   component: () => import('@/views/Workshift/WorkshiftIndex'),
    //   beforeEnter: chainMiddlewares([
    //     auth
    //   ])
    // }
  ]
})

export default router
