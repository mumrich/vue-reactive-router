<template>
  <TreeViewVue
    @on-select="selectedItem = $event"
    selectable
    v-model:items="items"
    v-model:selected="selected"
  />
  <hr />
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
        children: [
          {
            title: "Foo",
          },
        ],
      },
    ],
  },
  {
    title: "Bar",
  },
]);
const selected = ref<string | null>(null);
const selectedItem = ref<TreeItemType | null>(null);
</script>
