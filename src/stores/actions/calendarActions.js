import { calendarService } from '@/services'
import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_ERROR,
  STORE_CALENDAR,
  STORE_CALENDAR_SUCCESS,
  STORE_CALENDAR_ERROR,
  FETCH_ONE_CALENDAR,
  FETCH_ONE_CALENDAR_SUCCESS,
  FETCH_ONE_CALENDAR_ERROR,
  DESTROY_CALENDAR,
  DESTROY_CALENDAR_SUCCESS,
  DESTROY_CALENDAR_ERROR,
  UPDATE_CALENDAR,
  UPDATE_CALENDAR_SUCCESS,
  UPDATE_CALENDAR_ERROR
} from '../types/calendarTypes'

export default {
  async [FETCH_ALL_CALENDARS] ({ commit }) {
    commit(FETCH_ALL_CALENDARS)

    try {
      commit(FETCH_ALL_CALENDARS_SUCCESS, await calendarService.get())
    } catch (err) {
      commit(FETCH_ALL_CALENDARS_ERROR, err)
    }
  },

  async [STORE_CALENDAR] ({ commit }, payload) {
    commit(STORE_CALENDAR)

    try {
      const calendar = await calendarService.create(payload)
      commit(STORE_CALENDAR_SUCCESS)

      return calendar
    } catch (err) {
      commit(STORE_CALENDAR_ERROR, err)
    }
  },

  async [FETCH_ONE_CALENDAR] ({ commit }, id) {
    commit(FETCH_ONE_CALENDAR)

    try {
      const calendar = await calendarService.find(id)
      commit(FETCH_ONE_CALENDAR_SUCCESS)

      return calendar
    } catch (err) {
      commit(FETCH_ONE_CALENDAR_ERROR)
    }
  },

  async [UPDATE_CALENDAR] ({ commit }, payload) {
    commit(UPDATE_CALENDAR)

    try {
      const { id } = payload
      const data = {
        name: payload.name,
        start: payload.start,
        end: payload.end,
        published: payload.published
      }

      const updatedCalendar = await calendarService.update(id, data)
      commit(UPDATE_CALENDAR_SUCCESS)

      return updatedCalendar
    } catch (err) {
      commit(UPDATE_CALENDAR_ERROR, err)
    }
  },

  async [DESTROY_CALENDAR] ({ commit }, id) {
    commit(DESTROY_CALENDAR)

    try {
      await calendarService.delete(id)
      commit(DESTROY_CALENDAR_SUCCESS)
    } catch (err) {
      commit(DESTROY_CALENDAR_ERROR, err)
    }
  }
}
