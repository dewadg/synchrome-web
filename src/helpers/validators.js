import moment from 'moment'

export const isDateAfter = (field, skipIfNull = true) => (value, vm) => {
  if (skipIfNull && !value) return true
  if (!vm[field]) return true

  const start = moment(vm[field])
  const end = moment(value)

  return end.isAfter(start)
}

export const isDateBefore = (field, skipIfNull = true) => (value, vm) => {
  if (skipIfNull && !value) return true
  if (!vm[field]) return true

  const start = moment(vm[field])
  const end = moment(value)

  return end.isBefore(start)
}
