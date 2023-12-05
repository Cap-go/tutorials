---
title: "Using the Ionic Plugin UniqueDeviceID"
description: "A tutorial on how to use the ionic-plugin-uniquedeviceid package to get the unique device ID in an Ionic app."
created_at: "2022-10-01"
published: true
slug: "uniquedeviceid"
---

# Using the Ionic Plugin UniqueDeviceID

The `ionic-plugin-uniquedeviceid` package allows you to easily retrieve the unique device identifier in your Ionic app. This unique ID can be useful for various purposes, such as user tracking, analytics, or device-specific features.

In this tutorial, we will walk you through the steps to install and use the `ionic-plugin-uniquedeviceid` package in your Ionic app.

## Installation

First, make sure you have a working Ionic app set up. If you don't, you can create a new Ionic app by running the following command:

```bash
ionic start my-app blank
cd my-app
```

Next, install the `ionic-plugin-uniquedeviceid` package using npm:

```bash
npm install ionic-plugin-uniquedeviceid --save
```

After the installation is complete, you need to add the plugin to your project:
 
```bash
ionic cap sync
```

## Usage

Once the installation is complete, you can use the `UniqueDeviceID` plugin to retrieve the unique device ID in your Ionic app.

Import the `UniqueDeviceID` plugin in your TypeScript file:

```typescript
import { UniqueDeviceID } from 'ionic-plugin-uniquedeviceid/ngx';
```

Then, inject the `UniqueDeviceID` plugin into your component's constructor:

```typescript
constructor(private uniqueDeviceID: UniqueDeviceID) {}
```

Now you can call the `get()` method of the `UniqueDeviceID` plugin to retrieve the unique device ID:

```typescript
this.uniqueDeviceID.get()
  .then((uuid: any) => {
    console.log('Device UUID:', uuid);
  })
  .catch((error: any) => {
    console.error('Failed to get device UUID:', error);
  });
```

The `get()` method returns a Promise that resolves to the unique device ID. You can then use this ID in your app as needed.

## Summary

In this tutorial, we showed you how to install and use the `ionic-plugin-uniquedeviceid` package to retrieve the unique device ID in an Ionic app. We covered the installation process and demonstrated how to call the `get()` method to obtain the device ID. 

Using the unique device ID can be valuable for various purposes in your Ionic app.