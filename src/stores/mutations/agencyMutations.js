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

  [types.FETCH_ONE_AGENCY] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [types.FETCH_ONE_AGENCY_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [types.FETCH_ONE_AGENCY_ERROR] (state, err) {
    state.isFetchingOne = false
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
  },

  [types.UPDATE_AGENCY] (state) {
    state.isUpdating = true
    state.error = null
  },

  [types.UPDATE_AGENCY_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [types.UPDATE_AGENCY_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [types.DESTROY_AGENCY] (state) {
    state.isDestroying = true
    state.error = null
  },

  [types.DESTROY_AGENCY_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [types.DESTROY_AGENCY_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [types.SET_AGENCY_FORM] (state, form) {
    state.form = {
      ...state.form,
      ...form
    }
  },

  [types.RESET_AGENCY_FORM](state, form) {
    state.form.id = null
    state.form.name = ''
    state.form.phone = ''
    state.form.address = ''
  }
}