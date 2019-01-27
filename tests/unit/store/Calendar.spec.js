import actions from '@/stores/actions/calendar'
import sinon, { assert } from 'sinon'
import { authService } from '@/services'
import {
  FETCH_ALL_CALENDARS,
  FETCH_ALL_CALENDARS_SUCCESS
} from '../../../src/stores/types/calendar'

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
  })
})
