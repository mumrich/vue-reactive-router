import { createApp } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import App from "./App.vue";
import "virtual:windi.css";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./routes/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    component: () => import("./routes/About.vue"),
    meta: {
      title: "About",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
