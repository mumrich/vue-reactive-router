<template>
  <TreeViewVue
    @on-select="selectedItem = $event"
    selectable
    v-model:items="items"
    v-model:selected="selected"
    :show-index="false"
  />
  <hr />
  <p>selected: {{ selected }}</p>
  <hr />
  <p>selectedItem: {{ selectedItem }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TreeViewVue from "../components/TreeView.vue";

const items = ref<TreeItemType[]>([
  {
    name: "Esther & Hans",
    children: [
      {
        name: "Hannes",
      },
      {
        name: "Peter",
      },
      {
        name: "Franziska",
      },
      {
        name: "Daniel",
        children: [
          {
            name: "Caitlyn",
          },
        ],
      },
    ],
  },
  {
    name: "Beatrice & Rudolf",
    children: [
      {
        name: "Laura",
      },
    ],
  },
]);
const selected = ref<string | null>(null);
const selectedItem = ref<TreeItemType | null>(null);
</script>
