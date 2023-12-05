---
title: "Using Capacitor Dark Mode Package"
description: "In this tutorial, we will learn how to use the capacitor-dark-mode package to enable and control dark mode in an Ionic app."
created_at: "2021-10-21"
published: true
slug: ioniccapacitordarkmode
---

# Using Capacitor Dark Mode Package

In this tutorial, we will learn how to use the capacitor-dark-mode package to enable and control dark mode in an Ionic app. The capacitor-dark-mode package is a complete dark mode solution for Ionic web, iOS, and Android, providing a uniform API for enabling and controlling dark mode across all platforms.

## Installation

To get started, we need to install the capacitor-dark-mode package in our Ionic app. 

1. Open your terminal and navigate to your project directory.

2. Run the following command to install the package using npm:

   ```
   npm install @aparajita/capacitor-dark-mode
   ```

## Configuration

Once the package is installed, we need to configure our app to use dark mode.

1. Add a dark mode CSS class to your app's CSS file. By default, the class is `dark`, but you can customize it to your liking.

   ```css
   /* app.css */
   
   /* Default styles */
   
   body.dark {
     /* Dark mode styles */
   }
   ```

2. Initialize the capacitor-dark-mode plugin in your app. 

   ```typescript
   import { DarkMode } from '@aparajita/capacitor-dark-mode';
   
   const darkMode = new DarkMode();
   
   darkMode.initialize(); // Initialize the plugin
   ```

## Usage

Now that we have installed and configured the capacitor-dark-mode package, we can start using it in our Ionic app.

### Enable Dark Mode

To enable dark mode, we can use the `enableDarkMode` method of the DarkMode class.

```typescript
darkMode.enableDarkMode();
```

This will add the `dark` class to the `body` element, applying the dark mode styles defined in our CSS.

### Disable Dark Mode

If we want to disable dark mode, we can use the `disableDarkMode` method.

```typescript
darkMode.disableDarkMode();
```

This will remove the `dark` class from the `body` element, reverting back to the default styles.

### Check Dark Mode Status

We can also check the current dark mode status using the `isDarkMode` method.

```typescript
const isDarkMode = await darkMode.isDarkMode();
console.log(isDarkMode); // true if dark mode is enabled, false otherwise
```

### Listen for Dark Mode Changes

If we want to listen for dark mode changes and perform certain actions when the mode changes, we can use the `addListener` method.

```typescript
darkMode.addListener('darkModeChange', (isDarkMode) => {
  console.log('Dark mode change:', isDarkMode);
  // Perform actions based on the new dark mode status
});
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-dark-mode package to enable and control dark mode in an Ionic app. We have covered the installation process, configuration steps, and how to use the package to enable and disable dark mode, check the status, and listen for changes. Utilizing the capacitor-dark-mode package, we can provide a consistent dark mode experience across all platforms in our Ionic app.