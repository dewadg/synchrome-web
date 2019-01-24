import {
  SET_LOGGED_USER,
  RESET_LOGGED_USER
} from '@/stores/types/loggedUser'
import freshState from '@/stores/states/loggedUser'

export default {
  [SET_LOGGED_USER]: (state, data) => {
    state.user = data
  },

  [RESET_LOGGED_USER]: (state) => {
    state = freshState
  }
}
