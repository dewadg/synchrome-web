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
  FETCH_ONE_CALENDAR_ERROR
} from '../types/calendar'
import { normalize } from 'normalizr'
import { CALENDAR_LIST_SCHEMA } from '../schema/calendar'

export default {
  [FETCH_ALL_CALENDARS] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_ALL_CALENDARS_SUCCESS] (state, data) {
    state.loading = false
    state.error = null
    state.data = normalize(data, CALENDAR_LIST_SCHEMA)
  },

  [FETCH_ALL_CALENDARS_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [SET_CALENDAR_FORM] (state, payload) {
    state.form = {
      ...state.form,
      ...payload
    }
  },

  [STORE_CALENDAR] (state) {
    state.loading = true
    state.error = null
  },

  [STORE_CALENDAR_SUCCESS] (state) {
    state.loading = false
    state.error = null
  },

  [STORE_CALENDAR_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [FETCH_ONE_CALENDAR] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_ONE_CALENDAR_SUCCESS] (state) {
    state.loading = false
    state.error = null
  },

  [FETCH_ONE_CALENDAR_ERROR] (state, err) {
    state.loading = false
    state.error = err
  },

  [RESET_CALENDAR_FORM] (state) {
    state.form.id = null
    state.form.name = ''
    state.form.start = ''
    state.form.end = ''
    state.form.published = false
    state.form.events = []
  }
}
