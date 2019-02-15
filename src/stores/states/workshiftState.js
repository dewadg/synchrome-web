import { generateDetails } from '@/helpers/workshift'

export default () => ({
  loading: false,
  error: null,

  data: {
    entities: {},
    result: []
  },

  form: {
    id: null,
    name: '',
    details: generateDetails()
  }
})
