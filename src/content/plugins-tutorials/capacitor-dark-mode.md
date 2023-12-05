---
title: "Using @aparajita/capacitor-dark-mode package"
description: "A tutorial on how to use the @aparajita/capacitor-dark-mode package to enable and control dark mode in your Ionic app."
created_at: "2022-07-15"
published: true
slug: capacitor-dark-mode
---

# Using @aparajita/capacitor-dark-mode package

In this tutorial, we will learn how to use the @aparajita/capacitor-dark-mode package to enable and control dark mode in your Ionic app. 

## Installation

To get started, you need to install the @aparajita/capacitor-dark-mode package in your Ionic app. Open your terminal and run the following command:

```shell
pnpm add @aparajita/capacitor-dark-mode
```

This will install the package and its dependencies in your app.

## Configuration

After installing the package, you need to provide a dark mode CSS in your app. The @aparajita/capacitor-dark-mode package adds or removes a CSS class to the `body` element to indicate the dark mode. By default, the class is `dark`, but you can configure it to be whatever you want.

> 👉🏽 **Note:** If you are using Tailwind’s dark mode support, set `darkMode: 'class'` in your Tailwind config file.

## Initializing the Plugin

Once the package is installed and the CSS is configured, you need to initialize the @aparajita/capacitor-dark-mode plugin. In your app entry file (e.g., `app.module.ts`), import the `DarkMode` class from the package and add it to the `plugins` array in the `CapacitorPlugins` section.

```typescript
import { DarkMode } from '@aparajita/capacitor-dark-mode';

...

CapacitorPlugins: [
  {
    name: 'DarkMode',
    implementation: DarkMode,
    platforms: ['web', 'ios', 'android']
  },
  // Other plugin imports
]
```

## Enabling Dark Mode

To enable dark mode in your app, you can use the `enableDarkMode()` method provided by the @aparajita/capacitor-dark-mode package. Call this method when you want to switch to dark mode.

```typescript
import { DarkMode } from '@aparajita/capacitor-dark-mode';

...

async function enableDarkMode() {
  await DarkMode.enableDarkMode();
}
```

## Controlling Dark Mode

You can also programmatically control the dark mode in your app using the `isDarkMode()` and `toggleDarkMode()` methods provided by the @aparajita/capacitor-dark-mode package.

```typescript
import { DarkMode } from '@aparajita/capacitor-dark-mode';

...

async function checkDarkMode() {
  const isDarkMode = await DarkMode.isDarkMode();
  
  if (isDarkMode) {
    console.log('Dark mode is enabled');
  } else {
    console.log('Dark mode is disabled');
  }
}

async function toggleMode() {
  await DarkMode.toggleDarkMode();
}
```

## Listening for Dark Mode Changes

The @aparajita/capacitor-dark-mode package also provides the ability to register listeners for system dark mode changes. You can use the `addListener()` method to listen for changes and perform actions accordingly.

```typescript
import { DarkMode } from '@aparajita/capacitor-dark-mode';

...

function registerDarkModeListener() {
  DarkMode.addListener((darkMode) => {
    if (darkMode.value) {
      console.log('Dark mode is enabled');
    } else {
      console.log('Dark mode is disabled');
    }
  });
}
```

With the @aparajita/capacitor-dark-mode package, you can easily enable and control dark mode in your Ionic app across all platforms. It provides a uniform API and supports automatic dark mode detection, user dark mode switching, custom dark mode preference storage, and more.

Now you know how to use the @aparajita/capacitor-dark-mode package to implement dark mode in your Ionic app. Happy coding!