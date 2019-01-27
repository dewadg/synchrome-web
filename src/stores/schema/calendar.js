import {
  schema
} from 'normalizr'
import {
  ATTENDANCE_TYPE_SCHEMA
} from './attendanceType'

export const EVENT_SCHEMA = new schema.Entity('events', {
  attendanceType: ATTENDANCE_TYPE_SCHEMA
})

export const EVENT_LIST_SCHEMA = [EVENT_SCHEMA]

export const CALENDAR_SCHEMA = new schema.Entity('calendars', {
  events: EVENT_LIST_SCHEMA
})

export const CALENDAR_LIST_SCHEMA = [CALENDAR_SCHEMA]
