import * as combobox from "@zag-js/combobox";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useState, useId } from "react";

export function Combobox<T>({ children, getLabel, getValue, items, ...props }: ComboboxProps<T>) {
  const [options, setOptions] = useState(items);
  const [state, send] = useMachine(
    combobox.machine({
      ...props,
      id: useId(),
      onOpen() {
        setOptions(items);
      },
      onInputChange({ value }) {
        const filtered = items.filter((item) =>
          getLabel(item).toLowerCase().includes(value.toLowerCase()),
        );
        setOptions(filtered.length > 0 ? filtered : items);
      },
    }),
  );

  const api = combobox.connect(state, send, normalizeProps);

  return (
    <div>
      <div {...api.rootProps}>
        <div {...api.controlProps}>
          <input {...api.inputProps} />
        </div>
      </div>
      <div {...api.positionerProps}>
        {options.length > 0 && (
          <ul {...api.contentProps}>
            {options.map((item, index) => (
              <li {...api.getOptionProps({ index, label: getLabel(item), value: getValue(item) })}>
                {children(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export type ComboboxProps<T> = {
  children: (item: T) => React.ReactNode;
  disabled?: boolean;
  getLabel: (item: T) => string;
  getValue: (item: T) => string;
  items: T[];
  name?: string;
  readOnly?: boolean;
};
