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
    name: '',
    value: 0
  }
})
