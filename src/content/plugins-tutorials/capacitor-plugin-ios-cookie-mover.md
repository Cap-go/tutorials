---
title: "Using @coeps/capacitor-plugin-ios-cookie-mover Package"
description: "A tutorial on how to use the @coeps/capacitor-plugin-ios-cookie-mover package in Capacitor."
created_at: "2021-11-15"
published: true
slug: "capacitor-plugin-ios-cookie-mover"
---

# Using @coeps/capacitor-plugin-ios-cookie-mover Package

This tutorial will guide you through the process of using the @coeps/capacitor-plugin-ios-cookie-mover package in your Capacitor project.

## Installation

To get started, make sure you have Capacitor installed in your project. If not, you can install it by running the following command:

```
npm install @capacitor/cli
```

Once Capacitor is installed, you can add the @coeps/capacitor-plugin-ios-cookie-mover package by running the following command:

```
npm install @coeps/capacitor-plugin-ios-cookie-mover
```

## Configuration

After installing the package, you need to configure it in your Capacitor project. Open the `capacitor.config.json` file in the root of your project and add the following entry under the `plugins` section:

```json
"CookieMover": {
  "enableCookies": true
}
```

## Usage

Once the package is installed and configured, you can use its functionality in your Capacitor project. The @coeps/capacitor-plugin-ios-cookie-mover package provides methods to handle cookies in iOS.

### Move Cookies

To move cookies from the web view to HTTP requests in iOS, you can use the `moveCookies` method. This method takes no arguments and returns a Promise.

```typescript
import { Plugins } from '@capacitor/core';

const { CookieMover } = Plugins;

async function moveCookies(): Promise<void> {
  await CookieMover.moveCookies();
}
```

### Clear Cookies

To clear all cookies in iOS, you can use the `clearCookies` method. This method takes no arguments and returns a Promise.

```typescript
import { Plugins } from '@capacitor/core';

const { CookieMover } = Plugins;

async function clearCookies(): Promise<void> {
  await CookieMover.clearCookies();
}
```

### Check If Cookies Are Enabled

You can also check if cookies are enabled in iOS by using the `areCookiesEnabled` method. This method takes no arguments and returns a Promise containing a boolean value.

```typescript
import { Plugins } from '@capacitor/core';

const { CookieMover } = Plugins;

async function checkCookiesEnabled(): Promise<boolean> {
  const areEnabled = await CookieMover.areCookiesEnabled();
  return areEnabled;
}
```

## Conclusion

In this tutorial, you learned how to install, configure, and use the @coeps/capacitor-plugin-ios-cookie-mover package in your Capacitor project. You can now handle cookies in iOS with ease. Happy coding!

Please feel free to reference the official documentation of the @coeps/capacitor-plugin-ios-cookie-mover package for more advanced usage and additional features.

