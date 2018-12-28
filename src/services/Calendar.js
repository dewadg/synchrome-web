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
}
