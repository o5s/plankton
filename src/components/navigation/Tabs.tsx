import * as tabs from "@zag-js/tabs";
import cx from "clsx";
import { useId } from "react";
import { useMachine, normalizeProps } from "@zag-js/react";

export function Tabs({ items, part, ...props }: TabsProps) {
  const [state, send] = useMachine(tabs.machine({ id: useId() }), { context: props });
  const api = tabs.connect(state, send, normalizeProps);

  return (
    <div {...api.rootProps} className={part?.root?.className}>
      <div {...api.tablistProps} className={cx("tabs", part?.tablist?.className)}>
        {items.map((item) => (
          <button
            {...api.getTriggerProps({ disabled: item.disabled, value: item.value })}
            className={cx(
              "tab",
              api.value === item.value && "tab-active",
              item.disabled && "tab-disabled",
              part?.trigger?.className,
            )}
            key={item.value}
          >
            {item.title}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          {...api.getContentProps({ value: item.value })}
          className={part?.content?.className}
          key={item.value}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
}
export type TabsProps = Pick<tabs.Context, "onChange" | "onFocus" | "value"> & {
  items: TabItem[];
  part?: {
    content?: { className?: string };
    root?: { className?: string };
    tablist?: { className?: string };
    trigger?: { className?: string };
  };
};

type TabItem = {
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  value: string;
};
