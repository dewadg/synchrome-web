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
  }
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, calendarListSchema, state.data.entities)
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, calendarListSchema)
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
        const resp = await httpService.post('calendars', payload)

        return resp.data
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika menyimpan data kalender')
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
