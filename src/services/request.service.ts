import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
const env = await import.meta.env;

import { RequestMethod } from "../models";

const getAxiosRequest = (): AxiosInstance => {
  return axios.create({
    baseURL: env.VITE_API_URL,
  });
};

export const makeRequest = async (
  URL: string,
  method: RequestMethod,
  data?: unknown
) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: URL,
    };
    if (data) {
      config.data = data;
    }
    if (method === RequestMethod.GET && data) {
      config.params = data;
    }
    const response = await getAxiosRequest().request(config);
    return response.data;
  } catch (error) {
    const err = error as Error | AxiosError;
    let message = "";
    if (axios.isAxiosError(err) && err.response) {
      message = err.response.data["message"];
    } else {
      message = String(error);
    }
    throw message;
  }
};
