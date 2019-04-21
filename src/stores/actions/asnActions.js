import { asnService } from '@/services'
import * as types from '../types/asnTypes'

export default {
  async [types.FETCH_ALL_ASN] ({ commit }) {
    commit(types.FETCH_ALL_ASN)

    try {
      commit(types.FETCH_ALL_ASN_SUCCESS, await asnService.get())
    } catch (err) {
      commit(types.FETCH_ALL_ASN_ERROR, err)
    }
  },

  async [types.STORE_ASN] ({ commit }, payload) {
    commit(types.STORE_ASN)

    try {
      const newAsn = await asnService.create(payload)
      commit(types.STORE_ASN_SUCCESS)

      return newAsn
    } catch (err) {
      commit(types.STORE_ASN_ERROR, err)
    }
  },

  async [types.FETCH_ONE_ASN] ({ commit }, id) {
    commit(types.FETCH_ONE_ASN)

    try {
      const asn = await asnService.find(id)
      commit(types.FETCH_ONE_ASN_SUCCESS)

      return asn
    } catch (err) {
      commit(types.FETCH_ONE_ASN_ERROR, err)
    }
  },

  async [types.UPDATE_ASN] ({ commit }, { id, data }) {
    commit(types.UPDATE_ASN)

    try {
      await asnService.update(id, data)
      commit(types.UPDATE_ASN_SUCCESS)
    } catch (err) {
      commit(types.UPDATE_ASN_ERROR, err)
    }
  },

  async [types.DESTROY_ASN] ({ commit }, id) {
    commit(types.DESTROY_ASN)

    try {
      await asnService.delete(id)
      commit(types.DESTROY_ASN_SUCCESS)
    } catch (err) {
      commit(types.DESTROY_ASN_ERROR, err)
    }
  }
}
