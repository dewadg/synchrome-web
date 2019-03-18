import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/agencies',
    name: 'agencies',
    component: () => import('@/views/Agency/AgencyIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  },
  {
    path: '/agencies/new',
    name: 'agencies.create',
    component: () => import('@/views/Agency/AgencyCreate'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
