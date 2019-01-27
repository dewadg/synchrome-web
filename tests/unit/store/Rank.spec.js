import actions from '@/stores/actions/rank'
import sinon, { assert } from 'sinon'
import { authService } from '@/services'
import {
  FETCH_ALL_RANKS,
  FETCH_ALL_RANKS_SUCCESS,
  FETCH_ONE_RANK,
  FETCH_ONE_RANK_SUCCESS,
  STORE_RANK,
  STORE_RANK_SUCCESS,
  UPDATE_RANK,
  UPDATE_RANK_SUCCESS,
  DESTROY_RANK,
  DESTROY_RANK_SUCCESS
} from '../../../src/stores/types/rank'
import faker from 'faker'

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

  it(`should dispatch ${STORE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[STORE_RANK]({ commit }, {
      id: faker.lorem.word(),
      name: faker.lorem.word()
    })

    assert.match(commit.getCall(0).args[0], STORE_RANK)
    assert.match(commit.getCall(1).args[0], STORE_RANK_SUCCESS)
  })

  it(`should dispatch ${FETCH_ONE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_RANK]({ commit }, 'quis')

    assert.match(commit.getCall(0).args[0], FETCH_ONE_RANK)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_RANK_SUCCESS)
  })

  it(`should dispatch ${UPDATE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[UPDATE_RANK]({ commit }, {
      id: '1A',
      data: {
        name: faker.lorem.word()
      }
    })

    assert.match(commit.getCall(0).args[0], UPDATE_RANK)
    assert.match(commit.getCall(1).args[0], UPDATE_RANK_SUCCESS)
  })

  it(`should dispatch ${DESTROY_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[DESTROY_RANK]({ commit }, '1B')

    assert.match(commit.getCall(0).args[0], DESTROY_RANK)
    assert.match(commit.getCall(1).args[0], DESTROY_RANK_SUCCESS)
  })
})
