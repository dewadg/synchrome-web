import { FETCH_ALL_RANKS_SUCCESS, FETCH_ALL_RANKS, FETCH_ALL_RANKS_ERROR } from "../types/rank";
import { RANK_LIST_SCHEMA } from '../schema/rank'
import { normalize } from "normalizr";

export default {
  [FETCH_ALL_RANKS] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_ALL_RANKS_SUCCESS] (state, data) {
    state.loading = false
    state.error = null
    state.data = normalize(data, RANK_LIST_SCHEMA)
  },

  [FETCH_ALL_RANKS_ERROR] (state, err) {
    state.loading = false
    state.error = err
  }
}
