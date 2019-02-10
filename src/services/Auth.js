import { removeDataNamespace } from '@/helpers/data'

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

    const { data } = await this._http.post('auth', { name, password })

    return {
      username: data.username,
      password: data.password
    }
  }

  /**
   * Fetch current authenticated user from API.
   */
  async whoami () {
    if (!this._http) {
      throw new Error('HTTP client is not set')
    }

    const resp = await this._http.get('whoami')

    return removeDataNamespace(resp.data.data)
  }
}
