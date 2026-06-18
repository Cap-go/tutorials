---
"title": "@capacitor-community/sqlite Package Tutorial",
"description": "Learn how to use the @capacitor-community/sqlite package in your Ionic application.",
"created_at": "2022-01-30",
"published": true,
"slug": "sqlite"

# Using the @capacitor-community/sqlite Package

In this tutorial, we will explore how to integrate the `@capacitor-community/sqlite` package into your Ionic application. This package provides SQLite database capabilities for your Capacitor project.

## Installation

First, you need to install the package using npm or yarn:

```bash
npm install @capacitor-community/sqlite
# or
yarn add @capacitor-community/sqlite
```

## Configuration

Next, you'll need to configure the plugin in your `capacitor.config.json` file. Here's an example configuration:

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
      // Add more configuration for Android, Electron, etc.
    }
  }
};

export default config;
```

## Usage

Now that the package is installed and configured, you can start using it in your Ionic application. Make sure to refer to the official documentation for API methods and usage examples.

That's it! You've successfully integrated the `@capacitor-community/sqlite` package into your Ionic project. Happy coding!

For more detailed information and updates, you can visit the [JeepQ Capacitor Plugin Tutorials](https://jepiqueau.github.io/) blog.

---

This tutorial provides a basic guide on how to get started with the `@capacitor-community/sqlite` package in your Ionic project. Happy coding!