---
title: "Using @wisdomgarden/capacitor-exit-app-ios Plugin"
description: "This tutorial provides step-by-step instructions on how to use the @wisdomgarden/capacitor-exit-app-ios package to force quit an iOS app."
created_at: "2022-08-10"
published: true
slug: "capacitor-exit-app-ios"
---

# Using @wisdomgarden/capacitor-exit-app-ios Plugin

The @wisdomgarden/capacitor-exit-app-ios package is a Capacitor plugin that allows you to force quit an iOS app. This can be useful in scenarios where you need to programmatically exit the app on iOS devices.

Please note that this plugin may not be allowed upon Apple review. Keep this in mind when considering using it in your app.

## Installation

To use the @wisdomgarden/capacitor-exit-app-ios package, follow these steps:

1. Install the package using npm or yarn:

   ```bash
   npm install @wisdomgarden/capacitor-exit-app-ios
   ```

2. Sync the Capacitor project with the iOS platform:

   ```bash
   npx cap sync ios
   ```

3. Open the iOS project in Xcode:

   ```bash
   npx cap open ios
   ```

4. Sign your app in Xcode. This can be done in the "General" tab of your app's target settings.

## Usage

Once you have installed the package and set up your iOS project, you can use the `killApp()` method to force quit the app.

Here's an example of how to use the plugin in your code:

```typescript
import { Plugins } from '@capacitor/core';
const { ExitAppIosPlugin } = Plugins;

// ...

if (this.platform.is('android')) {
  navigator['app'].exitApp();
} else {
  ExitAppIosPlugin.killApp().then();
}
```

In the example above, we first check if the platform is Android. If it is, we use the `exitApp()` method from the `navigator['app']` object to exit the app. If the platform is iOS, we call the `killApp()` method from the `ExitAppIosPlugin` plugin to force quit the app.

## Conclusion

In this tutorial, you learned how to use the @wisdomgarden/capacitor-exit-app-ios package to force quit an iOS app. You installed the package, set up your iOS project, and used the `killApp()` method to exit the app.

Keep in mind that Apple may not allow this plugin during the app review process. Make sure to consider the implications before using it in your app.

For more information, you can refer to the [GitHub repository](https://github.com/tienmanh94hbk/capacitor-exit-app-ios) of the @wisdomgarden/capacitor-exit-app-ios package.

Happy coding! 🚀