import { normalize } from 'normalizr'
import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS,
  FETCH_ALL_WORKSHIFTS_ERROR,
  STORE_WORKSHIFT,
  STORE_WORKSHIFT_SUCCESS,
  STORE_WORKSHIFT_ERROR,
  FETCH_ONE_WORKSHIFT,
  FETCH_ONE_WORKSHIFT_SUCCESS,
  FETCH_ONE_WORKSHIFT_ERROR,
  UPDATE_WORKSHIFT,
  UPDATE_WORKSHIFT_SUCCESS,
  UPDATE_WORKSHIFT_ERROR,
  DESTROY_WORKSHIFT,
  DESTROY_WORKSHIFT_SUCCESS,
  DESTROY_WORKSHIFT_ERROR,
  SET_WORKSHIFT_FORM
} from '../types/workshiftTypes'
import { WORKSHIFT_LIST_SCHEMA } from '../schema/workshiftSchema'

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
  },

  [STORE_WORKSHIFT] (state) {
    state.loading = true
    state.error = null
  },

  [STORE_WORKSHIFT_SUCCESS] (state) {
    state.loading = false
    state.error = null
  },

  [STORE_WORKSHIFT_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [FETCH_ONE_WORKSHIFT] (state) {
    // Do nothing for now
  },

  [FETCH_ONE_WORKSHIFT_SUCCESS] (state) {
    // Do nothing for now
  },

  [FETCH_ONE_WORKSHIFT_ERROR] (state, err) {
    // Do nothing for now
  },

  [UPDATE_WORKSHIFT] (state) {
    // Do nothing for now
  },

  [UPDATE_WORKSHIFT_SUCCESS] (state) {
    // Do nothing for now
  },

  [UPDATE_WORKSHIFT_ERROR] (state, err) {
    // Do nothing for now
  },

  [DESTROY_WORKSHIFT] (state) {
    // Do nothing for now
  },

  [DESTROY_WORKSHIFT_SUCCESS] (state) {
    // Do nothing for now
  },

  [DESTROY_WORKSHIFT_ERROR] (state, err) {
    // Do nothing for now
  },

  [SET_WORKSHIFT_FORM] (state, data) {
    state.form = {
      ...state.form,
      ...data
    }
  }
}
