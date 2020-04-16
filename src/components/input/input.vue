<template>
  <input
    class="ml-input"
    :class="btnClass"
    v-model="valueText"
    @change="handleChange"
  />
</template>
<script>
const prefix = "ml-input";
export default {
  name: "MlInput",
  props: {
    value: [String, Number],
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
  data() {
    return {
      valueText: "",
    };
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
  watch: {
    value(val) {
      this.valueText = val;
    },
  },
  methods: {
    handleChange(event) {
      console.log(event);
      this.$emit("change", event.target.value);
      this.$emit("update:value", event.target.value);
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/variables/index";
@import "./input.scss";
</style>
