import * as types from '../types/tppTypes'
import { tppService } from '@/services'

export default {
  async [types.FETCH_ALL_TPP] ({ commit }) {
    commit(types.FETCH_ALL_TPP)

    try {
      commit(types.FETCH_ALL_TPP_SUCCESS, await tppService.get())
    } catch (err) {
      commit(types.FETCH_ALL_TPP_ERROR, err)
    }
  },

  async [types.STORE_TPP] ({ commit }, payload) {
    commit(types.STORE_TPP)

    try {
      const tpp = await tppService.create(payload)
      commit(types.STORE_TPP_SUCCESS)

      return tpp
    } catch (err) {
      commit(types.STORE_TPP_ERROR, err)
    }
  },

  async [types.FETCH_ONE_TPP] ({ commit }, id) {
    commit(types.FETCH_ONE_TPP)

    try {
      const tpp = await tppService.find(id)
      commit(types.FETCH_ONE_TPP_SUCCESS)

      return tpp
    } catch (err) {
      commit(types.FETCH_ONE_TPP_ERROR, err)
    }
  },

  async [types.UPDATE_TPP] ({ commit }, { id, data }) {
    commit(types.UPDATE_TPP)

    try {
      const updatedTpp = await tppService.update(id, data)
      commit(types.UPDATE_TPP_SUCCESS)

      return updatedTpp
    } catch (err) {
      commit(types.UPDATE_TPP_ERROR, err)
    }
  },

  async [types.DESTROY_TPP] ({ commit }, id) {
    commit(types.DESTROY_TPP)

    try {
      await tppService.delete(id)
      commit(types.DESTROY_TPP_SUCCESS)
    } catch (err) {
      commit(types.DESTROY_TPP_ERROR, err)
    }
  }
}
