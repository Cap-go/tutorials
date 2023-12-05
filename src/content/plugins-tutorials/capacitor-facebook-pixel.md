---
title: "Using the @falconeta/capacitor-facebook-pixel Package"
description: "This tutorial explains how to use the @falconeta/capacitor-facebook-pixel package to enable pixel functionalities in your Capacitor app."
created_at: "2021-11-10"
published: true
slug: "capacitor-facebook-pixel"
---

# Using the @falconeta/capacitor-facebook-pixel Package

The @falconeta/capacitor-facebook-pixel package is a plugin that allows you to add pixel functionalities to your Capacitor app. This tutorial will guide you through the installation and usage of the package.

## Installation

To install the @falconeta/capacitor-facebook-pixel package, follow these steps:

1. Open your terminal.
2. Run the command `npm install @falconeta/capacitor-facebook-pixel` to install the package.
3. Run the command `npx cap sync` to synchronize the package with your Capacitor project.

## Usage

Once you have installed the package, you can start using its API. The package provides the following API method:

### echo(options: { value: string }): Promise<{ value: string }>

This method echoes the provided value.

#### Parameters

- options: The options object containing the `value` property.

#### Returns

A Promise that resolves to an object with the `value` property.

To use this method, follow these steps:

1. Import the package in your project:

```typescript
import { Plugins } from '@capacitor/core';
import 'capacitor-facebook-pixel';

const { FacebookPixelPlugin } = Plugins;
```

2. Call the `echo` method with the desired `value`:

```typescript
FacebookPixelPlugin.echo({ value: 'Hello, Capacitor!' })
  .then((result) => {
    console.log(result); // { value: 'Hello, Capacitor!' }
  })
  .catch((error) => {
    console.error(error);
  });
```

Make sure to replace `'Hello, Capacitor!'` with your desired value.

That's it! You have successfully installed and used the @falconeta/capacitor-facebook-pixel package in your Capacitor app.

Now you can explore the other functionalities provided by the package and integrate them into your app as needed.

Remember to refer to the package's documentation for more details on its API and usage.

Happy coding!