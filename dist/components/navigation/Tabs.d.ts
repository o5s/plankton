import * as tabs from "@zag-js/tabs";
export declare function Tabs({ items, part, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element;
export type TabsProps = Pick<tabs.Context, "onChange" | "onFocus" | "value"> & {
    items: TabItem[];
    part?: {
        content?: {
            className?: string;
        };
        root?: {
            className?: string;
        };
        tablist?: {
            className?: string;
        };
        trigger?: {
            className?: string;
        };
    };
};
type TabItem = {
    title: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
    value: string;
};
export {};
