import * as combobox from "@zag-js/combobox";
export declare function Combobox({ children, onSelect, options, part, value, ...props }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export type ComboboxProps = Pick<combobox.Context, "autoFocus" | "disabled" | "invalid" | "name" | "onInputChange" | "openOnClick" | "placeholder" | "readOnly"> & {
    children?: (option: ComboboxOption) => React.ReactNode;
    onSelect?: (details: {
        value?: string;
    }) => void;
    options: ComboboxOption[];
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
    value?: string;
};
type ComboboxOption = {
    label: string;
    title?: string;
    value: string;
};
export {};
