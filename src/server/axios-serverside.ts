import axios from "axios";
import { logger } from "@navikt/next-logger";
import axiosBetterStacktrace from "axios-better-stacktrace";

axiosBetterStacktrace(axios);
export const AUTHORIZATION_HEADER = "Authorization";

const defaultRequestHeaders = (token: string): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  headers[AUTHORIZATION_HEADER] = token;

  return headers;
};
export const get = async <ResponseData>(url: string, token: string): Promise<ResponseData> => {
  try {
    const response = await axios.get(encodeURI(url), {
      headers: defaultRequestHeaders(token),
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    logger.error("Nei!")
    logger.error(error instanceof Error ? error.message : String(error));
    throw error;
  }
};

export const post = async <ResponseData>(
  url: string,
  data: unknown,
  token: string,
): Promise<ResponseData> => {
  try {
    const response = await axios.post(url, data, {
      headers: defaultRequestHeaders(token),
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    logger.error(error instanceof Error ? error.message : String(error));
    throw error;
  }
};
