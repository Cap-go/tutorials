---
title: "Using capacitor-detect-environment Package"
description: "This tutorial will guide you through the process of using the capacitor-detect-environment package in your Capacitor app."
created_at: "2022-10-25"
published: true
slug: "capacitor-detect-environment"
---

# Using capacitor-detect-environment Package

The `capacitor-detect-environment` package is a useful tool for detecting the environment in which your Capacitor app is running. It provides information about the platform (e.g., iOS, Android, or web) and additional details such as the device model and operating system version.

In this tutorial, we will walk through the steps of installing and using the `capacitor-detect-environment` package in your Capacitor app.

## Prerequisites
Before getting started, make sure you have the following:

- Capacitor installed in your project.
- Basic knowledge of TypeScript and Capacitor concepts.

## Installation
To install the `capacitor-detect-environment` package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command:

   ```bash
   npm install capacitor-detect-environment
   ```

## Usage
Once the package is installed, you can use it in your project. Here's an example of how to use the `capacitor-detect-environment` package:

1. Import the package in your TypeScript file:

   ```typescript
   import { DetectEnvironment } from 'capacitor-detect-environment';
   ```

2. Use the `DetectEnvironment` class to access environment information. For example, you can get the platform and device information:

   ```typescript
   const platform = DetectEnvironment.getPlatform();
   const deviceDetails = DetectEnvironment.getDeviceDetails();
   ```

   The `getPlatform()` method returns the current platform, such as 'ios', 'android', or 'web'. The `getDeviceDetails()` method returns an object containing device information like model, manufacturer, and operating system version.

3. You can then use this information in your app as needed.

   ```typescript
   console.log('Platform:', platform);
   console.log('Device Details:', deviceDetails);
   ```

   This will log the platform and device details in the console.

## Conclusion
In this tutorial, you learned how to install and use the `capacitor-detect-environment` package in your Capacitor app. You now have the ability to detect the platform and access device information, which can be useful for implementing platform-specific logic or gathering analytics.

Feel free to explore the package further and adapt it to your specific needs. Happy coding!