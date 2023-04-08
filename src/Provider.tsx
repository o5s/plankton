import { ToastProvider } from "./components/display/Toast";

const Provider: React.FC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default Provider;
