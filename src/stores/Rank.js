import { rankService } from '@/services'
import { schema, normalize, denormalize } from 'normalizr'

export const rankSchema = new schema.Entity('ranks')
export const rankListSchema = [ rankSchema ]

const state = {
  data: {
    entities: {},
    result: []
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, rankListSchema)
  }
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, rankListSchema, state.data.entities)
  }
}

const actions = {
  async fetchAll (context) {
    try {
      const ranks = await rankService.get()
      context.commit('setData', ranks)

      return context.getters.getData
    } catch (err) {
      return err
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
  getters,
  mutations,
  actions
}
