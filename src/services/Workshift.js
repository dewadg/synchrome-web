import { removeDataNamespace } from '@/helpers/data'

export default class Workshift {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    try {
      const res = await this._http.get('workshifts')

      return removeDataNamespace(res.data.data)
    } catch (err) {
      throw new Error('Gagal mengambil data shift kerja')
    }
  }

  async create (payload) {
    try {
      const res = await this._http.post('workshifts', payload)

      return removeDataNamespace(res.data.data)
    } catch (err) {
      throw new Error('Gagal menyimpan data shift kerja')
    }
  }

  async find (id) {
    try {
      const res = await this._http.get(`workshifts/${id}`)

      return removeDataNamespace(res.data.data)
    } catch (err) {
      if (err.response.status === 404) {
        throw new Error(`Shift kerja ${id} tidak ditemukan`)
      }

      throw new Error(`Gagal mengambil data shift kerja ${id}`)
    }
  }

  async update (id, payload) {
    try {
      const res = await this._http.patch(`workshifts/${id}`, payload)

      return removeDataNamespace(res.data.data)
    } catch (err) {
      if (err.response.status === 404) {
        throw new Error(`Shift kerja ${id} tidak ditemukan`)
      }

      throw new Error(`Gagal memperbarui data shift kerja ${id}`)
    }
  }

  async delete (id) {
    try {
      await this._http.delete(`workshifts/${id}`)
    } catch (err) {
      if (err.response.status === 404) {
        throw new Error(`Shift kerja ${id} tidak ditemukan`)
      }

      throw new Error(`Gagal menghapus data shift kerja ${id}`)
    }
  }
}
