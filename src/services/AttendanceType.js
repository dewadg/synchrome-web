import { removeDataNamespace } from '@/helpers/data'

export default class AttendanceType {
  _http = null

  constructor (httpService) {
    this._http = httpService
  }

  async get () {
    const res = await this._http.get('attendance-types')

    return removeDataNamespace(res.data)
  }
}
