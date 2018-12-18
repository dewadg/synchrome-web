import { required } from 'vuelidate/lib/validators'
import {
  isDateBefore,
  isDateAfter
} from '@/helpers/validator'

export default {
  title: { required },
  start: {
    required,
    isBeforeEnd: isDateBefore('end')
  },
  end: {
    isAfterStart: isDateAfter('start')
  },
  attendanceTypeId: { required }
}
