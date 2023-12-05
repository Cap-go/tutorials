---
title: "Using capacitor-plugin-permissions"
description: "A tutorial on how to use the capacitor-plugin-permissions package in your Capacitor app."
created_at: "2021-12-15"
published: true
slug: capacitor-plugin-permissions
---

# Using capacitor-plugin-permissions

In this tutorial, we will learn how to use the capacitor-plugin-permissions package to manage permissions in your Capacitor app. This plugin allows you to request and check for various system permissions required by your app.

## Prerequisites

Before we begin, make sure you have Capacitor installed globally on your machine. You can install it by running the following command:

```
npm install -g @capacitor/core @capacitor/cli
```

Also, make sure you have created a Capacitor project or have an existing project ready to integrate the capacitor-plugin-permissions package.

## Installation

To install the capacitor-plugin-permissions package, open your Capacitor project's root directory in the terminal and run the following command:

```
npm install capacitor-plugin-permissions
```

## Usage

### Importing the Plugin

In your Capacitor project's main entry file (e.g., `index.ts`), import the capacitor-plugin-permissions plugin as follows:

```typescript
import { Plugins } from '@capacitor/core';

const { PermissionsPlugin } = Plugins;
```

### Checking Permission Status

Before requesting a permission, it's a good practice to check if the permission is already granted or denied. You can use the `checkPermission` method provided by the capacitor-plugin-permissions plugin.

```typescript
const checkPermissionStatus = async (permission: string) => {
  const result = await PermissionsPlugin.checkPermission({ permission });
  if (result.granted) {
    console.log(`Permission ${permission} is granted.`);
  } else {
    console.log(`Permission ${permission} is denied.`);
  }
};
```

### Requesting Permission

To request a permission, use the `requestPermission` method provided by the capacitor-plugin-permissions plugin.

```typescript
const requestPermission = async (permission: string) => {
  const result = await PermissionsPlugin.requestPermission({ permission });
  if (result.granted) {
    console.log(`Permission ${permission} is granted.`);
  } else {
    console.log(`Permission ${permission} is denied.`);
  }
};
```

### Example: Requesting Camera Permission

Here's an example of how to request the camera permission:

```typescript
const requestCameraPermission = async () => {
  const permission = 'camera';
  await requestPermission(permission);
};
```

### Handling Permission Results

When a permission is requested, you can handle the result in the same method or using Promises.

For example:

```typescript
const handlePermissionResult = async () => {
  const permission = 'camera';
  const result = await requestPermission(permission);

  if (result.granted) {
    // Permission granted. Do something.
  } else if (result.denied) {
    // Permission denied. Show an error message or handle accordingly.
  } else if (result.askAgain) {
    // Permission denied, but can be requested again. Show a dialog or instruct the user.
  } else {
    // Something went wrong. Handle the error.
  }
};
```

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-permissions package to manage permissions in a Capacitor app. We covered how to check permission status, request permissions, and handle permission results. You can now integrate this plugin into your Capacitor project and manage permissions effectively.

Remember to refer to the capacitor-plugin-permissions documentation for more detailed information and additional features provided by the plugin. Happy coding!