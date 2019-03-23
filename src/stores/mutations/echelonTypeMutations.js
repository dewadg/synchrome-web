import { normalize } from 'normalizr'
import * as types from '../types/echelonTypeTypes'
import { ECHELON_TYPE_LIST_SCHEMA } from '../schema/echelonTypeSchema'

export default {
  [types.FETCH_ALL_ECHELON_TYPES] (state) {
    state.isFetching = true
    state.error = null
  },

  [types.FETCH_ALL_ECHELON_TYPES_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, ECHELON_TYPE_LIST_SCHEMA)
  },

  [types.FETCH_ALL_ECHELON_TYPES_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  }
}
