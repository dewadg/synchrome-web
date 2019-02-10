import { workshiftService } from '@/services'
import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS,
  FETCH_ALL_WORKSHIFTS_ERROR,
  STORE_WORKSHIFT,
  STORE_WORKSHIFT_ERROR,
  STORE_WORKSHIFT_SUCCESS,
  FETCH_ONE_WORKSHIFT,
  FETCH_ONE_WORKSHIFT_ERROR,
  FETCH_ONE_WORKSHIFT_SUCCESS,
  UPDATE_WORKSHIFT,
  UPDATE_WORKSHIFT_ERROR,
  UPDATE_WORKSHIFT_SUCCESS,
  DESTROY_WORKSHIFT,
  DESTROY_WORKSHIFT_ERROR,
  DESTROY_WORKSHIFT_SUCCESS
} from '../types/workshiftTypes'

export default {
  async [FETCH_ALL_WORKSHIFTS] ({ commit }) {
    commit(FETCH_ALL_WORKSHIFTS)

    try {
      commit(FETCH_ALL_WORKSHIFTS_SUCCESS, await workshiftService.get())
    } catch (err) {
      commit(FETCH_ALL_WORKSHIFTS_ERROR, err)
    }
  },

  async [STORE_WORKSHIFT] ({ commit }, payload) {
    commit(STORE_WORKSHIFT)

    try {
      const newWorkshift = await workshiftService.create(payload)
      commit(STORE_WORKSHIFT_SUCCESS)

      return newWorkshift
    } catch (err) {
      commit(STORE_WORKSHIFT_ERROR, err)
    }
  },

  async [FETCH_ONE_WORKSHIFT] ({ commit }, id) {
    commit(FETCH_ONE_WORKSHIFT)

    try {
      const workshift = await workshiftService.find(id)
      commit(FETCH_ONE_WORKSHIFT_SUCCESS)

      return workshift
    } catch (err) {
      commit(FETCH_ONE_WORKSHIFT_ERROR, err)
    }
  },

  async [UPDATE_WORKSHIFT] ({ commit }, { id, name, details }) {
    commit(UPDATE_WORKSHIFT)

    try {
      const updatedWorkshift = await workshiftService.update(id, { name, details })
      commit(UPDATE_WORKSHIFT_SUCCESS)

      return updatedWorkshift
    } catch (err) {
      commit(UPDATE_WORKSHIFT_ERROR, err)
    }
  },

  async [DESTROY_WORKSHIFT] ({ commit }, id) {
    commit(DESTROY_WORKSHIFT)

    try {
      await workshiftService.delete(id)
      commit(DESTROY_WORKSHIFT_SUCCESS)
    } catch (err) {
      commit(DESTROY_WORKSHIFT_ERROR, err)
    }
  }
}
