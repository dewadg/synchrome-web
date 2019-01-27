import { FETCH_ALL_CALENDARS, FETCH_ALL_CALENDARS_SUCCESS, FETCH_ALL_CALENDARS_ERROR } from '../types/calendar'
import { calendarService } from '@/services'

export default {
  async [FETCH_ALL_CALENDARS] ({ commit }) {
    commit(FETCH_ALL_CALENDARS)

    try {
      commit(FETCH_ALL_CALENDARS_SUCCESS, await calendarService.get())
    } catch (err) {
      commit(FETCH_ALL_CALENDARS_ERROR, err)
    }
  }
}
