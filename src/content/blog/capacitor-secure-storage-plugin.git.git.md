---
"title": "Using capacitor-secure-storage-plugin Package",
"description": "A tutorial on how to use the @atroo/capacitor-secure-storage-plugin package for secure storage of string values on iOS and Android.",
"created_at": "October 14, 2021",
"published": true,
"slug": "capacitor-secure-storage-plugin-git",
---

# Using @atroo/capacitor-secure-storage-plugin Package

## Overview
The `@atroo/capacitor-secure-storage-plugin` package is a Capacitor plugin designed for securely storing string values on both iOS and Android platforms. This tutorial will guide you through the installation process, basic usage, and platform-specific information regarding this plugin.

### Installation
To begin using the `@atroo/capacitor-secure-storage-plugin` package, you first need to install it in your project.

```bash
npm install @atroo/capacitor-secure-storage-plugin
```

### Usage
1. Import the `SecureStoragePlugin` from the package in the component where you want to use it:

```typescript
import { SecureStoragePlugin } from '@atroo/capacitor-secure-storage-plugin';
```

2. Writing Data:
```typescript
const key = 'username';
const value = 'hellokitty2';

const storeData = async () => {
  const success = await SecureStoragePlugin.set({ key, value });
  console.log(success);
}
```

3. Reading Data:
```typescript
async getUsername(key: string) {
  return await SecureStoragePlugin.get({ key });
}
```

### API Documentation
For a comprehensive list of available API methods, refer to the [full API documentation](./DOCS.md).

### Platform-Specific Information
- **iOS**: Utilizes SwiftKeychainWrapper for secure storage.
- **Android**: Implemented with AndroidKeyStore and SharedPreferences. Note that for API < 18, values are stored as base64 encoded strings.
- **Web**: No secure storage available; values are stored in LocalStorage.

By following this tutorial, you can effectively leverage the capabilities of the `@atroo/capacitor-secure-storage-plugin` package for secure storage in your Capacitor project.