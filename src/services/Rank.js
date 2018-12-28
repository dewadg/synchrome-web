import { removeDataNamespace } from '@/helpers/data'

export default class Rank {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    try {
      const res = await this._http.get('ranks')

      return removeDataNamespace(res.data)
    } catch (err) {
      console.error(err)
      throw new Error('Gagal mengambil data golongan')
    }
  }

  async create(payload) {
    try {
      const res = await this._http.post('ranks', payload)

      return removeDataNamespace(res.data)
    } catch (err) {
      throw new Error('Gagal menyimpan data golongan')
    }
  }

  async find (id) {
    try {
      const res = await this._http.get(`ranks/${id}`)

      return removeDataNamespace(res.data)
    } catch (err) {
      throw new Error(`Gagal mengambil data golongan ${id}`)
    }
  }

  async update (id, payload) {
    try {
      const res = await this._http.patch(`ranks/${id}`, payload)

      return removeDataNamespace(res.data)
    } catch (err) {
      throw new Error(`Gagal memperbarui data golongan ${id}`)
    }
  }

  async delete (id) {
    try {
      const res = await this._http.delete(`ranks/${id}`)
    } catch (err) {
      throw new Error(`Gagal menghapus data golongan ${id}`)
    }
  }
}
