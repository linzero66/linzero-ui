<template>
  <button class="ml-button" :class="btnClass" @click="handleClick">
    <slot></slot>
  </button>
</template>
<script>
const prefix = "ml-button";
export default {
  name: "MlButton",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass() {
      return [
        `${prefix}--${this.type}`,
        this.disabled ? `${prefix}--disabled` : "",
        this.round ? `${prefix}--round` : "",
      ];
    },
  },
  methods: {
    handleClick(event) {
      console.log(event);
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/variables/index";
@import "./button.scss";
</style>
