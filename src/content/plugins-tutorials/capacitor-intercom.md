---
title: "Using @sencrop/capacitor-intercom Package Tutorial"
description: "A step-by-step tutorial on how to use the @sencrop/capacitor-intercom package in your Capacitor projects."
created_at: "2022-03-25"
published: true
slug: capacitor-intercom
---

# Using @sencrop/capacitor-intercom Package Tutorial

In this tutorial, we will walk through the process of integrating the @sencrop/capacitor-intercom package into your Capacitor projects. The @sencrop/capacitor-intercom package provides a simple way to add Intercom functionality to your mobile apps built with Capacitor.

## Prerequisites

Before we begin, make sure you have the following:

- An existing Capacitor project
- Node.js and npm installed on your machine

## Installation

To get started, open your terminal and navigate to your Capacitor project's root directory.


Next, install the @sencrop/capacitor-intercom package by running the following command:

```
npm install @sencrop/capacitor-intercom --save
```

## Configuration

Once the package is installed, we need to configure it with your Intercom API keys.

### iOS Setup

1. Open your Capacitor project and navigate to the `ios` folder.
2. Locate the `Capacitor.podfile` file in the `ios/App` directory.
3. Open the `Capacitor.podfile` file and add the following line inside the `target 'App' do` block:

```ruby
pod 'Intercom', '9.3.7'
```

4. Save the file and close it.

### Android Setup

1. Open your Capacitor project and navigate to the `android` folder.
2. Locate the `capacitor.properties` file in the `android/app` directory.
3. Open the `capacitor.properties` file and add the following line at the end of the file:

```
intercomVersion=9.3.7
```

4. Save the file and close it.

## Using the @sencrop/capacitor-intercom Package

Now that we have installed and configured the @sencrop/capacitor-intercom package, let's see how to use it in our Capacitor project.

### Initializing Intercom

To initialize Intercom, you need to call the `init` method provided by the @sencrop/capacitor-intercom package. This method should be called when your app is ready to start using Intercom.

```javascript
import { Intercom } from '@sencrop/capacitor-intercom';

Intercom.init({
  appId: 'YOUR_APP_ID',
  apiKey: 'YOUR_API_KEY',
});
```

Replace `YOUR_APP_ID` and `YOUR_API_KEY` with your Intercom app ID and API key respectively.

### Displaying the Messenger

To display the Intercom Messenger in your app, you can use the `displayMessenger` method provided by the @sencrop/capacitor-intercom package. This method will open the Messenger UI and allow your users to chat with you.

```javascript
Intercom.displayMessenger();
```

### Updating User Attributes

You can update user attributes like name, email, and custom attributes using the `updateUser` method provided by the @sencrop/capacitor-intercom package.

```javascript
Intercom.updateUser({
  name: 'John Doe',
  email: 'john@example.com',
  // Add any additional custom attributes here
});
```

### Logging Events

To log events in Intercom, you can use the `logEvent` method provided by the @sencrop/capacitor-intercom package.

```javascript
Intercom.logEvent('purchase', {
  eventValue: 100,
});
```

Replace `'purchase'` with the name of the event you want to log, and provide any additional event data as an object.

## Conclusion

In this tutorial, we have covered the installation, configuration, and usage of the @sencrop/capacitor-intercom package in your Capacitor projects. You should now be able to integrate Intercom functionality into your mobile apps and utilize features such as the Intercom Messenger, user attribute updates, and event logging.

Remember to consult the official documentation for any additional functionality or updates to the package.

Happy coding!