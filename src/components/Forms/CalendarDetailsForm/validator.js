import { required } from 'vuelidate/lib/validators'
import {
  isDateBefore,
  isDateAfter
} from '@/helpers/validator'

export default {
  calendarStart: {
    required,
    isBeforeEnd: isDateBefore('end')
  },
  calendarEnd: {
    required,
    isAfterStart: isDateAfter('start')
  }
}
