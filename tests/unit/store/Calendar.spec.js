import actions from '@/stores/actions/calendar'
import sinon, { assert } from 'sinon'
import { authService } from '@/services'
import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS,
  STORE_CALENDAR,
  STORE_CALENDAR_SUCCESS,
  FETCH_ONE_CALENDAR,
  FETCH_ONE_CALENDAR_SUCCESS
} from '../../../src/stores/types/calendar'
import faker from 'faker'
import moment from 'moment';

describe('Calendar Store', () => {
  before(async () => {
    await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })
  })

  it(`should dispatch ${FETCH_ALL_CALENDARS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_CALENDARS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_CALENDARS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_CALENDARS_SUCCESS)
  }),

  it(`should dispatch ${STORE_CALENDAR} successfully`, async () => {
    const commit = sinon.spy()

    await actions[STORE_CALENDAR]({ commit }, {
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
    const id = 1
    const commit = sinon.spy()
    const calendar = await actions[FETCH_ONE_CALENDAR]({ commit }, id)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_CALENDAR)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_CALENDAR_SUCCESS)
    assert.match(calendar.id, id)
  })
})
