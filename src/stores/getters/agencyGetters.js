import * as types from '../types/echelonTypes'
import { AGENCY_LIST_SCHEMA } from '../schema/echelonSchema'
import { denormalize } from 'normalizr'

export default {
  [types.GET_AGENCY_DATA]: state => denormalize(state.data.result, AGENCY_LIST_SCHEMA, state.data.entities),

  [types.GET_AGENCY_FORM]: state => state.form
}
