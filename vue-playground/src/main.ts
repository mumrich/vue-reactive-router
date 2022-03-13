import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "virtual:windi.css";

const routes = [
  { path: "/", component: () => import("./routes/Home.vue") },
  { path: "/about", component: () => import("./routes/About.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
