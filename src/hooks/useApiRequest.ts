import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const useApiRequest = (config: AxiosRequestConfig) => {
  const [results, setResults] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await axios.request(config)
        .then(response => setResults(response))
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);

  return [results, error, loading];
};

export default useApiRequest;
