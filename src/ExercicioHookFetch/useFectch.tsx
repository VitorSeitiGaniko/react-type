import React from 'react'

interface Response<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFectch<T>(
  url: RequestInfo | URL,
  options?: RequestInit
) : Response<T> {
  // O tipo T é genérico, então ele pode ser qualquer tipo de dado que você passar para a função useFectch.

  const [data, setData] = React.useState<T | null>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)  
  const controllerRef = React.useRef<AbortController | null>(null);

  React.useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    // Criar um novo AbortController para cada requisição
    controllerRef.current = new AbortController();

    getData(url, options)

    return () => {
      // Abortar a requisição ao desmontar ou mudar o URL
      controllerRef.current?.abort();
    }

  }, [url])

  async function getData(url:RequestInfo | URL, options?: RequestInit) {
    try{
      const response = await fetch(url, {
        signal: controllerRef.current?.signal,
        ...options
      })

      if(!response.ok) throw new Error('Error: ' + response.statusText) 

      const data = await response.json() as T

      if(!controllerRef.current?.signal.aborted) setData(data)

      setLoading(false)
      setError(null)
    }

    catch(error){   
      console.error('ERROR  ==> ', error)
      if(error instanceof Error) setError(error.message)
      setLoading(false)
    }
  }
  
  
  return {data, loading, error}
}

export default useFectch