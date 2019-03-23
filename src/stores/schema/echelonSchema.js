import { schema } from 'normalizr'

export const ECHELON_TYPE_SCHEMA = new schema.Entity('echelonTypes')

export const ECHELON_SCHEMA = new schema.Entity('echelons', {
  type: ECHELON_TYPE_SCHEMA
})
export const ECHELON_LIST_SCHEMA = [AGENCY_SCHEMA]
