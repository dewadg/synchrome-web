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
      return resp.data.data
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika mengambil data golongan')
    }
  },

  async store (context, data) {
    try {
      const resp = await httpService.post('ranks', data)

      return resp.data.data
    } catch (err) {
      if (err.response.status === 422 && err.response.data.id) {
        throw new Error('Kode golongan sudah terdaftar')
      }

      throw new Error('Terjadi kesalahan ketika menyimpan data golongan')
    }
  },

  async destroy (context, id) {
    try {
      await httpService.delete(`ranks/${id}`)
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika menghapus data golongan')
    }
  }
}

export function emptyRank () {
  return {
    id: '',
    name: ''
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
