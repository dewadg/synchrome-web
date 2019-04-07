import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/tpp',
    name: 'tpp',
    component: () => import('@/views/Tpp/TppIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
