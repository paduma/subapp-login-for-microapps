import "./public-path";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

let router = null;
let instance: any = null;
let history: any = null;

function render(props: any) {
  const { container } = props;
  // 当为微服务主节点情况下访问，会设置二级路径，而直接访问时没有二级路径，此处需要根据实际情况修改
  history = createWebHistory("/site1");
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.use(vuetify); // vuetify
  instance.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

export const bootstrap = async (): Promise<void> => {
  console.log("%c ", "color: green ", "vue3.0 app bootstraped");
};

// const storeTest = (props: any): void => {
//   props.onGlobalStateChange &&
//     props.onGlobalStateChange(
//       (value, prev) =>
//         console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
//       true
//     );
//   props.setGlobalState &&
//     props.setGlobalState({
//       ignore: props.name,
//       user: {
//         name: props.name,
//       },
//     });
// };

export const mount = async (props: any): Promise<void> => {
  // storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
};

export const unmount = async (): Promise<void> => {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
};
