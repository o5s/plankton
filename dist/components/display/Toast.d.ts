import * as toast from "@zag-js/toast";
export type ToastProps = {
    actor: toast.Service;
};
export declare const useToast: () => ToastApi;
export declare const ToastProvider: React.FC<ToastProviderProps>;
export type ToastProviderProps = {
    children: React.ReactNode;
};
type ToastApi = ReturnType<(typeof toast)["group"]["connect"]>;
export {};
