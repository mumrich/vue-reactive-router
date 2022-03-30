<template>
  <article>
    <h1>H-Components</h1>
    <section>
      <h2>h-input</h2>
      <p class="flex flex-row items-center">
        <InputFieldVue v-model="hInputModel" label="h-input" placeholder="Please fill in..." />
        <span>
          <strong>hInputModel:</strong>
          {{ hInputModel }}
        </span>
      </p>
    </section>
  </article>
</template>

<script lang="ts" setup>
import InputFieldVue from "@/components/InputField.vue";
import { ref } from "vue";

const hInputModel = ref<string | number | null>("");
</script>
