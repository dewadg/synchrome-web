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
  }
]
