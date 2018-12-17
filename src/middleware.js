import { authService } from './services'

export async function auth (to, from, next) {
  if (!authService.check) {
    next({ name: 'login' })
  } else {
    try {
      await authService.refresh()
      next()
    } catch (err) {
      next({ name: 'login' })
    }
  }
}

export default function middleware (guards) {
  return (to, from, next) => {
    guards.forEach(async (guard) => {
      await guard(to, from, next)
    })
  }
}
