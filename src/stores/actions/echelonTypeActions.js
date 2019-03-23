import { echelonService } from '@/services'
import * as types from '../types/echelonTypeTypes'

export default {
  async [types.FETCH_ALL_ECHELON_TYPES] ({ commit }) {
    commit(types.FETCH_ALL_ECHELON_TYPES)

    try {
      commit(types.FETCH_ALL_ECHELON_TYPES_SUCCESS, await echelonService.getTypes())
    } catch (err) {
      commit(types.FETCH_ALL_ECHELON_TYPES_ERROR, err)
    }
  }
}
