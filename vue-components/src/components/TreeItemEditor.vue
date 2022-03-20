<template>
  <div v-if="model">
    <span>name: <input v-model="model.name" /></span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  modelValue: TreeItemType;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", mv: TreeItemType): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
</script>
