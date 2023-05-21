import * as toast from "@zag-js/toast";
import cx from "clsx";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Placement } from "@zag-js/toast";
import { createContext, useContext, useId } from "react";
import { useActor, useMachine, normalizeProps } from "@zag-js/react";

const Toast: React.FC<ToastProps> = ({ actor }) => {
  const [state, send] = useActor(actor);
  const api = toast.connect(state, send, normalizeProps);

  function makeIcon(type: toast.Type) {
    const className = "w-5";
    switch (type) {
      case "info":
        return <InformationCircleIcon className={className} />;
      case "success":
        return <CheckCircleIcon className={className} />;
      case "error":
        return <XCircleIcon className={className} />;
    }
  }

  return (
    <div
      {...api.rootProps}
      className={cx(
        "alert w-auto",
        api.type === "info" && "alert-info",
        api.type === "success" && "alert-success",
        api.type === "error" && "alert-error",
      )}
    >
      <div>
        {makeIcon(api.type)}
        <div>
          <h3 {...api.titleProps}>{api.title}</h3>
          <p {...api.descriptionProps}>{api.description}</p>
        </div>
      </div>
      <XMarkIcon className="w-4 cursor-pointer" onClick={api.dismiss} />
    </div>
  );
};
export type ToastProps = {
  actor: toast.Service;
};

const ToastContext = createContext<ToastApi>({} as any);
export const useToast: () => ToastApi = () => useContext(ToastContext);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, send] = useMachine(toast.group.machine({ id: useId() }));
  const api = toast.group.connect(state, send, normalizeProps);

  return (
    <ToastContext.Provider value={api}>
      {Object.entries(api.toastsByPlacement).map(([placement, toasts]) => (
        <div
          {...api.getGroupProps({ placement: placement as Placement })}
          className="toast"
          key={placement}
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
export type ToastProviderProps = {
  children: React.ReactNode;
};

type ToastApi = ReturnType<(typeof toast)["group"]["connect"]>;
