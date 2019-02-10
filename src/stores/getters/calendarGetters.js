import { denormalize } from 'normalizr'
import {
  GET_CALENDAR_DATA,
  GET_CALENDAR_FORM
} from '../types/calendarTypes'
import { CALENDAR_LIST_SCHEMA } from '../schema/calendarSchema'

export default {
  [GET_CALENDAR_DATA]: state => denormalize(state.data.result, CALENDAR_LIST_SCHEMA, state.data.entities),

  [GET_CALENDAR_FORM]: state => state.form
}
