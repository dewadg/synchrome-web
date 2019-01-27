import { FETCH_ALL_ATTENDANCE_TYPES, FETCH_ALL_ATTENDANCE_TYPES_SUCCESS, FETCH_ALL_ATTENDANCE_TYPES_ERROR } from '../types/attendanceType'
import { ATTENDANCE_LIST_SCHEMA } from '../schema/attendanceType'
import { normalize } from 'normalizr'

export default {
  [FETCH_ALL_ATTENDANCE_TYPES] (state) {
    state.loading = true
    state.error = null
  },

  [FETCH_ALL_ATTENDANCE_TYPES_SUCCESS] (state, data) {
    state.loading = false
    state.error = null
    state.data = normalize(data, ATTENDANCE_LIST_SCHEMA)
  },

  [FETCH_ALL_ATTENDANCE_TYPES_ERROR] (state, err) {
    state.loading = false
    state.error = err
  }
}
