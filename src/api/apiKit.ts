import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {Alert} from 'react-native';

interface ErrorResponse {
  message: string;
  code?: string; // Optional property
}

const APIKit = (): AxiosInstance => {
  const Kit = axios.create({
    timeout: 10000,
  });

  const responseHandler = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const errorHandler = (
    error: AxiosError<ErrorResponse>,
  ): Promise<AxiosError> => {
    Alert.alert(
      `Error: ${error.response?.status} - ${
        error.response?.data?.message || 'Unknown error'
      }`,
    );

    return Promise.reject(error);
  };

  Kit.interceptors.request.use(async function (
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> {
    return config;
  });

  Kit.interceptors.response.use(
    (response: AxiosResponse) => responseHandler(response),
    (error: AxiosError<ErrorResponse>) => errorHandler(error),
  );

  return Kit;
};

export default APIKit;
