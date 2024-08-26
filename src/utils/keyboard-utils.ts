/**
 * Compares the pressed key with the target key, ignoring case sensitivity.
 *
 * @param {string} pressedKey - The key that was pressed.
 * @param {string} targetKey - The target key to compare against.
 * @returns {boolean} - Returns true if the keys match (case insensitive), otherwise false.
 */
const isMatchingKey = (pressedKey: string, targetKey: string): boolean => {
  return pressedKey.toLowerCase() === targetKey.toLowerCase();
};

/**
 * Checks if the modifier keys (meta, ctrl, shift, alt) match the specified conditions.
 *
 * @param {KeyboardEvent} event - The keyboard event object containing the current state of modifier keys.
 * @param {boolean} metaKey - Whether the Meta key (Command on Mac, Windows key on Windows) is required.
 * @param {boolean} ctrlKey - Whether the Control key is required.
 * @param {boolean} shiftKey - Whether the Shift key is required.
 * @param {boolean} altKey - Whether the Alt key is required.
 * @returns {boolean} - Returns true if all specified modifier keys match the event's keys, otherwise false.
 */
const isMatchingModifiers = (
  event: KeyboardEvent,
  metaKey: boolean,
  ctrlKey: boolean,
  shiftKey: boolean,
  altKey: boolean
): boolean => {
  return (
    ((event.metaKey && metaKey) || (event.ctrlKey && ctrlKey)) &&
    event.shiftKey === shiftKey &&
    event.altKey === altKey
  );
};

export { isMatchingKey, isMatchingModifiers };
