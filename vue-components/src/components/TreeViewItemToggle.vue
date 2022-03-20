<template>
  <ToggleVue>
    <template v-slot:toggled>
      <IconBiChevronDown class="toggle-icon" />
    </template>
    <template v-slot:untoggled>
      <IconBiChevronRight class="toggle-icon" />
    </template>
    <template v-slot:default>
      <slot name="default" />
    </template>
    <template v-slot:content>
      <slot name="content" />
    </template>
  </ToggleVue>
</template>

<script lang="ts" setup>
import ToggleVue from "./Toggle.vue";
import IconBiChevronDown from "~icons/bi/chevron-down";
import IconBiChevronRight from "~icons/bi/chevron-right";
</script>

<style scoped>
.toggle-icon {
  @apply text-current;
}
</style>
