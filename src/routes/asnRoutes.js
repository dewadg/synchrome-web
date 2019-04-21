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
  },
  {
    path: '/asn/new',
    name: 'asn.create',
    component: () => import('@/views/Asn/AsnCreate'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  },
  {
    path: '/asn/:id',
    name: 'asn.edit',
    component: () => import('@/views/Asn/AsnEdit'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
