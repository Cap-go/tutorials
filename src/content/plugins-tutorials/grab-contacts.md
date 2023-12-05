---
title: "How to Use the Capacitor Get Contacts Package"
description: "A step-by-step tutorial on using the Capacitor Get Contacts package to fetch contacts in your Capacitor app."
created_at: "2022-01-08"
published: true
slug: "grab-contacts"
---

# How to Use the Capacitor Get Contacts Package

In this tutorial, you will learn how to use the Capacitor Get Contacts package to fetch contacts in your Capacitor app. The Capacitor Get Contacts package is a community plugin that provides a simple API for retrieving contacts from the device's contact list.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project. If you haven't already, you can install Capacitor globally by running the following command:

  ```
  npm install -g @capacitor/core @capacitor/cli
  ```

- A Capacitor project set up and initialized. If you haven't already, you can create a new Capacitor project by running the following commands:

  ```
  npx cap init
  ```

Let's get started!

## Installation

To use the Capacitor Get Contacts package in your project, you need to install it first. Open your project's terminal and run the following command:

```
npm install --save @capacitor-community/contacts
```

This will install the Capacitor Get Contacts package and add it as a dependency in your project's package.json file.

Next, you need to sync your project with Capacitor to register the new plugin. Run the following command:

```
npx cap sync
```

The Capacitor Get Contacts package is now installed and ready to use in your project.

## Fetching Contacts

To fetch contacts from the device's contact list, you can use the `getContacts` method provided by the Capacitor Get Contacts package.

Here's an example of how to use the `getContacts` method in your code:

```javascript
import { Plugins } from '@capacitor/core';

const { Contacts } = Plugins;

const fetchContacts = async () => {
  try {
    const result = await Contacts.getContacts();
    const contacts = result.contacts;
    console.log('Fetched contacts:', contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
};

fetchContacts();
```

In the above code, we import the `Contacts` plugin from the `@capacitor/core` package. Then, we define an asynchronous function `fetchContacts` that calls the `getContacts` method of the `Contacts` plugin. The `getContacts` method returns a Promise that resolves to an object containing the fetched contacts. We log the fetched contacts to the console.

You can customize the `fetchContacts` function according to your app's needs. For example, you can filter the fetched contacts or display them in your app's UI.

That's it! You have successfully fetched contacts using the Capacitor Get Contacts package.

## Conclusion

In this tutorial, you learned how to use the Capacitor Get Contacts package to fetch contacts in your Capacitor app. You installed the package, synced your project with Capacitor, and used the `getContacts` method to retrieve contacts from the device's contact list. You also saw an example code snippet demonstrating the usage of the `getContacts` method.

You can now integrate the Capacitor Get Contacts package into your own Capacitor projects and utilize contacts in your app's functionality.

Happy coding!