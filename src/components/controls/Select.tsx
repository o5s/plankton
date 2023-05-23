import * as select from "@zag-js/select";
import cx from "clsx";
import { useId } from "react";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";

export const Select: React.FC<SelectProps> = ({ options, part, placeholder, ...props }) => {
  const [state, send] = useMachine(select.machine({ id: useId(), ...props }));
  const api = select.connect(state, send, normalizeProps);

  return (
    <div>
      {/* Hidden select */}
      <select {...api.hiddenSelectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        {...api.triggerProps}
        className={cx("select items-center data-[invalid]:select-error", part?.trigger?.className)}
      >
        {api.selectedOption?.label ?? placeholder}
      </button>

      <Portal>
        <div {...api.positionerProps} className="z-50">
          <ul
            {...api.contentProps}
            className={cx(
              "menu max-h-60 overflow-y-auto flex-nowrap",
              !api.isOpen && "hidden",
              part?.content?.className,
            )}
          >
            {options.map((option) => (
              <li
                {...api.getOptionProps(option)}
                className={cx(option.disabled && "disabled", part?.option?.className)}
                key={option.value}
              >
                <a className={cx(option.value === api.selectedOption?.value && "active")}>
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  );
};
export type SelectProps = Pick<
  select.Context,
  "disabled" | "invalid" | "name" | "onChange" | "onClose" | "onHighlight" | "onOpen" | "readOnly"
> & {
  options: SelectOption[];
  part?: {
    content?: { className?: string };
    option?: { className?: string };
    trigger?: { className?: string };
  };
  placeholder?: string;
};

type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};
