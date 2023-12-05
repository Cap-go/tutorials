---
title: "Using the yagnik-contacts Package"
description: "A tutorial on how to use the yagnik-contacts package to fetch contacts from your device."
created_at: "2022-10-20"
published: true
slug: "contact-plugin"
---

# Using the yagnik-contacts Package

In this tutorial, we will walk through the process of using the yagnik-contacts package to fetch contacts from your device. The yagnik-contacts package is a Capacitor plugin that allows you to easily access and manage contacts on your device.

## Installation

To begin, make sure you have Capacitor installed globally on your machine. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/cli
```

Once Capacitor is installed, you can add the yagnik-contacts package to your project by running the following commands:

```bash
npm install yagnik-contacts
npx cap sync
```

This will install the package and ensure that it is properly synced with your Capacitor project.

## Usage

### Fetching Contacts

To fetch contacts from your device using the yagnik-contacts package, you can use the `getContacts` function. This function takes a filter as a parameter and returns a Promise that resolves to an array of contact objects.

Here's an example of how to use the `getContacts` function:

```typescript
import { Plugins } from '@capacitor/core';
const { ContactsPlugin } = Plugins;

const filter = ""; // You can provide a filter to search for specific contacts

ContactsPlugin.getContacts(filter).then((response) => {
  const contacts = response.results;
  console.log(contacts); // You can now use the fetched contacts in your application
}).catch((error) => {
  console.error(error); // Handle any errors that occur during the fetch process
});
```

### Echo Function

The yagnik-contacts package also provides an `echo` function that you can use to test the plugin. This function takes a string value as input and returns a Promise that resolves to the same value.

Here's an example of how to use the `echo` function:

```typescript
import { Plugins } from '@capacitor/core';
const { ContactsPlugin } = Plugins;

const value = "Hello, world!";

ContactsPlugin.echo({ value }).then((response) => {
  const echoedValue = response.value;
  console.log(echoedValue); // The echoed value will be the same as the input value
}).catch((error) => {
  console.error(error); // Handle any errors that occur during the echo process
});
```

## Conclusion

In this tutorial, we have learned how to use the yagnik-contacts package to fetch contacts from your device. We have explored the `getContacts` function for fetching contacts and the `echo` function for testing the plugin. You can now integrate this package into your Capacitor project and leverage its functionalities to interact with contacts on your device effectively and efficiently.