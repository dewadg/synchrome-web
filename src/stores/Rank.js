import { rankService } from '@/services'
import { schema, normalize, denormalize } from 'normalizr'

export const rankSchema = new schema.Entity('ranks')
export const rankListSchema = [ rankSchema ]

const state = {
  data: {
    entities: {},
    result: []
  },

  form: {
    id: null,
    name: ''
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, rankListSchema)
  },

  setForm (state, form) {
    state.form = form
  },

  clearForm (state) {
    state.form = {
      id: null,
      name: ''
    }
  }
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, rankListSchema, state.data.entities)
  },

  getForm (state) {
    return state.form
  }
}

const actions = {
  async fetchAll (context) {
    try {
      const ranks = await rankService.get()
      context.commit('setData', ranks)

      return context.getters.getData
    } catch (err) {
      throw err
    }
  },

  async store (context, data) {
    try {
      const newRank = await rankService.create(data)

      return newRank
    } catch (err) {
      throw err
    }
  },

  async destroy (context, id) {
    try {
      await rankService.delete(id)
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika menghapus data golongan')
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
