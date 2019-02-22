import {
  FETCH_ALL_RANKS_SUCCESS,
  FETCH_ALL_RANKS,
  FETCH_ALL_RANKS_ERROR,
  FETCH_ONE_RANK,
  FETCH_ONE_RANK_SUCCESS,
  FETCH_ONE_RANK_ERROR,
  STORE_RANK,
  UPDATE_RANK,
  UPDATE_RANK_SUCCESS,
  UPDATE_RANK_ERROR,
  DESTROY_RANK,
  DESTROY_RANK_SUCCESS,
  DESTROY_RANK_ERROR,
  STORE_RANK_ERROR,
  STORE_RANK_SUCCESS,
  SET_RANK_FORM,
  RESET_RANK_FORM
} from '../types/rankTypes'
import {
  RANK_LIST_SCHEMA
} from '../schema/rankSchema'
import {
  normalize
} from 'normalizr'

export default {
  [FETCH_ALL_RANKS] (state) {
    state.isFetching = true
    state.error = null
  },

  [FETCH_ALL_RANKS_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, RANK_LIST_SCHEMA)
  },

  [FETCH_ALL_RANKS_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [FETCH_ONE_RANK] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [FETCH_ONE_RANK_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [FETCH_ONE_RANK_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  },

  [STORE_RANK] (state) {
    state.isStoring = true
    state.error = null
  },

  [STORE_RANK_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [STORE_RANK_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [UPDATE_RANK] (state) {
    state.isUpdating = true
    state.error = null
  },

  [UPDATE_RANK_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [UPDATE_RANK_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [DESTROY_RANK] (state) {
    state.isDestroying = true
    state.error = null
  },

  [DESTROY_RANK_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [DESTROY_RANK_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [SET_RANK_FORM] (state, payload) {
    state.form = {
      ...state.form,
      ...payload
    }
  },

  [RESET_RANK_FORM] (state) {
    state.form.id = null
    state.form.name = ''
  }
}
