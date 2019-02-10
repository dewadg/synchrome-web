import { attendanceTypeService } from '@/services'
import {
  FETCH_ALL_ATTENDANCE_TYPES,
  FETCH_ALL_ATTENDANCE_TYPES_SUCCESS,
  FETCH_ALL_ATTENDANCE_TYPES_ERROR
} from '../types/attendanceTypeTypes'

export default {
  async [FETCH_ALL_ATTENDANCE_TYPES] ({ commit }) {
    commit(FETCH_ALL_ATTENDANCE_TYPES)

    try {
      commit(FETCH_ALL_ATTENDANCE_TYPES_SUCCESS, await attendanceTypeService.get())
    } catch (err) {
      commit(FETCH_ALL_ATTENDANCE_TYPES_ERROR, err)
    }
  }
}
