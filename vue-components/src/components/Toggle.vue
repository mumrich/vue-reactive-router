<template>
  <div class="toggler">
    <div class="toggler-icon-wrapper" @click="onClick">
      <template v-if="isToggled">
        <slot name="toggled">
          <IconBxCheckBoxChecked />
        </slot>
      </template>
      <template v-else>
        <slot name="untoggled">
          <IconBxCheckBox />
        </slot>
      </template>
    </div>
    <slot name="default"></slot>
  </div>
  <template v-if="isToggled">
    <slot name="content"></slot>
  </template>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from "vue";
import IconBxCheckBox from "~icons/bx/checkbox";
import IconBxCheckBoxChecked from "~icons/bx/checkbox-checked";

const props = defineProps({
  modelValue: {
    default: null,
    required: false,
    type: Boolean as PropType<boolean | null>,
  },
});

const emit = defineEmits({
  "update:modelValue": (v: boolean) => v,
});
const internalModelValue = ref(props.modelValue ?? false);

const isToggled = computed({
  get: () => props.modelValue ?? internalModelValue.value,
  set: (v) => {
    internalModelValue.value = v;
    emit("update:modelValue", v);
  },
});

function onClick() {
  isToggled.value = !isToggled.value;
}
</script>

<style scoped>
.toggler {
  @apply h-full;
  @apply select-none;
  @apply flex items-center;
}

.toggler-icon-wrapper {
  @apply cursor-pointer;
  @apply flex flex-col;
  @apply h-full;
}
</style>
