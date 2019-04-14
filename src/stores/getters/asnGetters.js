import { denormalize } from 'normalizr'
import * as types from '../types/asnTypes'
import { ASN_LIST_SCHEMA } from '../schema/asnSchema'

export default {
  [types.GET_ASN_DATA]: state => denormalize(state.data.result, ASN_LIST_SCHEMA, state.data.entities)
}
