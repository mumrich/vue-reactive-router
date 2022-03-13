<template>
  <div v-for="(item, i) in items" :key="getKey(i)">
    <template v-if="item.children">
      <TreeViewItemToggle>
        <span
          class="cursor-pointer"
          :class="{
            selected: selected === getKey(i),
          }"
          @click="onClick(i)"
          >{{ item.title }}</span
        >
        <template v-slot:content>
          <div class="pl-3">
            <tree-view
              :items="item.children"
              :parentKey="getKey(i)"
              :selectable="selectable"
              :selected="selected"
              @onSelect="$emit('onSelect', $event)"
              @update:selected="$emit('update:selected', $event)"
            />
          </div>
        </template>
      </TreeViewItemToggle>
    </template>
    <template v-else>
      <span
        class="select-none px-2 cursor-pointer"
        :class="{
          selected: selected === getKey(0),
        }"
        @click="onClick()"
        >{{ item.title }}</span
      >
    </template>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import TreeViewItemToggle from "./TreeViewItemToggle.vue";

export default defineComponent({
  name: "tree-view",
  components: {
    TreeViewItemToggle,
  },
  props: {
    items: {
      required: true,
      type: Array as PropType<TreeItemType[]>,
    },
    selectable: {
      required: false,
      default: false,
      type: Boolean,
    },
    selected: {
      required: false,
      default: null,
      type: String as PropType<string | null>,
    },
    parentKey: {
      required: false,
      default: null,
      type: String,
    },
  },
  emits: {
    "update:selected": (v: string | null) => v,
    onSelect: (v: TreeItemType) => v,
  },
  setup(props, { emit }) {
    function getKey(i: number) {
      return props.parentKey ? `${props.parentKey};${i}` : `${i}`;
    }

    function onClick(i: number = 0) {
      if (props.selectable) {
        emit("update:selected", getKey(i));
        emit("onSelect", props.items[i]);
      }
    }

    return {
      getKey,
      onClick,
    };
  },
});
</script>

<style scoped>
.selected {
  @apply bg-gray-200;
  @apply rounded-lg;
}
</style>
