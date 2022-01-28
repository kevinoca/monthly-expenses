export function getFromStorage(keyString) {

  return JSON.parse(localStorage.getItem(keyString) || "[]")

}

export function setIntoStorage(keyString, values) {

  localStorage.setItem(keyString, JSON.stringify(values))

}