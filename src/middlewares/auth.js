import store from '@/store'
import { httpService } from '@/services'
import { getSession } from '@/helpers/session'
import { TOKEN_SESSION } from '@/constants/session'
import { FETCH_LOGGED_USER } from '@/stores/types/loggedUserTypes'

export async function auth (to, from, next) {
  if (!getSession(TOKEN_SESSION)) {
    next({ name: 'login' })
  } else {
    const fetchUserHandler = store.dispatch(FETCH_LOGGED_USER)

    httpService.authData = JSON.parse(getSession(TOKEN_SESSION))
    await fetchUserHandler

    next()
  }
}