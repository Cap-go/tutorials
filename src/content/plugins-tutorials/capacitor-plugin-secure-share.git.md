---
"title": "Tutorial on using @okode/capacitor-plugin-secure-share package"
"description": "This tutorial covers how to use @okode/capacitor-plugin-secure-share package in your Capacitor project."
"created_at": "2021-08-19"
"published": true
"slug": "capacitor-plugin-secure-share.git"
---

# Capacitor Secure Share Plugin Tutorial

In this tutorial, we will learn how to use the `@okode/capacitor-plugin-secure-share` package in a Capacitor project.

## Installation

First, install the package using npm:

```bash
npm install @okode/capacitor-plugin-secure-share
npx cap sync
```

## Save Data

To save data using the plugin, you can use the `save` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';
const { SecureSharePlugin } = Plugins;

SecureSharePlugin.save({ key: 'value' });
```

## Retrieve Data

You can retrieve saved data using the `retrieve` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';
const { SecureSharePlugin } = Plugins;

const data = await SecureSharePlugin.retrieve();
console.log(data);
```

## Retrieve Data from Package

If you want to retrieve data saved by a specific package, you can use the `retrieveFrom` method. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';
const { SecureSharePlugin } = Plugins;

const data = await SecureSharePlugin.retrieveFrom({ packageName: 'com.example.package' });
console.log(data);
```

This concludes our tutorial on using the `@okode/capacitor-plugin-secure-share` package in Capacitor projects.
```