---
title: "Tutorial: Using the capacitor-check-ismock-location package"
description: "In this tutorial, we will learn how to use the capacitor-check-ismock-location package to check if the user's device is using mock location. We will cover the installation, API, and usage of the package."
created_at: "2022-03-15"
published: true
slug: capacitor-check-ismock-location
---

# Tutorial: Using the capacitor-check-ismock-location package

In this tutorial, we will learn how to use the capacitor-check-ismock-location package to check if the user's device is using mock location. We will cover the installation, API, and usage of the package.

## Installation

To install the capacitor-check-ismock-location package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command:

```bash
npm install capacitor-check-ismock-location
npx cap sync
```

This will install the package and synchronize it with your Capacitor project.

## API

The capacitor-check-ismock-location package provides the following API methods:

### check(options)

This method allows you to check if the device is using mock location.

Parameters:

- `options` (object): An object containing the following properties:
  - `value` (string): A value to pass to the check method.

Returns:

- Promise<{ value: string }>: A promise that resolves to an object with the `value` property.

Usage:

```javascript
import { Plugins } from '@capacitor/core';

const { MockLocationPlugin } = Plugins;

async function checkIsMockLocation() {
  try {
    const result = await MockLocationPlugin.check({ value: "test" });
    console.log(result.value); // result value
  } catch (error) {
    console.error(error);
  }
}

checkIsMockLocation();
```

### echo(options)

This method echoes the provided value.

Parameters:

- `options` (object): An object containing the following properties:
  - `value` (string): A value to echo.

Returns:

- Promise<{ value: string }>: A promise that resolves to an object with the `value` property.

Usage:

```javascript
import { Plugins } from '@capacitor/core';

const { MockLocationPlugin } = Plugins;

async function echoValue() {
  try {
    const result = await MockLocationPlugin.echo({ value: "Hello, Capacitor!" });
    console.log(result.value); // "Hello, Capacitor!"
  } catch (error) {
    console.error(error);
  }
}

echoValue();
```

That's it! Now you know how to use the capacitor-check-ismock-location package to check if the user's device is using mock location. You can explore more options and functionalities provided by the package in the official documentation.

Remember to always handle errors and exceptions appropriately in your code.

Happy coding!