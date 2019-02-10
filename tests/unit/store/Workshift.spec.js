import actions from '@/stores/actions/workshiftActions'
import sinon, { assert } from 'sinon'
import faker from 'faker'
import { httpService, authService } from '@/services'
import {
  FETCH_ALL_WORKSHIFTS,
  FETCH_ALL_WORKSHIFTS_SUCCESS
} from '@/stores/types/workshiftTypes'
import { STORE_WORKSHIFT, STORE_WORKSHIFT_SUCCESS, FETCH_ONE_WORKSHIFT, FETCH_ONE_WORKSHIFT_SUCCESS, UPDATE_WORKSHIFT, UPDATE_WORKSHIFT_SUCCESS, DESTROY_WORKSHIFT, DESTROY_WORKSHIFT_SUCCESS, FETCH_ONE_WORKSHIFT_ERROR, DESTROY_WORKSHIFT_ERROR, UPDATE_WORKSHIFT_ERROR } from '../../../src/stores/types/workshiftTypes';

let workshift

describe('Workshift Store', () => {
  before(async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token
  })

  it(`should dispatch ${FETCH_ALL_WORKSHIFTS} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ALL_WORKSHIFTS]({ commit })

    assert.match(commit.getCall(0).args[0], FETCH_ALL_WORKSHIFTS)
    assert.match(commit.getCall(1).args[0], FETCH_ALL_WORKSHIFTS_SUCCESS)
  })

  it(`should dispatch ${STORE_WORKSHIFT} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      name: faker.lorem.word(),
      details: [
        {
          index: 1,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 2,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 3,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 4,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 5,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 6,
          checkIn: null,
          checkOut: null,
          active: false
        },
        {
          index: 7,
          checkIn: null,
          checkOut: null,
          active: false
        }
      ]
    }

    workshift = await actions[STORE_WORKSHIFT]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], STORE_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], STORE_WORKSHIFT_SUCCESS)
  })

  it(`should dispatch ${FETCH_ONE_WORKSHIFT} successfully`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_WORKSHIFT]({ commit }, workshift.id)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_WORKSHIFT_SUCCESS)
  })

  it(`should fail when dispatching ${FETCH_ONE_WORKSHIFT} with undefined ID`, async () => {
    const commit = sinon.spy()

    await actions[FETCH_ONE_WORKSHIFT]({ commit }, null)

    assert.match(commit.getCall(0).args[0], FETCH_ONE_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], FETCH_ONE_WORKSHIFT_ERROR)
  })

  it(`should dispatch ${UPDATE_WORKSHIFT} successfully`, async () => {
    const commit = sinon.spy()
    const payload = {
      id: workshift.id,
      name: `${faker.lorem.word()}-${Math.random()}`,
      details: [
        {
          index: 1,
          checkIn: null,
          checkOut: null,
          active: false
        },
        {
          index: 2,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 3,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 4,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 5,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        },
        {
          index: 6,
          checkIn: null,
          checkOut: null,
          active: false
        },
        {
          index: 7,
          checkIn: null,
          checkOut: null,
          active: false
        }
      ]
    }

    workshift = await actions[UPDATE_WORKSHIFT]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], UPDATE_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], UPDATE_WORKSHIFT_SUCCESS)
  })

  it(`should fail when dispatching ${UPDATE_WORKSHIFT} with undefined ID`, async () => {
    const commit = sinon.spy()
    const payload = {
      id: null,
      name: `${faker.lorem.word()}-${Math.random()}`,
      details: [
        {
          index: 1,
          checkIn: null,
          checkOut: null,
          active: false
        },
        {
          index: 2,
          checkIn: '07:00:00',
          checkOut: '16:00:00',
          active: true
        }
      ]
    }

    await actions[UPDATE_WORKSHIFT]({ commit }, payload)

    assert.match(commit.getCall(0).args[0], UPDATE_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], UPDATE_WORKSHIFT_ERROR)
  })

  it(`should dispatch ${DESTROY_WORKSHIFT} successfully`, async () => {
    const commit = sinon.spy()

    await actions[DESTROY_WORKSHIFT]({ commit }, workshift.id)

    assert.match(commit.getCall(0).args[0], DESTROY_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], DESTROY_WORKSHIFT_SUCCESS)
  })

  it(`should fail when dispatching ${DESTROY_WORKSHIFT} with undefined ID`, async () => {
    const commit = sinon.spy()

    await actions[DESTROY_WORKSHIFT]({ commit }, null)

    assert.match(commit.getCall(0).args[0], DESTROY_WORKSHIFT)
    assert.match(commit.getCall(1).args[0], DESTROY_WORKSHIFT_ERROR)
  })
})
