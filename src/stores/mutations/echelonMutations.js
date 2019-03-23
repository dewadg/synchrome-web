import { normalize } from 'normalizr'
import * as types from '../types/echelonTypes'
import { ECHELON_LIST_SCHEMA } from '../schema/echelonSchema'

export default {
  [types.FETCH_ALL_ECHELONS] (state) {
    state.isFetching = true
    state.error = null
  },

  [types.FETCH_ALL_ECHELONS_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, ECHELON_LIST_SCHEMA)
  },

  [types.FETCH_ALL_ECHELONS_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [types.FETCH_ONE_ECHELON] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [types.FETCH_ONE_ECHELON_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [types.FETCH_ONE_ECHELON_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  },

  [types.STORE_ECHELON] (state) {
    state.isStoring = true
    state.error = null
  },

  [types.STORE_ECHELON_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [types.STORE_ECHELON_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [types.UPDATE_ECHELON] (state) {
    state.isUpdating = true
    state.error = null
  },

  [types.UPDATE_ECHELON_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [types.UPDATE_ECHELON_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [types.DESTROY_ECHELON] (state) {
    state.isDestroying = true
    state.error = null
  },

  [types.DESTROY_ECHELON_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [types.DESTROY_ECHELON_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [types.SET_ECHELON_FORM] (state, form) {
    state.form = {
      ...state.form,
      ...form
    }
  },

  [types.RESET_ECHELON_FORM](state, form) {
    state.form.id = null
    state.form.name = ''
    state.form.echelonTypeId = null
    state.form.supervisorId = null
  }
}
