---
title: "Using @capgo/home-indicator Package"
description: "This tutorial will guide you through the process of using the @capgo/home-indicator package to hide and show the home button indicator in your Capacitor app."
created_at: "2022-09-30"
published: true
slug: home-indicator
---

# Using @capgo/home-indicator Package

In this tutorial, we will learn how to use the @capgo/home-indicator package to hide and show the home button indicator in your Capacitor app. This package provides a simple API to interact with the home indicator and customize its behavior.

## Installation

To get started, we need to install the @capgo/home-indicator package. Open your terminal and navigate to the root of your Capacitor project. Run the following command:

```bash
npm install @capgo/home-indicator
npx cap sync
```

This will install the package and synchronize any necessary changes with your Capacitor project.

## Usage

Once the package is installed, we can start using its API methods to control the home button indicator.

### Import the Package

In your app's main file (e.g., `app.ts` or `main.ts`), import the @capgo/home-indicator package:

```typescript
import { HomeIndicator } from '@capgo/home-indicator';
```

### Hide the Home Indicator

To hide the home button indicator, use the `hide()` method provided by the package:

```typescript
HomeIndicator.hide();
```

### Show the Home Indicator

To show the home button indicator again, use the `show()` method:

```typescript
HomeIndicator.show();
```

### Get the Home Indicator Status

You can also check the current status of the home button indicator by using the `isHidden()` method:

```typescript
const status = await HomeIndicator.isHidden();
console.log('Home Indicator is hidden:', status.hidden);
```

This method returns a promise that resolves to an object with a `hidden` property indicating whether the home button indicator is currently hidden or not.

### Get the Plugin Version

If you need to check the version of the @capgo/home-indicator plugin, you can use the `getPluginVersion()` method:

```typescript
const version = await HomeIndicator.getPluginVersion();
console.log('Home Indicator plugin version:', version.version);
```

This method also returns a promise that resolves to an object with a `version` property containing the plugin version.

## CSS Variables

The @capgo/home-indicator package injects a CSS variable called `--safe-area-inset-bottom` for Android. You can use this variable to ensure that your content is not hidden by the home indicator. It is especially useful if you have enabled the real fullscreen mode on Android. To utilize this CSS variable, add the following code to your styles:

```css
.my-element {
  margin-bottom: var(--safe-area-inset-bottom);
}
```

## Conclusion

In this tutorial, we have learned how to use the @capgo/home-indicator package to control the home button indicator in Capacitor apps. We covered the installation process, usage of the provided API methods, and accessing the plugin version. We also explored the CSS variables that can be used to ensure content visibility in the presence of the home indicator.

By using the @capgo/home-indicator package, you can enhance the user experience of your Capacitor app by hiding or showing the home button indicator as needed.