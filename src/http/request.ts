import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { ApiReturnType } from '~/interface';

export const request = async <T = any>(options: AxiosRequestConfig<T>) => {
  return axios(options)
    .then((res: AxiosResponse<ApiReturnType<T>>) => res.data)
    .catch((err: AxiosError<ApiReturnType<T>>) => {
      console.log(`[Error: ${options.url}]`, `msg: ${err.message}`, `status: ${err.status}`);
      return { data: null, code: 0, msg: err.message };
    });
};
