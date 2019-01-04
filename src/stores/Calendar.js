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
  },

  async fetch (context, id) {
    try {
      const calendar = await calendarService.find(id)

      return calendar
    } catch (err) {
      throw err
    }
  },

  async update (context, { id, data }) {
    try {
      const updatedCalendar = await calendarService.update(id, data)

      return updatedCalendar
    } catch (err) {
      throw err
    }
  },

  async delete (context, id) {
    try {
      await calendarService.delete(id)
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
