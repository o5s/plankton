import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "../Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Display/Modal",
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal
      trigger={(props) => (
        <button {...props} className="btn">
          Open modal
        </button>
      )}
    >
      Hello World!
    </Modal>
  ),
};
