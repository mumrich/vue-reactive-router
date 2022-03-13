<template>
  <div class="flex flex-row justify-around">
    <img alt="Vue logo" src="./assets/logo.png" />
    <RawRoutesEditorVue />
  </div>
  <NavVue />
  <router-view />
</template>

<script setup lang="ts">
import NavVue from './components/Nav.vue';
import RawRoutesEditorVue from "./components/RawRoutesEditor.vue"
</script>
