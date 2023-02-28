/* eslint-disable import/no-anonymous-default-export */
import { create } from "apisauce";
import { toast } from "react-hot-toast";

import apiUrl from "@/config/apiUrl";

const client = create({
  baseURL: `http://localhost:3000`,
});

client.axiosInstance.interceptors.request.use(null, (error) => {
  const expectedError =
    error && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    toast.error(`Internal server error`, { position: "top-right" });
  }

  return Promise.reject(error);
});

export default {
  delete: client.delete,
  get: client.get,
  patch: client.patch,
  post: client.post,
  put: client.put,
};
