<template>
  <template v-if="props.showToggle">
    <p>
      <TreeViewItemToggle>
        <slot />
        <template #content>
          <slot name="content" />
        </template>
      </TreeViewItemToggle>
    </p>
  </template>
  <template v-else>
    <p class="ml-5">
      <slot />
      <slot name="content" />
    </p>
  </template>
</template>

<script lang="ts" setup>
import TreeViewItemToggle from "./TreeViewItemToggle.vue";
const props = defineProps<{
  showToggle: boolean;
}>();
</script>
