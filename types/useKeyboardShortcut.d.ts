export interface IUseKeyboardShortcutType {
    key: string;
    callback: (event: KeyboardEvent) => void;
    metaKey?: boolean;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    preventDefault?: boolean;
}
export default function useKeyboardShortcut({ key, callback, metaKey, ctrlKey, shiftKey, altKey, preventDefault, }: IUseKeyboardShortcutType): void;
