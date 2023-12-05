---
title: "Using Capacitor Permissions Package"
description: "This tutorial will guide you on how to use the capacitor-permissions package to manage permissions in your Capacitor app."
created_at: "September 21, 2021"
published: true
slug: capacitor-app-permissions
---

# Using Capacitor Permissions Package

In this tutorial, we will learn how to use the `capacitor-permissions` package to manage permissions in your Capacitor app.

## Installation

First, let's install the `capacitor-permissions` package in your project. Open your terminal and navigate to your project's root directory. Run the following command:

```bash
npm install capacitor-permissions
```

## Importing the Package

Next, we need to import the `capacitor-permissions` package in our code. Open the file where you want to use the permissions, typically a component file, and add the following import statement:

```javascript
import { Plugins } from '@capacitor/core';
import 'capacitor-permissions';
```

## Checking Permission Status

To check the status of a particular permission, we can use the `checkPermission()` method provided by the `capacitor-permissions` package. This method has the following syntax:

```javascript
const { Permissions } = Plugins;

const checkPermissionStatus = async (permission) => {
  const result = await Permissions.checkPermission({ permission });
  console.log(result);
};
```

Replace `permission` with the name of the permission you want to check, such as `camera` or `geolocation`. The `checkPermission()` method returns an object with the permission status.

## Requesting Permissions

To request a specific permission, we can use the `requestPermission()` method provided by the `capacitor-permissions` package. This method has the following syntax:

```javascript
const { Permissions } = Plugins;

const requestPermission = async (permission) => {
  const result = await Permissions.requestPermission({ permission });
  console.log(result);
};
```

Replace `permission` with the name of the permission you want to request. The `requestPermission()` method returns an object with the permission status after the user grants or denies the permission.

## Handling Permission Results

Once a permission request is made, you can handle the permission result using the `PermissionResult` interface provided by the `capacitor-permissions` package. This interface has the following properties:

- `state` - The permission state, which can be either `granted`, `denied`, or `prompt`.
- `canAskAgain` - A boolean indicating whether the user can be prompted to grant the permission again.
- `status` - The raw status code of the permission request.

Here's an example of handling a permission result:

```javascript
const { Permissions, PermissionResult } = Plugins;

const requestPermission = async (permission) => {
  const result: PermissionResult = await Permissions.requestPermission({ permission });

  switch (result.state) {
    case 'granted':
      console.log('Permission granted');
      break;
    case 'denied':
      console.log('Permission denied');
      break;
    case 'prompt':
      console.log('Permission prompt');
      break;
    default:
      console.log('Unknown permission state');
  }
};
```

## Conclusion

In this tutorial, we have learned how to use the `capacitor-permissions` package to manage permissions in your Capacitor app. We covered the installation process, checking permission status, requesting permissions, and handling permission results.

Now you can easily integrate permission management into your Capacitor app and provide a seamless user experience.

Feel free to explore more about the `capacitor-permissions` package in the official [Capacitor Permissions Plugin documentation](https://github.com/capacitorjs/capacitor-plugins/tree/main/packages/permissions).

Happy coding!