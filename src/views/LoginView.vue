<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col sm="8" md="4">
        <v-sheet elevation="2" rounded>
          <v-form ref="formRef" v-model="isFormValid" lazy-validation>
            <v-card>
              <v-card-title class="text-h5 text-center">
                用户登录
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="用户名"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  :counter="16"
                  label="密码"
                  required
                ></v-text-field>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="success"
                  block
                  @click="handleLogin"
                  :disabled="!isFormValid"
                >
                  登录
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-divider class="my-3"></v-divider>

            <p class="text-center">
              还没有账户？
              <v-btn text @click="goToRegister">点击这里注册</v-btn>
            </p>
            <p class="text-center mt-2">
              忘记密码？
              <v-btn text @click="goToResetPassword">找回密码</v-btn>
            </p>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useAuth from "@/composables/useAuth";

const router = useRouter();
const { login } = useAuth();

const isFormValid = ref(false);
const name = ref("");
const password = ref(null);
const formRef = ref(null); // 表单的响应式引用

// 验证规则
const nameRules = [
  (v) => !!v || "请填写用户名",
  (v) => (v && v.length > 3) || "用户名至少有4个字符",
];

const passwordRules = [
  (v) => !!v || "请填写密码",
  (v) => (v && v.length > 5) || "密码长度至少有6个字符",
  (v) => (v && v.length < 17) || "密码长度过长",
];

// 登录方法
const handleLogin = async () => {
  console.log("formRef", formRef);
  const { valid } = await formRef.value.validate(); // 通过表单引用进行验证

  if (valid) {
    await login(name.value, password.value); // 调用登录 API
  }
};

const goToRegister = () => {
  router.push("/register"); // 路由跳转到注册页面
};

const goToResetPassword = () => {
  router.push("/reset-password"); // 路由跳转到找回密码页面
};
</script>
<style scoped>
.v-card {
  padding: 20px;
  /* 为表单添加内边距 */
}
</style>
