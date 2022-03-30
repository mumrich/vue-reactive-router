import HVue from "./H.vue";
import HomeVue from "./Home.vue";
import WidgetsVue from "./Widgets.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { markRaw, ref } from "vue";

export const rawRoutes = ref<RouteRecordRaw[]>([
  {
    path: "/",
    name: "home",
    component: markRaw(HomeVue),
  },
  {
    path: "/h",
    name: "H",
    component: markRaw(HVue),
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
