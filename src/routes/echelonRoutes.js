import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/echelons',
    name: 'echelons',
    component: () => import('@/views/Echelon/EchelonIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
