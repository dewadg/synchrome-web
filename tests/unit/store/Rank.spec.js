import actions from '@/stores/actions/rank'
import {
  FETCH_ALL_RANKS,
  FETCH_ALL_RANKS_SUCCESS,
  FETCH_ONE_RANK,
  FETCH_ONE_RANK_SUCCESS
} from '@/stores/types/rank'
import sinon, { assert } from 'sinon'
import { authService } from '@/services'

describe('Rank Store', () => {
  before(async () => {
    await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })
  })

  it(`should dispatch ${FETCH_ALL_RANKS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_RANKS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_RANKS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_RANKS_SUCCESS)
  })

  it(`should dispatch ${FETCH_ONE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_RANK]({ commit }, '1A')

    assert.match(commit.getCall(0).args[0], FETCH_ONE_RANK)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_RANK_SUCCESS)
  })
})
