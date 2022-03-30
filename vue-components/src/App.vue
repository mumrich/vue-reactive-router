<template>
  <div class="flex flex-col h-full">
    <div>
      <hr />
      <nav class="flex flex-row justify-around">
        <router-link v-for="(route) in rawRoutes" :to="route.path">{{ route.name }}</router-link>
      </nav>
      <hr />
    </div>
    <div class="flex-1 shadow-inner">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { rawRoutes } from './routes/router';
</script>

<style scoped>
a {
  @apply bg-green-100;
  @apply p-5;
}

a:hover {
  @apply bg-green-50;
  @apply shadow;
}
</style>
