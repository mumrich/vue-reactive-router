<template>
  <div>
    <p>
      <span>level</span>
      <input v-model="levelModel" />
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type ModelType = { level: number, text?: string };

export default defineComponent({
  name: "edit-w-header",
  props: {
    modelValue: {
      type: Object as PropType<ModelType>,
      required: true
    }
  },
  emits: {
    "update:modelValue": (v: ModelType) => v
  },
  setup(props, { emit }) {
    const levelModel = computed({
      get: () => props.modelValue.level,
      set: (v) => emit("update:modelValue", { ...props.modelValue, level: v })
    });

    return {
      levelModel
    }
  }
})
</script>
