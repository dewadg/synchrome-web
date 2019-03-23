import Http from './Http'
import Auth from './Auth'
import Rank from './Rank'
import AttendanceType from './AttendanceType'
import Calendar from './Calendar'
import Workshift from './Workshift'
import Agency from './Agency'
import Echelon from './Echelon'

export const httpService = new Http()
export const authService = new Auth(httpService)
export const rankService = new Rank(httpService)
export const attendanceTypeService = new AttendanceType(httpService)
export const calendarService = new Calendar(httpService)
export const workshiftService = new Workshift(httpService)
export const agencyService = new Agency(httpService)
export const echelonService = new Echelon(httpService)

