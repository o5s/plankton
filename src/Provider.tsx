import { ToastProvider } from "./components/display/Toast";

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};
