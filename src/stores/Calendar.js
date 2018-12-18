import { httpService } from '../services'
import store from '../store';

const state = {
  data: []
}

const mutations = {
  setData (state, data) {
    state.data = data
  }
}

const actions = {
  async fetchAll ({ commit }) {
    try {
      const resp = await httpService.get('calendars')

      const data = resp.data.data.map(item => ({
        ...item,
        events: item.events.data.map(calendarEvent => ({
          ...calendarEvent,
          attendanceType: calendarEvent.attendanceType.data
        }))
      }))

      commit('setData', data)
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika mengambil data kalender')
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
  mutations,
  actions
}
