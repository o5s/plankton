import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { content: "Hello World 1", title: "First Tab", value: "tab-1" },
      { content: "Hello World 2", title: "Second Tab", value: "tab-2" },
      { content: "Hello World 3", title: "Third Tab", value: "tab-3", disabled: true },
    ],
  },
};

export const Boxed: Story = {
  args: {
    ...Default.args,
    part: {
      tablist: { className: "tabs-boxed" },
    },
  },
};

export const Bordered: Story = {
  args: {
    ...Default.args,
    part: {
      trigger: { className: "tab-bordered" },
    },
  },
};

export const Lifted: Story = {
  args: {
    ...Default.args,
    part: {
      trigger: { className: "tab-lifted" },
    },
  },
};
