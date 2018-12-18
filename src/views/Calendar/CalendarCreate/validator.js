import {
  required,
  minLength
} from 'vuelidate/lib/validators'

export default {
  name: { required },
  start: { required },
  published: { required },
  events: {
    required,
    minLength: minLength(1),
    $each: {
      title: { required },
      start: { required },
      attendanceTypeId: { required }
    }
  }
}
