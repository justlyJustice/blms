import http from "./http";

export const loginUser = async (values) =>
  await http.post(`/api/login`, values);
