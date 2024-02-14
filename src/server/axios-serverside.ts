import axios from "axios";
import { logger } from "@navikt/next-logger";
import axiosBetterStacktrace from "axios-better-stacktrace";

axiosBetterStacktrace(axios);
export const AUTHORIZATION_HEADER = "Authorization";

const defaultRequestHeaders = (): Record<string, string> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const basicUser = process.env.username;
  const basicPass = process.env.password;

  const base64Credentials = Buffer.from(`${basicUser}:${basicPass}`).toString(
    "base64",
  );

  headers[AUTHORIZATION_HEADER] = `Basic ${base64Credentials}`;

  return headers;
};
export const get = async <ResponseData>(url: string): Promise<ResponseData> => {
  try {
    const response = await axios.get(encodeURI(url), {
      headers: defaultRequestHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    logger.error(error.message);
    throw error;
  }
};

export const post = async <ResponseData>(
  url: string,
  data?: unknown,
): Promise<ResponseData> => {
  try {
    const response = await axios.post(url, data, {
      headers: defaultRequestHeaders(),
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    logger.error(error.message);
    throw error;
  }
};
