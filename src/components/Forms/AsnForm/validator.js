import { required } from 'vuelidate/lib/validators'

export default {
  asnId: { required },
  asnAgencyId: { required },
  asnRankId: { required },
  asnEchelonId: { required },
  asnTppId: { required },
  asnWorkshiftId: { required },
  asnCalendarId: { required },
  asnPin: { required },
  asnName: { required }
}
