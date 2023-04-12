import * as dialog from "@zag-js/dialog";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";
import { useId } from "react";

export const Dialog = () => {
  const [state, send] = useMachine(dialog.machine({ id: useId() }));

  const api = dialog.connect(state, send, normalizeProps);

  return (
    <>
      <button {...api.triggerProps}>Open Dialog</button>
      {api.isOpen && (
        <Portal>
          <div {...api.backdropProps} />
          <div {...api.containerProps}>
            <div {...api.contentProps}>
              <h2 {...api.titleProps}>Edit profile</h2>
              <p {...api.descriptionProps}>
                Make changes to your profile here. Click save when you are done.
              </p>
              <div>
                <input placeholder="Enter name..." />
                <button>Save</button>
              </div>
              <button {...api.closeTriggerProps}>Close</button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
