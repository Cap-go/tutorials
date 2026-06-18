```markdown
---
"title": "Using @capgo/capacitor-data-storage-sqlite package tutorial",
"description": "A step-by-step guide on how to use the @capgo/capacitor-data-storage-sqlite package in your Capacitor project.",
"created_at": "2022-01-20",
"published": true,
"slug": "capacitor-data-storage-sqlite.git"
---

# Using @capgo/capacitor-data-storage-sqlite package

Capacitor Data Storage SQlite Plugin is a custom Native Capacitor plugin providing a key-value permanent store for simple data of type string only to SQLite on IOS, Android, and Electron platforms and to IndexDB for the Web platform.

## Installation

To install the @capgo/capacitor-data-storage-sqlite package in your Capacitor project, run the following command:

```bash
npm install @capgo/capacitor-data-storage-sqlite
```

## Configuration

Once the package is installed, you need to configure it in your `capacitor.config.json` file. Here is an example of how you can set up the plugin:

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
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: true,
      iosKeychainPrefix: 'angular-sqlite-app-starter',
      iosBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite"
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth: false,
        biometricTitle: "Biometric login for capacitor sqlite",
        biometricSubTitle: "Log in using your biometric"
      },
      electronIsEncryption: true,
      electronWindowsLocation: "C:\\ProgramData\\CapacitorDatabases",
      electronMacLocation: "/Volumes/Development_Lacie/Development/Databases",
      electronLinuxLocation: "Databases"
    }
  }
};
export default config;
```

## Usage

Now you can start using the @capgo/capacitor-data-storage-sqlite package in your application:

```typescript
import { DataStorageSqlite } from '@capgo/capacitor-data-storage-sqlite';

const dataStorage = new DataStorageSqlite();

// Example of storing data
dataStorage.setItem('key', 'value').then(() => {
  console.log('Data stored successfully!');
});

// Example of retrieving data
dataStorage.getItem('key').then((value) => {
  console.log('Retrieved value:', value);
});
```

This tutorial provides a basic overview of how to use the @capgo/capacitor-data-storage-sqlite package in your Capacitor project. For more advanced usage and features, refer to the official documentation.

For more information about the package, you can visit the [Capgo GitHub repository](https://github.com/Cap-go/capacitor-data-storage-sqlite).
```