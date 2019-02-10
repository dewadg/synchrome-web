import { denormalize } from 'normalizr'
import {
  GET_WORKSHIFT_DATA
} from '../types/workshiftTypes'
import { WORKSHIFT_LIST_SCHEMA } from '../schema/workshiftSchema'

export default {
  [GET_WORKSHIFT_DATA]: state => denormalize(state.data.result, WORKSHIFT_LIST_SCHEMA, state.data.entities)
}
