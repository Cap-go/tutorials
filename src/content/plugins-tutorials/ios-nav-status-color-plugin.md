```
---
"title": "Using iOS Nav Status Color Plugin",
"description": "This tutorial will guide you through the process of using the ios-nav-status-color-plugin package for setting the navigation bar status color on iOS applications.",
"created_at": "2022-01-23",
"published": true,
"slug": "ios-nav-status-color-plugin"
---

# Using iOS Nav Status Color Plugin

To set the status bar color in the navigation bar on iOS applications, we will be using the `ios-nav-status-color-plugin`. Follow the steps below to integrate and utilize this plugin in your Capacitor project.

## Installation

1. First, install the plugin by running the command:
   ```shell
   npm install ios-nav-status-color-plugin
   ```

2. After installing the plugin, make sure to sync your Capacitor project:
   ```shell
   npx cap sync ios
   ```

3. Open your iOS project in Xcode:
   ```shell
   npx cap open ios
   ```

## Usage

1. Within your iOS project, import the plugin where you need to set the status bar color:
   ```swift
   import NavStatusColorPlugin
   ```

2. Then, update the status bar color using the plugin's method. For example:
   ```swift
   NavStatusColorPlugin.setStatusBarColor(color: .red)
   ```

3. Remember to run your app on an iOS device or simulator to see the changes.

That's it! Now you know how to use the ios-nav-status-color-plugin to set the navigation bar status color in your iOS app.
```