import * as dialog from "@zag-js/dialog";
export declare const Modal: React.FC<ModalProps>;
export type ModalProps = Pick<dialog.Context, "closeOnEsc" | "closeOnOutsideClick" | "modal" | "onClose" | "onEsc" | "onOpen" | "onOutsideClick" | "open" | "preventScroll" | "role"> & {
    children: React.ReactNode;
    trigger: (props: JSX.IntrinsicElements["button"]) => React.ReactNode;
};
