import { api } from "./api";

// 封装注册请求
export const registerUser = async (username, password) => {
  try {
    const response = await api.post("/register", { username, password });
    console.log("response", response);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "请求失败，请重试" };
  }
};
