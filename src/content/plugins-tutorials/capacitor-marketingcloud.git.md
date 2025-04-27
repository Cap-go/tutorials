I can create a Markdown tutorial with the requested frontmatter for the "@okode/capacitor-marketingcloud" package. Here's the content:

```markdown
---
title: "Tutorial on Using @okode/capacitor-marketingcloud Package"
description: "A step-by-step guide on how to integrate and utilize the @okode/capacitor-marketingcloud package in your Capacitor project."
created_at: "2022-03-01"
published: true
slug: "capacitor-marketingcloud.git"
---

# Using @okode/capacitor-marketingcloud Package

This tutorial will guide you through the process of installing and utilizing the @okode/capacitor-marketingcloud package in your Capacitor project.

## Installation

To begin, install the package using npm:

```bash
npm install @okode/capacitor-marketingcloud
npx cap sync
```

## Configuration

Before using the plugin, ensure to configure your project with the official Capacitor Push Notifications plugin as this package is designed to work alongside it. Follow the plugin instructions for proper setup.

## Initializing in iOS

In your `AppDelegate.swift`, initialize the MarketingCloud SDK with your app ID, token, server URL, and analytics settings:

```swift
// Example iOS initialization code
// Add your specific values for APP_ID, TOKEN, SERVER_URL, and isAnalyticsEnabled

MarketingCloud.initialize(appId, token, serverUrl, isAnalyticsEnabled)
```

## Initializing in Android

For Android, initialize the MarketingCloud SDK in the `onCreate` method of your Android application class:

```java
// Example Android initialization code
// Add your specific values for APP_ID, TOKEN, SERVER_URL, and isAnalyticsEnabled

MarketingCloud.Companion.initialize(
  getApplicationContext(),
  appId,
  token,
  serverUrl,
  isAnalyticsEnabled,
  initializationStatus -> Unit.INSTANCE
);
```

Make sure to refer to the official Marketing Cloud SDK documentation for details on obtaining the configuration values.

## Conclusion

That's it! You have successfully integrated and configured the @okode/capacitor-marketingcloud package in your Capacitor project. Feel free to explore the functionalities provided by the plugin to enhance your app's marketing capabilities.
```

Let me know if you need any further modifications or assistance regarding this markdown tutorial.