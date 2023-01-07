import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiInput from "./index";

export default {
  title: "Ui-Kit/UiInput",
  component: UiInput,
} as ComponentMeta<typeof UiInput>;

const Template: ComponentStory<typeof UiInput> = (args) => (
  <UiInput {...args} />
);

export const Default = Template.bind({});
