---
title: "Using the @capacitor-community/contacts Package"
description: "A tutorial on how to use the @capacitor-community/contacts package to fetch contacts in Capacitor"
created_at: "2022-10-10"
published: true
slug: "contacts"
---

# Using the @capacitor-community/contacts Package

In this tutorial, we will learn how to use the `@capacitor-community/contacts` package to fetch contacts in a Capacitor project. The `@capacitor-community/contacts` package is a community plugin that provides functionality for fetching contacts from the device's contact book.

## Prerequisites

Before we begin, make sure you have a Capacitor project set up. If you don't have one, you can create a new project using the following commands:

```sh
cd my-app
npm install --save @capacitor/core @capacitor/cli
npx cap init
```

Next, add the platforms you want to use:

```sh
npx cap add android
npx cap add ios
npx cap add electron
```

## Installation

To install the `@capacitor-community/contacts` package, run the following command in your project's root directory:

```sh
npm i --save @capacitor-community/contacts
```

Alternatively, you can use Yarn or PNPM:

```sh
yarn add @capacitor-community/contacts
pnpm add @capacitor-community/contacts
```

After installation, sync the Capacitor project to add the plugin:

```sh
npx cap sync
```

## Usage

### Fetching Contacts

To fetch contacts from the device's contact book, we can use the `getContacts` method provided by the `@capacitor-community/contacts` package. Here's an example of how to use it:

```js
import { Plugins } from '@capacitor/core';

const { Contacts } = Plugins;

async function fetchContacts() {
  try {
    const { contacts } = await Contacts.getContacts();
    console.log(contacts);
  } catch (error) {
    console.error(error);
  }
}
```

The `getContacts` method returns an object with a `contacts` property, which contains the fetched contacts. We can log the contacts to the console or use them as required in our application.

### Requesting Permissions

Before fetching contacts, we need to request the necessary permissions from the user. For iOS, we need to set a usage description in the `Info.plist` file, while for Android, we need to add the permissions in the `AndroidManifest.xml` file. Make sure to follow the platform-specific instructions mentioned in the package's documentation.

## Conclusion

In this tutorial, we learned how to use the `@capacitor-community/contacts` package to fetch contacts in a Capacitor project. We covered the installation process, how to fetch contacts using the `getContacts` method, and how to request the required permissions. You can now integrate contact fetching functionality in your Capacitor applications.

For more details and advanced usage options, refer to the official documentation of the `@capacitor-community/contacts` package.

Happy coding!