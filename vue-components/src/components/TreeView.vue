<template>
  <draggable v-model="itemsModel" :group="dragGroup" :itemKey="getElementKey">
    <template #item="{ element, index }">
      <TreeViewItem :showToggle="getShowToggle(element)">
        <div class="title" :class="getClass(index)" @click="onClick(index)">
          <slot name="title" v-bind="{ element, index, selected }">
            <span>{{ getTitle(element, index) }}</span>
          </slot>
        </div>
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
            >
              <template #title="{ element, index, selected }">
                <slot name="title" v-bind="{ element, index, selected }">
                  <span>{{ getTitle(element, index) }}</span>
                </slot>
              </template>
            </tree-view>
          </div>
        </template>
      </TreeViewItem>
    </template>
  </draggable>
</template>

<script lang="ts">
import { PropType, defineComponent, computed } from "vue";
import TreeViewItemToggle from "./TreeViewItemToggle.vue";
import draggable from "vuedraggable";
import TreeViewItem from "./TreeViewItem.vue";

export default defineComponent({
  name: "tree-view",
  components: {
    TreeViewItemToggle,
    draggable,
    TreeViewItem,
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

    function getClass(index: number) {
      return {
        selected: props.selected === getKey(index),
      };
    }

    function getShowToggle(treeItem: TreeItemType) {
      if (treeItem.children) {
        return treeItem.children.length > 0;
      }

      return false;
    }

    return {
      getClass,
      getElementKey,
      getKey,
      getShowToggle,
      getTitle,
      itemsModel,
      onClick,
    };
  },
});
</script>

<style scoped>
.title {
  @apply cursor-pointer px-2 py-1;
  @apply flex items-center;
}

.title:hover {
  @apply shadow;
  @apply rounded-lg;
}

.selected {
  @apply bg-gray-200;
  @apply rounded-lg;
  @apply shadow-sm;
}
</style>
