import { login as apiLogin, refreshToken as apiRefreshToken } from "@/api";
// import { useRouter } from "vue-router";

const useAuth = () => {
  // const router = useRouter();

  const login = async (username, password) => {
    try {
      const response = await apiLogin(username, password);
      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
        window.location.href = "/";
      }
      return response;
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error };
    }
  };

  const refreshToken = async () => {
    const token = localStorage.getItem("refreshToken");
    if (!token) return;

    try {
      const response = await apiRefreshToken(token);
      if (response.success) {
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("refreshToken", response.refreshToken);
      }
      return response;
    } catch (error) {
      console.error("Refresh token error:", error);
      return { success: false, message: error };
    }
  };

  return {
    login,
    refreshToken,
  };
};

export default useAuth;
