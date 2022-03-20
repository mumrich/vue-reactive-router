<template>
  <div class="flex flex-row h-full">
    <div class="available-container">
      <draggable
        v-model="availableWidgets"
        class="bg-white p-5"
        :group="{
          name: draggableGroup,
          pull: 'clone',
          put: false,
        }"
      >
        <template #item="{ element, index }">
          <div class="available-widget">
            {{ index + 1 }}: {{ element.component }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="configured-container">
      <draggable
        v-model="configureWigets"
        class="bg-white p-5"
        :group="draggableGroup"
      >
        <template #item="{ element, index }">
          <div class="configured-widget">
            {{ index + 1 }}: {{ element.component }}
            <IconFluentDelete16Regular
              class="bg-white shadow cursor-pointer hover:bg-red-50"
              @click="onClickDeleteConfiguredWidget(index)"
            />
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IVueWidget } from "@/contracts";
import { ref } from "vue";
import draggable from "vuedraggable";
import IconFluentDelete16Regular from "~icons/fluent/delete-16-regular";

const draggableGroup = ref("widget");

const availableWidgets = ref<IVueWidget[]>([
  {
    component: "w-markdown",
    props: {},
  },
]);

const configureWigets = ref<IVueWidget[]>([]);

function onClickDeleteConfiguredWidget(index: number) {
  configureWigets.value.splice(index, 1);
}
</script>

<style scoped>
.available-container {
  @apply bg-red-50 flex-1 flex flex-row justify-center;
}

.available-widget {
  @apply shadow p-3 hover:bg-red-50 cursor-move;
}

.configured-widget {
  @apply shadow p-3 hover:bg-blue-50 cursor-move;
  @apply flex items-center;
}

.configured-container {
  @apply bg-blue-50 flex-1 flex flex-row justify-center;
}
</style>
