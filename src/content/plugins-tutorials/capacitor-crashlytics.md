---
title: "Using capacitor-crashlytics-cc-fork Package"
description: "A tutorial on how to use the capacitor-crashlytics-cc-fork package in your Capacitor project"
created_at: "2021-09-15"
published: true
slug: "capacitor-crashlytics"
---

# Using capacitor-crashlytics-cc-fork Package

In this tutorial, we will learn how to use the `capacitor-crashlytics-cc-fork` package in your Capacitor project. crashlytics is a powerful crash reporting solution for Android and iOS that helps you track, prioritize, and fix stability issues that erode app quality. This package provides a Capacitor plugin for integrating Crashlytics into your Ionic app. 

Crashlytics offers real-time error reporting, crash analysis, and rich insights about the health of your apps. By integrating Crashlytics into your app, you will be able to monitor and analyze crashes and errors, track user and version adoption, and receive detailed crash reports directly to your Firebase console.

## Prerequisites

Before we begin, make sure you have the following dependencies installed:

- Node.js and npm (https://nodejs.org)
- Ionic CLI (https://ionicframework.com)
- Capacitor (https://capacitorjs.com)

## Step 1: Create a Capacitor Project

First, we need to create a new Capacitor project. Open your terminal and run the following commands:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

## Step 2: Install capacitor-crashlytics-cc-fork

Next, we need to install the `capacitor-crashlytics-cc-fork` package. Run the following command in your project directory:

```bash
npm install --save capacitor-crashlytics-cc-fork
```

## Step 3: Add necessary files and configurations

Create the necessary files and folders by running the following commands:

```bash
mkdir www && touch www/index.html
npx cap add android
npx cap sync android
```

Now, open the `android/app` folder in Android Studio or your preferred IDE. Add the `google-services.json` file to the `android/app` folder. This file contains the Firebase configuration information required for Crashlytics.

## Step 4: Initialize the Plugin

Open the `MainActivity.java` file in `android/app/src/main/java/[your-app-package]/MainActivity.java`. Import the CrashlyticsPlugin class by adding the following line at the top of the file:

```java
import io.stewan.capacitor.crashlytics.CrashlyticsPlugin;
```

Inside the `init` method, add the following line to initialize the CrashlyticsPlugin:

```java
add(CrashlyticsPlugin.class);
```

## Step 5: Run the App

Now we are ready to run the app on an Android device. Run the following command:

```bash
ionic cap run android
```

This will build the app and launch it on your connected Android device or emulator.

## Step 6: Test Crash Reporting

To test the Crashlytics integration, you can force a crash in your app by adding the following code to a component or page in your Ionic app:

```typescript
import { Crashlytics } from 'capacitor-crashlytics-cc-fork';

// ...

Crashlytics.crash();
```

This will simulate a crash in your app and generate a crash report in the Firebase console.

## Conclusion

In this tutorial, we learned how to integrate the `capacitor-crashlytics-cc-fork` package into a Capacitor project. We covered the installation process, setting up the necessary files and configurations, initializing the plugin, and testing crash reporting.

By using this package, you can easily track, monitor, and analyze crashes and errors in your Ionic app, and improve the stability and quality of your application.