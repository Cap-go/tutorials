---
title: "Using @sentry/capacitor Package - Tutorial"
description: "A comprehensive tutorial on how to use the @sentry/capacitor package to handle errors and collect data in Capacitor applications."
created_at: "2022-01-01"
published: true
slug: "sentry-capacitor"
---

# Using @sentry/capacitor Package - Tutorial

In this tutorial, we will learn how to use the `@sentry/capacitor` package to handle errors and collect data in Capacitor applications. Sentry is a popular error tracking and monitoring tool that helps developers identify, track, and resolve issues in their applications.

## Prerequisites

Before we begin, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- Capacitor CLI (`npm install -g @capacitor/cli`)

## Step 1: Create a Capacitor Application

First, let's create a new Capacitor application using the `@capacitor/create-app` command.

```bash
npx @capacitor/create-app com.example.myapp MyApp --capacitor-version=3.3.2
cd MyApp
```

## Step 2: Install @sentry/capacitor Package

Next, we need to install the `@sentry/capacitor` package and its dependencies. Run the following command in your project directory:

```bash
npm install @sentry/capacitor@3.16.0
```

## Step 3: Configure Sentry

To use Sentry in our Capacitor application, we need to configure it with our Sentry DSN (Data Source Name). The DSN is a unique identifier for your Sentry project.

Create a new file named `sentry.config.js` in the root of your project directory with the following content:

```javascript
module.exports = {
  dsn: '<YOUR-SENTRY-DSN>',
};
```

Replace `<YOUR-SENTRY-DSN>` with your actual Sentry DSN.

## Step 4: Initialize and Configure Sentry

To initialize and configure Sentry in your Capacitor application, open the `capacitor.config.json` file and add the following code:

```json
{
  "plugins": {
    "Sentry": {
      "enabled": true,
      "config": {
        "dsn": "<YOUR-SENTRY-DSN>"
      }
    }
  }
}
```

Make sure to replace `<YOUR-SENTRY-DSN>` with your actual Sentry DSN.

## Step 5: Import and Use Sentry

Now, we can import `@sentry/capacitor` and start using it to capture errors and track events in our application.

In your `src/App.tsx` file, add the following import statement:

```typescript
import { SentryCapacitor } from '@sentry/capacitor';
```

To capture errors, you can use the `captureException` method provided by Sentry. For example:

```typescript
try {
  // Your code that may throw an error
} catch (error) {
  SentryCapacitor.captureException(error);
}
```

You can also track custom events using the `captureEvent` method. For example:

```typescript
const event = {
  message: 'Button Clicked',
  level: 'info',
  extra: {
    buttonId: 'my-button',
  },
};

SentryCapacitor.captureEvent(event);
```

## Step 6: Test and Verify

You can now test your Capacitor application and see the captured errors and events in your Sentry project dashboard. Make sure you have an active internet connection for the data to be sent to Sentry.

## Conclusion

In this tutorial, we learned how to use the `@sentry/capacitor` package to handle errors and collect data in Capacitor applications. Sentry provides powerful error tracking and monitoring capabilities, allowing developers to effectively identify and resolve issues in their applications.

Make sure to refer to the [official Sentry Capacitor documentation](https://docs.sentry.io/platforms/javascript/guides/capacitor/) for more advanced usage and configuration options.

Happy debugging with Sentry!