import "./public-path";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";

let router = null;
let instance: any = null;
let history: any = null;

function render(props: any) {
  const { container } = props;
  // 当为微服务主节点情况下访问，会设置二级路径，而直接访问时没有二级路径，此处需要根据实际情况修改
  history = createWebHistory("/subapp-login");
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(store);
  instance.use(vuetify); // vuetify

  instance.use(router);
  instance.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export const bootstrap = async (): Promise<void> => {
  console.log("%c ", "color: green ", "vue3.0 app bootstraped");
};

export const mount = async (props: any): Promise<void> => {
  render(props);
};

export const unmount = async (): Promise<void> => {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
};
