import axios, { AxiosRequestConfig } from 'axios';

export const request = async <T>(options: AxiosRequestConfig<T>) => {
  return axios(options)
    .then((res) => res.data)
    .catch((err) => {
      console.log(`[Error: ${options.url}]`, err);
      return [];
    });
};
