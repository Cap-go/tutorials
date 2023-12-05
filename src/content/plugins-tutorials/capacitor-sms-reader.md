---
title: "Using capacitor-sms-reader package"
description: "A tutorial on how to use the capacitor-sms-reader package to read SMS messages in your app."
created_at: "2021-07-15"
published: true
slug: "capacitor-sms-reader"
---

# Using capacitor-sms-reader package

The `capacitor-sms-reader` package allows you to read SMS messages in your Capacitor app. In this tutorial, we will cover the steps to install and use this package in your project.

## Installation

To get started, open your Capacitor project and install the `capacitor-sms-reader` package using npm or yarn:

```bash
npm install capacitor-sms-reader
```

or

```bash
yarn add capacitor-sms-reader
```

## Setup

Once the package is installed, you need to sync the native code for your project. Run the following command to do that:

```bash
npx cap sync
```

This will copy the necessary files and dependencies into your native project directories.

## Usage

1. Import the `SMSReader` plugin from `@capacitor-community/sms-reader` in your JavaScript/TypeScript file:

```javascript
import { Plugins } from '@capacitor/core';

const { SMSReader } = Plugins;
```

2. To request SMS permission, call the `requestPermission` method:

```javascript
SMSReader.requestPermission().then(result => {
  if (result.granted) {
    console.log("SMS permission granted");
  } else {
    console.log("SMS permission denied");
  }
}).catch(error => {
  console.error(error);
});
```

3. To read SMS messages, use the `getMessages` method:

```javascript
SMSReader.getMessages().then(result => {
  const messages = result.messages;
  // Do something with the received messages
}).catch(error => {
  console.error(error);
});
```

That's it! You have now successfully integrated the `capacitor-sms-reader` package into your Capacitor app.

Please note that this package currently supports Android only.

For more information and advanced usage, refer to the official documentation of the `capacitor-sms-reader` package.

Now you can start building powerful SMS-related features in your Capacitor app using the `capacitor-sms-reader` package!