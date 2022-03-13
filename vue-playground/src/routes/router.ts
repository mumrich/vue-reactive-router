import { markRaw, ref, watch } from "vue";
import {
  RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  RouteRecordNormalized,
} from "vue-router";

export const rawRoutes = ref<RouteRecordRaw[]>([
  {
    path: "/",
    name: "home",
    component: markRaw(() => import("../routes/Home.vue")),
    meta: {
      title: "Home",
      widgets: [
        {
          component: "w-header",
          props: {
            level: 1,
            text: "Home 🛖",
          },
        },
      ],
    },
  },
  {
    path: "/about",
    name: "about",
    component: markRaw(() => import("../routes/About.vue")),
    meta: {
      title: "About",
    },
  },
]);

export const reactiveRoutes = ref<RouteRecordNormalized[]>([]);

export const router = createRouter({
  history: createWebHashHistory(),
  routes: rawRoutes.value,
});

watch(rawRoutes.value, (newVal) => {
  router.getRoutes().forEach((r) => router.removeRoute(r.name!));

  newVal.forEach((r) => {
    router.addRoute(r);
  });

  reactiveRoutes.value = router.getRoutes();
});
