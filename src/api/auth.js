import axios from "axios";
import { useRouter } from "vue-router";

const API_URL = "/api";

const useAuth = () => {
  const router = useRouter();

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });
      if (response.data.success) {
        // 存储 token 和 refresh token
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        // 通知主应用进行应用注册和页面跳转
        // window.parent.postMessage({ type: "LOGIN_SUCCESS" }, "*");
        // window.location.href = "/site2";
      }
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error };
    }
  };
  // 刷新token
  const refreshToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return;

    try {
      const response = await axios.post(`${API_URL}/refresh-token`, {
        refreshToken,
      });
      if (response.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      return response.data;
    } catch (error) {
      console.error("Refresh token error:", error.response.data);
      return { success: false, message: error.response.data.message };
    }
  };

  return {
    login,
    refreshToken,
  };
};

export default useAuth;
