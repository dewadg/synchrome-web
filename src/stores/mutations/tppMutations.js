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
  },

  [types.UPDATE_TPP] (state) {
    state.isUpdating = true
    state.error = null
  },

  [types.UPDATE_TPP_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [types.UPDATE_TPP_ERROR](state, err) {
    state.isUpdating = false
    state.error = err
  },

  [types.DESTROY_TPP] (state) {
    state.isDestroying = true
    state.error = null
  },

  [types.DESTROY_TPP_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [types.DESTROY_TPP_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [types.SET_TPP_FORM] (state, form) {
    state.form = {
      ...state.form,
      ...form
    }
  },

  [types.RESET_TPP_FORM] (state) {
    state.form = {
      name: '',
      value: 0
    }
  }
}
