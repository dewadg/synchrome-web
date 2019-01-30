import actions from '@/stores/actions/workshift'
import sinon, { assert } from 'sinon'
import { authService } from '@/services'
import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS
} from '@/stores/types/workshift'

describe('Workshift Store', () => {
  before(async () => {
    await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })
  })

  it(`should dispatch ${FETCH_ALL_WORKSHIFTS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_WORKSHIFTS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_WORKSHIFTS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_WORKSHIFTS_SUCCESS)
  })
})
