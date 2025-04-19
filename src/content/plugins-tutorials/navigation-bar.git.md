---
"title": "Using Capacitor Navigation Bar Plugin"
"description": "Tutorial on how to use @hugotomazi/capacitor-navigation-bar package for Navigation Bar manipulation in Capacitor apps"
"created_at": "2022-01-02"
"published": true
"slug": "navigation-bar-git"
---

# Using Capacitor Navigation Bar Plugin

In this tutorial, we will learn how to use the `@hugotomazi/capacitor-navigation-bar` package for Navigation Bar manipulation in Capacitor apps.

## Installation

To get started, you need to install the package using npm. Run the following command in your project directory:

```bash
npm install @hugotomazi/capacitor-navigation-bar
npx cap sync
```

## Usage

### Display the Navigation Bar

To display the navigation bar, you can use the `show()` method:

```javascript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

// Display the navigation bar
async function showNavigationBar() {
  await NavigationBar.show();
}
```

### Hide the Navigation Bar

To hide the navigation bar, you can use the `hide()` method:

```javascript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

// Hide the navigation bar
async function hideNavigationBar() {
  await NavigationBar.hide();
}
```

### Set Navigation Bar Color

You can set the color of the navigation bar by specifying the color in RGB values. Use the `setColor()` method for this:

```javascript
import { Plugins } from '@capacitor/core';

const { NavigationBar } = Plugins;

// Set the color of the navigation bar
async function setNavigationBarColor() {
  await NavigationBar.setColor({ color: '#ff0000' });
}
```

This concludes our tutorial on using the Capacitor Navigation Bar Plugin. You can explore more functionalities such as setting transparency, getting the color, and adding event listeners based on your application requirements.