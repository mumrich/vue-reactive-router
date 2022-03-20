<template>
  <div class="flex flex-row justify-around">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <RawRoutesEditorVue /> -->
    <div><TreeViewVue v-model:items="rawRoutes" /></div>
  </div>
  <hr />
  <NavVue />
  <router-view />
</template>

<script setup lang="ts">
import NavVue from "./components/Nav.vue";
// import RawRoutesEditorVue from "./components/RawRoutesEditor.vue";
import { TreeViewVue, TreeItemEditorVue } from "mumrich-vue-components";
import { rawRoutes } from "./routes/router";
</script>
