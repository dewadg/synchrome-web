import { denormalize } from 'normalizr'
import * as types from '../types/tppTypes'
import { TPP_LIST_SCHEMA } from '../schema/tppSchema'

export default {
  [types.GET_TPP_DATA]: state => denormalize(state.data.result, TPP_LIST_SCHEMA, state.data.entities),

  [types.GET_TPP_FORM]: state => state.form
}
