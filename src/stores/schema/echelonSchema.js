import { schema } from 'normalizr'
import { ECHELON_TYPE_SCHEMA } from './echelonTypeSchema'

export const SUPERVISOR_SCHEMA = new schema.Entity('echelons')

export const ECHELON_SCHEMA = new schema.Entity('echelons', {
  type: ECHELON_TYPE_SCHEMA,
  supervisor: SUPERVISOR_SCHEMA
})
export const ECHELON_LIST_SCHEMA = [ECHELON_SCHEMA]
