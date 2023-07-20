import { useEffect, useState } from 'react';

interface FetchResult<T> {
  data: T;
  loading: boolean;
  error: Error | null;
  setData: React.Dispatch<React.SetStateAction<T>>;
  setError: React.Dispatch<React.SetStateAction<Error | null>>;
}

const useFetch = <T>(url: string, initialState: T): FetchResult<T> => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>(initialState);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        err instanceof Error
          ? setError(err)
          : setError(new Error('Unknown Error'));
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error, setData, setError };
};

export default useFetch;
