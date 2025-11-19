import axios, { AxiosResponse } from "axios";

const sheetdbURL = import.meta.env.VITE_SHEETDB_URL as string;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  requirement: string;
  rfq: string;
  message: string;
}

export interface SheetDBResponse {
  created: boolean;
}

export const submitContactForm = async (
  data: ContactFormData
): Promise<AxiosResponse<SheetDBResponse>> => {
  const response = await axios.post<SheetDBResponse>(sheetdbURL, { data });
  return response;
};
