import moment from 'moment'

export function dayByIndex (value) {
  switch (value) {
    case 1:
      return 'Senin'
    case 2:
      return 'Selasa'
    case 3:
      return 'Rabu'
    case 4:
      return 'Kamis'
    case 5:
      return 'Jumat'
    case 6:
      return 'Sabtu'
    case 7:
      return 'Minggu'
  }
}

export function timeIsBefore (a, b) {
  const first = moment(a, 'HH:mm')
  const second = moment(b, 'HH:mm')

  return first.isBefore(second)
}

export function timeIsAfter (a, b) {
  const first = moment(a, 'HH:mm')
  const second = moment(b, 'HH:mm')

  return first.isAfter(second)
}
