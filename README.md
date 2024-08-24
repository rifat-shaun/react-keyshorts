# `react-keyshorts`

`react-keyshorts` is a lightweight React hook for managing keyboard shortcuts with ease. It allows you to bind specific key combinations to callback functions, supporting optional modifier keys such as Ctrl, Shift, Alt, and Meta. Ideal for enhancing user interactions and streamlining keyboard-based commands in your React applications.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

`react-keyshorts` is a powerful and flexible React hook designed to simplify the management of keyboard shortcuts in your React applications. With `react-keyshorts`, you can easily bind specific key combinations to functions, making it straightforward to implement keyboard-driven interactions and commands.

Key features of `react-keyshorts` include:

- **Customizable Shortcuts**: Define keyboard shortcuts with optional modifier keys (Ctrl, Shift, Alt, Meta) for precise control over user interactions.
- **Easy Integration**: Seamlessly integrate with your existing React components using a simple and intuitive API.
- **Dynamic Shortcuts**: Set up multiple shortcuts within the same component, or across different components, to handle various actions.
- **Default Prevention**: Optionally prevent default browser actions associated with keyboard events for better control.
  Whether you're building a complex application with numerous keyboard shortcuts or just need a few to enhance user experience, `react-keyshorts` provides a clean and efficient solution for handling keyboard interactions.

## Installation

To install the `react-keyshorts` package, you can use either npm or yarn. Choose the method that best fits your workflow:

Using npm
Run the following command in your terminal:

```bash
    npm install react-keyshorts
```

Using yarn
Alternatively, you can use yarn to add the package to your project:

```bash
    yarn add react-keyshorts
```

Once installed, you can start using react-keyshorts in your React application by importing the hook and integrating it into your components.

## Usage

To use the `react-keyshorts` package follow these steps:

Import the Hook

```jsx
import { useKeyboardShortcut } from "react-keyshorts";
```

Use the Hook in Your Component
Here's an example of using the hook:

```jsx
import React from "react";
import { useKeyboardShortcut } from "react-keyshorts";

const MyComponent = () => {
  // Define the callback function
  const handleShortcut = (event) => {
    alert("Shortcut triggered!");
  };

  // Use the hook with the desired options
  useKeyboardShortcut({
    key: "s", // Key to listen for
    callback: handleShortcut, // Function to call when the key is pressed
    ctrlKey: true, // Optional: Require Ctrl key to be pressed
    preventDefault: true, // Optional: Prevent default action for the shortcut
  });

  return (
    <div>
      <p>Press Ctrl+S to trigger the shortcut.</p>
    </div>
  );
};

export default MyComponent;
```

## Options

The `react-keyshorts` hook accepts an options object with the following properties:

- **key** (string): The key to listen for (e.g., 's', 'Enter'). 
- **callback** (function): The function to call when the shortcut is triggered. 
- **metaKey** (boolean, optional): Whether the Meta key (Command key on macOS) is required. 
- **ctrlKey** (boolean, optional): Whether the Ctrl key is required. 
- **shiftKey** (boolean, optional): Whether the Shift key is required. 
- **altKey** (boolean, optional): Whether the Alt key is required. 
- **preventDefault** (boolean, optional): Whether to prevent the default action for the shortcut.

## Examples
Basic Example
Bind a single keyboard shortcut with Ctrl key:

```jsx
import React from "react";
import { useKeyboardShortcut } from "react-keyshorts";

const BasicExample = () => {
  const handleShortcut = (event) => {
    console.log("Ctrl+S shortcut triggered!");
  };

  useKeyboardShortcut({
    key: "s",
    callback: handleShortcut,
    ctrlKey: true,
  });

  return (
    <div>
      <p>Press Ctrl+S to see the shortcut in action.</p>
    </div>
  );
};

export default BasicExample;
```

Multiple Shortcuts
Bind multiple shortcuts with different keys and modifiers:

```jsx
import React from "react";
import { useKeyboardShortcut } from "react-keyshorts";

const MultipleShortcutsExample = () => {
  const handleShortcut = (event) => {
    console.log("Shortcut activated!");
  };

  useKeyboardShortcut({
    key: "a",
    callback: handleShortcut,
    ctrlKey: true,
  });

  useKeyboardShortcut({
    key: "b",
    callback: handleShortcut,
    metaKey: true,
  });

  return (
    <div>
      <p>Press Ctrl+A or Command+B to trigger the shortcuts.</p>
    </div>
  );
};

export default MultipleShortcutsExample;
```

## Contributing
If you’d like to contribute to the development of this package, feel free to open issues or submit pull requests


## License
This package is licensed under the MIT License.