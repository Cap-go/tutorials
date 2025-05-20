---
title: Using Capacitor Secure Storage Plugin Tutorial
description: >-
  A comprehensive guide on how to use the capacitor-secure-storage-plugin
  package to securely store data in Capacitor apps.
created_at: '2022-03-25'
published: true
slug: capacitor-secure-storage-plugin.git
locale: en
---

# Using Capacitor Secure Storage Plugin Tutorial

In this tutorial, you will learn how to use the `capacitor-secure-storage-plugin` package to securely store data in Capacitor apps.

## Step 1: Install the Plugin

First, install the `capacitor-secure-storage-plugin` package using npm:

```bash
npm install capacitor-secure-storage-plugin
npx cap sync
```

## Step 2: Initialize the Secure Storage

Initialize the secure storage in your app. You can include this code in your app's initialization process.

```typescript
import { Plugins } from '@capacitor/core';

const { SecureStoragePlugin } = Plugins;
SecureStoragePlugin.initialize();
```

## Step 3: Store and Retrieve Data

You can now store and retrieve data securely in the Capacitor secure storage.

### Storing Data

```typescript
SecureStoragePlugin.set({ key: 'myKey', value: 'mySecretData' }).then(() => {
    console.log('Data stored successfully');
}).catch((error) => {
    console.error('Error storing data:', error);
});
```

### Retrieving Data

```typescript
SecureStoragePlugin.get({ key: 'myKey' }).then(({ value }) => {
    console.log('Retrieved data:', value);
}).catch((error) => {
    console.error('Error retrieving data:', error);
});
```

## Step 4: Remove Data

To remove data from the secure storage, use the following code:

```typescript
SecureStoragePlugin.remove({ key: 'myKey' }).then(() => {
    console.log('Data removed successfully');
}).catch((error) => {
    console.error('Error removing data:', error);
});
```

This tutorial covers the basic usage of the `capacitor-secure-storage-plugin` package for secure data storage in Capacitor apps.
```
```
