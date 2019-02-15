export function generateDetails () {
  const details = []

  for (let i = 0; i < 7; i++) {
    details.push({
      index: (i + 1),
      checkIn: null,
      checkOut: null,
      active: true
    })
  }

  return details
}
