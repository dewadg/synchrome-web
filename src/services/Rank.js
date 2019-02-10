import { removeDataNamespace } from '@/helpers/data'

export default class Rank {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('ranks')

    return removeDataNamespace(res.data)
  }

  async create (payload) {
    const res = await this._http.post('ranks', payload)

    return removeDataNamespace(res.data)
  }

  async find (id) {
    const res = await this._http.get(`ranks/${id}`)

    return removeDataNamespace(res.data)
  }

  async update (id, payload) {
    const res = await this._http.patch(`ranks/${id}`, payload)

    return removeDataNamespace(res.data)
  }

  async delete (id) {
    await this._http.delete(`ranks/${id}`)
  }
}
