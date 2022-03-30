<template>
  <div>
    <span>LABEL</span>
    <input type="text" v-model="model" />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  modelValue: {
    required: true,
    type: String as PropType<string | number | null>,
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
