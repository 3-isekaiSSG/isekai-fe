export function updateQueryString(
  searchParams: { [key: string]: string },
  key: string,
  value?: string,
) {
  const params = new URLSearchParams(searchParams)

  if (!value || params.get(key) === value) {
    params.delete(key)
  } else if (value) {
    params.set(key, value)
  }

  return params.toString()
}
