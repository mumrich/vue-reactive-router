<template>
  <TreeViewVue
    :items="items"
    v-model:selected="selected"
    selectable
    @on-select="selectedItem = $event"
  />
  <div>
    {{ selectedItem }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TreeViewVue from "../components/TreeView.vue";

const items = ref<TreeItemType[]>([
  {
    title: "Gugus",
    children: [
      {
        title: "Dada",
      },
    ],
  },
]);
const selected = ref<string | null>(null);
const selectedItem = ref<TreeItemType | null>(null);
</script>
