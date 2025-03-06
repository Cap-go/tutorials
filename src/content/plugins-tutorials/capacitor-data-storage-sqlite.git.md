---
"title": "How to Use @capgo/capacitor-data-storage-sqlite Package",
"description": "Learn to use the @capgo/capacitor-data-storage-sqlite package for SQLite data storage in Capacitor 6.",
"created_at": "2022-01-21",
"published": true,
"slug": "capacitor-data-storage-sqlite"

## Introduction
In this tutorial, you will learn how to use the **@capgo/capacitor-data-storage-sqlite** package for SQLite data storage in Capacitor 6. This package provides a key-value permanent store for simple data of type string only to SQLite on iOS, Android, and Electron platforms and to IndexDB for the Web platform.

### Prerequisites
Make sure you have Capacitor 6 installed in your project. If not, follow the official Capacitor documentation to set it up.

## Installation
Install the **@capgo/capacitor-data-storage-sqlite** package using npm:
```bash
npm install @capgo/capacitor-data-storage-sqlite
```

## Setup
Add the plugin configuration to your `capacitor.config.ts` file as follows:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'MyApp',
  webDir: 'www',
  plugins: {
    CapacitorDataStorageSqlite: {} // Add any specific configurations here
  }
};
export default config;
```

## Usage
You can now use the **@capgo/capacitor-data-storage-sqlite** methods in your Capacitor project. Here is an example of how to save data to the local SQLite database:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorDataStorageSqlite } = Plugins;

const saveDataToDatabase = async () => {
  const data = 'Hello, World!';
  
  const saved = await CapacitorDataStorageSqlite.set({ key: 'my_key', value: data });
  
  if (saved) {
    console.log('Data saved successfully!');
  } else {
    console.error('Failed to save data.');
  }
};

saveDataToDatabase();
```

## Conclusion
You have learned how to integrate and use the **@capgo/capacitor-data-storage-sqlite** package in your Capacitor 6 project for local data storage using SQLite.

Explore the official plugin documentation for advanced configurations and methods to further enhance your data storage capabilities. 

Happy coding!
