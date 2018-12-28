import { removeDataNamespace } from '@/helpers/data'
import { EVENT_COLORS } from '@/helpers/calendar'

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

  async find (id) {
    try {
      const res = await this._http.get(`calendars/${id}`)
      const calendar = removeDataNamespace(res.data)

      calendar.events = calendar.events.map(item => ({
        ...item,
        ...EVENT_COLORS[item.attendanceType.id],
        attendanceTypeId: item.attendanceType.id
      }))

      return calendar
    } catch (err) {
      throw new Error(`Gagal mengambil data kalender kerja ${id}`)
    }
  }

  async update (id, payload) {
    try {
      const res = await this._http.patch(`calendars/${id}`, payload)

      return removeDataNamespace(res.data)
    } catch (err) {
      throw new Error(`Gagal memperbarui data kalender kerja ${id}`)
    }
  }
}
