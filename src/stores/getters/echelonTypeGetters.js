import * as types from '../types/echelonTypeTypes'
import { ECHELON_TYPE_LIST_SCHEMA } from '../schema/echelonTypeSchema'
import { denormalize } from 'normalizr'

export default {
  [types.GET_ECHELON_TYPE_DATA]: state => denormalize(state.data.result, ECHELON_TYPE_LIST_SCHEMA, state.data.entities)
}
