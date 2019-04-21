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

  [types.FETCH_ALL_ASN_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [types.STORE_ASN] (state) {
    state.isStoring = true
    state.error = null
  },

  [types.STORE_ASN_SUCCESS] (state) {
    state.isStoring = false
  },
  
  [types.STORE_ASN_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [types.FETCH_ONE_ASN] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [types.FETCH_ONE_ASN_SUCCESS] (state) {
    state.isFetchingOne = false
  },

  [types.FETCH_ONE_ASN_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  },

  [types.UPDATE_ASN] (state) {
    state.isUpdating = true
    state.error = null
  },

  [types.UPDATE_ASN_SUCCESS] (state) {
    state.isUpdating = false
  },

  [types.UPDATE_ASN_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [types.DESTROY_ASN] (state) {
    state.isDestroying = true
    state.error = null
  },

  [types.DESTROY_ASN_SUCCESS] (state) {
    state.isDestroying = false
  },

  [types.DESTROY_ASN_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [types.SET_ASN_FORM] (state, form) {
    state.form = {
      ...state.form,
      ...form
    }
  },

  [types.RESET_ASN_FORM] (state) {
    state.form = {
      id: '',
      agencyId: null,
      rankId: null,
      echelonId: null,
      tppId: null,
      workshiftId: null,
      calendarId: null,
      pin: '',
      name: '',
      phone: '',
      address: ''
    }
  }
}
