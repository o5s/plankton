import * as select from "@zag-js/select";
export declare const Select: React.FC<SelectProps>;
export type SelectProps = Pick<select.Context, "disabled" | "invalid" | "name" | "onChange" | "onClose" | "onHighlight" | "onOpen" | "readOnly"> & {
    options: SelectOption[];
    part?: {
        content?: {
            className?: string;
        };
        option?: {
            className?: string;
        };
        trigger?: {
            className?: string;
        };
    };
    placeholder?: string;
};
type SelectOption = {
    disabled?: boolean;
    label: string;
    value: string;
};
export {};
