import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/calendars',
    name: 'calendars',
    component: () => import('@/views/Calendar/CalendarIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }, {
    path: '/calendars/new',
    name: 'calendars.create',
    component: () => import('@/views/Calendar/CalendarCreate'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }, {
    path: '/calendars/:id',
    name: 'calendars.edit',
    component: () => import('@/views/Calendar/CalendarEdit'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
