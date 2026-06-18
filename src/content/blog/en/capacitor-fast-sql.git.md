---
title: "Using @capgo/capacitor-fast-sql Package Tutorial"
description: "This tutorial will guide you on how to use the @capgo/capacitor-fast-sql package in Capacitor projects."
created_at: 2023-10-14
published: true
slug: capacitor-fast-sql.git
locale: en
---

# Using @capgo/capacitor-fast-sql Package Tutorial

In this tutorial, we will walk through the steps of using the @capgo/capacitor-fast-sql package in your Capacitor project.

## Installation

To get started with @capgo/capacitor-fast-sql, you need to install the package in your Capacitor project. You can do this by running the following command:

```bash
npm install @capgo/capacitor-fast-sql
```

## Configuration

After installing the package, you need to configure it in your project. You can add the plugin to the main `capacitor.config.json` or `capacitor.config.ts` file. Here's an example configuration for the SQLite plugin:

```ts
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jeep.app.ionic7.angular.sqlite',
  appName: 'ionic7-angular-sqlite-starter',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorSQLite: {
      // Configuration options for iOS, Android, and Electron platforms
    }
  }
};
export default config;
```

Make sure to customize the configuration based on your project requirements and platform-specific settings.

## Usage

With the @capgo/capacitor-fast-sql package installed and configured, you can now start using SQLite in your Capacitor project. You can perform operations like creating databases, executing queries, and managing data using the SQLite plugin.

Here's a simple example of how you can create a SQLite database:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorSQLite } = Plugins;

async function createDatabase() {
  const { result } = await CapacitorSQLite.open({ database: 'my_db.db' });
  if (result) {
    console.log('Database created successfully!');
  } else {
    console.error('Error creating database.');
  }
}
```

## Conclusion

In this tutorial, we covered the installation, configuration, and basic usage of the @capgo/capacitor-fast-sql package in a Capacitor project. You can now explore more features and functionalities of the package to enhance your SQLite database operations in Capacitor applications.

Happy coding!
