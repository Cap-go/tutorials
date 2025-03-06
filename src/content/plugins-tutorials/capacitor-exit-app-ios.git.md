---
"title": "Using capacitor-exit-app-ios Package Tutorial"
"description": "A tutorial on how to use the capacitor-exit-app-ios package to force quit an app on iOS using Capacitor."
"created_at": "2022-01-25"
"published": true
"slug": "capacitor-exit-app-ios.git"
---

# Using capacitor-exit-app-ios Package Tutorial

This tutorial will guide you through using the `capacitor-exit-app-ios` package to force quit an app on iOS using Capacitor.

## Getting Started

First, make sure you have access to `capacitor-exit-app-ios` package. You can follow the installation steps provided in the [GitHub repository](https://github.com/tienmanh94hbk/capacitor-exit-app-ios) of the package.

### iOS Setup

1. Install CocoaPods:
   ```
   sudo gem install cocoapods
   ```
2. Create a new Capacitor project:
   ```
   ionic start my-cap-app --capacitor
   ```
3. Add iOS platform to your project:
   ```
   cd my-cap-app
   mkdir www && touch www/index.html
   npx cap add ios
   ```
4. Install `capacitor-exit-app-ios` package:
   ```
   npm i capacitor-exit-app-ios
   ```
5. Sync the iOS platform with Capacitor:
   ```
   npx cap sync ios
   ```
6. Open the project in Xcode:
   ```
   npx cap open ios
   ```
7. Sign your app in Xcode under the General tab.

## Usage

You can now use the `killApp()` method provided by the `capacitor-exit-app-ios` package to force quit the app on iOS. Here is an example of how to use it in your code:

```javascript
import { Plugins } from '@capacitor/core';
const { ExitAppIosPlugin } = Plugins;

if (this.platform.is('android')) {
    navigator['app'].exitApp();
} else {
    ExitAppIosPlugin.killApp().then();
}
```

Remember that this plugin may not be allowed upon Apple review, as it's meant to force quit the app, which goes against usual app behavior.

## Example

To run the provided example, you can use the following command:

```bash
npm start
```

## Conclusion

In this tutorial, you learned how to integrate and use the `capacitor-exit-app-ios` package to force quit an iOS app using Capacitor. Make sure to handle the usage of this plugin carefully, as it may affect user experience and compliance with Apple's guidelines.

Cheers to building better Capacitor apps! 🍻

Follow the package creator on [Facebook](https://www.facebook.com/manh.do.186).

This tutorial was created with the help of `@capacitor/create-app`.

If you have any questions or need further assistance, feel free to reach out!

---