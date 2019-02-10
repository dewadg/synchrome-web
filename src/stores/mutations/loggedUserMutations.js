import { clearSession } from '@/helpers/session'
import { TOKEN_SESSION, USER_SESSION } from '@/constants/session'
import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
  SET_LOGGED_USER,
  RESET_LOGGED_USER,
  FETCH_LOGGED_USER,
  FETCH_LOGGED_USER_SUCCESS,
  FETCH_LOGGED_USER_ERROR,
  LOGOUT,
  RESET_LOGGED_USER_ERROR
} from '../types/loggedUserTypes'

export default {
  [AUTHENTICATE] (state) {
    state.loading = true
    state.error = null
  },

  [AUTHENTICATE_SUCCESS] (state) {
    state.loading = false
    state.error = null
  },

  [AUTHENTICATE_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [FETCH_LOGGED_USER] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_LOGGED_USER_SUCCESS] (state) {
    state.loading = false
    state.error = null
  },

  [FETCH_LOGGED_USER_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [LOGOUT] () {
    clearSession(TOKEN_SESSION)
    clearSession(USER_SESSION)
  },

  [SET_LOGGED_USER] (state, data) {
    state.user = data
  },

  [RESET_LOGGED_USER] (state) {
    state.user.id = null
    state.user.name = ''
    state.user.role.id = null
    state.user.role.name = ''
    state.user.generatedAt = null
  },

  [RESET_LOGGED_USER_ERROR] (state) {
    state.error = null
  }
}
