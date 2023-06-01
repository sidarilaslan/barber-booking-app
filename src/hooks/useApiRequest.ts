import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const useApiRequest = () => {
  const [results, setResults] = useState<AxiosResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const useAxios = async (config: AxiosRequestConfig) => {
    await axios.request(config)
      .then(response => setResults(response))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }



  return [results, error, loading, useAxios];
};

export default useApiRequest;
