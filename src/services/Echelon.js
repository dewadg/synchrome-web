import { removeDataNamespace } from '@/helpers/data'

export default class Agency {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('echelons')

    return removeDataNamespace(res.data)
  }

  async create (payload) {
    const res = await this._http.post('echelons', payload)

    return removeDataNamespace(res.data)
  }

  async find (id) {
    const res = await this._http.get(`echelons/${id}`)

    return removeDataNamespace(res.data)
  }

  async update (id, payload) {
    const res = await this._http.patch(`echelons/${id}`, payload)

    return removeDataNamespace(res.data)
  }

  async delete (id) {
    await this._http.delete(`echelons/${id}`)
  }
}
