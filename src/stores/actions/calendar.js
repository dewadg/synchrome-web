import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  FETCH_ALL_CALENDARS_ERROR,
  STORE_CALENDAR,
  STORE_CALENDAR_SUCCESS,
  STORE_CALENDAR_ERROR,
  FETCH_ONE_CALENDAR,
  FETCH_ONE_CALENDAR_SUCCESS,
  FETCH_ONE_CALENDAR_ERROR
} from '../types/calendar'
import {
  calendarService
} from '@/services'

export default {
  async [FETCH_ALL_CALENDARS] ({
    commit
  }) {
    commit(FETCH_ALL_CALENDARS)

    try {
      commit(FETCH_ALL_CALENDARS_SUCCESS, await calendarService.get())
    } catch (err) {
      commit(FETCH_ALL_CALENDARS_ERROR, err)
    }
  },

  async [STORE_CALENDAR] ({
    commit
  }, payload) {
    commit(STORE_CALENDAR)

    try {
      const calendar = await calendarService.create(payload)
      commit(STORE_CALENDAR_SUCCESS)

      return calendar
    } catch (err) {
      commit(STORE_CALENDAR_ERROR, err)
    }
  },

  async [FETCH_ONE_CALENDAR] ({
    commit
  }, id) {
    commit(FETCH_ONE_CALENDAR)

    try {
      const calendar = await calendarService.find(id)
      commit(FETCH_ONE_CALENDAR_SUCCESS)

      return calendar
    } catch (err) {
      commit(FETCH_ONE_CALENDAR_ERROR)
    }
  }
}
