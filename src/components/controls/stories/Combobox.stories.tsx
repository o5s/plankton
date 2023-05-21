import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "../Combobox";

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: "Controls/Combobox",
};
export default meta;

type Story = StoryObj<typeof meta>;

const items: Array<{ name: string; value: string }> = [
  { name: "Brad Pitt", value: "bradpitt" },
  { name: "Leonardo DiCaprio", value: "leonardo" },
];

export const Default: Story = {
  render: () => (
    <Combobox
      displayText={(item) => item.name}
      getKey={(value: string) => value}
      getValue={(item) => item.value}
      items={items}
    />
  ),
};
