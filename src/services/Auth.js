import store from '../store'

export default class Auth {
  _http = null

  constructor (httpService) {
    this._http = httpService
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

      this._http.authData = {
        username: resp.data.username,
        password: resp.data.password
      }

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
      throw new Error('Failed while fetching authenticated user')
    }
  }
}
