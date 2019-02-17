import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/workshifts',
    name: 'workshifts',
    component: () => import('@/views/Workshift/WorkshiftIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  },
  {
    path: '/workshifts/new',
    name: 'workshifts.create',
    component: () => import('@/views/Workshift/WorkshiftCreate'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  },
  {
    path: '/workshifts/:id',
    name: 'workshifts.edit',
    component: () => import('@/views/Workshift/WorkshiftEdit'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
