---
title: How to Use @bangonkali/capacitor-duckdb Package
description: Learn how to integrate and use the @bangonkali/capacitor-duckdb package in your Capacitor app.
created_at: 2022-08-15
published: true
slug: capacitor-duckdb.git
locale: en
---

# Integrating Capacitor DuckDB Plugin

In this tutorial, we will guide you through the process of integrating the `@bangonkali/capacitor-duckdb` plugin into your Capacitor app.

## Step 1: Install the Plugin
```bash
npm install @bangonkali/capacitor-duckdb
npx cap sync
```

## Step 2: Add the Required Permissions

Make sure to add the required permissions to your `android/app/src/main/AndroidManifest.xml` and `ios/App/App/Info.plist` files based on the platform.

## Step 3: Initialize the Plugin

You need to initialize the plugin in your project. Here's an example of how you can do it:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorDuckDB } = Plugins;

// Initialize the plugin
CapacitorDuckDB.initialize();
```

## Step 4: Using the Plugin

Now that the plugin is installed and initialized, you can start using its functionalities in your app. Here is a basic example of using the plugin:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorDuckDB } = Plugins;

async function executeQuery() {
  const query = 'SELECT * FROM users';
  try {
    const result = await CapacitorDuckDB.query({ query });
    console.log('Query Result:', result);
  } catch (error) {
    console.error('Query Error:', error);
  }
}
```

## Step 5: Additional Configuration

Depending on your use case, you may need to configure additional settings or parameters when working with the `@bangonkali/capacitor-duckdb` plugin. Refer to the plugin documentation for more information on advanced configurations.

That's it! You have successfully integrated and utilized the `@bangonkali/capacitor-duckdb` plugin in your Capacitor app. Happy coding!