```md
---
"title": "Using Capacitor Secure Storage Plugin",
"description": "A tutorial on how to use the @atroo/capacitor-secure-storage-plugin package for storing string values securely on iOS and Android using Capacitor 3.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-secure-storage-plugin.git.git"
---

# Using Capacitor Secure Storage Plugin

The Capacitor Secure Storage Plugin allows you to securely store string values on both iOS and Android using Capacitor 3. This tutorial will guide you through the installation, usage, and example scenarios of this plugin.

## Installation

To install the Capacitor Secure Storage Plugin, run the following command in your project directory:

```
npm install @atroo/capacitor-secure-storage-plugin
```

## Usage

First, in the component where you want to use this plugin, add or modify the imports as follows:

```typescript
import { SecureStoragePlugin } from '@atroo/capacitor-secure-storage-plugin';
```

## Example

### Write Data

To write data using the Secure Storage Plugin, follow these steps:

```typescript
const key = 'username';
const value = 'hellokitty2';

const storeData = async () => {
  const success = await SecureStoragePlugin.set({ key, value })
  console.log(success)
}
```

### Read Data

To read data stored using the plugin, use the following function:

```typescript
async getUsername(key: string) {
  return await SecureStoragePlugin.get({ key });
}
```

## API

For detailed API documentation, you can refer to the [official docs](./DOCS.md).

## Platform-Specific Information

### iOS

The plugin uses SwiftKeychainWrapper under the hood for iOS.

*Warning: Up to version v0.4.0, a standard keychain was used. Since v0.5.0, there is a separate keychain wrapper.*

### Android

On Android, the plugin is implemented using AndroidKeyStore and SharedPreferences.

*Warning: For Android API < 18, values are stored as simple base64 encoded strings.*

### Web

There is no secure storage in the browser, so values are stored in LocalStorage (at least base64 encoded). The keys are prefixed with 'cap*sec*' to avoid conflicts.

```

```