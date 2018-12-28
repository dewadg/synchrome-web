import { attendanceTypeService } from '../services'
import { schema, normalize, denormalize } from 'normalizr'

export const attendanceTypeSchema = new schema.Entity('attendanceTypes')
export const attendanceTypeListSchema = [ attendanceTypeSchema ]

const state = {
  data: {
    entities: {},
    result: []
  }
}

const mutations = {
  setData (state, data) {
    state.data = normalize(data, attendanceTypeListSchema)
  }
}

const getters = {
  getData (state) {
    return denormalize(state.data.result, attendanceTypeListSchema, state.data.entities)
  }
}

const actions = {
  async fetchAll (context) {
    try {
      const attendanceTypes = await attendanceTypeService.get()
      context.commit('setData', attendanceTypes)

      return context.getters.getData
    } catch (err) {
      throw new Error('Terjadi kesalahan ketika mengambil data jenis presensi')
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
