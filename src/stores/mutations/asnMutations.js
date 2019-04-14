import { normalize } from 'normalizr'
import * as types from '../types/asnTypes'
import { ASN_LIST_SCHEMA } from '../schema/asnSchema'

export default {
  [types.FETCH_ALL_ASN] (state) {
    state.isFetching = true
    state.error = null
  },

  [types.FETCH_ALL_ASN_SUCCESS] (state, data) {
    state.isFetching = false
    state.data = normalize(data, ASN_LIST_SCHEMA)
  },

  [types.FETCH_ALL_ASN_SUCCESS] (state, err) {
    state.isFetching = false
    state.error = err
  }
}
