export function removeDataNamespace(data) {
  if (Array.isArray(data)) {
    return data.map((item) => {
      return removeDataNamespace(item)
    })
  }

  if (typeof data === 'object') {
    const newData = Object.assign({}, data)
    const keys = Object.keys(newData)

    if (keys.length === 1 && keys[0] === 'data') {
      return removeDataNamespace(newData['data'])
    }

    keys.forEach((item) => {
      if (typeof newData[item].data === 'object') {
        newData[item] = newData[item].data
      }
    })

    return newData
  }

  return data
}
