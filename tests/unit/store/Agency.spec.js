import sinon, { assert } from 'sinon'
import faker from 'faker'
import { httpService, authService } from '@/services'
import actions from '@/stores/actions/agencyActions'
import * as types from '@/stores/types/agencyTypes'

let agency

describe('Agency Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${types.FETCH_ALL_AGENCIES} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ALL_AGENCIES]({ commit })

    assert.match(commit.getCall(0).args[0], types.FETCH_ALL_AGENCIES)
    assert.match(commit.getCall(1).args[0], types.FETCH_ALL_AGENCIES_SUCCESS)
  })

  it(`should dispatch ${types.STORE_AGENCY} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      id: faker.lorem.word(),
      name: faker.lorem.word(),
      phone: faker.phone.phoneNumber(),
      address: faker.lorem.word()
    }

    agency = await actions[types.STORE_AGENCY]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], types.STORE_AGENCY)
    assert.match(commit.getCall(1).args[0], types.STORE_AGENCY_SUCCESS)
  })

  it(`should dispatch ${types.FETCH_ONE_AGENCY} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.FETCH_ONE_AGENCY]({ commit }, agency.id)

    assert.match(commit.getCall(0).args[0], types.FETCH_ONE_AGENCY)
    assert.match(commit.getCall(1).args[0], types.FETCH_ONE_AGENCY_SUCCESS)
  })

  it(`should dispatch ${types.UPDATE_AGENCY} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      name: faker.lorem.word() + '123',
      phone: faker.lorem.word() + '123',
      address: faker.lorem.word() + '123'
    }

    await actions[types.UPDATE_AGENCY]({ commit }, {
      id: agency.id,
      ...payload
    })

    assert.match(commit.getCall(0).args[0], types.UPDATE_AGENCY)
    assert.match(commit.getCall(1).args[0], types.UPDATE_AGENCY_SUCCESS)
  })

  it(`should dispatch ${types.DESTROY_AGENCY} successfully`, async () => {
    const commit = sinon.spy()

    await actions[types.DESTROY_AGENCY]({ commit }, agency.id)

    assert.match(commit.getCall(0).args[0], types.DESTROY_AGENCY)
    assert.match(commit.getCall(1).args[0], types.DESTROY_AGENCY_SUCCESS)
  })
})
