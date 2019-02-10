import { workshiftService } from '@/services'
import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS,
  FETCH_ALL_WORKSHIFTS_ERROR
} from '../types/workshiftTypes'

export default {
  async [FETCH_ALL_WORKSHIFTS] ({ commit }) {
    commit(FETCH_ALL_WORKSHIFTS)

    try {
      commit(FETCH_ALL_WORKSHIFTS_SUCCESS, await workshiftService.get())
    } catch (err) {
      commit(FETCH_ALL_WORKSHIFTS_ERROR, err)
    }
  }
}
