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
  }
}
