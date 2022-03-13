<template>
  <div>
    <ol>
      <li v-for="(rawRoute, i) in rawRoutes">
        <p>
          {{ i + 1 }}. {{ rawRoute.path }}
          <button class="bg-gray-300 hover:shadow px-3">-</button>
        </p>
        <p class="ml-3">
          <input v-if="rawRoute.meta" v-model="rawRoute.meta.title" />
        </p>
      </li>
    </ol>
    <hr class="my-3" />
    <p>
      <input v-model="newPath" placeholder="newPath" />
      <input v-model="newTitle" placeholder="newTitle" />
      <button class="bg-gray-300 hover:shadow px-3" @click="onAdd">+</button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref, markRaw } from "vue";
import { rawRoutes } from "../routes/router";
import DynamicPageRendererVue from "../components/DynamicPageRenderer.vue";

const newPath = ref<string | null>(null);
const newTitle = ref<string | null>(null);

function onAdd() {
  if (newPath.value !== null && newTitle.value !== null) {
    const path = newPath.value;
    const title = newTitle.value;

    rawRoutes.value.push({
      path,
      name: title.toLocaleLowerCase(),
      component: markRaw(DynamicPageRendererVue),
      meta: {
        title
      }
    });

    newPath.value = null;
    newTitle.value = null;
  }
}
</script>
