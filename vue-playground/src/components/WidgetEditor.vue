<template>
  <component :is="widgetEditorName" v-model="propsModelValue" />
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

const props = defineProps({
  widget: {
    required: true,
    type: Object as PropType<VueWidget>,
  },
});

const widgetEditorName = computed(() => `edit-${props.widget.component}`);
const propsModelValue = computed({
  get: () => props.widget.props,
  set: (v) => (props.widget.props = v),
});
</script>
