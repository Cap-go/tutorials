---
title: "Using the capacitor-health-connect package"
description: "A tutorial on how to use the capacitor-health-connect package"
created_at: "2022-02-04"
published: true
slug: capacitor-health-connect
---

# Using the capacitor-health-connect package

In this tutorial, we will learn how to use the capacitor-health-connect package to connect with health data on mobile devices.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Capacitor

## Step 1: Install the capacitor-health-connect package

Start by creating a new Capacitor project or navigating to an existing one. 
Then, open your terminal and run the following command to install the capacitor-health-connect package:

```bash
npm install capacitor-health-connect
```

## Step 2: Add the required permissions

To access health data on the device, we need to add the necessary permissions to the Android and iOS projects.

### Android

Open the `AndroidManifest.xml` file in the `android/app/src/main` directory and add the following permissions:

```xml
<uses-permission android:name="android.permission.ACTIVITY_RECOGNITION" />
```

### iOS

Open the `Info.plist` file in the `ios/App/App` directory and add the following key-value pair:

```xml
<key>NSMotionUsageDescription</key>
<string>We need access to your motion and fitness data for the health features to work properly.</string>
```

Make sure to replace the description with an appropriate message explaining why the app needs access to health data.

## Step 3: Import and initialize the capacitor-health-connect package

In the `src/main.ts` file, import the `CapacitorHealthConnect` class from the `capacitor-health-connect` package:

```typescript
import { CapacitorHealthConnect } from 'capacitor-health-connect';
```

Then, initialize the `CapacitorHealthConnect` class and store it in a variable:

```typescript
const healthConnect = new CapacitorHealthConnect();
```

## Step 4: Request permission to access health data

Before accessing health data, we need to request permission from the user. Add the following code to your desired component:

```typescript
async function requestPermissions() {
  const result = await healthConnect.requestPermissions();
  
  if (result.granted) {
    // Permission granted, you can now access health data
  } else {
    // Permission denied
  }
}
```

## Step 5: Read health data

Once you have obtained permission, you can start reading health data. Add the following code to your desired component:

```typescript
async function readData() {
  const data = await healthConnect.readData({
    type: 'stepCount',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2022-01-31'),
    interval: 'day',
  });
  
  console.log(data);
}
```

Make sure to customize the `type`, `startDate`, `endDate`, and `interval` according to your requirements.

## Conclusion

In this tutorial, we learned how to use the capacitor-health-connect package to connect with health data on mobile devices. We covered the installation process, adding permissions, initializing the package, requesting permission to access health data, and reading health data. Now you can incorporate health-related features into your Capacitor app using the capacitor-health-connect package.

Remember to handle errors, follow best practices, and consult the official documentation for more advanced usage.