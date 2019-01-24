import { schema, normalize, denormalize } from 'normalizr'
import { workshiftService } from '@/services'

export const workshiftSchema = new schema.Entity('workshifts')
export const workshiftListSchema = [ workshiftSchema ]

const state = {
  data: {
    entities: {},
    result: []
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, workshiftListSchema)
  }
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, workshiftListSchema, state.data.entities)
  }
}

const actions = {
  async fetchAll (context) {
    try {
      const workshifts = await workshiftService.get()
      context.commit('setData', workshifts)

      return context.getters.getData
    } catch (err) {
      throw err
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
