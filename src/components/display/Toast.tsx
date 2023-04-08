import type { Options } from "@zag-js/toast/dist/toast.types";
import type { groupConnect } from "@zag-js/toast/dist/toast-group.connect";
import * as toast from "@zag-js/toast";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Placement } from "@zag-js/toast";
import { createContext, useContext, forwardRef } from "react";
import { useActor, useMachine, normalizeProps } from "@zag-js/react";

type ToastApi = ReturnType<typeof groupConnect>;
export type ToastOptions = Options;

const Toast = forwardRef<HTMLDivElement, ToastProps>(({ actor, ...props }) => {
  const [state, send] = useActor(actor);
  const api = toast.connect(state, send, normalizeProps);

  function createIcon(type: toast.Type) {
    switch (type) {
      case "info":
        return <InformationCircleIcon className="w-5" />;

      case "success":
        return <CheckCircleIcon className="w-5" />;

      case "error":
        return <XCircleIcon className="w-5" />;
    }
  }

  return (
    <div {...api.rootProps} {...props}>
      <div>
        {createIcon(api.type)}
        <div>
          <h3 {...api.titleProps}>{api.title}</h3>
          <p {...api.descriptionProps}>{api.description}</p>
        </div>
      </div>
      <XMarkIcon className="w-4 cursor-pointer" onClick={api.dismiss} />
    </div>
  );
});
type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  actor: toast.Service;
};

const ToastContext = createContext<ToastApi>({} as any);
export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, send] = useMachine(toast.group.machine({ id: "toast" }));
  const api = toast.group.connect(state, send, normalizeProps);

  return (
    <ToastContext.Provider value={api}>
      {Object.entries(api.toastsByPlacement).map(([placement, toasts]) => (
        <div
          key={placement}
          {...api.getGroupProps({ placement: placement as Placement })}
        >
          {toasts.map((toast) => (
            <Toast key={toast.id} actor={toast} />
          ))}
        </div>
      ))}
      {children}
    </ToastContext.Provider>
  );
};
type ToastProviderProps = { children?: React.ReactNode };
