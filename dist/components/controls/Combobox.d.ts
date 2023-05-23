import * as combobox from "@zag-js/combobox";
export declare function Combobox<T, V>({ children, displayText, getKey, getValue, items, onSelect, part, value, ...props }: ComboboxProps<T, V>): import("react/jsx-runtime").JSX.Element;
export type ComboboxProps<T, V> = Pick<combobox.Context, "autoFocus" | "disabled" | "invalid" | "name" | "onInputChange" | "openOnClick" | "placeholder" | "readOnly"> & {
    children?: (item: T) => React.ReactNode;
    displayText: (item: T) => string;
    getKey: (item: V) => string;
    getValue: (item: T) => V;
    items: T[];
    onSelect?: (item?: V) => void;
    part?: {
        content?: {
            className?: string;
        };
        control?: {
            className?: string;
        };
        input?: {
            className?: string;
        };
        option?: {
            className?: string;
        };
        trigger?: {
            className?: string;
        };
    };
    value?: V;
};
