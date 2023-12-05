---
title: "Using capacitor-marketingname-plugin"
description: "Learn how to use the capacitor-marketingname-plugin package to add custom app names for iOS devices in Capacitor"
created_at: "2021-10-01"
published: true
slug: "capacitor-iphone-marketingname"
---

# Using capacitor-marketingname-plugin

The capacitor-marketingname-plugin is a package that allows you to set custom app names for iOS devices in Capacitor projects. By default, iOS devices display the app name as specified in the app's Info.plist file. However, with this plugin, you can customize the app name specifically for marketing purposes.

In this tutorial, we will guide you through the process of installing and using the capacitor-marketingname-plugin package in your Capacitor project.

## Prerequisites

Before we get started, make sure you have the following:

- Capacitor installed globally on your machine
- A Capacitor project set up and configured for iOS development

## Installation

Open your project in a terminal window and run the following command to install the capacitor-marketingname-plugin package:

```bash
npm install @okode/capacitor-marketingname-plugin
npx cap sync
```

## Usage

### 1. Import the Plugin

Open your iOS project's AppDelegate.swift file and import the plugin at the top:

```swift
import CapacitorMarketingName
```

### 2. Initialize the Plugin

In the `application(_:didFinishLaunchingWithOptions:)` method of your AppDelegate.swift file, add the following code to initialize the plugin:

```swift
func application(_ application: UIApplication,
  didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
) -> Bool {
  // ...
  CapacitorMarketingName.initialize()
  // ...
  return true
}
```

This code initializes the capacitor-marketingname-plugin package and prepares it for use in your app.

### 3. Set the Marketing Name

To set a custom marketing name for your app, use the following code:

```swift
CapacitorMarketingName.setMarketingName("My Awesome App")
```

Replace `"My Awesome App"` with your desired marketing name.

### 4. Build and Run the Project

Save your changes and build and run your project in Xcode. The app name displayed on iOS devices will now be the custom marketing name you specified.

## Conclusion

In this tutorial, you learned how to use the capacitor-marketingname-plugin package to set custom app names for iOS devices in Capacitor projects. By following the steps outlined above, you can easily customize your app's name for marketing purposes.

We hope this tutorial was helpful in enhancing your app's branding and user experience. Happy coding!

For more information, you can refer to the [official documentation](https://github.com/okode/capacitor-marketingname-plugin).

Remember to regularly update your app's marketing name to align with your marketing strategy and keep your app fresh and relevant.