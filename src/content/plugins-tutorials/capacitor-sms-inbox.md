---
title: "Using the capacitor-sms-inbox Package"
description: "A tutorial on how to use the capacitor-sms-inbox package for managing SMS inbox in a Capacitor app"
created_at: "2022-09-30"
published: true
slug: "capacitor-sms-inbox"
---

# Using the capacitor-sms-inbox Package

In this tutorial, we will learn how to use the capacitor-sms-inbox package to manage the SMS inbox in a Capacitor app. The capacitor-sms-inbox package provides a simple and easy-to-use interface for accessing and manipulating SMS messages on a user's device.

## Installation

To get started, let's first install the capacitor-sms-inbox package using npm:

```bash
npm install capacitor-sms-inbox
```

Next, we need to sync the native project and update the Capacitor configuration:

```bash
npx cap sync
```

## Usage

Now that we have installed the capacitor-sms-inbox package, we can start using it in our Capacitor app.

### Importing the Package

First, we need to import the `SMSInbox` class from the capacitor-sms-inbox package:

```typescript
import { SMSInbox } from 'capacitor-sms-inbox';
```

### Retrieving SMS Inbox

To retrieve the SMS inbox, we can use the `SMSInbox.getAllMessages()` method. This method returns a promise that resolves to an array of SMS messages.

```typescript
const messages = await SMSInbox.getAllMessages();
```

Each message object in the array will have properties such as `address` (sender's phone number), `body` (SMS content), `date` (timestamp), and more.

### Filtering SMS Inbox

If we want to filter the SMS inbox based on certain criteria, we can use the `SMSInbox.filterMessages(filterOptions)` method. The `filterOptions` parameter is an object that allows you to set various filters for the messages.

For example, to retrieve all messages from a specific contact, we can set the `address` property in the `filterOptions` object:

```typescript
const filterOptions = {
  address: '+1234567890' // Replace with the desired phone number
};

const filteredMessages = await SMSInbox.filterMessages(filterOptions);
```

### Deleting SMS Messages

To delete an SMS message from the inbox, we can use the `SMSInbox.deleteMessage(messageId)` method. The `messageId` parameter is the unique identifier of the message.

```typescript
const messageId = '12345'; // Replace with the actual message ID

SMSInbox.deleteMessage(messageId);
```

### Marking SMS Messages as Read

If we want to mark an SMS message as read in the inbox, we can use the `SMSInbox.markAsRead(messageId)` method. This method updates the status of the message to "read".

```typescript
const messageId = '12345'; // Replace with the actual message ID

SMSInbox.markAsRead(messageId);
```

## Summary

In this tutorial, we learned how to use the capacitor-sms-inbox package to manage the SMS inbox in a Capacitor app. We covered installation, retrieving SMS messages, filtering messages, deleting messages, and marking messages as read.

By utilizing the capacitor-sms-inbox package, you can easily incorporate SMS inbox functionality into your Capacitor apps.