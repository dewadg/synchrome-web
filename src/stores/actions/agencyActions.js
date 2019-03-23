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
      commit(types.STORE_AGENCY_ERROR, { ...err })
    }
  },

  async [types.FETCH_ONE_AGENCY] ({ commit }, id) {
    commit(types.FETCH_ONE_AGENCY)

    try {
      const agency = await agencyService.find(id)
      commit(types.FETCH_ONE_AGENCY_SUCCESS)

      return agency
    } catch (err) {
      commit(types.FETCH_ONE_AGENCY_ERROR, err)
    }
  },

  async [types.UPDATE_AGENCY] ({ commit }, payload) {
    commit(types.UPDATE_AGENCY)

    try {
      const agency = await agencyService.update(payload.id, {
        name: payload.name,
        phone: payload.phone,
        address: payload.address
      })
      commit(types.UPDATE_AGENCY_SUCCESS)

      return agency
    } catch (err) {
      commit(types.UPDATE_AGENCY_ERROR, err)
    }
  },

  async [types.DESTROY_AGENCY] ({ commit }, id) {
    commit(types.DESTROY_AGENCY)

    try {
      await agencyService.delete(id)
      commit(types.DESTROY_AGENCY_SUCCESS)
    } catch (err) {
      commit(types.DESTROY_AGENCY_ERROR, err)
    }
  }
}
