import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetchPractice = <T,>(
  URL: RequestInfo | URL,
  OPTIONS?: RequestInit
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    const controller = new AbortController();

    fetchData(controller);

    return () => {
      controller.abort();
    };
  }, [URL]);

  async function fetchData(controller: AbortController) {
    try {
      const response = await fetch(URL, {
        signal: controller.signal,
        ...OPTIONS,
      });

      if (!response.ok) throw new Error('Error: ' + response.statusText);

      const data = (await response.json()) as T;

      if (!controller.signal.aborted) setData(data);

      setError(null);
      setLoading(false);
    } catch (error) {
      setError(
        !controller.signal.aborted && error instanceof Error
          ? error.message
          : String(error)
      );
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  }
  return {
    data,
    loading,
    error,
  };
};
