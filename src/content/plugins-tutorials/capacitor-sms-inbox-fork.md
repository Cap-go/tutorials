---
title: "Using capacitor-sms-inbox-fork: A Markdown Tutorial"
description: "This tutorial will guide you on how to use the capacitor-sms-inbox-fork package in your Capacitor app."
created_at: "2021-09-22"
published: true
slug: "capacitor-sms-inbox-fork"
---

# Using capacitor-sms-inbox-fork: A Markdown Tutorial

In this tutorial, we will walk you through the steps to use the capacitor-sms-inbox-fork package in your Capacitor app. The `capacitor-sms-inbox-fork` package allows you to access and retrieve SMS messages from the device's inbox.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

1. Capacitor CLI: Install the Capacitor CLI globally by running the following command:

```bash
npm install -g @capacitor/cli
```

2. Capacitor project: Set up a Capacitor project using the `@capacitor/cli` command-line interface.

```bash
npx @capacitor/cli create
```

## Installation

To use the `capacitor-sms-inbox-fork` package in your Capacitor app, follow these steps:

1. Install the package via npm:

```bash
npm install capacitor-sms-inbox-fork
```

2. Sync the native platforms:

```bash
npx cap sync
```

## Usage

To retrieve SMS messages from the device's inbox, follow these steps:

1. Import the `SmsInbox` plugin from `capacitor-sms-inbox-fork` in your TypeScript/JavaScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { SmsInbox } = Plugins;
```

2. Use the `getInboxMessages` method of `SmsInbox` to retrieve the SMS messages:

```typescript
SmsInbox.getInboxMessages()
  .then((result) => {
    console.log('SMS messages:', result.messages);
  })
  .catch((error) => {
    console.error('Error retrieving SMS messages:', error);
  });
```

3. Build and run your app:

```bash
npx cap build
npx cap open
```

That's it! You can now retrieve SMS messages from the device's inbox in your Capacitor app using the `capacitor-sms-inbox-fork` package.

## Conclusion

In this tutorial, we learned how to use the `capacitor-sms-inbox-fork` package to retrieve SMS messages from the device's inbox. You can now integrate SMS functionality into your Capacitor app and perform further actions with the retrieved messages.

Remember to check the official documentation of `capacitor-sms-inbox-fork` for more advanced features and options. Happy coding!