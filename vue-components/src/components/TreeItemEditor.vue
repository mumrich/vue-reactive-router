<template>
  <div v-if="model">
    <slot v-bind="{ model }">
      <InputField v-model="model.name" label="name" />
    </slot>
  </div>
</template>

<script lang="ts" setup>
import { ITreeViewItem } from "@/contracts";
import { computed } from "vue";
import InputField from "./InputField.vue";

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
