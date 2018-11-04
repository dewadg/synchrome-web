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
    } catch (err) {
      throw new Error('Nama pengguna/kata sandi salah')
    }
  }
}
