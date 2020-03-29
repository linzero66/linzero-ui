import { storiesOf } from "@storybook/vue";
import MlButton from "./button.vue";
import markdown from "./button.md";

storiesOf("Button|Emoji", module).add(
  "Primary",
  () => ({
    components: { MlButton },
    template: `<ml-button type="primary" >button</ml-button>`,
  }),
  {
    notes: markdown,
  }
);
storiesOf("Button|Disabled", module).add(
  "Disabled",
  () => ({
    components: { MlButton },
    template: '<ml-button type="primary" Disabled>button</ml-button>',
  }),
  {
    notes: markdown,
  }
);
