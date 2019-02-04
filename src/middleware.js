import store from '@/store'
import { getSession } from '@/helpers/session'
import { TOKEN_SESSION } from '@/constants/session'
import { FETCH_LOGGED_USER } from '@/stores/types/loggedUser'

export async function auth (to, from, next) {
  if (!getSession(TOKEN_SESSION)) {
    next({ name: 'login' })
  } else {
    await store.dispatch(FETCH_LOGGED_USER)

    next()
  }
}

export default function middleware (guards) {
  return (to, from, next) => {
    guards.forEach(async (guard) => {
      await guard(to, from, next)
    })
  }
}
