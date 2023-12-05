---
title: "Using capacitor-plugin-seon"
description: "A tutorial on how to use the capacitor-plugin-seon package"
created_at: "2022-01-01"
published: true
slug: capacitor-plugin-seon
---

# Using capacitor-plugin-seon

This tutorial will guide you through the process of using the capacitor-plugin-seon package in your Capacitor project.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor
- NPM or Yarn

## Installation

First, install the capacitor-plugin-seon package by running the following command:

```bash
npm install capacitor-plugin-seon
```

or

```bash
yarn add capacitor-plugin-seon
```

## Integration

To integrate the `capacitor-plugin-seon` package into your Capacitor project, follow these steps:

### 1. Import the package

Import the `capacitor-plugin-seon` package into your project by adding the following line in your code:

```typescript
import 'capacitor-plugin-seon';
```

### 2. Initialize the plugin

Initialize the plugin by calling the `initialize` method provided by the `capacitor-plugin-seon` package. This method should be called before using any other functionality of the plugin. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { SeonPlugin } = Plugins;

// Initialize the plugin
SeonPlugin.initialize();
```

### 3. Use the plugin functions

Once the plugin is initialized, you can use the various functions provided by the `capacitor-plugin-seon` package. Here are some examples:

#### Example 1: Track Event

To track an event using the plugin, use the `trackEvent` function. This function takes an event name and optional event properties as parameters. Here's an example:

```typescript
SeonPlugin.trackEvent('ViewProduct', {
  productId: '123',
  productName: 'Test Product',
});
```

#### Example 2: Identify User

To identify a user using the plugin, use the `identifyUser` function. This function takes a user ID and optional user properties as parameters. Here's an example:

```typescript
SeonPlugin.identifyUser('user123', {
  name: 'John Doe',
  email: 'john.doe@example.com',
});
```

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-seon package in a Capacitor project. We covered the installation process, integration steps, and usage examples for some of the plugin functions. Now you can start using the capacitor-plugin-seon package to track events and identify users in your Capacitor app.

Remember to refer to the package documentation for more information on all available functions and their parameters.
