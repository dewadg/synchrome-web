import {
  required,
  requiredIf,
  minLength
} from 'vuelidate/lib/validators'
import {
  timeIsBefore,
  timeIsAfter
} from '@/helpers/date'

export default {
  name: {
    required
  },
  details: {
    required,
    minLength: minLength(7),
    $each: {
      index: {
        required
      },
      checkIn: {
        required: requiredIf(model => model.active),
        isBeforeCheckOut: (val, vm) => {
          if (!vm.active) return true

          return timeIsBefore(val, vm.checkOut)
        }
      },
      checkOut: {
        required: requiredIf(model => model.active),
        isAfterCheckIn: (val, vm) => {
          if (!vm.active) return true

          return timeIsAfter(val, vm.checkIn)
        }
      },
      active: {
        required
      }
    }
  }
}
