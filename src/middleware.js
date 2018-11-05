import { authService } from './services'

export function auth (to, from, next) {
  if (!authService.check) {
    next({ name: 'login' })
  } else {
    try {
      authService.refresh()
      next()
    } catch (err) {
      next({ name: 'login' })
    }
  }
}

export default function middleware (guards) {
  return (to, from, next) => {
    guards.forEach((guard) => {
      guard(to, from, next)
    })
  }
}
