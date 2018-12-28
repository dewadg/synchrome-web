import { calendarService } from '../services'
import { schema, normalize, denormalize } from 'normalizr'
import { attendanceTypeSchema } from './AttendanceType'

export const eventSchema = new schema.Entity('events', {
  attendanceType: attendanceTypeSchema
})
export const eventListSchema = [ eventSchema ]

export const calendarSchema = new schema.Entity('calendars', {
  events: eventListSchema
})
export const calendarListSchema = [ calendarSchema ]

const state = {
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
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, calendarListSchema, state.data.entities)
  },

  getForm (state) {
    return state.form
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, calendarListSchema)
  },

  setForm (state, form) {
    state.form = form
  },

  clearForm (state) {
    state.form = {
      id: null,
      name: '',
      start: '',
      end: '',
      published: false,
      events: []
    }
  }
}

const actions = {
  async fetchAll (context) {
    try {
      const calendars = await calendarService.get()
      context.commit('setData', calendars)

      return context.getters.getData
    } catch (err) {
      throw err
    }
  },

  async store (context, payload) {
    try {
      const newCalendar = await calendarService.create(payload)

      return newCalendar
    } catch (err) {
      throw err
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
