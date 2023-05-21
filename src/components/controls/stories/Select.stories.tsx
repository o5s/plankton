import type { Meta, StoryObj } from "@storybook/react";

import { Select, SelectProps } from "../Select";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Controls/Select",
};
export default meta;

type Story = StoryObj<typeof meta>;

const options: SelectProps["options"] = [
  { label: "Brad Pitt", value: "bradpitt" },
  { label: "Leonardo DiCaprio", value: "leonardo", disabled: true },
];

export const Default: Story = {
  args: { options },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

export const Custom: Story = {
  args: {
    ...Default.args,
    part: {
      content: { className: "border shadow-xl" },
      trigger: { className: "select-bordered" },
    },
  },
};
