import sinon, { assert } from 'sinon'
import faker from 'faker'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/echelonActions'
import * as types from '@/stores/types/echelonTypes'

let echelon

describe('Echelon Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${types.FETCH_ALL_ECHELONS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ALL_ECHELONS]({ commit })

    assert.match(commit.getCall(0).args[0], types.FETCH_ALL_ECHELONS)
    assert.match(commit.getCall(1).args[0], types.FETCH_ALL_ECHELONS_SUCCESS)
  })

  it(`should dispatch ${types.STORE_ECHELON} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      id: faker.lorem.word(),
      name: faker.lorem.word(),
      echelonTypeId: '3a',
      supervisorId: null
    }

    echelon = await actions[types.STORE_ECHELON]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], types.STORE_ECHELON)
    assert.match(commit.getCall(1).args[0], types.STORE_ECHELON_SUCCESS)
  })

  it(`should dispatch ${types.FETCH_ONE_ECHELON} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ONE_ECHELON]({ commit }, echelon.id)

    assert.match(commit.getCall(0).args[0], types.FETCH_ONE_ECHELON)
    assert.match(commit.getCall(1).args[0], types.FETCH_ONE_ECHELON_SUCCESS)
  })

  it(`should dispatch ${types.UPDATE_ECHELON} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      name: faker.lorem.word() + '123',
      echelonTypeId: '2a',
      supervisorId: null
    }

    await actions[types.UPDATE_ECHELON]({ commit }, {
      id: echelon.id,
      ...payload
    })

    assert.match(commit.getCall(0).args[0], types.UPDATE_ECHELON)
    assert.match(commit.getCall(1).args[0], types.UPDATE_ECHELON_SUCCESS)
  })

  it(`should dispatch ${types.DESTROY_ECHELON} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.DESTROY_ECHELON]({ commit }, echelon.id)

    assert.match(commit.getCall(0).args[0], types.DESTROY_ECHELON)
    assert.match(commit.getCall(1).args[0], types.DESTROY_ECHELON_SUCCESS)
  })
})
