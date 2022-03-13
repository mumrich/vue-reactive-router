<script lang="ts">
import { defineComponent, h } from "vue";

export default defineComponent({
  name: "w-header",
  props: {
    level: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(props, { slots }) {
    return () => h(`h${props.level}`, props.text ?? slots.default)
  }
})
</script>
