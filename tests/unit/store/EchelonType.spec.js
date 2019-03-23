import sinon, { assert } from 'sinon'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/echelonTypeActions'
import * as types from '@/stores/types/echelonTypeTypes'


describe('EchelonType Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${types.FETCH_ALL_ECHELON_TYPES} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ALL_ECHELON_TYPES]({ commit })

    assert.match(commit.getCall(0).args[0], types.FETCH_ALL_ECHELON_TYPES)
    assert.match(commit.getCall(1).args[0], types.FETCH_ALL_ECHELON_TYPES_SUCCESS)
  })
})
