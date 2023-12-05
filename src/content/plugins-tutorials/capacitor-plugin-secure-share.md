---
title: "Using @okode/capacitor-plugin-secure-share Package"
description: "A tutorial on using the @okode/capacitor-plugin-secure-share package to securely share data in a Capacitor app."
created_at: "2021-09-30"
published: true
slug: "capacitor-plugin-secure-share"
---

# Using @okode/capacitor-plugin-secure-share Package

This tutorial will guide you through the process of using the @okode/capacitor-plugin-secure-share package to securely share data in a Capacitor app.

## Installation

To start using the @okode/capacitor-plugin-secure-share package in your Capacitor app, follow these steps:

1. Open your terminal and navigate to your project's root directory.
2. Run the following command to install the package:

```bash
npm install @okode/capacitor-plugin-secure-share
```

3. Next, sync the Capacitor project:

```bash
npx cap sync
```

## API

This package provides the following methods:

### `save(data: Record<string, string>): Promise<void>`

This method allows you to save data securely. It takes a map of key-value pairs as input.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { SecureSharePlugin } = Plugins;

// Save data
SecureSharePlugin.save({ key1: 'value1', key2: 'value2' })
  .then(() => {
    console.log('Data saved successfully');
  })
  .catch((error) => {
    console.error('Failed to save data:', error);
  });
```

### `retrieve(): Promise<Record<string, string>>`

This method retrieves the saved data.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { SecureSharePlugin } = Plugins;

// Retrieve data
SecureSharePlugin.retrieve()
  .then((data) => {
    console.log('Retrieved data:', data);
  })
  .catch((error) => {
    console.error('Failed to retrieve data:', error);
  });
```

### `retrieveFrom(data: { packageName: string }): Promise<Record<string, string>>`

This method retrieves data shared from the specified package.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { SecureSharePlugin } = Plugins;

// Retrieve data from a specific package
SecureSharePlugin.retrieveFrom({ packageName: 'com.example.package' })
  .then((data) => {
    console.log('Retrieved data:', data);
  })
  .catch((error) => {
    console.error('Failed to retrieve data:', error);
  });
```

That's it! You've learned how to use the @okode/capacitor-plugin-secure-share package in your Capacitor app to securely share data.

Remember to consult the plugin documentation for more advanced usage and configuration options.