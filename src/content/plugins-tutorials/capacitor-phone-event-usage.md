---
title: "Tutorial: Using capacitor-phone-event-usage Package"
description: "A step-by-step guide on how to use the capacitor-phone-event-usage package to track phone app usage in your Capacitor app."
created_at: "2021-07-20"
published: true
slug: "capacitor-phone-event-usage"
---

# Tutorial: Using capacitor-phone-event-usage Package

This tutorial will guide you through the process of using the `capacitor-phone-event-usage` package to track phone app usage in your Capacitor app. 

## Step 1: Installation

First, you need to install the `capacitor-phone-event-usage` package. Open your terminal and run the following command:

```bash
npm install capacitor-phone-event-usage
```

Next, sync the native files by running the following command:

```bash
npx cap sync
```

## Step 2: Android Configuration

For Android, you need to add the plugin to your MainActivity. Open the `MainActivity.java` file and import the `PhoneEventUsage` class:

```java
import cap.phone.usage.PhoneEventUsage;
```

Inside the `onCreate` method, add the following code to register the plugin:
```java
this.init(
    savedInstanceState,
    new ArrayList<Class<? extends Plugin>>() {
        {
            add(PhoneEventUsage.class);
        }
    }
);
```

Additionally, you need to add the SYSTEM_LEVEL permission to the Android Manifest by adding the following XML code in the manifest file:

```xml
<uses-permission android:name="android.permission.PACKAGE_USAGE_STATS" tools:ignore="ProtectedPermissions"/>
```

## Step 3: Usage

Now that the plugin is installed and configured, you can start using it in your app. Here is an example of how to use the plugin in TypeScript:

```typescript
import { Plugins, Device } from '@capacitor/core';
import 'capacitor-phone-event-usage';

const { PhoneEventUsage } = Plugins;

@Component(...)
export class MyPage {

  async checkPermission() {
    // Check if the user has provided permission
    const result = await PhoneEventUsage.getPermissionStatus();
    console.log(result);
  }

  async enablePermission() {
    // Direct the user to the local permission page
    await PhoneEventUsage.enable();
  }

  // ... other code

}
```

In the example above, the `checkPermission` method is used to check the permission status, and the `enablePermission` method is used to direct the user to the local permission page.

## Conclusion

In this tutorial, you learned how to install and use the `capacitor-phone-event-usage` package to track phone app usage in your Capacitor app. Now you can easily monitor app usage and gather relevant data.