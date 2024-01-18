import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestMethod } from "../models";
const env = await import.meta.env;

const getAxiosRequest = (): AxiosInstance => {
  return axios.create({
    baseURL: env.VITE_API_URL,
  });
};

/**
 * Makes an asynchronous HTTP request using Axios.
 *
 * @param {string} URL - The URL to which the request is made.
 * @param {RequestMethod} method - The HTTP request method (GET, POST, etc.).
 * @param {unknown} [data] - The data to be sent with the request (optional).
 * @returns {Promise<unknown>} - A promise that resolves to the response data.
 * @throws {string} - Throws an error message if the request fails.
 */
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
