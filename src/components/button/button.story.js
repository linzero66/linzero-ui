import { storiesOf } from "@storybook/vue";
import MlButton from "./button.vue";
storiesOf("Button", module).add("Primary", () => ({
  components: { MlButton },
  template: '<ml-button type="primary">Button</ml-button>',
}));
