import { removeDataNamespace } from '@/helpers/data'

export default class Workshift {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('workshifts')

    return removeDataNamespace(res.data.data)
  }

  async create (payload) {
    const res = await this._http.post('workshifts', payload)

    return removeDataNamespace(res.data.data)
  }

  async find (id) {
    const res = await this._http.get(`workshifts/${id}`)

    return removeDataNamespace(res.data.data)
  }

  async update (id, payload) {
    const res = await this._http.patch(`workshifts/${id}`, payload)

    return removeDataNamespace(res.data.data)
  }

  async delete (id) {
    await this._http.delete(`workshifts/${id}`)
  }
}
