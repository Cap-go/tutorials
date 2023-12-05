---
title: "Using the capacitor-plugin-ios-webview-configurator"
description: "A tutorial on how to use the capacitor-plugin-ios-webview-configurator package"
created_at: "2022-03-15"
published: true
slug: "capacitor-plugin-ios-webview-configurator"
---

# Using the capacitor-plugin-ios-webview-configurator

In this tutorial, we will learn how to use the `capacitor-plugin-ios-webview-configurator` package to configure the WebView on iOS in a Capacitor project.

## Prerequisites

Before we begin, make sure you have the following set up:

- Capacitor project created (if not, run `npx cap init` to create a new Capacitor project)
- Node.js installed on your machine
- Xcode installed (for iOS development)

## Installing the package

To get started, open your Capacitor project in the terminal and run the following command to install the `capacitor-plugin-ios-webview-configurator` package:

```bash
npm install capacitor-plugin-ios-webview-configurator
```

## Configuring the WebView

1. Open your iOS project in Xcode by running the command:

```bash
npx cap open ios
```

2. In Xcode, navigate to the `AppDelegate.swift` file in the left sidebar.
3. Import the `CapacitorPluginIosWebviewConfigurator` module at the top of the file:

```swift
import CapacitorPluginIosWebviewConfigurator
```

4. Inside the `application(_:didFinishLaunchingWithOptions:)` function, add the following code to configure the WebView:

```swift
let webViewConfigurator = CapacitorPluginIosWebviewConfigurator()
webViewConfigurator.configureWebView()
```

5. Save the changes and close Xcode.

## Building and running the app

To build and run the app with the WebView configurations applied, run the following command in your terminal from the root directory of your Capacitor project:

```bash
npx cap run ios
```

This command will build the iOS app and launch the simulator. You should now see the WebView with the configurations applied.

## Conclusion

In this tutorial, we learned how to use the `capacitor-plugin-ios-webview-configurator` package to configure the WebView on iOS in a Capacitor project. By following the steps outlined in this tutorial, you should now have a better understanding of how to customize the WebView settings in your iOS app.

Remember to consult the package documentation and the official Capacitor documentation for more information and advanced usage.

Happy coding!

