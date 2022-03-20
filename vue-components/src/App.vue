<template>
  <div class="flex flex-col h-full">
    <div>
      <hr />
      <nav class="flex flex-row justify-around">
        <router-link to="/" class="flex flex-row"
          ><img alt="Vue logo" src="./assets/logo.png" class="w-10" />
          Home</router-link
        >
        <router-link to="/widgets">Widgets</router-link>
      </nav>
      <hr />
    </div>
    <div class="flex-1 shadow-inner">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
