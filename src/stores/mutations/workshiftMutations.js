import { normalize } from 'normalizr'
import { generateDetails } from '@/helpers/workshift'
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
  SET_WORKSHIFT_FORM,
  RESET_WORKSHIFT_FORM
} from '../types/workshiftTypes'
import { WORKSHIFT_LIST_SCHEMA } from '../schema/workshiftSchema'

export default {
  [FETCH_ALL_WORKSHIFTS] (state) {
    state.isFetching = true
    state.error = null
  },

  [FETCH_ALL_WORKSHIFTS_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, WORKSHIFT_LIST_SCHEMA)
  },

  [FETCH_ALL_WORKSHIFTS_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [STORE_WORKSHIFT] (state) {
    state.isStoring = true
    state.error = null
  },

  [STORE_WORKSHIFT_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [STORE_WORKSHIFT_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [FETCH_ONE_WORKSHIFT] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [FETCH_ONE_WORKSHIFT_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [FETCH_ONE_WORKSHIFT_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  },

  [UPDATE_WORKSHIFT] (state) {
    state.isUpdating = true
    state.error = null
  },

  [UPDATE_WORKSHIFT_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [UPDATE_WORKSHIFT_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [DESTROY_WORKSHIFT] (state) {
    state.isDestroying = true
    state.error = null
  },

  [DESTROY_WORKSHIFT_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [DESTROY_WORKSHIFT_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [SET_WORKSHIFT_FORM] (state, data) {
    state.form = {
      ...state.form,
      ...data
    }
  },

  [RESET_WORKSHIFT_FORM] (state) {
    state.form = {
      id: null,
      name: '',
      details: generateDetails()
    }
  }
}
