---
"title": "Using Capacitor Navigation Bar Plugin",
"description": "A tutorial on how to use the @hugotomazi/capacitor-navigation-bar package for navigation bar manipulation in Capacitor apps.",
"created_at": "2023-10-07",
"published": true,
"slug": "navigation-bar.git"
---

# Using Capacitor Navigation Bar Plugin

In this tutorial, we will walk through how to use the `@hugotomazi/capacitor-navigation-bar` package for navigation bar manipulation in Capacitor apps. This package allows you to show, hide, set colors, and adjust transparency of the navigation bar in your hybrid mobile applications.

## Installation

You can install the package via npm by running the following command in your project:

```bash
npm install @hugotomazi/capacitor-navigation-bar
npx cap sync
```

## Usage

### Displaying the Navigation Bar

To display the navigation bar, you can use the `show()` method provided by the package:

```typescript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

// Show the navigation bar
await NavigationBar.show();
```

### Hiding the Navigation Bar

Conversely, if you want to hide the navigation bar, you can use the `hide()` method:

```typescript
// Hide the navigation bar
await NavigationBar.hide();
```

### Setting Color

You can set the color of the navigation bar using the `setColor()` method. Here's an example of setting the color to red:

```typescript
await NavigationBar.setColor({ color: '#FF0000' });
```

### Adjusting Transparency

If you want to adjust the transparency of the navigation bar, you can use the `setTransparency()` method:

```typescript
// Set the transparency to 50%
await NavigationBar.setTransparency({ transparency: 0.5 });
```

## Event Listening

You can also listen for navigation bar events using the `addListener()` method. Here's an example of listening for visibility changes:

```typescript
NavigationBar.addListener('visibilityChange', (isVisible) => {
  if (isVisible) {
    console.log('Navigation bar is visible');
  } else {
    console.log('Navigation bar is hidden');
  }
});
```

This tutorial covers the basic usage of the `@hugotomazi/capacitor-navigation-bar` package. Feel free to explore the package further to leverage more features for navigation bar customization in your Capacitor apps.