import { GET_RANK_DATA, GET_RANK_FORM } from '../types/rank'
import { RANK_LIST_SCHEMA } from '../schema/rank'
import { denormalize } from 'normalizr'

export default {
  [GET_RANK_DATA]: state => denormalize(state.data.result, RANK_LIST_SCHEMA, state.data.entities),

  [GET_RANK_FORM]: state => state.form
}
