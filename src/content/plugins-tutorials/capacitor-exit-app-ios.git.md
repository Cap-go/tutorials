---
"title": "How to Use capacitor-exit-app-ios Plugin"
"description": "Step-by-step guide on using the capacitor-exit-app-ios plugin in your Capacitor project to force quit the app on iOS."
"created_at": "2023-10-04"
"published": true
"slug": "capacitor-exit-app-ios.git"
---

# Using capacitor-exit-app-ios Plugin

This tutorial will guide you through the process of integrating and utilizing the `capacitor-exit-app-ios` plugin in your Capacitor project. This plugin allows you to force quit the app on iOS. Please note that this plugin may not be allowed upon Apple's review.

## Installation

To get started with the `capacitor-exit-app-ios` plugin, follow these steps:

1. Install the plugin using npm:

```bash
npm install capacitor-exit-app-ios
```

2. Once the installation is complete, sync your Capacitor project:

```bash
npx cap sync ios
```

3. Open the iOS project in Xcode:

```bash
npx cap open ios
```

## Usage

In your project, import the plugin and call the `killApp()` method:

```javascript
import { Plugins } from '@capacitor/core';
const { ExitAppIosPlugin } = Plugins;

if (this.platform.is('android')) {
  navigator['app'].exitApp();
} else {
  ExitAppIosPlugin.killApp().then();
}
```

By executing this code snippet, you can force quit the app whenever necessary.

## Important Note

Remember that using this plugin may have implications during the Apple review process.

## Conclusion

In this tutorial, you learned how to incorporate the `capacitor-exit-app-ios` plugin into your Capacitor project to force quit the app on iOS. This functionality can be useful in specific scenarios.

Feel free to explore the plugin's [GitHub repository](https://github.com/tienmanh94hbk/capacitor-exit-app-ios) for more information and updates.
