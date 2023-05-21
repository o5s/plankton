import * as combobox from "@zag-js/combobox";
import cx from "clsx";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useState, useId, useEffect, useCallback } from "react";

export function Combobox<T, V>({
  displayText,
  getKey,
  getValue,
  items,
  onSelect,
  part,
  value,
  ...props
}: ComboboxProps<T, V>) {
  const getItem = useCallback(
    (v: string) => items.find((item) => getKey(getValue(item)) === v),
    [getKey, getValue, items],
  );
  const [options, setOptions] = useState(items);
  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      ...props,
      onOpen() {
        setOptions(items);
      },
      onInputChange(details) {
        const filtered = items.filter((item) =>
          getKey(getValue(item)).toLowerCase().includes(details.value.toLowerCase()),
        );
        setOptions(filtered.length > 0 ? filtered : items);
        props.onInputChange?.(details);
      },
      onSelect({ value: v }) {
        if (onSelect) {
          const item = !!v ? getItem(v) : undefined;
          onSelect(!!item ? getValue(item) : undefined);
        }
      },
    }),
  );
  const api = combobox.connect(state, send, normalizeProps);

  useEffect(() => {
    if (!!value && getKey(value) !== api.selectedValue) {
      api.setValue(getKey(value));
    }
  }, [value]);

  return (
    <div>
      <div {...api.rootProps}>
        <div
          {...api.controlProps}
          className={cx("relative inline-block", part?.control?.className)}
        >
          <input
            {...api.inputProps}
            className={cx("select data-[invalid]:select-error", part?.input?.className)}
          />
          <button
            {...api.triggerProps}
            className={cx("absolute right-0 inset-y-0 pr-10", part?.trigger?.className)}
          />
        </div>
      </div>

      <div {...api.positionerProps}>
        {options.length > 0 && (
          <div>
            <ul {...api.contentProps} className={cx("menu bg-base-100", part?.content?.className)}>
              {options.map((item, index) => (
                <li
                  {...api.getOptionProps({
                    index,
                    label: displayText(item),
                    value: getKey(getValue(item)),
                  })}
                  className={cx(part?.option?.className)}
                >
                  <a>{displayText(item)}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export type ComboboxProps<T, V> = Pick<
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
  displayText: (item: T) => string;
  getKey: (item: V) => string;
  getValue: (item: T) => V;
  items: T[];
  onSelect?: (item?: V) => void;
  part?: {
    content?: { className?: string };
    control?: { className?: string };
    input?: { className?: string };
    option?: { className?: string };
    trigger?: { className?: string };
  };
  value?: V;
};
