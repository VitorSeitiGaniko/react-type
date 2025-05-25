import React from 'react'

const useLocalStorage = (key: string, initial: string):[string, React.Dispatch<React.SetStateAction<string>>]  => {
  const [state, setState] = React.useState(getLocalStorage)

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [state, key])
  
  function getLocalStorage() {
    const value = window.localStorage.getItem(key)
    return value ? value : initial
  }
  
  return [state, setState]
}

export default useLocalStorage