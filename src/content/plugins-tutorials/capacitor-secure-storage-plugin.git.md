```md
title: "Using capacitor-secure-storage-plugin Package"
description: "Learn how to implement secure storage in your Capacitor app with the capacitor-secure-storage-plugin package."
created_at: "2023-10-29"
published: true
slug: "capacitor-secure-storage-plugin-git"

## Using capacitor-secure-storage-plugin Package

The capacitor-secure-storage-plugin package allows you to implement secure storage functionality in your Capacitor app, providing a secure way to store sensitive data such as authentication tokens, API keys, and user credentials.

To get started, follow these steps:

### 1. Installation

Ensure you have Capacitor installed in your project. Then, install the capacitor-secure-storage-plugin package:

```bash
npm install capacitor-secure-storage-plugin
npx cap sync
```

### 2. Usage

#### Initialize Secure Storage

You need to initialize secure storage before using it in your app. Import the plugin and use the `init` method:

```typescript
import { CapacitorSecureStoragePlugin } from 'capacitor-secure-storage-plugin';

const secureStorage = new CapacitorSecureStoragePlugin();

secureStorage.init().then(() => {
  console.log('Secure storage initialized');
}).catch((error) => {
  console.error('Error initializing secure storage:', error);
});
```

#### Store Data

To store data securely, use the `set` method:

```typescript
secureStorage.set({ key: 'authToken', value: 'myTokenValue' }).then(() => {
  console.log('Data stored securely');
}).catch((error) => {
  console.error('Error storing data:', error);
});
```

#### Retrieve Data

You can retrieve stored data using the `get` method:

```typescript
secureStorage.get({ key: 'authToken' }).then((data) => {
  console.log('Retrieved data:', data.value);
}).catch((error) => {
  console.error('Error retrieving data:', error);
});
```

#### Remove Data

To remove data from secure storage, use the `remove` method:

```typescript
secureStorage.remove({ key: 'authToken' }).then(() => {
  console.log('Data removed successfully');
}).catch((error) => {
  console.error('Error removing data:', error);
});
```

### 3. Conclusion

You have now learned how to use the capacitor-secure-storage-plugin package to add secure storage capabilities to your Capacitor app. Securely store sensitive information and protect your users' data with this plugin.
```
```