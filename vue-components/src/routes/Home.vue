<template>
  <TreeViewVue
    @on-select="selectedItem = $event"
    selectable
    v-model:items="items"
    v-model:selected="selected"
    :show-index="false"
  >
    <template #title="{ element, index, selected }">
      <IconFluentDocumentOnePage20Regular v-if="element.children" />
      <IconDashiconsWelcomeWidgetMenus v-else />
      <span> - {{ index + 1 }} - {{ element.name }}</span>
    </template>
  </TreeViewVue>
  <hr />
  <p>selected: {{ selected }}</p>
  <hr />
  <p>selectedItem: {{ selectedItem }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TreeViewVue from "../components/TreeView.vue";
import IconFluentDocumentOnePage20Regular from "~icons/fluent/document-one-page-20-regular";
import IconDashiconsWelcomeWidgetMenus from "~icons/dashicons/welcome-widgets-menus";

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
        name: "??? & Daniel",
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
  {
    name: "Heidi & ???",
    children: [
      {
        name: "??? && Lukas",
        children: [
          {
            name: "???",
          },
        ],
      },
      {
        name: "???",
      },
    ],
  },
  {
    name: "Barbara",
  },
  {
    name: "Vérena & Ulrich",
    children: [
      {
        name: "Léonidas",
      },
    ],
  },
  {
    name: "??? & Bernhard",
    children: [
      {
        name: "Tobias",
      },
      {
        name: "Claudia",
      },
    ],
  },
  {
    name: "Anna & Stephan",
    children: [
      {
        name: "??? & David",
        children: [
          {
            name: "???",
          },
          {
            name: "???",
          },
        ],
      },
      {
        name: "??? & Joel",
      },
      {
        name: "Simon",
      },
      {
        name: "Jonas",
      },
      {
        name: "Raphael",
      },
    ],
  },
]);
const selected = ref<string | null>(null);
const selectedItem = ref<TreeItemType | null>(null);
</script>
