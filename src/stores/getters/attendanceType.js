import {
  GET_ATTENDANCE_TYPE_DATA
} from '../types/attendanceType'
import {
  ATTENDANCE_TYPE_LIST_SCHEMA
} from '../schema/attendanceType'
import {
  denormalize
} from 'normalizr'

export default {
  [GET_ATTENDANCE_TYPE_DATA]: state => denormalize(state.data.result, ATTENDANCE_TYPE_LIST_SCHEMA, state.data.entities)
}
