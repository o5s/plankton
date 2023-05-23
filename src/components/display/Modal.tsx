import * as dialog from "@zag-js/dialog";
import { useId } from "react";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";

export const Modal: React.FC<ModalProps> = ({ children, trigger, ...props }) => {
  const [state, send] = useMachine(dialog.machine({ id: useId(), ...props }));
  const api = dialog.connect(state, send, normalizeProps);

  return (
    <>
      {trigger(api.triggerProps)}
      <Portal>
        <input type="checkbox" className="modal-toggle" checked={api.isOpen} readOnly />
        <div {...api.backdropProps} className="modal">
          <div {...api.contentProps} className="modal-box">
            {children}
            <footer className="modal-action">
              <button {...api.closeTriggerProps} className="btn">
                Close
              </button>
            </footer>
          </div>
        </div>
      </Portal>
    </>
  );
};
export type ModalProps = Pick<
  dialog.Context,
  | "closeOnEsc"
  | "closeOnOutsideClick"
  | "modal"
  | "onClose"
  | "onEsc"
  | "onOpen"
  | "onOutsideClick"
  | "open"
  | "preventScroll"
  | "role"
> & {
  children: React.ReactNode;
  trigger: (props: JSX.IntrinsicElements["button"]) => React.ReactNode;
};
