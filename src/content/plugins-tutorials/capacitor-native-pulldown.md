# Tutorial: Using capacitor-native-pulldown

---

title: "Using capacitor-native-pulldown"
description: "This tutorial provides a step-by-step guide on how to use the capacitor-native-pulldown package in your Capacitor app."
created_at: "2022-01-31"
published: true
slug: capacitor-native-pulldown

---

In this tutorial, we will walk you through the process of using the `capacitor-native-pulldown` package in your Capacitor app. This package allows you to implement native pull-to-refresh functionality in your app, providing a seamless user experience.

## Prerequisites

Before we start, make sure you have the following installed:

- Capacitor CLI: You can install it globally by running `npm install -g @capacitor/cli`.
- Capacitor project: If you don't have an existing Capacitor project, create one using the command `npx @capacitor/create`.

## Step 1: Install the `capacitor-native-pulldown` package

To begin, open your Capacitor project in a code editor and navigate to the project's root directory in the terminal. Then, run the following command to install the `capacitor-native-pulldown` package:

```bash
npm install capacitor-native-pulldown
```

This will add the package as a dependency in your project's `package.json` file and install it in the `node_modules` directory.

## Step 2: Add the platform-specific code

Since the `capacitor-native-pulldown` package uses native APIs, you need to add the necessary platform-specific code to your project. Here are the instructions for iOS and Android:

### iOS

Open your project in Xcode and locate the `AppDelegate.swift` file. Add the following import statement at the top of the file:

```swift
import CapacitorNativePulldown
```

Then, inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line to register the plugin:

```swift
CapacitorBridge.registerPlugin(CapacitorNativePulldown.self)
```

### Android

Open your project in Android Studio and locate the `MainActivity.java` file. Add the following import statement at the top of the file:

```java
import com.credera.capacitor.nativepulldown.CapacitorNativePulldown;
```

Then, inside the `init()` method, add the following line to register the plugin:

```java
registerPlugin(CapacitorNativePulldown.class);
```

## Step 3: Implement pull-to-refresh functionality

Now that the package is installed and the platform-specific code is added, you can implement pull-to-refresh functionality in your app. Here's how you can do it:

1. Open the page or component where you want to add pull-to-refresh functionality.

2. Import the `Plugins` object from Capacitor and the `CapacitorNativePulldownPlugin` from the `capacitor-native-pulldown` package:

```typescript
import { Plugins } from '@capacitor/core';
import { CapacitorNativePulldownPlugin } from 'capacitor-native-pulldown';
```

3. Inside your page or component class, add a property to hold the reference to the pulldown plugin:

```typescript
private pulldownPlugin: CapacitorNativePulldownPlugin;
```

4. In the `ngOnInit()` or equivalent lifecycle method, initialize the pulldown plugin and attach an event listener for the `pulldownRefresh` event:

```typescript
ngOnInit() {
  this.pulldownPlugin = Plugins.CapacitorNativePulldown as CapacitorNativePulldownPlugin;
  this.pulldownPlugin.addListener('pulldownRefresh', this.handlePulldownRefresh);
}
```

5. Implement the `handlePulldownRefresh()` method to perform the necessary actions when the pull-to-refresh gesture is triggered:

```typescript
handlePulldownRefresh() {
  // Perform the refresh action here, such as fetching new data from an API
  
  // Once the refresh is complete, call the finishRefreshing() method to stop the loading animation
  this.pulldownPlugin.finishRefreshing();
}
```

6. Finally, in the template file for your page or component, add the necessary markup and styling to display the pull-to-refresh feature:

```html
<ion-content (ionRefresh)="pulldownPlugin.beginRefreshing()"></ion-content>
```

That's it! You have successfully implemented pull-to-refresh functionality in your Capacitor app using the `capacitor-native-pulldown` package.

## Conclusion

In this tutorial, you have learned how to use the `capacitor-native-pulldown` package to implement native pull-to-refresh functionality in your Capacitor app. By following the steps outlined above, you can enhance the user experience of your app by adding this seamless and intuitive feature.

Remember to check the official documentation of `capacitor-native-pulldown` for more advanced usage and customization options.

Happy coding!