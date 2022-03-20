import { markRaw, ref } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeVue from "./Home.vue";
import WidgetsVue from "./Widgets.vue";

export const rawRoutes = ref<RouteRecordRaw[]>([
  {
    path: "/",
    name: "home",
    component: markRaw(HomeVue),
  },
  {
    path: "/widgets",
    name: "widgets",
    component: markRaw(WidgetsVue),
  },
]);

export const router = createRouter({
  history: createWebHashHistory(),
  routes: rawRoutes.value,
});
