const localStorage = window.localStorage

export function setSession (key, value) {
  localStorage.setItem(key, value)
}

export function getSession (key) {
  return localStorage.getItem(key)
}

export function clearSession (key) {
  localStorage.removeItem(key)
}
