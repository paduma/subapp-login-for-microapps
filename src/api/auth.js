// 处理登录请求
import { api } from "./api";
export const login = async (username, password) => {
  const response = await api.post(`/login`, {
    username,
    password,
  });
  return response.data;
};

// 处理刷新 token 请求
export const refreshToken = async (refreshToken) => {
  const response = await api.post(`/refresh-token`, {
    refreshToken,
  });
  return response.data;
};
