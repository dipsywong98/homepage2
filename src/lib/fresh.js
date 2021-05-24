export const fresh = (url, init) => {
  return fetch(url, { ...init, cache: 'no-cache' })
}
