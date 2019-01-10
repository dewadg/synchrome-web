import { expect } from 'chai'
import { authService, workshiftService } from '@/services'
import faker from 'faker'

describe('Workshift Service', () => {
  before(async () => {
    await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })
  })

  it('should fetch workshifts data', async () => {
    const workshifts = await workshiftService.get()

    expect(workshifts).to.be.an('array')
  })

  it('should create workshift', async () => {
    const name = faker.lorem.word()
    const newWorkshift = await workshiftService.create({
      name: name,
      details: [
        {
          index: 1,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 2,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 3,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 4,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 5,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 6,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 7,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        }
      ]
    })

    expect(newWorkshift.name).to.equals(name)
  })

  it('should fetch 1 workshift', async () => {
    const id = 4
    const workshift = await workshiftService.find(id)
    expect(workshift.id).to.equals(id)
  })

  it('should update workshift', async () => {
    const id = 4
    const name = faker.lorem.word()
    const updatedWorkshift = await workshiftService.update(id, {
      name: name,
      details: [
        {
          index: 1,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 2,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 3,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 4,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 5,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 6,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        },
        {
          index: 7,
          checkIn: '07:00:00',
          checkOut: '15:00:00',
          active: true
        }
      ]
    })

    expect(updatedWorkshift.name).to.equals(name)
  })

  it('should delete workshift', () => {
    const id = 4

    expect(async () => {
      await workshiftService.delete(id)
    }).to.not.throw(Error)
  })
})
