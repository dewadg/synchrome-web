import {
  GET_LOGGED_USER,
  GET_LOGGED_USER_NAME,
} from '@/stores/types/loggedUser'

export default {
  [GET_LOGGED_USER]: state => state.user,

  [GET_LOGGED_USER_NAME]: state => state.user.name
}
