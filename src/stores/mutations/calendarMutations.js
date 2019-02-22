import { normalize } from 'normalizr'
import moment from 'moment'
import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_ERROR,
  SET_CALENDAR_FORM,
  RESET_CALENDAR_FORM,
  STORE_CALENDAR,
  STORE_CALENDAR_SUCCESS,
  STORE_CALENDAR_ERROR,
  FETCH_ONE_CALENDAR,
  FETCH_ONE_CALENDAR_SUCCESS,
  FETCH_ONE_CALENDAR_ERROR,
  DESTROY_CALENDAR,
  DESTROY_CALENDAR_SUCCESS,
  DESTROY_CALENDAR_ERROR,
  UPDATE_CALENDAR,
  UPDATE_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_ERROR
} from '../types/calendarTypes'
import { CALENDAR_LIST_SCHEMA } from '../schema/calendarSchema'

export default {
  [FETCH_ALL_CALENDARS] (state) {
    state.isFetching = true
    state.error = null
  },

  [FETCH_ALL_CALENDARS_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, CALENDAR_LIST_SCHEMA)
  },

  [FETCH_ALL_CALENDARS_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  },

  [STORE_CALENDAR] (state) {
    state.isStoring = true
    state.error = null
  },

  [STORE_CALENDAR_SUCCESS] (state) {
    state.isStoring = false
    state.error = null
  },

  [STORE_CALENDAR_ERROR] (state, err) {
    state.isStoring = false
    state.error = err
  },

  [FETCH_ONE_CALENDAR] (state) {
    state.isFetchingOne = true
    state.error = null
  },

  [FETCH_ONE_CALENDAR_SUCCESS] (state) {
    state.isFetchingOne = false
    state.error = null
  },

  [FETCH_ONE_CALENDAR_ERROR] (state, err) {
    state.isFetchingOne = false
    state.error = err
  },

  [UPDATE_CALENDAR] (state) {
    state.isUpdating = true
    state.error = null
  },

  [UPDATE_CALENDAR_SUCCESS] (state) {
    state.isUpdating = false
    state.error = null
  },

  [UPDATE_CALENDAR_ERROR] (state, err) {
    state.isUpdating = false
    state.error = err
  },

  [DESTROY_CALENDAR] (state) {
    state.isDestroying = true
    state.error = null
  },

  [DESTROY_CALENDAR_SUCCESS] (state) {
    state.isDestroying = false
    state.error = null
  },

  [DESTROY_CALENDAR_ERROR] (state, err) {
    state.isDestroying = false
    state.error = err
  },

  [SET_CALENDAR_FORM] (state, payload) {
    state.form = {
      ...state.form,
      ...payload
    }
  },

  [RESET_CALENDAR_FORM] (state) {
    state.form.id = null
    state.form.name = ''
    state.form.start = moment().startOf('year').format('YYYY-MM-DD')
    state.form.end = moment().endOf('year').format('YYYY-MM-DD')
    state.form.published = false
    state.form.events = []
  }
}
