```md
---
"title": "Using the Capacitor Secure Share Plugin",
"description": "Tutorial on how to use the @okode/capacitor-plugin-secure-share package in Capacitor applications",
"created_at": "2021-10-26",
"published": true,
"slug": "capacitor-plugin-secure-share.git"
---

# Using the Capacitor Secure Share Plugin

## Installation

To start using the Capacitor Secure Share Plugin, you need to first install the package. Run the following commands:

```bash
npm install @okode/capacitor-plugin-secure-share
npx cap sync
```

## API

The Capacitor Secure Share Plugin provides the following methods:

### save(data)

This method allows you to save data securely. It takes a map of string keys and values to be saved.

### retrieve()

Use this method to retrieve the saved data. It returns a map of string keys and values.

### retrieveFrom(data)

This method retrieves data from a specified package. Provide the package name as a parameter to retrieve data from that package.

## Example Usage

```typescript
import { Plugins } from '@capacitor/core';

const { SecureShare } = Plugins;

// Save data
await SecureShare.save({ key: 'value' });

// Retrieve data
const savedData = await SecureShare.retrieve();
console.log(savedData);
```

This tutorial covered the basics of using the Capacitor Secure Share Plugin in your Capacitor application. Feel free to explore more advanced use cases based on this foundation.
```