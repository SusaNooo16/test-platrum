const keyName = 'TestPlatrum'
export function load() {
  return JSON.parse(localStorage.getItem(keyName))
}

export function save(data) {
  localStorage.setItem(keyName, JSON.stringify(data))
}
