<template>
  <draggable v-model="model" :group="group" class="p-2" item-key="component">
    <template #item="{ element, index }">
      <div class="cursor-move">
        <slot name="default" v-bind="{ element, index }">
          <div class="shadow p-3 bg-white rounded hover:bg-red-100">
            <div class="flex items-center">
              <component v-if="element.icon" :is="element.icon" class="mr-1" />
              <strong v-if="element.title">{{ element.title }}</strong>
              <span v-else> {{ index + 1 }}: {{ element.component }} </span>
            </div>
            <div class="w-full" v-if="element.preview">
              <component :is="element.preview" />
            </div>
          </div>
        </slot>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { IVueWidgetEditor } from "@/contracts";
import { computed } from "vue";

interface Props {
  modelValue: IVueWidgetEditor[];
  draggableGroup?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  draggableGroup: "widget",
});

const model = computed(() => props.modelValue);

const group = computed(() => ({
  name: props.draggableGroup,
  pull: "clone",
  put: false,
}));
</script>
