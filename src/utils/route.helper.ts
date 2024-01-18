/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Extracts query parameters from a URLSearchParams object and returns them as an object.
 *
 * @param {URLSearchParams} searchParams - The URLSearchParams object containing the query parameters.
 * @returns {Object} - An object representing the query parameters, where keys are parameter names and values are parameter values.
 */
export const getQueryParam = (searchParams: URLSearchParams): any => {
  const newParams: any = {};

  for (const entry of Array.from(searchParams.entries())) {
    newParams[entry[0]] = entry[1];
  }
  return newParams;
};
