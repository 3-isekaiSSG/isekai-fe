export const saveId = (id: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('id', id)
  }
}

export const saveCheckbox = (isChecked: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('checkbox', JSON.stringify(isChecked))
  }
}

export const getId = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('id')
  }

  return null
}

export const getCheckbox = () => {
  if (typeof window !== 'undefined') {
    const item = localStorage.getItem('checkbox')
    return item ? JSON.parse(item) : null
  }

  return null
}
