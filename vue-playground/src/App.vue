<template>
  <div class="flex flex-row justify-around">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <TreeViewVue
        :newItemInterceptor="newItemInterceptor"
        main-add
        selectable
        v-model:items="items"
        @on-select="selectedItem = $event"
      />
    </div>
    <div v-if="selectedRouteRecord" class="flex flex-col">
      <span>name: <input v-model="selectedRouteRecord.name" /></span>
      <span>Title: <input v-model="selectedMetadata.title" /></span>
    </div>
  </div>
  <hr />
  <NavVue />
  <router-view />
</template>

<script setup lang="ts">
import "mumrich-vue-components/style.css";
import NavVue from "./components/Nav.vue";
import { RouteRecordRaw } from "vue-router";
import { TreeViewVue, ITreeViewItem } from "mumrich-vue-components";
import { computed, ref } from "vue";
import { rawRoutes } from "./routes/router";

const items = computed(() => rawRoutes.value as ITreeViewItem[]);
const selectedItem = ref<ITreeViewItem | null>(null);

const selectedRouteRecord = computed({
  get: () => selectedItem.value as RouteRecordRaw | null,
  set: (v) => (selectedItem.value = v as ITreeViewItem),
});

const selectedMetadata = computed({
  get: () => selectedRouteRecord.value?.meta ?? {},
  set: (v) => {
    if (selectedRouteRecord.value) {
      selectedRouteRecord.value.meta = v;
    }
  },
});

function newItemInterceptor(
  newItem: ITreeViewItem,
  parent: ITreeViewItem | null
) {
  const rrr = newItem as RouteRecordRaw;
  const cleanedPathBase = newItem.name
    .toLocaleLowerCase()
    .replaceAll(" ", "_")
    .replaceAll("/", "-");

  rrr.path = parent !== null ? `${cleanedPathBase}` : `/${cleanedPathBase}`;
  rrr.meta = {
    title: newItem.name,
  };

  return rrr as ITreeViewItem;
}
</script>
