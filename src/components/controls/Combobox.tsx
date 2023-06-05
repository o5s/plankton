import * as combobox from "@zag-js/combobox";
import _groupBy from "lodash.groupby";
import cx from "clsx";
import { Fragment, useState, useId, useCallback, useEffect } from "react";
import { useMachine, normalizeProps } from "@zag-js/react";

export function Combobox({ children, onSelect, options, part, value, ...props }: ComboboxProps) {
  const getOption = useCallback(
    (v: string) => options.find((option) => option.value === v),
    [options],
  );
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
    }),
    {
      context: {
        ...props,
        inputValue: !!value ? getOption(value)?.label : undefined,
        onOpen() {
          setFilteredOptions(options);
        },
        onInputChange(details) {
          // TODO: use fuzzy search
          const filtered = options.filter((option) =>
            option.label.toLowerCase().includes(details.value.toLowerCase()),
          );
          setFilteredOptions(filtered.length > 0 ? filtered : options);
          props.onInputChange?.(details);
        },
        onSelect(details) {
          onSelect?.(details);
        },
      },
    },
  );
  const api = combobox.connect(state, send, normalizeProps);

  const grouppedOptions = _groupBy(filteredOptions, (option) => option.title || "no-groups");

  useEffect(() => {
    if (!!value && value !== api.selectedValue) {
      api.setValue(value);
    }
  }, [value]);

  return (
    <div className="combobox">
      <div {...api.rootProps}>
        <div
          {...api.controlProps}
          className={cx("relative inline-block max-w-full", part?.control?.className)}
        >
          <input
            {...api.inputProps}
            className={cx("select data-[invalid]:select-error w-full", part?.input?.className)}
          />
          <button
            {...api.triggerProps}
            className={cx("absolute right-0 inset-y-0 pr-10", part?.trigger?.className)}
          />
        </div>
      </div>

      <div {...api.positionerProps} className="z-50">
        <ul
          {...api.contentProps}
          className={cx("menu max-h-60 overflow-y-auto flex-nowrap", part?.content?.className)}
        >
          {Object.entries(grouppedOptions).map(([groupName, gOptions]) => (
            <Fragment key={groupName}>
              {groupName !== "no-groups" && <li className="menu-title">{groupName}</li>}
              {gOptions.map((option, index) => (
                <li
                  {...api.getOptionProps({ index, label: option.label, value: option.value })}
                  className={cx(part?.option?.className)}
                  key={option.value}
                >
                  <a>{children?.(option) || option.label}</a>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
export type ComboboxProps = Pick<
  combobox.Context,
  | "autoFocus"
  | "disabled"
  | "invalid"
  | "name"
  | "onInputChange"
  | "openOnClick"
  | "placeholder"
  | "readOnly"
> & {
  children?: (option: ComboboxOption) => React.ReactNode;
  onSelect?: (details: { value?: string }) => void;
  options: ComboboxOption[];
  part?: {
    content?: { className?: string };
    control?: { className?: string };
    input?: { className?: string };
    option?: { className?: string };
    trigger?: { className?: string };
  };
  value?: string;
};

type ComboboxOption = {
  label: string;
  // Grouping
  title?: string;
  value: string;
};
