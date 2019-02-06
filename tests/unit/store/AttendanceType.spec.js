import actions from '@/stores/actions/attendanceType'
import sinon, { assert } from 'sinon'
import { httpService, authService } from '@/services'
import {
  FETCH_ALL_ATTENDANCE_TYPES,
  FETCH_ALL_ATTENDANCE_TYPES_SUCCESS
} from '../../../src/stores/types/attendanceType'

describe('AttendanceType Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${FETCH_ALL_ATTENDANCE_TYPES} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_ATTENDANCE_TYPES]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_ATTENDANCE_TYPES)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_ATTENDANCE_TYPES_SUCCESS)
  })
})
