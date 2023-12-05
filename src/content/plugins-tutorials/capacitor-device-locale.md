# Using `capacitor-device-locale` Package

## Introduction
In this tutorial, we will learn how to use the `capacitor-device-locale` package to retrieve the user's device locale information in a Capacitor app.

## Prerequisites
Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project setup (if not, you can create a new Capacitor project using the `@capacitor/cli`)

## Step 1: Install the Package
Start by installing the `capacitor-device-locale` package in your Capacitor project. Open your project folder in the terminal and run the following command:

```bash
npm install capacitor-device-locale
```

## Step 2: Add the Plugin to Your Project
To add the plugin to your Capacitor project, you need to register it in the `capacitor.config.json` file. Open the file and add the following code under the `plugins` section:

```json
"plugins": {
  "CapacitorDeviceLocale": {
    "syncable": true
  }
}
```

## Step 3: Access Device Locale Information
Now that the package is installed and registered, you can use it to access the device locale information. Open the file where you want to use the device locale information (e.g., `src/app.ts`).

Import the `CapacitorDeviceLocale` plugin at the top of the file:

```typescript
import { CapacitorDeviceLocale } from 'capacitor-device-locale';
```

Inside your class or component, create a method to retrieve the device locale:

```typescript
async getDeviceLocale(): Promise<string> {
  return CapacitorDeviceLocale.getDeviceLocale();
}
```

You can now call this method to get the device locale wherever you need it. For example:

```typescript
const deviceLocale = await this.getDeviceLocale();
console.log('Device Locale:', deviceLocale);
```

## Conclusion
In this tutorial, we learned how to use the `capacitor-device-locale` package to retrieve the user's device locale information in a Capacitor app. We installed the package, registered the plugin in the Capacitor project, and accessed the device locale using the plugin's method.

Stay tuned for more Capacitor tutorials!

---

title: "Using capacitor-device-locale Package"
description: "Learn how to retrieve the user's device locale information in a Capacitor app using the capacitor-device-locale package."
created_at: "2021-10-20"
published: true
slug: "capacitor-device-locale"