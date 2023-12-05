---
title: "Using capacitor-plugin-daocidi Package"
description: "This tutorial will guide you through the installation and usage of the capacitor-plugin-daocidi package in your Daocidi App."
created_at: "2021-12-15"
published: true
slug: daocidiapp-plugin
---

# Using capacitor-plugin-daocidi Package

The capacitor-plugin-daocidi package provides functionality for integrating Daocidi App with Capacitor. This tutorial will guide you through the installation and usage of this package in your Daocidi App.

## Installation

To install the capacitor-plugin-daocidi package, run the following command in your project's root directory:

```
npm install capacitor-plugin-daocidi
npx cap sync
```

## API

The capacitor-plugin-daocidi package provides the following API:

### echo

This API allows you to echo a string value. It takes an options object with a `value` property as a parameter and returns the echoed value.

```typescript
echo(options: { value: string }): any
```

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { DaocidiAppPlugin } = Plugins;

DaocidiAppPlugin.echo({ value: 'Hello World' })
  .then(result => {
    console.log(result.value); // Output: Hello World
  })
  .catch(error => {
    console.error(error);
  });
```

Make sure to import the `DaocidiAppPlugin` from the `@capacitor/core` package.

That's it! You have successfully installed and used the capacitor-plugin-daocidi package in your Daocidi App. Enjoy building with Daocidi and Capacitor!