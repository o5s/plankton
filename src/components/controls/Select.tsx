import * as select from "@zag-js/select";
import { useId } from "react";
import { useMachine, normalizeProps, Portal } from "@zag-js/react";

const selectData = [
  { label: "Nigeria", value: "NG" },
  { label: "Japan", value: "JP" },
  { label: "Korea", value: "KO" },
  { label: "Kenya", value: "KE" },
  { label: "United Kingdom", value: "UK" },
  { label: "Ghana", value: "GH" },
  { label: "Uganda", value: "UG" },
];

export function Select() {
  const [state, send] = useMachine(select.machine({ id: useId() }));

  const api = select.connect(state, send, normalizeProps);

  return (
    <div>
      {/* Hidden select */}
      <select {...api.hiddenSelectProps}>
        {selectData.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        className="select select-bordered inline-flex items-center"
        type="button"
        {...api.triggerProps}
      >
        {api.selectedOption?.label ?? "Select option"}
      </button>

      <Portal>
        <div {...api.positionerProps}>
          <ul {...api.contentProps}>
            {selectData.map(({ label, value }) => (
              <li key={value} {...api.getOptionProps({ label, value })}>
                <span>{label}</span>
                {value === api.selectedOption?.value && "✓"}
              </li>
            ))}
          </ul>
        </div>
      </Portal>
    </div>
  );
}
