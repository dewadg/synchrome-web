import { FETCH_ALL_ATTENDANCE_TYPES, FETCH_ALL_ATTENDANCE_TYPES_SUCCESS, FETCH_ALL_ATTENDANCE_TYPES_ERROR } from '../types/attendanceType'
import { attendanceTypeService } from '@/services'

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
