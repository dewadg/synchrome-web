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
      const resp = await httpService.get('ranks')

      commit('setData', resp.data.data)
    } catch (err) {
      console.log(err)
      throw new Error('Terjadi kesalahan ketika mengambil data golongan')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
