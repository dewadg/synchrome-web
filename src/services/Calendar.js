import { removeDataNamespace } from '@/helpers/data'
import EVENT_COLORS from '@/constants/eventColors'

export default class Calendar {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('calendars')

    return removeDataNamespace(res.data)
  }

  async create (payload) {
    const res = await this._http.post('calendars', payload)

    return removeDataNamespace(res.data)
  }

  async find (id) {
    const res = await this._http.get(`calendars/${id}`)
    const calendar = removeDataNamespace(res.data)

    calendar.events = calendar.events.map(item => ({
      ...item,
      ...EVENT_COLORS[item.attendanceType.id],
      attendanceTypeId: item.attendanceType.id
    }))

    return calendar
  }

  async update (id, payload) {
    const res = await this._http.patch(`calendars/${id}`, payload)

    return removeDataNamespace(res.data)
  }

  async delete (id) {
    await this._http.delete(`calendars/${id}`)
  }
}
