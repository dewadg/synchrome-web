import { removeDataNamespace } from '@/helpers/data'

export default class Asn {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('asn')

    return removeDataNamespace(res.data)
  }

  async create (payload) {
    const res = await this._http.post('asn', payload)

    return removeDataNamespace(res.data)
  }

  async find (id) {
    const res = await this._http.get(`asn/${id}`)

    return removeDataNamespace(res.data)
  }

  async update (id, payload) {
    const res = await this._http.patch(`asn/${id}`, payload)

    return removeDataNamespace(res.data)
  }

  async delete (id) {
    await this._http.delete(`asn/${id}`)
  }
}
