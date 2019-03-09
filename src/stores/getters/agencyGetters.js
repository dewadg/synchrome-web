import * as types from '../types/agencyTypes'
import { AGENCY_LIST_SCHEMA } from '../schema/agencySchema'
import { denormalize } from 'normalizr'

export default {
  [types.GET_AGENCY_DATA]: state => denormalize(state.data.result, AGENCY_LIST_SCHEMA, state.data.entities)
}
