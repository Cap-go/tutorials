---
title: "Using @capacitor-community/appcenter Package"
description: "A tutorial on how to use the @capacitor-community/appcenter package for integrating App Center services in your Capacitor application."
created_at: "2023-01-12"
published: true
slug: "appcenter-sdk-capacitor"
---

# Using @capacitor-community/appcenter Package

In this tutorial, we will learn how to use the @capacitor-community/appcenter package to integrate App Center services in your Capacitor application. The @capacitor-community/appcenter package provides a set of plugins that allow you to leverage various App Center features such as analytics and crash reporting in your app.

## Prerequisites

Before we get started, make sure you have the following prerequisites:

- Capacitor CLI installed globally on your machine
- Capacitor project set up

## Installation

To install the @capacitor-community/appcenter package, run the following command in your Capacitor project directory:

```bash
npm install @capacitor-community/appcenter
```

## Integration Steps

Follow these steps to integrate the @capacitor-community/appcenter package in your Capacitor application:

### 1. Import the Plugin

In your app's entry file (e.g., `index.ts`), import the @capacitor-community/appcenter plugin:

```typescript
import { AppCenterPlugin } from '@capacitor-community/appcenter';
```

### 2. Initialize the Plugin

Before using any services provided by App Center, initialize the @capacitor-community/appcenter plugin. You need to provide the App Center app secret for your application. This can be obtained from the App Center portal.

```typescript
const appCenterPlugin = new AppCenterPlugin();
await appCenterPlugin.configure({
  appSecret: 'YOUR_APP_SECRET',
});
```

### 3. Use App Center Services

Once the @capacitor-community/appcenter plugin is initialized, you can start using the different App Center services in your application. Here are some examples:

#### Analytics

Use the analytics service to track events in your application:

```typescript
// Track a custom event
await appCenterPlugin.trackEvent('login', { username: 'john' });

// Track a custom event with additional properties
await appCenterPlugin.trackEvent('purchase', { item: 'Shoes', price: 49.99 });
```

#### Crashes

Enable crash reporting to capture and log application crashes:

```typescript
// Enable crash reporting
await appCenterPlugin.setCrashesEnabled(true);

// Track a handled exception
try {
  // Code that may throw an exception
} catch (e) {
  await appCenterPlugin.trackError(e);
}
```

### 4. Build and Run Your App

After integrating the @capacitor-community/appcenter package and using the App Center services, build and run your Capacitor application to test the implemented functionality.

## Conclusion

In this tutorial, we have learned how to use the @capacitor-community/appcenter package to integrate App Center services in your Capacitor application. By leveraging the provided plugins, you can easily add features like analytics and crash reporting to gain insights into your app's usage and improve its stability.

Feel free to explore the different services provided by App Center and integrate them into your application based on your specific requirements. Happy coding!