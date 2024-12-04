import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "UserRegister",
    component: () => import("../views/UserRegister.vue"),
  },
  {
    path: "/about",
    name: "AboutView",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/upload",
    name: "UploadView",
    component: () => import("../views/UploadView.vue"),
  },
];

// 直接返回routes，由其它地方处理创建路由
export default routes;
