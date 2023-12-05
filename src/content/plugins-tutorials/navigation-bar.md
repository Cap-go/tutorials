---
title: "Using @mauricewegner/capacitor-navigation-bar Package"
description: "A tutorial on how to use the @mauricewegner/capacitor-navigation-bar package to manipulate the navigation bar in your Capacitor app."
created_at: "2021-10-13"
published: true
slug: "navigation-bar"
---

# Using @mauricewegner/capacitor-navigation-bar Package

In this tutorial, we will learn how to use the `@mauricewegner/capacitor-navigation-bar` package to manipulate the navigation bar in your Capacitor app. The navigation bar is the bar at the top or the bottom of the screen that contains app navigation elements such as the back button, title, and icons.

## Installation

To get started, we need to install the `@mauricewegner/capacitor-navigation-bar` package. Open your terminal and run the following command:

```bash
npm install @mauricewegner/capacitor-navigation-bar
```

Next, we need to sync the Capacitor project to update the native dependencies. Run the following command:

```bash
npx cap sync
```

## Usage

### 1. Import the Plugin

In your TypeScript or JavaScript file where you want to use the navigation bar functionality, import the plugin like this:

```typescript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;
```

### 2. Show or Hide the Navigation Bar

To show or hide the navigation bar, you can use the `show()` and `hide()` methods provided by the plugin. Here's an example:

```typescript
// Show the navigation bar
await NavigationBar.show();

// Hide the navigation bar
await NavigationBar.hide();
```

### 3. Customize the Navigation Bar Color

You can also customize the color of the navigation bar using the `setColor()` method. This method accepts an options object with the following properties:

- `color`: The color of the navigation bar in CSS color format (e.g., "#FF0000" for red).
- `backgroundColor`: The background color of the navigation bar in CSS color format.
- `isDark`: A boolean value indicating whether to use dark or light content on the navigation bar.

Example usage:

```typescript
await NavigationBar.setColor({
  color: "#FFFFFF", // White color
  backgroundColor: "#000000", // Black background color
  isDark: false, // Use light content
});
```

### 4. Get the Current Navigation Bar Color

If you want to retrieve the current color of the navigation bar, you can use the `getColor()` method. This method returns an object with the `color` and `backgroundColor` properties representing the current color values.

Example usage:

```typescript
const { color, backgroundColor } = await NavigationBar.getColor();
console.log("Current color:", color);
console.log("Current background color:", backgroundColor);
```

### 5. Listen for Navigation Bar Events

The `@mauricewegner/capacitor-navigation-bar` package also provides event listeners that you can use to detect when the navigation bar visibility or color changes. You can add event listeners using the `addListener()` method.

Here's an example of how to listen for the navigation bar visibility change event:

```typescript
// Add an event listener for navigation bar visibility change
const listener = NavigationBar.addListener("visibilityChange", (isVisible) => {
  console.log("Navigation bar visibility changed:", isVisible);
});

// Remove the event listener when you no longer need it
listener.remove();
```

Similarly, you can add event listeners for color change events:

```typescript
// Add an event listener for navigation bar color change
const listener = NavigationBar.addListener("colorChange", (colorInfo) => {
  console.log("Navigation bar color changed:", colorInfo);
});

// Remove the event listener when you no longer need it
listener.remove();
```

## Conclusion

In this tutorial, we have learned how to use the `@mauricewegner/capacitor-navigation-bar` package to manipulate the navigation bar in a Capacitor app. We covered how to show or hide the navigation bar, customize its color, retrieve the current color, and listen for visibility and color change events.

By utilizing the capabilities provided by this package, you can create a more immersive and interactive user experience in your Capacitor app by controlling the navigation bar according to your app's specific requirements.