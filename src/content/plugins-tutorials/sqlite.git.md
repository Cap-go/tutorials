---
"title": "Using @capacitor-community/sqlite Package Tutorial",
"description": "Learn how to incorporate the @capacitor-community/sqlite package into your Capacitor project with this detailed tutorial.",
"created_at": "2023-10-15",
"published": true,
"slug": "sqlite-git"
---

# Using @capacitor-community/sqlite Package Tutorial

In this tutorial, you will learn how to integrate the `@capacitor-community/sqlite` package into your Capacitor project. This package provides SQLite functionality for your hybrid mobile applications, allowing you to store and manage data conveniently. Follow the steps below to get started:

## Step 1: Installation

First, install the `@capacitor-community/sqlite` package using npm or yarn:

```bash
npm install @capacitor-community/sqlite
```

or

```bash
yarn add @capacitor-community/sqlite
```

## Step 2: Integration

After installing the package, you need to add the plugin to your main `capacitor.config.json` file. Ensure that you configure the database location, encryption settings, and any biometric authentication options according to your application requirements. Here is an example configuration for the SQLite plugin in your `capacitor.config.json` file:

```json
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

## Step 3: Usage

You can now start using the SQLite API in your Capacitor application to interact with the SQLite database. Create, read, update, and delete data as needed for your application.

## Conclusion

Congratulations! You have successfully integrated the `@capacitor-community/sqlite` package into your Capacitor project. Start leveraging the power of SQLite in your hybrid mobile applications today.

For more information, you can refer to the official [documentation](https://github.com/capacitor-community/sqlite) provided by the plugin maintainers. Have fun coding with SQLite in Capacitor!