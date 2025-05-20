---
title: Using @capgo/capacitor-data-storage-sqlite Package
description: >-
  A step-by-step tutorial on how to use the @capgo/capacitor-data-storage-sqlite
  package in your Capacitor project.
created_at: '2021-10-19'
published: true
slug: capacitor-data-storage-sqlite-git
locale: en
---

# Using @capgo/capacitor-data-storage-sqlite Package

Capacitor Data Storage SQLite Plugin is a custom Native Capacitor plugin that provides a key-value permanent store for simple data of type string only to SQLite on iOS, Android, and Electron platforms, as well as to IndexDB for the Web platform.

## Getting Started

To start using the @capgo/capacitor-data-storage-sqlite package in your Capacitor project, follow these steps:

1. Install the package:
   ```bash
   npm install @capgo/capacitor-data-storage-sqlite
   ```

2. Import the plugin into your project:
   ```javascript
   import '@capgo/capacitor-data-storage-sqlite';
   ```

3. Initialize the plugin in your application code:
   ```javascript
   import { Plugins } from '@capacitor/core';

   const { CapacitorDataStorageSQLite } = Plugins;

   // Usage examples:
   // - Save key-values
   // - Retrieve data
   // - Delete records
   // - Handle errors
   ```

4. Start using the plugin to store and manage your data efficiently.

## Browser Support

The plugin follows the guidelines from the Capacitor Team. For detailed information on the plugin's support for different browsers and platforms, refer to the official documentation.

And that's it! You are now ready to utilize the @capgo/capacitor-data-storage-sqlite package in your Capacitor project for data storage.

For more advanced features and methods, please check the official documentation and tutorials provided by the plugin maintainers.

Happy coding!
```
```
