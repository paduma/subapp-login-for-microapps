import axios from "axios";
import { refreshToken } from "@/api/auth";

// 创建 Axios 实例
const apiClient = axios.create({
  baseURL: "/api",
});

// 添加请求拦截器
apiClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      // 设置 Authorization 头
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 如果 token 过期 (401错误), 尝试刷新 token
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 防止无限重试

      const result = await refreshToken();
      if (result.success) {
        // 更新 token
        const newAccessToken = result.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest); // 再次发起请求
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
