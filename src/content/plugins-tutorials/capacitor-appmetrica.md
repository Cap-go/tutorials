---
title: "Using capacitor-appmetrica package"
description: "This tutorial will guide you through the process of using the capacitor-appmetrica package to integrate AppMetrica tracking into your Capacitor app."
created_at: "2022-10-15"
published: true
slug: "capacitor-appmetrica"
---

# Using capacitor-appmetrica package

In this tutorial, we will walk you through the steps to integrate the capacitor-appmetrica package into your Capacitor app. The capacitor-appmetrica plugin allows you to easily track user events and analytics using the AppMetrica platform.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor CLI: Install the latest version of Capacitor CLI globally by running the command `npm install -g capacitor`
- Capacitor Project: Create a new Capacitor project by running the command `npx @capacitor/cli create`. Follow the prompts to set up the project.

## Installation

To install the capacitor-appmetrica package, run the following command in your Capacitor project:

```bash
npm install capacitor-appmetrica
npx cap sync
```

This will install the package and sync the native dependencies with your project.

## iOS Configuration

### Step 1: Configure Your AppMetrica Account

Before integrating the Capacitor AppMetrica plugin, you need to set up an AppMetrica account and obtain an API key. Follow the official documentation to create an account and obtain the API key.

### Step 2: Add API Key to Your App

Open the `Info.plist` file in your Xcode project and add the following key-value pair under the root `<dict>` element:

```xml
<key>YMMYandexMetricaAPIKey</key>
<string>YOUR_APPMETRICA_API_KEY</string>
```

Replace `YOUR_APPMETRICA_API_KEY` with your actual API key.

### Step 3: Update AppDelegate.swift

Open the `AppDelegate.swift` file in your Xcode project and import the Capacitor AppMetrica plugin by adding the following line at the top:

```swift
import capacitor_appmetrica
```

Then, add the initialization code for AppMetrica inside the `application(_:didFinishLaunchingWithOptions:)` method:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
  // ...
  CapacitorAppMetrica.initialize()
  // ...
  return true
}
```

## Android Configuration

### Step 1: Configure Your AppMetrica Account

Similar to iOS, you need to set up an AppMetrica account and obtain an API key. Follow the official documentation to create an account and obtain the API key.

### Step 2: Add API Key to Your App

Open the `strings.xml` file located at `android/app/src/main/res/values/` and add the following line inside the `<resources>` element:

```xml
<string name="appmetrica_api_key">YOUR_APPMETRICA_API_KEY</string>
```

Replace `YOUR_APPMETRICA_API_KEY` with your actual API key.

### Step 3: Update MainActivity.java

Open the `MainActivity.java` file located at `android/app/src/main/java/<YOUR_PACKAGE_NAME>/` and import the Capacitor AppMetrica plugin by adding the following line at the top:

```java
import com.getcapacitor.appmetrica.AppMetricaPlugin;
```

Then, add the initialization code for AppMetrica inside the `onCreate` method:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  // ...
  AppMetricaPlugin.initialize(this);
  // ...
}
```

## Usage

Once the plugin is installed and configured, you can start using it to track user events and analytics in your Capacitor app. Here's an example of sending a custom event:

```typescript
import { Plugins } from '@capacitor/core';

const { AppMetricaPlugin } = Plugins;

// ...

AppMetricaPlugin.reportEvent('custom_event', { 'param1': 'value1', 'param2': 'value2' })
  .then(() => {
    console.log('Event reported successfully');
  })
  .catch(error => {
    console.error('Failed to report event:', error);
  });
```

You can refer to the [official documentation](https://github.com/ionic-team/capacitor/tree/main/packages/appmetrica) for more information on the available methods and configurations.

That's it! You have successfully integrated the capacitor-appmetrica package into your Capacitor app for tracking user events and analytics using the AppMetrica platform.

Happy tracking!