---
title: "Using @aparajita/capacitor-secure-storage in Capacitor"
description: "This tutorial will guide you on how to use the @aparajita/capacitor-secure-storage package in your Capacitor project."
created_at: "2022-10-10"
published: true
slug: capacitor-secure-storage
---

# Using @aparajita/capacitor-secure-storage in Capacitor

In this tutorial, we will learn how to integrate and use the @aparajita/capacitor-secure-storage package in your Capacitor project. The @aparajita/capacitor-secure-storage package provides a secure and encrypted storage solution for sensitive data in your mobile applications.

## Prerequisites

Before we begin, ensure that you have a Capacitor project set up and running. You should also have the necessary development tools and dependencies installed. If you haven't set up Capacitor yet, you can follow the official Capacitor documentation for detailed instructions.

## Installing the Package

To get started, open your project directory in the terminal and install the @aparajita/capacitor-secure-storage package using the following command:

```bash
npm install @aparajita/capacitor-secure-storage
```

## Initializing the Plugin

To use the @aparajita/capacitor-secure-storage plugin, you need to initialize it in your Capacitor project. Open your main `index.ts` or `main.ts` (depending on your project setup) file and import the plugin:

```typescript
import { CapacitorSecureStorage } from '@aparajita/capacitor-secure-storage';
```

Next, initialize the plugin in the `capacitorPlugins` array:

```typescript
CapacitorSecureStorage.init();
```

## Storing Data

Once the plugin is initialized, you can start storing data securely. To store data, use the `setItem` method provided by the `CapacitorSecureStorage` plugin:

```typescript
CapacitorSecureStorage.setItem(key: string, value: string): Promise<void>
```

Here, `key` is the identifier for your data, and `value` is the data you want to store. 

Example usage:

```typescript
CapacitorSecureStorage.setItem('password', 'mysecretpassword')
  .then(() => {
    console.log('Data stored successfully.');
  })
  .catch((error) => {
    console.error('Failed to store data:', error);
  });
```

## Retrieving Data

To retrieve data from the secure storage, use the `getItem` method:

```typescript
CapacitorSecureStorage.getItem(key: string): Promise<string>
```

Here, `key` is the identifier for the data you want to retrieve.

Example usage:

```typescript
CapacitorSecureStorage.getItem('password')
  .then((value) => {
    console.log('Retrieved data:', value);
  })
  .catch((error) => {
    console.error('Failed to retrieve data:', error);
  });
```

## Removing Data

If you want to remove a specific piece of data from the secure storage, you can use the `removeItem` method:

```typescript
CapacitorSecureStorage.removeItem(key: string): Promise<void>
```

Here, `key` is the identifier for the data you want to remove.

Example usage:

```typescript
CapacitorSecureStorage.removeItem('password')
  .then(() => {
    console.log('Data removed successfully.');
  })
  .catch((error) => {
    console.error('Failed to remove data:', error);
  });
```

## Conclusion

In this tutorial, we have learned how to integrate and use the @aparajita/capacitor-secure-storage package in a Capacitor project. We covered the installation process, initialization of the plugin, storing data securely, retrieving data, and removing data from the secure storage. With the @aparajita/capacitor-secure-storage package, you can now securely store sensitive data in your mobile applications.

Remember to refer to the official documentation of the @aparajita/capacitor-secure-storage package for detailed information on its capabilities and additional features. Happy coding!