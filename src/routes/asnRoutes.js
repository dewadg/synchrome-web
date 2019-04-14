import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/asn',
    name: 'asn',
    component: () => import('@/views/Asn/AsnIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
