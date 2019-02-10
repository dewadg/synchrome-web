import chainMiddlewares from '@/middlewares'
import { auth } from '@/middlewares/auth'

import LoginView from '@/views/Login/LoginView'
import DashboardView from '@/views/Dashboard/DashboardView'

export default [
  {
    path: '/',
    name: 'login',
    component: LoginView
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    beforeEnter: chainMiddlewares([
      auth
    ])
  }
]
