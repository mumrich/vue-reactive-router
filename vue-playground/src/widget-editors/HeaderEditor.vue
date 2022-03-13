<template>
  <div>
    <p>
      <span>level</span>
      <input v-model="levelModel" />
    </p>
    <p>
      <span>text</span>
      <input v-model="textModel" />
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

type ModelType = { level: number; text?: string };

export default defineComponent({
  name: "edit-w-header",
  props: {
    modelValue: {
      type: Object as PropType<ModelType>,
      required: true,
    },
  },
  emits: {
    "update:modelValue": (v: ModelType) => v,
  },
  setup(props, { emit }) {
    function setModelValue(prop: keyof ModelType, v: any) {
      emit("update:modelValue", { ...props.modelValue, [prop]: v })
    }

    const levelModel = computed({
      get: () => props.modelValue.level,
      set: (v) => setModelValue("level", v),
    });
    const textModel = computed({
      get: () => props.modelValue.text,
      set: (v) => setModelValue("text", v),
    });

    return {
      levelModel,
      textModel,
    };
  },
});
</script>
