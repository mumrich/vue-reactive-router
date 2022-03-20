<template>
  <div v-if="model">
    <slot v-bind="{ model }">
      <span>name: <input v-model="model.name" /></span>
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ITreeViewItem } from "@/contracts";
import { computed } from "vue";

const props = defineProps<{
  modelValue: ITreeViewItem;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", mv: ITreeViewItem): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
</script>
