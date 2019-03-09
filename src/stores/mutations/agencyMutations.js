import { normalize } from 'normalizr'
import * as types from '../types/agencyTypes'
import { AGENCY_LIST_SCHEMA } from '../schema/agencySchema'

export default {
  [types.FETCH_ALL_AGENCIES] (state) {
    state.isFetching = true
    state.error = null
  },

  [types.FETCH_ALL_AGENCIES_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, AGENCY_LIST_SCHEMA)
  },

  [types.FETCH_ALL_AGENCIES_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [types.STORE_AGENCY] (state) {
    state.isStoring = true
    state.error = null
  },

  [types.STORE_AGENCY_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [types.STORE_AGENCY_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  }
}