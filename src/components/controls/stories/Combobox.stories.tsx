import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "../Combobox";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Controls/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items: Array<{ name: string; value: string }> = [
  { name: "Brad Pitt", value: "brad" },
  { name: "Leonardo DiCaprio", value: "leo" },
];

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    getLabel: (item) => item.name,
    getValue: (item) => item.value,
    items,
    children: (item) => item.name,
  },
};
