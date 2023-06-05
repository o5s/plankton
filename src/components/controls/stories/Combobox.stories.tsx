import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "../Combobox";

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: "Controls/Combobox",
};
export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { label: "Brad Pitt", value: "bradpitt" },
  { label: "Leonardo DiCaprio", value: "leonardo" },
];

export const Default: Story = {
  render: () => <Combobox options={options} />,
};
