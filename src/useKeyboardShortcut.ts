import { useEffect, useRef } from "react";
import { isMatchingKey, isMatchingModifiers } from "./utils/keyboard-utils";

export interface IUseKeyboardShortcutType {
  key: string;
  callback: (event: KeyboardEvent) => void;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  preventDefault?: boolean;
}

export default function useKeyboardShortcut({
  key,
  callback,
  metaKey = false,
  ctrlKey = false,
  shiftKey = false,
  altKey = false,
  preventDefault = true,
}: IUseKeyboardShortcutType) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isMatchingKey(event.key, key) && isMatchingModifiers(event, metaKey, ctrlKey, shiftKey, altKey)) {
        if (preventDefault) {
          event.preventDefault();
        }
        callbackRef.current(event);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [key, metaKey, ctrlKey, shiftKey, altKey, preventDefault]);
}