import { GET_CALENDAR_DATA, GET_CALENDAR_FORM } from '../types/calendar'
import { CALENDAR_LIST_SCHEMA } from '../schema/calendar'
import { denormalize } from 'normalizr'

export default {
  [GET_CALENDAR_DATA]: state => denormalize(state.data.result, CALENDAR_LIST_SCHEMA, state.data.entities),

  [GET_CALENDAR_FORM]: state => state.form
}
