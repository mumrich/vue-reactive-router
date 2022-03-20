<template>
  <div v-if="mainAdd" class="flex items-center">
    <button class="action" @click="onClickAddMain">
      <IconFluentAddCircle16Regular /><span class="ml-1">New Page</span>
    </button>
  </div>
  <draggable v-model="itemsModel" :group="dragGroup" :itemKey="getElementKey">
    <template #item="{ element, index }">
      <TreeViewItem :showToggle="getShowToggle(element)">
        <div
          class="title"
          :class="getClass(index)"
          @click="onClickSelect(index)"
        >
          <slot name="title" v-bind="{ element, index, selected }">
            <span>{{ getTitle(element, index) }}</span>
          </slot>
        </div>
        <span class="action">
          <IconFluentDelete16Regular @click="onClickDelete(element, index)" />
        </span>
        <span class="action" @click="onClickAdd(element)">
          <IconFluentAddCircle16Regular />
        </span>
        <template v-slot:content>
          <div class="pl-3">
            <tree-view
              :items="getChildren(element)"
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
import IconFluentDelete16Regular from "~icons/fluent/delete-16-regular";
import IconFluentAddCircle16Regular from "~icons/fluent/add-circle-16-regular";

export default defineComponent({
  name: "tree-view",
  components: {
    IconFluentAddCircle16Regular,
    IconFluentDelete16Regular,
    TreeViewItem,
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
    mainAdd: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  emits: {
    "update:items": (v: TreeItemType[]) => v,
    "update:selected": (v: string | null) => v,
    onSelect: (v: TreeItemType) => v,
  },
  setup(props, { emit }) {
    const itemsModel = computed<TreeItemType[]>({
      get: () => props.items,
      set: (v) => emit("update:items", v),
    });

    function getElementKey(treeItem: TreeItemType) {
      return treeItem.name;
    }

    function getKey(i: number) {
      return props.parentKey ? `${props.parentKey};${i}` : `${i}`;
    }

    function onClickSelect(i: number = 0) {
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

    function getChildren(treeItem: TreeItemType) {
      return treeItem.children ?? [];
    }

    function onClickAddMain() {
      const defaultName = "new name";
      let newName = window.prompt("Name:") ?? defaultName;

      if (newName.length === 0) {
        newName = defaultName;
      }

      itemsModel.value.push({
        name: newName,
      });
    }

    function onClickAdd(treeItem: TreeItemType) {
      const defaultName = `child of '${treeItem.name}'`;
      let newName = window.prompt("Name:") ?? defaultName;

      if (newName.length === 0) {
        newName = defaultName;
      }

      const newItem = {
        name: newName,
      };

      if (treeItem.children) {
        treeItem.children?.push(newItem);
      }

      treeItem.children = [newItem];
    }

    function onClickDelete(treeItem: TreeItemType, index: number) {
      if (window.confirm(`Really delete '${treeItem.name}'?`)) {
        itemsModel.value.splice(index, 1);
      }
    }

    return {
      getChildren,
      getClass,
      getElementKey,
      getKey,
      getShowToggle,
      getTitle,
      itemsModel,
      onClickAdd,
      onClickAddMain,
      onClickDelete,
      onClickSelect,
    };
  },
});
</script>

<style scoped>
.title {
  @apply cursor-pointer;
  @apply px-2 py-1;
  @apply flex items-center;
  @apply mr-1;
}

.title:hover {
  @apply shadow;
  @apply bg-gray-100;
  @apply rounded-lg;
}

.selected {
  @apply bg-gray-200;
  @apply rounded-lg;
  @apply shadow-sm;
}

.action {
  @apply flex items-center;
  @apply cursor-pointer;
  @apply px-1 py-1;
}

.action:hover {
  @apply shadow;
  @apply rounded-lg;
  @apply bg-gray-100;
}
</style>
