---
title: "Using capacitor-plugin-mocklocation"
description: "Learn how to use the capacitor-plugin-mocklocation package to simulate mock location data in your Capacitor project."
created_at: "2022-01-25"
published: true
slug: "capacitorlocation2mock"
---

# Using capacitor-plugin-mocklocation

In this tutorial, we will learn how to use the `capacitor-plugin-mocklocation` package to simulate mock location data in your Capacitor project. This plugin allows you to test location-based features in your app without actually being in that location.

## Installation

To get started, install the `capacitor-plugin-mocklocation` package using npm:

```bash
npm install capacitor-plugin-mocklocation
```

Next, sync the Capacitor project to update the native configuration files:

```bash
npx cap sync
```

## API Usage

The `capacitor-plugin-mocklocation` package provides two main methods: `echo()` and `check()`. Let's explore each of these methods:

### 1. echo()

The `echo()` method allows you to send a string value to the plugin and receive the same value as a response. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { MockLocationPlugin } = Plugins;

const response = await MockLocationPlugin.echo({ value: 'Hello from mocklocation plugin' });
console.log(response.value); // Output: Hello from mocklocation plugin
```

### 2. check()

The `check()` method allows you to perform a check with a string value and get a response. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { MockLocationPlugin } = Plugins;

const response = await MockLocationPlugin.check({ value: 'Check mocklocation availability' });
console.log(response.value); // Output: Mocklocation is available
```

## Conclusion

Congratulations! You have learned how to use the `capacitor-plugin-mocklocation` package to simulate mock location data in your Capacitor project. This can be useful for testing location-based features without physically being in different locations. Feel free to explore the other methods and functionalities provided by this plugin to further enhance your app's location testing capabilities.