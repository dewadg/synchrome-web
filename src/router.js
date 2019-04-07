import Router from 'vue-router'

import baseRoutes from '@/routes/baseRoutes'
import rankRoutes from '@/routes/rankRoutes'
import calendarRoutes from '@/routes/calendarRoutes'
import workshiftRoutes from '@/routes/workshiftRoutes'
import agencyRoutes from '@/routes/agencyRoutes'
import echelonRoutes from '@/routes/echelonRoutes'
import tppRoutes from '@/routes/tppRoutes'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...baseRoutes,

    // Ranks
    ...rankRoutes,

    // Calendars
    ...calendarRoutes,

    // Workshifts
    ...workshiftRoutes,

    // Agencies
    ...agencyRoutes,

    // Echelons
    ...echelonRoutes,

    // TPP
    ...tppRoutes
  ]
})

export default router
