---
title: "Using the Uirtusit Package"
description: "A tutorial on how to use the Uirtusit package for Capacitor plugins"
created_at: "2021-10-20"
published: true
slug: "applesignincapacitorplugin"
---

# Using the Uirtusit Package

In this tutorial, we will learn how to use the Uirtusit package in Capacitor plugins. The Uirtusit package provides a set of utilities for working with user interfaces in Capacitor plugins.

## Installation

To get started, make sure you have Capacitor installed globally on your machine. You can install it using the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Once Capacitor is installed, you can proceed with installing the Uirtusit package in your project:

```bash
npm install uirtusit
```

## Usage

Once the Uirtusit package is installed, you can import and use its utilities in your Capacitor plugin code.

### Example 1: Creating a Button

Here's an example of how to create a button using the Uirtusit package:

```typescript
import { Uirtusit } from 'uirtusit';

...

const button = Uirtusit.createButton('Click me', () => {
  console.log('Button clicked');
});

// Add the button to the DOM
document.body.appendChild(button);
```

In the above example, we import the `Uirtusit` object from the `uirtusit` package. We then use the `createButton` method to create a button with the label "Click me" and an event listener that logs a message when the button is clicked. Finally, we add the button to the DOM by appending it to the `document.body`.

### Example 2: Styling a Button

The Uirtusit package also provides utilities for easily styling UI elements. Here's an example of how to style a button using the Uirtusit package:

```typescript
import { Uirtusit } from 'uirtusit';

...

const button = Uirtusit.createButton('Click me', () => {
  console.log('Button clicked');
});

// Apply styles to the button
Uirtusit.setStyle(button, {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
});

// Add the button to the DOM
document.body.appendChild(button);
```

In the above example, we use the `setStyle` method from the `Uirtusit` object to apply custom styles to the button. We pass an object with CSS properties and values to define the styles. In this case, we set the background color to blue, text color to white, padding to 10 pixels, and border radius to 5 pixels.

## Conclusion

In this tutorial, we learned how to use the Uirtusit package in Capacitor plugins. We saw how to create buttons and apply custom styles to them using the utilities provided by the Uirtusit package. With these tools, you can enhance the user interface of your Capacitor plugins and create rich and interactive experiences for your users.

Remember to refer to the Uirtusit documentation for more information on the available utilities and their usage.

Happy coding!