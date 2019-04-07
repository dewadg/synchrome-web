import sinon, { assert } from 'sinon'
import faker from 'faker'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/tppActions'
import * as types from '@/stores/types/tppTypes'

let tpp

describe('Tpp Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${types.FETCH_ALL_TPP} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ALL_TPP]({ commit })

    assert.match(commit.getCall(0).args[0], types.FETCH_ALL_TPP)
    assert.match(commit.getCall(1).args[0], types.FETCH_ALL_TPP_SUCCESS)
  })

  it(`should dispatch ${types.STORE_TPP} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      id: faker.lorem.word(),
      name: faker.lorem.word(),
      value: faker.finance.amount()
    }

    tpp = await actions[types.STORE_TPP]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], types.STORE_TPP)
    assert.match(commit.getCall(1).args[0], types.STORE_TPP_SUCCESS)
  })

  it(`should dispatch ${types.FETCH_ONE_TPP} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ONE_TPP]({ commit }, tpp.id)

    assert.match(commit.getCall(0).args[0], types.FETCH_ONE_TPP)
    assert.match(commit.getCall(1).args[0], types.FETCH_ONE_TPP_SUCCESS)
  })

  it(`should dispatch ${types.UPDATE_TPP} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      name: faker.lorem.word() + '123',
      value: tpp.value + '123'
    }

    await actions[types.UPDATE_TPP]({ commit }, {
      id: tpp.id,
      data: payload
    })

    assert.match(commit.getCall(0).args[0], types.UPDATE_TPP)
    assert.match(commit.getCall(1).args[0], types.UPDATE_TPP_SUCCESS)
  })

  it(`should dispatch ${types.DESTROY_TPP} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.DESTROY_TPP]({ commit }, tpp.id)

    assert.match(commit.getCall(0).args[0], types.DESTROY_TPP)
    assert.match(commit.getCall(1).args[0], types.DESTROY_TPP_SUCCESS)
  })
})
