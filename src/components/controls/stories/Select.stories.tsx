import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../Select";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Controls/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: Array<{ name: string; value: string }> = [
  { name: "Brad Pitt", value: "brad" },
  { name: "Leonardo DiCaprio", value: "leo" },
];

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
