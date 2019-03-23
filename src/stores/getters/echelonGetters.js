import * as types from '../types/echelonTypes'
import { ECHELON_LIST_SCHEMA } from '../schema/echelonSchema'
import { denormalize } from 'normalizr'

export default {
  [types.GET_ECHELON_DATA]: state => denormalize(state.data.result, ECHELON_LIST_SCHEMA, state.data.entities),

  [types.GET_ECHELON_FORM]: state => state.form
}
