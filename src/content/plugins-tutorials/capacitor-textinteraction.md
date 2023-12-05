---
title: "Using Capacitor-TextInteraction Package"
description: "A tutorial on how to use the Capacitor-TextInteraction package in your Capacitor app."
created_at: "2022-03-13"
published: true
slug: "capacitor-textinteraction"
---

# Using Capacitor-TextInteraction Package

In this tutorial, we will learn how to use the Capacitor-TextInteraction package in your Capacitor app. The Capacitor-TextInteraction package allows you to interact with text in your app, such as detecting phone numbers, email addresses, and URLs, and performing actions based on them.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and npm installed on your machine
- An existing Capacitor app or a new Capacitor project set up

## Installation

To use the Capacitor-TextInteraction package, you need to install it in your project. Open a terminal and navigate to your Capacitor app's root directory.

Run the following command to install the package:

```bash
npm install capacitor-textinteraction
```

## Usage

Once the package is installed, you can start using its functionality in your app.

### Import the Package

In your desired TypeScript/JavaScript file, import the necessary functions from the Capacitor-TextInteraction package:

```ts
import { TextInteraction } from 'capacitor-textinteraction';
const textInteraction = new TextInteraction();
```

### Detecting Phone Numbers

You can use the `detectPhoneNumbers` method to detect phone numbers in a given text. The method returns an array of phone number strings. Here's an example:

```ts
const text = 'Contact us at +1-123-456-7890 or 555-123-4567';
const phoneNumbers = await textInteraction.detectPhoneNumbers({ text });
console.log('Detected phone numbers:', phoneNumbers);
```

### Detecting Email Addresses

To detect email addresses in a text, use the `detectEmails` method. It returns an array of email address strings. Example usage:

```ts
const text = 'Send an email to info@example.com or support@example.com';
const emails = await textInteraction.detectEmails({ text });
console.log('Detected email addresses:', emails);
```

### Detecting URLs

If you want to detect URLs in a text, use the `detectURLs` method. It returns an array of URL strings. Example usage:

```ts
const text = 'Check out our website at https://example.com';
const urls = await textInteraction.detectURLs({ text });
console.log('Detected URLs:', urls);
```

### Handling Detected Text

Once you have detected the desired type of text, you can perform actions based on them. For example, you can open a phone dialer or email client when a phone number or email address is detected.

Here's an example of how you can open the default phone dialer when a phone number is detected:

```ts
const phoneNumber = '123-456-7890';
await textInteraction.openPhoneDialer({ phoneNumber });
```

## Conclusion

In this tutorial, we learned how to use the Capacitor-TextInteraction package to detect phone numbers, email addresses, and URLs in a Capacitor app. We also saw how to perform actions based on the detected text, such as opening a phone dialer or email client. With this package, you can easily add text interaction capabilities to your app.

Make sure to check the [official documentation](https://github.com/capacitor-community/textinteraction) for more details and advanced usage of the Capacitor-TextInteraction package.