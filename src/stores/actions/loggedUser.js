import { httpService, authService } from '@/services'
import { setSession, getSession } from '@/helpers/session'
import { TOKEN_SESSION, USER_SESSION } from '@/constants/session'
import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
  FETCH_LOGGED_USER,
  FETCH_LOGGED_USER_ERROR,
  SET_LOGGED_USER,
  FETCH_LOGGED_USER_SUCCESS
} from '../types/loggedUser'

export default {
  async [AUTHENTICATE] ({ commit }, data) {
    commit(AUTHENTICATE)

    try {
      const token = await authService.authenticate(data)

      httpService.authData = token
      setSession(TOKEN_SESSION, JSON.stringify(token))

      commit(AUTHENTICATE_SUCCESS)
    } catch (err) {
      commit(AUTHENTICATE_ERROR, err)
    }
  },

  async [FETCH_LOGGED_USER] ({ commit }) {
    commit(FETCH_LOGGED_USER)

    try {
      const userSession = getSession(USER_SESSION)

      if (userSession) {
        commit(SET_LOGGED_USER, JSON.parse(userSession))
      } else {
        const user = await authService.whoami()

        setSession(USER_SESSION, JSON.stringify(user))
        commit(SET_LOGGED_USER, user)
      }

      commit(FETCH_LOGGED_USER_SUCCESS)
    } catch (err) {
      commit(FETCH_LOGGED_USER_ERROR, err)
    }
  }
}
