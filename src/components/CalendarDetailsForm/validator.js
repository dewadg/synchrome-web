import { required } from 'vuelidate/lib/validators'
import {
  isDateBefore,
  isDateAfter
} from '@/helpers/validator'

export default {
  start: {
    required,
    isBeforeEnd: isDateBefore('end')
  },
  end: {
    required,
    isAfterStart: isDateAfter('start')
  }
}
