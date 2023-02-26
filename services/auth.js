import http from "./http";

export const loginUser = (values) => http.post(``, values);
