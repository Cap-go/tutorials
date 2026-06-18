```markdown
---
"title": "Using @capacitor-community/admob Package Tutorial",
"description": "A comprehensive guide on integrating and using the @capacitor-community/admob package in a Capacitor app.",
"created_at": "2022-09-30",
"published": true,
"slug": "admob.git"
---

# Using @capacitor-community/admob Package Tutorial

This tutorial will guide you through the process of integrating and utilizing the **@capacitor-community/admob** package in your Capacitor app.

## Installation

To start, you need to install the **@capacitor-community/admob** package in your app. Use the following command to install it:

```console
npm install --save @capacitor-community/admob
```

## Setting Up for iOS

### Update Info.plist

Open your **App/App/Info.plist** file and add the following lines at the specified location. Replace `[APP_ID]` with your actual app ID:

```xml
<key>GADIsAdManagerApp</key>
<true/>
<key>GADApplicationIdentifier</key>
<string>[APP_ID]</string>
```

## Setting Up for Android

### Update Android Manifest

In the `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<application>`:

```xml
<meta-data
 android:name="com.google.android.gms.ads.APPLICATION_ID"
 android:value="@string/admob_app_id"/>
```

In the `android/app/src/main/res/values/strings.xml` file, add the following line:

```xml
<string name="admob_app_id">[APP_ID]</string>
```

### Variables

This package uses project variables like `playServicesAdsVersion` and `androidxCoreKTXVersion`. Ensure to set these variables in your app's `variables.gradle` file.

## Initialization

Here is an example of how to initialize AdMob:

```typescript
import { AdMob } from '@capacitor-community/admob'

export async function initializeAdMob(): Promise<void> {
  await AdMob.initialize({
    testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
    initializeForTesting: true,
  })
}
```

### UMP (User Messaging Platform)

Google mandates the use of Google's consent management solution for serving ads to users in the EEA and UK. Ensure to create GDPR and IDFA messages.

This tutorial provides a basic understanding of how to integrate and use the **@capacitor-community/admob** package in your Capacitor app. For detailed implementation, refer to the official documentation.
```