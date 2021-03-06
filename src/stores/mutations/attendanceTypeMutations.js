import { normalize } from 'normalizr'
import {
  FETCH_ALL_ATTENDANCE_TYPES,
  FETCH_ALL_ATTENDANCE_TYPES_SUCCESS,
  FETCH_ALL_ATTENDANCE_TYPES_ERROR
} from '../types/attendanceTypeTypes'
import { ATTENDANCE_TYPE_LIST_SCHEMA } from '../schema/attendanceTypeSchema'

export default {
  [FETCH_ALL_ATTENDANCE_TYPES] (state) {
    state.isFetching = true
    state.error = null
  },

  [FETCH_ALL_ATTENDANCE_TYPES_SUCCESS] (state, data) {
    state.isFetching = false
    state.error = null
    state.data = normalize(data, ATTENDANCE_TYPE_LIST_SCHEMA)
  },

  [FETCH_ALL_ATTENDANCE_TYPES_ERROR] (state, err) {
    state.isFetching = false
    state.error = err
  }
}
