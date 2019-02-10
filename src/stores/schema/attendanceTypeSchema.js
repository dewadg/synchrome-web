import { schema } from 'normalizr'

export const ATTENDANCE_TYPE_SCHEMA = new schema.Entity('attendanceTypes')
export const ATTENDANCE_TYPE_LIST_SCHEMA = [ATTENDANCE_TYPE_SCHEMA]
