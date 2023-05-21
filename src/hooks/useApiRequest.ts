import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const useApiRequest = () => {
    const [responseData, setresponseData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (config: AxiosRequestConfig) => {
        setLoading(true);
        try {
            const response = await axios(config);
            setresponseData(response.data);
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }

    };


    return { responseData, loading, error, sendRequest };
};

export default useApiRequest;