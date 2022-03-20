<template>
  <div class="flex flex-row justify-around">
    <div class="flex flex-col bg-gray-50 max-w-96">
      <strong>Pages</strong>
      <TreeViewVue
        @on-select="selectedItem = $event"
        selectable
        v-model:items="items"
        v-model:selected="selected"
        :show-index="false"
      >
        <template #title="{ element, index, selected }">
          <IconFluentDocumentOnePage20Regular />
          <span> - {{ index + 1 }} - {{ element.name }}</span>
        </template>
      </TreeViewVue>
    </div>
    <div class="flex flex-col bg-gray-50 max-w-96">
      <strong>Selected Page</strong>
      <div class="flex flex-col" v-if="selectedItem">
        <TreeItemEditor v-model="selectedItem" />
      </div>
    </div>
  </div>
  <hr />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TreeViewVue from "../components/TreeView.vue";
import IconFluentDocumentOnePage20Regular from "~icons/fluent/document-one-page-20-regular";
import IconDashiconsWelcomeWidgetMenus from "~icons/dashicons/welcome-widgets-menus";
import TreeItemEditor from "../components/TreeItemEditor.vue";

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
