import { removeDataNamespace } from '@/helpers/data'

export default class Tpp {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('tpp')

    return removeDataNamespace(res.data)
  }

  async create (payload) {
    const res = await this._http.post('tpp', payload)

    return removeDataNamespace(res.data)
  }

  async find (id) {
    const res = await this._http.get(`tpp/${id}`)

    return removeDataNamespace(res.data)
  }

  async update (id, payload) {
    const res = await this._http.patch(`tpp/${id}`, payload)

    return removeDataNamespace(res.data)
  }

  async delete (id) {
    await this._http.delete(`tpp/${id}`)
  }
}
