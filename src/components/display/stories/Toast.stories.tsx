import type { ToastOptions } from "@zag-js/toast";

import { useToast, ToastProvider } from "../Toast";

export default {
  title: "Display/Toast",
  decorators: [
    (Story: any) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

const ToastWrapper: React.FC<Partial<ToastOptions>> = (props) => {
  const toast = useToast();

  const handleClick = () => {
    toast.create({
      ...props,
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    });
  };

  return (
    <button className="btn" onClick={handleClick}>
      Click me
    </button>
  );
};

export const Default = {
  render: () => <ToastWrapper />,
};

export const Info = {
  render: () => <ToastWrapper type="info" />,
};

export const Success = {
  render: () => <ToastWrapper type="success" />,
};

export const Error = {
  render: () => <ToastWrapper type="error" />,
};

export const Loading = {
  render: () => <ToastWrapper type="loading" />,
};

export const Custom = {
  render: () => <ToastWrapper type="custom" />,
};
