import { FETCH_ALL_RANKS, FETCH_ALL_RANKS_SUCCESS, FETCH_ALL_RANKS_ERROR } from '../types/rank'
import { rankService } from '@/services'

export default {
  async [FETCH_ALL_RANKS] ({ commit }) {
    commit(FETCH_ALL_RANKS)

    try {
      commit(FETCH_ALL_RANKS_SUCCESS, await rankService.get())
    } catch (err) {
      console.log(err)
      commit(FETCH_ALL_RANKS_ERROR, err)
    }
  }
}
