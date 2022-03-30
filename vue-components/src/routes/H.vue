<template>
  <article>
    <h1>H-Components</h1>
    <section>
      <h2>h-input</h2>
      <p>
        <hInputVue v-model="hInputModel" label="TEST" />
        hInputModel: {{ hInputModel }}
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup>
import hInputVue from "@/components/h-input.vue";
import { ref } from "vue";

const hInputModel = ref<string | number | null>("TEST");
</script>
