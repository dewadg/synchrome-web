import sinon, { assert } from 'sinon'
import faker from 'faker'
import moment from 'moment'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/calendarActions'
import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  STORE_CALENDAR,
  STORE_CALENDAR_SUCCESS,
  FETCH_ONE_CALENDAR,
  FETCH_ONE_CALENDAR_SUCCESS,
  DESTROY_CALENDAR,
  DESTROY_CALENDAR_SUCCESS
} from '@/stores/types/calendarTypes'

let calendar

describe('Calendar Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${FETCH_ALL_CALENDARS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_CALENDARS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_CALENDARS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_CALENDARS_SUCCESS)
  })

  it(`should dispatch ${STORE_CALENDAR} successfully`, async () => {
    const commit = sinon.spy()

    calendar = await actions[STORE_CALENDAR]({ commit }, {
      name: faker.lorem.word(),
      start: moment().startOf('year').format('YYYY-MM-DD'),
      end: moment().endOf('year').format('YYYY-MM-DD'),
      published: false,
      events: [
        {
          title: faker.lorem.word(),
          start: moment().startOf('year').format('YYYY-MM-DD'),
          end: null,
          attendanceTypeId: 'L'
        }
      ]
    })

    assert.match(commit.getCall(0).args[0], STORE_CALENDAR)
    assert.match(commit.getCall(1).args[0], STORE_CALENDAR_SUCCESS)
  })

  it(`should dispatch ${FETCH_ONE_CALENDAR} successfully`, async () => {
    const commit = sinon.spy()
    await actions[FETCH_ONE_CALENDAR]({ commit }, calendar.id)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_CALENDAR)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_CALENDAR_SUCCESS)
  })

  it(`should dispatch ${DESTROY_CALENDAR} successfully`, async () => {
    const commit = sinon.spy()
    await actions[DESTROY_CALENDAR]({ commit }, calendar.id)

    assert.match(commit.getCall(0).args[0], DESTROY_CALENDAR)
    assert.match(commit.getCall(1).args[0], DESTROY_CALENDAR_SUCCESS)
  })
})
