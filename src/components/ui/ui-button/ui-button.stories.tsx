import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiButton, { UiButtonProps } from "./index";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => (
  <UiButton {...args} />
);

const defaultArgs: UiButtonProps = {
  theme: "light",
  children: "Hello",
  onClick: () => console.debug("Button clicked"),
  disabled: false,
};

export const Light = Template.bind({});

Light.args = {
  ...defaultArgs,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...defaultArgs,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...defaultArgs,
  disabled: true,
};
