---
"title": "Using capacitor-plugin-gbvp-android-restricted-info package",
"description": "This tutorial will guide you through the process of using the capacitor-plugin-gbvp-android-restricted-info package to handle information restriction in Android applications.",
"created_at": "2023-10-11",
"published": true,
"slug": "capacitor-androidrestrictedinfo"
---

## Getting Started with capacitor-plugin-gbvp-android-restricted-info

The capacitor-plugin-gbvp-android-restricted-info package allows you to manage information restrictions in your Android application. Follow the steps below to integrate this package into your project.

### 1. Install the Capacitor Plugin

To begin, install the capacitor-plugin-gbvp-android-restricted-info package by running the following command:

```bash
npm install capacitor-plugin-gbvp-android-restricted-info
```

### 2. Add Android Platform

Add the Android platform to your project by running the command below:

```bash
ionic cap add android
```

### 3. Implementing Information Restrictions

#### Update AndroidManifest.xml

In your AndroidManifest.xml file, add the following information under the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="Your Account Id" />
<meta-data android:name="PLUMB5_API_KEY" android:value="Your App Key" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="Your Base URL" />
```

### 4. Sync Changes

After updating the project, sync the changes by running:

```bash
ionic cap sync
```

### 5. Running the Application

Launch your Android application in Android Studio using the command below:

```bash
ionic cap open android
```

By following these steps, you can effectively handle information restrictions in your Android application using the capacitor-plugin-gbvp-android-restricted-info package.