import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: ComponentMeta<typeof Button> = {
  title: "Controls/Button",
  component: Button,
};
export default meta;

export const Primary: ComponentStoryObj<typeof Button> = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: ComponentStoryObj<typeof Button> = {
  args: {
    label: "Button",
  },
};
