import currency from 'currency.js'

export function rupiah (val) {
  return 'Rp' + currency(val, {
    separator: '.',
    precision: 0
  }).format()
}
