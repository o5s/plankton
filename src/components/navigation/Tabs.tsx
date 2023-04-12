import * as tabs from "@zag-js/tabs";
import cx from "clsx";
import { useMachine, normalizeProps } from "@zag-js/react";
import { useId } from "react";

const data = [
  { value: "item-1", label: "Item one", content: "Item one content" },
  { value: "item-2", label: "Item two", content: "Item two content" },
  { value: "item-3", label: "Item three", content: "Item three content" },
];

export function Tabs() {
  const [state, send] = useMachine(tabs.machine({ id: useId() }));

  const api = tabs.connect(state, send, normalizeProps);

  return (
    <div {...api.rootProps}>
      <div {...api.tablistProps}>
        {data.map((item) => (
          <button {...api.getTriggerProps({ value: item.value })} key={item.value}>
            {item.label}
          </button>
        ))}
      </div>
      {data.map((item) => (
        <div {...api.getContentProps({ value: item.value })} key={item.value}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
