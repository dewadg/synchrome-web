import sinon, { assert } from 'sinon'
import faker from 'faker'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/rankActions'
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
} from '@/stores/types/rankTypes'
import { STORE_RANK_ERROR, FETCH_ONE_RANK_ERROR, UPDATE_RANK_ERROR, DESTROY_RANK_ERROR } from '../../../src/stores/types/rankTypes';

let rank
const expectedDuplicateId = `${faker.lorem.word()}-${Math.random()}`

describe('Rank Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${FETCH_ALL_RANKS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_RANKS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_RANKS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_RANKS_SUCCESS)
  })

  it(`should dispatch ${STORE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    rank = await actions[STORE_RANK]({ commit }, {
      id: expectedDuplicateId,
      name: faker.lorem.word()
    })

    assert.match(commit.getCall(0).args[0], STORE_RANK)
    assert.match(commit.getCall(1).args[0], STORE_RANK_SUCCESS)
  })

  it(`should fail when dispatching ${STORE_RANK} with duplicate ID`, async () => {
    const commit = sinon.spy()

    await actions[STORE_RANK]({ commit }, {
      id: expectedDuplicateId,
      name: faker.lorem.word()
    })

    assert.match(commit.getCall(0).args[0], STORE_RANK)
    assert.match(commit.getCall(1).args[0], STORE_RANK_ERROR)
  })

  it(`should dispatch ${FETCH_ONE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_RANK]({ commit }, rank.id)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_RANK)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_RANK_SUCCESS)
  })

  it(`should fail dispatching ${FETCH_ONE_RANK} with undefined ID`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_RANK]({ commit }, null)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_RANK)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_RANK_ERROR)
  })

  it(`should dispatch ${UPDATE_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[UPDATE_RANK]({ commit }, {
      id: rank.id,
      data: {
        name: faker.lorem.word()
      }
    })

    assert.match(commit.getCall(0).args[0], UPDATE_RANK)
    assert.match(commit.getCall(1).args[0], UPDATE_RANK_SUCCESS)
  })

  it(`should fail when dispatching ${UPDATE_RANK} with undefined ID`, async () => {
    const commit = sinon.spy()

    await actions[UPDATE_RANK]({ commit }, {
      id: null,
      data: {
        name: faker.lorem.word()
      }
    })

    assert.match(commit.getCall(0).args[0], UPDATE_RANK)
    assert.match(commit.getCall(1).args[0], UPDATE_RANK_ERROR)
  })

  it(`should dispatch ${DESTROY_RANK} successfully`, async () => {
    const commit = sinon.spy()

    await actions[DESTROY_RANK]({ commit }, rank.id)

    assert.match(commit.getCall(0).args[0], DESTROY_RANK)
    assert.match(commit.getCall(1).args[0], DESTROY_RANK_SUCCESS)
  })

  it(`should fail when dispatching ${DESTROY_RANK} with undefined ID`, async () => {
    const commit = sinon.spy()

    await actions[DESTROY_RANK]({ commit }, null)

    assert.match(commit.getCall(0).args[0], DESTROY_RANK)
    assert.match(commit.getCall(1).args[0], DESTROY_RANK_ERROR)
  })
})
