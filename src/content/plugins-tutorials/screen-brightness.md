---
title: "Using @capacitor-community/screen-brightness Package"
description: "Learn how to use the @capacitor-community/screen-brightness package to control screen brightness on iOS and Android devices."
created_at: "2021-10-15"
published: true
slug: screen-brightness
---

# Using @capacitor-community/screen-brightness Package

In this tutorial, we will learn how to use the @capacitor-community/screen-brightness package to control the screen brightness on iOS and Android devices.

## Installation

To get started, we need to install the @capacitor-community/screen-brightness package. Open your terminal and run the following command:

```bash
npm install @capacitor-community/screen-brightness
npx cap sync
```

## Configuration

There is no additional configuration required for this package.

## Usage

To use the @capacitor-community/screen-brightness package, we first need to import the `ScreenBrightness` object from the package. Add the following import statement to your TypeScript file:

```typescript
import { ScreenBrightness } from '@capacitor-community/screen-brightness';
```

### Set Brightness

To set the screen brightness, we can use the `setBrightness` method. The method takes a parameter `brightness` which is a number between 0 and 1 representing the brightness level. Here's an example of how to set the brightness to 0.5:

```typescript
const brightness = 0.5;
await ScreenBrightness.setBrightness({ brightness });
```

### Get Brightness

To get the current screen brightness, we can use the `getBrightness` method. The method returns an object with the `brightness` property indicating the current brightness level. Here's an example of how to get the current brightness:

```typescript
const { brightness: currentBrightness } = await ScreenBrightness.getBrightness();
console.log(currentBrightness);
```

## Conclusion

In this tutorial, we have learned how to use the @capacitor-community/screen-brightness package to control the screen brightness on iOS and Android devices. We covered the installation process, usage of the `setBrightness` method to set the brightness level, and the `getBrightness` method to retrieve the current brightness level.

Now you can integrate screen brightness control into your Capacitor app using the @capacitor-community/screen-brightness package. Enjoy exploring the possibilities it offers!

Remember to check the official documentation for more details and options: [GitHub Repository](https://github.com/capacitor-community/screen-brightness)