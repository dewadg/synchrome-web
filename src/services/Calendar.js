import { removeDataNamespace } from '@/helpers/data'

export default class Calendar {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    try {
      const res = await this._http.get('calendars')

      return removeDataNamespace(res.data)
    } catch (err) {
      console.error(err)
      throw new Error('Gagal mengambil data kalender kerja')
    }
  }

  async create (payload) {
    try {
      const res = await this._http.post('calendars', payload)

      return removeDataNamespace(res.data)
    } catch (err) {
      throw new Error('Gagal menyimpan data kalender kerja')
    }
  }
}
