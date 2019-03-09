import { agencyService } from '@/services'
import * as types from '../types/agencyTypes'

export default {
  async [types.FETCH_ALL_AGENCIES] ({ commit }) {
    commit(types.FETCH_ALL_AGENCIES)

    try {
      commit(types.FETCH_ALL_AGENCIES_SUCCESS, await agencyService.get())
    } catch (err) {
      commit(types.FETCH_ALL_AGENCIES_ERROR, err)
    }
  }
}
