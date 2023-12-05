---
title: "Using capacitor3-amplitude package"
description: "A tutorial on how to use the capacitor3-amplitude package with Capacitor 3"
created_at: "2021-10-15"
published: true
slug: "capacitor3-amplitude"
---

# Using capacitor3-amplitude package

In this tutorial, we will learn how to use the capacitor3-amplitude package with Capacitor 3. This package allows you to integrate the Amplitude analytics platform into your Capacitor-powered application.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor 3: You can install it globally by running `npm install -g @capacitor/cli`
- Node.js: Make sure you have Node.js installed on your machine

## Step 1: Create a new Capacitor project

First, let's create a new Capacitor project. Open your terminal and run the following commands:

```bash
mkdir my-capacitor-app
cd my-capacitor-app
npm init
npm install @capacitor/cli @capacitor/core
npx cap init [appName] [appId]
```

Replace `[appName]` with the name of your app and `[appId]` with a unique identifier for your app.

## Step 2: Install the capacitor3-amplitude package

To install the capacitor3-amplitude package, run the following command in your project directory:

```bash
npm install capacitor3-amplitude
```

This will add the package to your project's dependencies.

## Step 3: Configure Amplitude credentials

Next, we need to configure the Amplitude credentials in our Capacitor project.

Open the `android/app/src/main/java/[package-name]/MainActivity.java` file and add the following import statement at the top:

```java
import com.amplitude.api.Amplitude;
```

In the `onCreate` method, add the following code to initialize Amplitude with your API key:

```java
Amplitude.getInstance().initialize(this, "[your-api-key]").enableForegroundTracking(getApplication());
```

Replace `[your-api-key]` with your Amplitude API key.

For iOS, open the `ios/App/AppDelegate.swift` file and add the following import statement at the top:

```swift
import Amplitude
```

In the `application(_:didFinishLaunchingWithOptions:)` method, add the following code to initialize Amplitude with your API key:

```swift
Amplitude.instance()?.initializeApiKey("[your-api-key]")
```

Replace `[your-api-key]` with your Amplitude API key.

## Step 4: Use the capacitor3-amplitude package

Now that we have configured Amplitude, we can start using the capacitor3-amplitude package in our app.

Open the `src/App.tsx` file and import the `Amplitude` class from the capacitor3-amplitude package:

```typescript
import { Amplitude } from 'capacitor3-amplitude';
```

To track an event, use the `Amplitude.trackEvent` method:

```typescript
Amplitude.trackEvent('eventName');
```

Replace `'eventName'` with the name of the event you want to track.

## Step 5: Build and run the app

To build and run your Capacitor project, run the following command in your project directory:

```bash
npx cap open [platform]
```

Replace `[platform]` with the platform you want to build for (e.g., `android` or `ios`).

This will open the project in Android Studio or Xcode, where you can build and run the app on a simulator or a physical device.

Congratulations! You have successfully integrated the capacitor3-amplitude package into your Capacitor 3 app and learned how to track events with Amplitude.