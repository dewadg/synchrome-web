import { httpService } from '../services'

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
      const resp = await httpService.get('attendance-types')

      commit.setData(resp.data.data)
      return resp.data.data
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika mengambil data jenis presensi')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
