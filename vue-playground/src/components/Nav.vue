<template>
  <nav class="flex flex-row shadow justify-around">
    <router-link
      v-for="topRoute in topRoutes"
      :key="topRoute.name"
      :to="topRoute.path"
    >{{ topRoute.meta?.title ?? topRoute.name ?? topRoute.path }}</router-link>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { rawRoutes } from "../routes/router";

const topRoutes = computed(() =>
  rawRoutes.value
);
</script>
