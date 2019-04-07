import { normalize } from 'normalizr'
import * as types from '../types/tppTypes'
import { TPP_LIST_SCHEMA } from '../schema/tppSchema'

export default {
  [types.FETCH_ALL_TPP] (state) {
    state.isFetching = true
    state.error = null
  },

  [types.FETCH_ALL_TPP_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, TPP_LIST_SCHEMA)
  },

  [types.FETCH_ALL_TPP_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [types.STORE_TPP] (state) {
    state.isStoring = true
    state.error = null
  },

  [types.STORE_TPP_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [types.STORE_TPP_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [types.FETCH_ONE_TPP] (state) {
    state.isFetchingOne = true
    state.error = null
  },
  
  [types.FETCH_ONE_TPP_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [types.FETCH_ONE_TPP_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  }
}
