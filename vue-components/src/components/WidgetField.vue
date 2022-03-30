<template>
  <draggable v-model="model" class="p-2" :group="draggableGroup">
    <template #item="{ element, index }">
      <div class="cursor-move">
        <slot name="default" v-bind="{ element, index }">
          <div class="shadow p-3 bg-white hover:bg-blue-100 flex items-center">
            {{ index + 1 }}: {{ element.component }}
          </div>
        </slot>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { IVueWidget } from "@/contracts";
import { computed } from "vue";

interface Props {
  modelValue: IVueWidget[];
  draggableGroup?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  draggableGroup: "widget",
});

const emit = defineEmits<{
  (e: "update:modelValue", v: IVueWidget[]): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (v) => emit("update:modelValue", v),
});
</script>
