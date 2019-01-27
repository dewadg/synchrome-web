import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_ERROR,
  SET_CALENDAR_FORM,
  RESET_CALENDAR_FORM
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

  [RESET_CALENDAR_FORM] (state) {
    state.form.id = null
    state.form.name = ''
    state.form.start = ''
    state.form.end = ''
    state.form.published = false
    state.form.events = []
  }
}
