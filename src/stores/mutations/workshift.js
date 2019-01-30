import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS,
  FETCH_ALL_WORKSHIFTS_ERROR
} from '../types/workshift'
import { WORKSHIFT_LIST_SCHEMA } from '../schema/workshift'
import { normalize } from 'normalizr'

export default {
  [FETCH_ALL_WORKSHIFTS] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_ALL_WORKSHIFTS_SUCCESS] (state, data) {
    state.loading = false
    state.error = null
    state.data = normalize(data, WORKSHIFT_LIST_SCHEMA)
  },

  [FETCH_ALL_WORKSHIFTS_ERROR] (state, err) {
    state.loading = false
    state.error = err
  }
}
