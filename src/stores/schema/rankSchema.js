import { schema } from 'normalizr'

export const RANK_SCHEMA = new schema.Entity('ranks')
export const RANK_LIST_SCHEMA = [RANK_SCHEMA]
