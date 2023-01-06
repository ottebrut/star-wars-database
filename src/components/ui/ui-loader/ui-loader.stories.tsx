import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiLoader from "./index";

export default {
  title: "Ui-Kit/UiButton",
  component: UiLoader,
} as ComponentMeta<typeof UiLoader>;

const Template: ComponentStory<typeof UiLoader> = (args) => (
  <UiLoader {...args} />
);

export const Primary = Template.bind({});
