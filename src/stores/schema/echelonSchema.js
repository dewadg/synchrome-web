import { schema } from 'normalizr'
import { ECHELON_TYPE_SCHEMA } from './echelonTypeSchema'

export const ECHELON_SCHEMA = new schema.Entity('echelons', {
  type: ECHELON_TYPE_SCHEMA
})
export const ECHELON_LIST_SCHEMA = [AGENCY_SCHEMA]
