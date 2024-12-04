<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col sm="8" md="4">
        <v-sheet elevation="2" rounded>
          <v-form ref="registerForm" v-model="valid" lazy-validation>
            <v-card>
              <v-card-title class="text-h5 text-center">
                用户注册
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="用户名"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="邮箱"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  label="密码"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="confirmPassword"
                  type="password"
                  :rules="confirmPasswordRules"
                  label="确认密码"
                  required
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  class="mt-4"
                  color="success"
                  block
                  @click="handleRegister"
                  :disabled="!valid"
                >
                  注册
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-divider class="my-3"></v-divider>

            <p class="text-center">
              已有账户？
              <v-btn text @click="goToLogin">点击这里登录</v-btn>
            </p>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const valid = ref(false);
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const usernameRules = [(v) => !!v || "用户名不能为空"];

const emailRules = [
  (v) => !!v || "邮箱不能为空",
  (v) => /.+@.+\..+/.test(v) || "请提供有效的邮箱",
];

const passwordRules = [
  (v) => !!v || "密码不能为空",
  (v) => (v && v.length >= 6) || "密码必须至少 6 个字符",
];

const confirmPasswordRules = [
  (v) => !!v || "请确认密码",
  (v) => v === password.value || "两次密码必须相同",
];

const handleRegister = async () => {
  try {
    const response = await axios.post("/api/register", {
      username: username.value,
      password: password.value,
    });

    if (response.status === 201) {
      alert(response.data.message); // 使用 response.data 而不是 data
      username.value = "";
      password.value = "";
      router.push("/login");
    } else {
      alert(response.data.message); // 使用 response.data 而不是 data
    }
  } catch (error) {
    console.error("注册错误:", error);
  }
};

const goToLogin = () => {
  router.push("/");
};
</script>

<style scoped>
.v-card {
  padding: 20px;
  /* 为表单添加内边距 */
}
</style>
