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
    start: '',
    end: '',
    published: false,
    events: []
  }
})
