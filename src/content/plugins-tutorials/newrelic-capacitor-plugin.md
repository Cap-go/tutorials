---
title: "Using @newrelic/newrelic-capacitor-plugin"
description: "A tutorial on how to use the @newrelic/newrelic-capacitor-plugin package to integrate New Relic with Capacitor."
created_at: "March 15, 2022"
published: true
slug: newrelic-capacitor-plugin
---

# Using @newrelic/newrelic-capacitor-plugin

In this tutorial, we will learn how to use the @newrelic/newrelic-capacitor-plugin package to integrate New Relic with Capacitor. This plugin allows you to track metrics and events in your mobile app using the Kissmetrics Tracking API.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Capacitor CLI: You can install it globally by running `npm install -g @capacitor/cli`.
2. New Relic account: Sign up for a free trial account at https://newrelic.com/signup.

## Step 1: Create a Capacitor project

First, let's create a new Capacitor project. Open your terminal and run the following command:

```shell
npx cap init [appName] [appId]
```

Replace `[appName]` with your desired app name and `[appId]` with a unique identifier for your app.

## Step 2: Install the @newrelic/newrelic-capacitor-plugin package

To install the @newrelic/newrelic-capacitor-plugin package, run the following command in your terminal:

```shell
npm install @newrelic/newrelic-capacitor-plugin
```

This will download and install the package in your project directory.

## Step 3: Add the plugin to your Capacitor project

Next, navigate to your Capacitor project's main directory and open the `capacitor.config.json` file. Add the following lines to the `plugins` section:

```json
"Plugins": {
  "@newrelic/newrelic-capacitor-plugin": {}
}
```

Save the file and close it.

## Step 4: Configure the New Relic plugin

To configure the New Relic plugin, open your Capacitor project's `ios/App/App/AppDelegate.swift` file and add the following import statement at the top:

```swift
import NewRelic
```

Then, inside the `application(_:didFinishLaunchingWithOptions:)` function, add the following line:

```swift
NewRelic.start(withApplicationToken: "YOUR_APP_TOKEN")
```

Replace `"YOUR_APP_TOKEN"` with your actual New Relic application token. This token can be obtained from your New Relic account.

## Step 5: Track events and metrics

You are now ready to track events and metrics using the New Relic plugin. Here's an example of how to track a custom event in your app:

```typescript
import { Plugins } from '@capacitor/core';

const { NewRelicPlugin } = Plugins;

// Track a custom event
NewRelicPlugin.recordEvent('eventName', { key: 'value' });
```

In the example above, replace `'eventName'` with the name of your custom event and `{ key: 'value' }` with any additional properties you want to associate with the event.

## Step 6: Build and run your app

Finally, build and run your app to see the New Relic integration in action. In your terminal, run the following command:

```shell
npx cap open ios
```

This will open your app in Xcode. From Xcode, you can build and run your app on an iOS simulator or a connected iOS device.

Congratulations! You have successfully integrated New Relic with your Capacitor app using the @newrelic/newrelic-capacitor-plugin.

## Conclusion

In this tutorial, we learned how to use the @newrelic/newrelic-capacitor-plugin package to integrate New Relic with Capacitor. We covered the installation process, configuring the plugin, and tracking events and metrics in your mobile app. Now you can effectively monitor and analyze your app's performance using New Relic.

For more information and advanced usage, refer to the official [documentation](https://docs.newrelic.com/docs/mobile-monitoring/new-relic-mobile/).

Happy tracking!
