/* eslint-disable @typescript-eslint/no-explicit-any */

export const getQueryParam = (searchParams: URLSearchParams): any => {
  const newParams: any = {};

  for (const entry of Array.from(searchParams.entries())) {
    newParams[entry[0]] = entry[1];
  }
  return newParams;
};
