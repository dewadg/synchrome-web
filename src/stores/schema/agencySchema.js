import { schema } from 'normalizr'

export const AGENCY_SCHEMA = new schema.Entity('agencies')
export const AGENCY_LIST_SCHEMA = [AGENCY_SCHEMA]
