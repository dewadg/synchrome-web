import Http from './Http'
import Auth from './Auth'
import Rank from './Rank'
import AttendanceType from './AttendanceType'

export const httpService = new Http()
export const authService = new Auth(httpService)
export const rankService = new Rank(httpService)
export const attendanceTypeService = new AttendanceType(httpService)
