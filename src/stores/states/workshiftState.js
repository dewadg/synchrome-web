import { generateDetails } from '@/helpers/workshift'

export default () => ({
  isFetching: false,
  isFetchingOne: false,
  isStoring: false,
  isUpdating: false,
  isDestroying: false,

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
