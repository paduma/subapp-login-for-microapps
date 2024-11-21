<template>
  <v-sheet class="mx-auto" width="300">
    <v-form ref="formRef">
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

      <div class="d-flex flex-column">
        <v-btn class="mt-4" color="success" block @click="handleLogin">
          登录
        </v-btn>

        <!-- <span>
          注册
        </span> -->
      </div>
    </v-form>
  </v-sheet>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuth from "@/api/auth";

export default defineComponent({
  name: "LoginView",
  setup() {
    const { login } = useAuth();

    // 使用 ref 创建响应式状态
    const name = ref("");
    const password = ref(null);
    const checkbox = ref(false);
    const formRef = ref(null); // 表单的响应式引用

    // 验证规则
    const nameRules = [
      (v) => !!v || "请填写用户名",
      (v) => (v && v.length > 3) || "用户名至少有4个字符",
    ];

    const passwordRules = [
      (v) => !!v || "请填写密码",
      (v) => (v && v.length > 5) || "密码长度至少有6个字符",
    ];

    // 登录方法
    const handleLogin = async () => {
      const { valid } = await formRef.value.validate(); // 通过表单引用进行验证

      if (valid) {
        await login(name.value, password.value); // 调用登录 API
      }
    };

    // 表单重置
    const reset = () => {
      formRef.value.reset(); // 重置表单
    };

    // 重置验证状态
    const resetValidation = () => {
      formRef.value.resetValidation(); // 重置验证状态
    };

    return {
      name,
      password,
      checkbox,
      formRef, // 返回表单引用
      nameRules,
      passwordRules,
      handleLogin,
      reset,
      resetValidation,
    };
  },
});
</script>
