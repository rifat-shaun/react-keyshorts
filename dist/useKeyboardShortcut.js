import { useEffect, useRef } from "react";
export default function useKeyboardShortcut({ key, callback, metaKey = false, ctrlKey = false, shiftKey = false, altKey = false, preventDefault = true, }) {
    const callbackRef = useRef(callback);
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    useEffect(() => {
        const handleKeyPress = (event) => {
            const { key: pressedKey, metaKey: pressedMetaKey, ctrlKey: pressedCtrlKey, shiftKey: pressedShiftKey, altKey: pressedAltKey, } = event;
            if (pressedKey.toLowerCase() === key.toLowerCase() &&
                ((pressedMetaKey && metaKey) || (pressedCtrlKey && ctrlKey)) &&
                pressedShiftKey === shiftKey &&
                pressedAltKey === altKey) {
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
