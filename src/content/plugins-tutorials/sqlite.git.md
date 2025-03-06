---
"title": "Using @capacitor-community/sqlite Package Tutorial",
"description": "A comprehensive guide on how to use the @capacitor-community/sqlite package in your Capacitor project.",
"created_at": "2022-01-06",
"published": true,
"slug": "sqlite-git"
---

# Using @capacitor-community/sqlite Package Tutorial

In this tutorial, we will explore how to effectively utilize the @capacitor-community/sqlite package within your Capacitor project. The @capacitor-community/sqlite package provides seamless SQLite database functionality for your hybrid apps. Let's dive into the details step by step.

## Installation

To get started, you need to install the @capacitor-community/sqlite package in your Capacitor project.

```bash
npm install @capacitor-community/sqlite
```

## Configuration

Next, you need to add the plugin to the main `capacitor.config.json` file. Here is an example configuration that you can use:

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
        biometricTitle : "Biometric login for capacitor sqlite"
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth : false,
        biometricTitle : "Biometric login for capacitor sqlite",
        biometricSubTitle : "Log in using your biometric"
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

With the package installed and configured, you can now start using the SQLite functionalities within your Capacitor project. Make sure to refer to the official documentation for detailed API references and examples.

That's it! You are now ready to leverage the power of SQLite databases in your hybrid apps using the @capacitor-community/sqlite package.

Stay tuned for more tutorials and updates on Capacitor plugins! Happy coding!