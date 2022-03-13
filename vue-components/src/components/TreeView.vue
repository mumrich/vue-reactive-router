<template>
  <draggable v-model="itemsModel" :group="dragGroup" :itemKey="getElementKey">
    <template #item="{ element, index }">
      <template v-if="element.children">
        <TreeViewItemToggle>
          <span
            class="cursor-pointer px-2"
            :class="{
              selected: selected === getKey(index),
            }"
            @click="onClick(index)"
            >{{ getTitle(element, index) }}</span
          >
          <template v-slot:content>
            <div class="pl-3">
              <tree-view
                :items="element.children"
                :parentKey="getKey(index)"
                :selectable="selectable"
                :selected="selected"
                :showIndex="showIndex"
                @onSelect="$emit('onSelect', $event)"
                @update:items="element.children = $event"
                @update:selected="$emit('update:selected', $event)"
              />
            </div>
          </template>
        </TreeViewItemToggle>
      </template>
      <template v-else>
        <p>
          <span
            class="select-none ml-5 px-2 cursor-pointer"
            :class="{
              selected: selected === getKey(index),
            }"
            @click="onClick(index)"
            >{{ getTitle(element, index) }}</span
          >
        </p>
      </template>
    </template>
  </draggable>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue";
import TreeViewItemToggle from "./TreeViewItemToggle.vue";
import draggable from "vuedraggable";

export default defineComponent({
  name: "tree-view",
  components: {
    TreeViewItemToggle,
    draggable,
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
    showIndex: {
      required: false,
      default: false,
      type: Boolean,
    },
    dragGroup: {
      required: false,
      default: "tree",
      type: String,
    },
  },
  emits: {
    "update:items": (v: TreeItemType[]) => v,
    "update:selected": (v: string | null) => v,
    onSelect: (v: TreeItemType) => v,
  },
  setup(props, { emit }) {
    const itemsModel = computed({
      get: () => props.items,
      set: (v) => emit("update:items", v),
    });

    function getElementKey(treeItem: TreeItemType) {
      return treeItem.name;
    }

    function getKey(i: number) {
      return props.parentKey ? `${props.parentKey};${i}` : `${i}`;
    }

    function onClick(i: number = 0) {
      if (props.selectable) {
        emit("update:selected", getKey(i));
        emit("onSelect", props.items[i]);
      }
    }

    function getTitle(treeItem: TreeItemType, i: number) {
      return props.showIndex ? `${i + 1}. ${treeItem.name}` : treeItem.name;
    }

    return {
      getElementKey,
      getKey,
      getTitle,
      itemsModel,
      onClick,
    };
  },
});
</script>

<style scoped>
.selected {
  @apply bg-gray-200;
  @apply rounded-lg;
  @apply shadow;
}
</style>
