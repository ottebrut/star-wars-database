import { ComponentMeta, ComponentStory } from "@storybook/react";

import UiVideo from "./index";

import video from "src/components/error-message/video/han-solo.mp4";

export default {
  title: "Ui-Kit/UiVideo",
  component: UiVideo,
} as ComponentMeta<typeof UiVideo>;

const Template: ComponentStory<typeof UiVideo> = (args) => (
  <UiVideo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: video,
  playbackRate: 1.5,
};
