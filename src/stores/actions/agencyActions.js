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
  },

  async [types.STORE_AGENCY] ({ commit }, payload) {
    commit(types.STORE_AGENCY)

    try {
      const agency = await agencyService.create(payload)
      commit(types.STORE_AGENCY_SUCCESS)

      return agency
    } catch (err) {
      commit(types.STORE_AGENCY_ERROR, err)
    }
  }
}
