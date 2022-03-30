<template>
  <div class="flex flex-row h-full">
    <div class="available-container">
      <WidgetSource v-model="availableWidgets" />
    </div>
    <div class="configured-container">
      <WidgetField v-model="configureWigets">
        <template #default="{ element, index }">
          <div class="configured-widget">
            {{ index + 1 }}: {{ element.component }}
            <IconFluentDelete16Regular
              class="bg-white shadow cursor-pointer hover:bg-red-50"
              @click="onClickDeleteConfiguredWidget(index)"
            />
          </div>
        </template>
      </WidgetField>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IVueWidget, IVueWidgetEditor } from "@/contracts";
import { h, ref } from "vue";
import IconFluentDelete16Regular from "~icons/fluent/delete-16-regular";
import WidgetSource from "@/components/WidgetSource.vue";
import WidgetField from "@/components/WidgetField.vue";
import IconLogosMarkdown from "~icons/logos/markdown";
import ImageLoremIpsum from "@/assets/lorem-ipsum.png";

const availableWidgets = ref<IVueWidgetEditor[]>([
  {
    component: "w-markdown",
    props: {},
    title: "Markdown",
    icon: IconLogosMarkdown,
    preview: () => {
      return h("img", {
        src: ImageLoremIpsum,
        style: { height: "100px" },
      });
    },
  },
]);

const configureWigets = ref<IVueWidget[]>([]);

function onClickDeleteConfiguredWidget(index: number) {
  configureWigets.value.splice(index, 1);
}
</script>

<style scoped>
.available-container {
  @apply bg-red-50 flex-1 flex flex-row justify-center;
}

.configured-container {
  @apply bg-blue-50 flex-1 flex flex-row justify-center;
}

.configured-widget {
  @apply shadow p-3 cursor-move;
  @apply flex items-center;
  @apply bg-white;
}

.configured-widget:hover {
  @apply bg-blue-100;
}
</style>
