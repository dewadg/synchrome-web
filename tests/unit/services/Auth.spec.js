import { assert } from 'chai'
import { httpService, authService } from '@/services'

describe('Auth Service', () => {
  it(`should fail to authenticate user with wrong credentials`, async () => {
    return new Promise(async (resolve, reject) => {
      try {
        await authService.authenticate({
          name: 'blublu',
          password: 'blublublu'
        })

        reject()
      } catch (err) {
        resolve()
      }
    })
  })

  it(`should fail when fetching user data with no HTTP client set`, async () => {
    authService._http = null

    return new Promise(async (resolve, reject) => {
      try {
        await authService.whoami()
        reject()
      } catch (err) {
        authService._http = httpService
        resolve()
      }
    })
  })

  it(`should authenticate user successfully`, async () => {
    return authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })
  })

  it(`should fetch user data successfully`, async () => {
    const token = await authService.authenticate({
      name: process.env.VUE_APP_AUTH_USERNAME,
      password: process.env.VUE_APP_AUTH_PASSWORD
    })

    httpService.authData = token

    return authService.whoami()
  })
})