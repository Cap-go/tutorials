# Using the Bugfender Capacitor Package

---

title: "Using the Bugfender Capacitor Package"
description: "In this tutorial, we will learn how to use the @bugfender/capacitor package to integrate Bugfender logging into your Capacitor app."
created_at: "2022-10-31"
published: true
slug: "bugfender-capacitor"

---

## Introduction

Bugfender is a powerful logging tool that allows you to easily collect and analyze logs from your mobile applications. The @bugfender/capacitor package provides a convenient way to integrate Bugfender logging into your Capacitor app.

In this tutorial, we will guide you through the process of adding Bugfender to your Capacitor project and show you how to log messages, exceptions, and network requests using Bugfender.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Node.js and npm installed on your machine.
- Capacitor installed globally on your machine.
- A Capacitor project set up.

## Step 1: Install the Bugfender Capacitor Package

To get started, you need to install the @bugfender/capacitor package in your Capacitor project. Open your project directory in a terminal and run the following command:

```bash
npm install @bugfender/capacitor
```

This will install the Bugfender Capacitor package and its dependencies into your project.

## Step 2: Register your Bugfender App

Before you can start logging with Bugfender, you need to register your app on the Bugfender website and obtain an API key. Follow these steps to register your app:

1. Go to the Bugfender website (https://bugfender.com) and create an account if you don't already have one.
2. Log in to your Bugfender account and create a new app.
3. Once your app is created, you will be provided with an API key. Make note of this key as we will need it in the next step.

## Step 3: Configure Bugfender in your Capacitor Project

Next, we need to configure Bugfender in your Capacitor project. Open the `capacitor.config.json` file in the root of your project and add the following configuration:

```json
{
  "plugins": {
    "Bugfender": {
      "apiKey": "<YOUR_API_KEY>"
    }
  }
}
```

Replace `<YOUR_API_KEY>` with the API key you obtained in the previous step.

## Step 4: Initialize Bugfender in your App

Now, let's initialize Bugfender in your app. Open the `src/index.js` (or `src/main.ts` for TypeScript projects) file and import the Bugfender plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { Bugfender } = Plugins;
```

In the same file, add the following code to initialize Bugfender with your API key:

```javascript
Bugfender.init({
  apiKey: '<YOUR_API_KEY>'
});
```

Make sure to replace `<YOUR_API_KEY>` with your actual API key.

## Step 5: Logging Messages

With Bugfender set up, you can now start logging messages in your app. Bugfender provides several methods for logging different types of messages. Here are a few examples:

```javascript
Bugfender.log('This is a log message');
Bugfender.warn('This is a warning message');
Bugfender.error('This is an error message');
```

You can also log messages with metadata:

```javascript
Bugfender.log('Log message with metadata', { customData: 'value' });
```

## Step 6: Logging Exceptions

Bugfender also allows you to log exceptions in your app. To log an exception, use the `Bugfender.sendCrash` method:

```javascript
try {
  // Code that might throw an exception
} catch (error) {
  Bugfender.sendCrash(error);
}
```

You can also log exceptions with metadata:

```javascript
try {
  // Code that might throw an exception
} catch (error) {
  Bugfender.sendCrash(error, { customData: 'value' });
}
```

## Step 7: Logging Network Requests

Bugfender can also log network requests made by your app. To log a network request, use the `Bugfender.logHttpRequest` method:

```javascript
const url = 'https://api.example.com/data';
const method = 'GET';
const headers = { Authorization: 'Bearer <YOUR_TOKEN>' };

// Log a network request
Bugfender.logHttpRequest(url, method, headers);
```

You can also log the response of a network request:

```javascript
const response = { status: 200, body: { message: 'Success' } };

// Log the response of a network request
Bugfender.logHttpResponse(url, method, headers, response);
```

## Conclusion

In this tutorial, we have learned how to use the @bugfender/capacitor package to integrate Bugfender logging into a Capacitor app. We covered the installation process, app registration, configuration, and logging of messages, exceptions, and network requests.

Bugfender is a powerful tool that can help you track down bugs and improve the quality of your mobile applications. We encourage you to explore the Bugfender documentation for more advanced usage and features.

Happy logging!