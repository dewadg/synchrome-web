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
    id: '',
    agencyId: null,
    rankId: null,
    echelonId: null,
    tppId: null,
    workshiftId: null,
    calendarId: null,
    pin: '',
    name: '',
    phone: '',
    address: ''
  }
})
