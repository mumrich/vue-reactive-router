import { markRaw, ref } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeVue from "./Home.vue";

export const rawRoutes = ref<RouteRecordRaw[]>([
  {
    path: "/",
    name: "home",
    component: markRaw(HomeVue),
  },
]);

export const router = createRouter({
  history: createWebHashHistory(),
  routes: rawRoutes.value,
});
