---
title: "Using the capacitor-contacts-plugin"
description: "A tutorial on how to use the @byrds/capacitor-contacts package to manage phone contacts in your Capacitor app."
created_at: "2022-03-01"
published: true
slug: "capacitor-contacts-plugin"
---

# Using the capacitor-contacts-plugin

The `@byrds/capacitor-contacts` package is a native Capacitor plugin that allows you to manage phone contacts in your Capacitor app for Ionic. It provides methods to retrieve contact information and handle permissions. In this tutorial, we will walk through the steps for installing and using the capacitor-contacts-plugin in your project.

## Prerequisites

Before getting started, make sure you have completed the following prerequisites:

- Setup your project with Capacitor. If you haven't done this yet, please refer to the [Capacitor documentation](https://capacitor.ionicframework.com/docs/) for detailed instructions.
- Install the necessary dependencies by running the following command in your project directory:

```
cd my-app
npm install --save @capacitor/core @capacitor/cli
```

## Installing capacitor-contacts-plugin

To install the `@byrds/capacitor-contacts` package, follow these steps:

1. Initialize Capacitor in your project by running the following command:

```
npx cap init
```

2. Add the platforms you want to use. For example, to add Android and iOS platforms, run the following commands:

```
npx cap add android
npx cap add ios
```

3. Install the capacitor-contacts-plugin package by running the following command:

```
npm install --save @byrds/capacitor-contacts
```

4. Sync your project with Capacitor to update the native projects:

```
ionic capacitor sync
```

## Usage

Once the capacitor-contacts-plugin is installed, you can use its methods in your TypeScript code. Here's an example of how to retrieve contacts:

1. Import the `Plugins` object from `@capacitor/core` and the `CapContacts` plugin from `@byrds/capacitor-contacts` in your TypeScript file:

```typescript
import { Plugins } from "@capacitor/core";
const { CapContacts } = Plugins;
```

2. Use the `getContacts` method to retrieve contacts and log the result:

```typescript
CapContacts.getContacts().then(result => {
  console.log(result);
  for (const contact of result.contacts) {
    console.log(contact);
  }
});
```

The `getContacts` method returns a Promise that resolves to an object with a `contacts` property containing an array of contact objects. Each contact object has properties such as `contactId`, `displayName`, `phoneNumbers`, `emails`, and more.

That's it! You can now use the retrieved contact information in your application.

## Permissions

To access the contacts on the device, the capacitor-contacts-plugin requires certain permissions. Here's how to handle permissions using the plugin:

1. Use the `getPermissions` method to check the permission status:

```typescript
CapContacts.getPermissions().then(permissionStatus => {
  if (permissionStatus.granted) {
    // Permission is granted, proceed with retrieving contacts
  } else {
    // Permission is not granted, handle accordingly
  }
});
```

The `getPermissions` method returns a Promise that resolves to an object with a `granted` property indicating whether the permission is granted or not.

2. If the permission is not granted, you can request it using the appropriate method for your platform. For example, on iOS, you can show a permission dialog by adding the following entry to your `info.plist` file:

```xml
<key>NSContactsUsageDescription</key>
<string>We need access to your contacts in order to do something.</string>
```

On Android, you need to add the following permissions to your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.WRITE_CONTACTS" />
```

Make sure to explain why your app needs access to contacts in the permission description.

## Wrapping Up

In this tutorial, you learned how to install and use the capacitor-contacts-plugin to manage phone contacts in your Capacitor app. You saw how to retrieve contact information and handle permissions using the plugin's methods. Now you can incorporate contact management functionality into your Ionic hybrid app with ease.

Explore the [documentation](https://github.com/byrdsandbytes/capContactsDemo) and experiment with different use cases to fully leverage the power of the capacitor-contacts-plugin in your projects.