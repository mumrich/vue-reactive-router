<template>
  <div class="wrapper">
    <span>{{ props.label }}</span>
    <input v-model="model" :placeholder="props.label" />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: String as PropType<string | number | null>,
  },
  label: {
    required: false,
    default: "",
    type: String as PropType<string>,
  },
});

const emits = defineEmits({
  "update:modelValue": (e: string | number | null) => e,
});

const model = computed({
  get: () => props.modelValue,
  set: (v) => emits("update:modelValue", v),
});
</script>

<style scoped>
.wrapper {
  @apply m-2;
}

span {
  @apply mr-2;
  @apply select-none;
}

input {
  @apply shadow-inner;
  @apply p-1;
  @apply border-none !important;
}
</style>
