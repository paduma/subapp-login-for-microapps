import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 与配置文件中的代理相对应
  timeout: 10000, // 默认超时时间
});

// 封装其他请求并设置不同的超时时间
export const fetchDataWithTimeout = async (url, timeout = 5000) => {
  try {
    const response = await api.get(url, { timeout });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "请求失败，请重试" };
  }
};

export { api };
