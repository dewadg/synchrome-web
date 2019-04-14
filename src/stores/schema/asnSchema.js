import { schema } from 'normalizr'
import { AGENCY_SCHEMA } from './agencySchema'
import { ECHELON_SCHEMA } from './echelonSchema'
import { RANK_SCHEMA } from './rankSchema'
import { WORKSHIFT_SCHEMA } from './workshiftSchema'
import { CALENDAR_SCHEMA } from './calendarSchema'

export const ASN_SCHEMA = new schema.Entity('asn', {
  agency: AGENCY_SCHEMA,
  echelon: ECHELON_SCHEMA,
  rank: RANK_SCHEMA,
  workshift: WORKSHIFT_SCHEMA,
  calendar: CALENDAR_SCHEMA
})

export const ASN_LIST_SCHEMA = [ASN_SCHEMA]
