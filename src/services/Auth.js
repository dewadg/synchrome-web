import store from '../store'
import router from '../router'
import Cookies from 'js-cookie'

export default class Auth {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  /**
   * Check if is logged in.
   */
  get check () {
    return typeof Cookies.get('accessToken') !== 'undefined'
  }

  /**
   * Authenticate user and set HTTP basic.
   *
   * @param  {object} data
   */
  async authenticate ({ name, password }) {
    if (!this._http) {
      throw new Error('HTTP client is not set')
    }

    try {
      const resp = await this._http.post('auth', {
        name,
        password
      })
      const accessToken = {
        username: resp.data.username,
        password: resp.data.password
      }

      this._http.authData = accessToken
      Cookies.set('accessToken', accessToken)

      store.commit('LoggedUser/set', await this.whoami())
    } catch (err) {
      throw new Error('Nama pengguna/kata sandi salah')
    }
  }

  /**
   * Fetch current authenticated user from API.
   */
  async whoami () {
    if (!this._http) {
      throw new Error('HTTP client is not set')
    }

    try {
      const resp = await this._http.get('whoami')

      return resp.data.data
    } catch (err) {
      if (err.response.status === 401) {
        router.push({ name: 'login' })
      } else {
        throw new Error('Failed while fetching authenticated user')
      }
    }
  }

  /**
   * Refresh the user data.
   */
  async refresh () {
    const accessToken = Cookies.get('accessToken')

    if (typeof accessToken === 'undefined') {
      throw new Error('Access token does not exist')
    }

    this._http.authData = JSON.parse(accessToken)
    store.commit('LoggedUser/set', await this.whoami())
  }

  /**
   * Log out the user.
   */
  logout () {
    Cookies.remove('accessToken')
    store.commit('LoggedUser/reset')
  }
}
