import { FETCH_ALL_RANKS, FETCH_ALL_RANKS_SUCCESS, FETCH_ALL_RANKS_ERROR, FETCH_ONE_RANK, FETCH_ONE_RANK_SUCCESS, STORE_RANK, STORE_RANK_ERROR, STORE_RANK_SUCCESS } from '../types/rank'
import { rankService } from '@/services'

export default {
  async [FETCH_ALL_RANKS] ({ commit }) {
    commit(FETCH_ALL_RANKS)

    try {
      commit(FETCH_ALL_RANKS_SUCCESS, await rankService.get())
    } catch (err) {
      commit(FETCH_ALL_RANKS_ERROR, err)
    }
  },

  async [FETCH_ONE_RANK] ({ commit }, id) {
    commit(FETCH_ONE_RANK)

    try {
      const rank = await rankService.find(id)
      commit(FETCH_ONE_RANK_SUCCESS)

      return rank
    } catch (err) {
      commit(FETCH_ALL_RANKS_ERROR, )
    }
  },

  async [STORE_RANK] ({ commit }, payload) {
    commit(STORE_RANK)

    try {
      const rank = await rankService.create(payload)
      commit(STORE_RANK_SUCCESS)

      return rank
    } catch (err) {
      commit(STORE_RANK_ERROR, err)
    }
  }
}
