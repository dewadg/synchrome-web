import { GET_ATTENDANCE_TYPE_DATA } from '../types/attendanceTypeTypes'
import { ATTENDANCE_TYPE_LIST_SCHEMA } from '../schema/attendanceTypeSchema'
import { denormalize } from 'normalizr'

export default {
  [GET_ATTENDANCE_TYPE_DATA]: state => denormalize(state.data.result, ATTENDANCE_TYPE_LIST_SCHEMA, state.data.entities)
}
