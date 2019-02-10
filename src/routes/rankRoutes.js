import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

export default [
  {
    path: '/ranks',
    name: 'ranks',
    component: () => import('@/views/Rank/RankIndex'),
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
