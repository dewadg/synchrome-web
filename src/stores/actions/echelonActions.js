import { echelonService } from '@/services'
import * as types from '../types/echelonTypes'

export default {
  async [types.FETCH_ALL_ECHELONS] ({ commit }) {
    commit(types.FETCH_ALL_ECHELONS)

    try {
      commit(types.FETCH_ALL_ECHELONS_SUCCESS, await echelonService.get())
    } catch (err) {
      commit(types.FETCH_ALL_ECHELONS_ERROR, err)
    }
  },

  async [types.STORE_ECHELON] ({ commit }, payload) {
    commit(types.STORE_ECHELON)

    try {
      const echelon = await echelonService.create(payload)
      commit(types.STORE_ECHELON_SUCCESS)

      return echelon
    } catch (err) {
      commit(types.STORE_ECHELON_ERROR, { ...err })
    }
  },

  async [types.FETCH_ONE_ECHELON] ({ commit }, id) {
    commit(types.FETCH_ONE_ECHELON)

    try {
      const echelon = await echelonService.find(id)
      commit(types.FETCH_ONE_ECHELON_SUCCESS)

      return echelon
    } catch (err) {
      commit(types.FETCH_ONE_ECHELON_ERROR, err)
    }
  },

  async [types.UPDATE_ECHELON] ({ commit }, payload) {
    commit(types.UPDATE_ECHELON)

    try {
      const echelon = await echelonService.update(payload.id, {
        name: payload.name,
        echelonTypeId: payload.echelonTypeId,
        supervisorId: payload.supervisorId
      })
      commit(types.UPDATE_ECHELON_SUCCESS)

      return echelon
    } catch (err) {
      throw err
      // commit(types.UPDATE_ECHELON_ERROR, err)
    }
  },

  async [types.DESTROY_ECHELON] ({ commit }, id) {
    commit(types.DESTROY_ECHELON)

    try {
      await echelonService.delete(id)
      commit(types.DESTROY_ECHELON_SUCCESS)
    } catch (err) {
      commit(types.DESTROY_ECHELON_ERROR, err)
    }
  }
}
