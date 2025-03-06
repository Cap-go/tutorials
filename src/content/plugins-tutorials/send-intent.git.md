---
title: "Using the send-intent package"
description: "Step-by-step guide on how to use the send-intent Capacitor plugin in your Ionic application for sharing content."
created_at: "2022-01-02"
published: true
slug: send-intent.git
---

# Send-Intent Tutorial

The Send-Intent package is a Capacitor plugin designed for Ionic applications to manage sharing content seamlessly. This tutorial will walk you through the steps of integrating and using this package in your app to handle shared files efficiently.

## Installation

To get started, you need to install the Send-Intent package. Below are the steps to install it:

```bash
npm install send-intent
npx cap sync
```

## Usage

1. Import the `SendIntent` module in your code.

```javascript
import { SendIntent } from "send-intent";
```

2. Use the `checkSendIntentReceived` method to check if your app was targeted as a share goal and handle the shared content.

```javascript
SendIntent.checkSendIntentReceived().then((result) => {
    if (result) {
        console.log('SendIntent received');
        console.log(JSON.stringify(result));
    }
    if (result.url) {
        let resultUrl = decodeURIComponent(result.url);
        Filesystem.readFile({path: resultUrl})
        .then((content) => {
            console.log(content.data);
        })
        .catch((err) => console.error(err));
    }
}).catch((err) => console.error(err));
```

## Android Configuration

For Android, you need to configure a new activity in the `AndroidManifest.xml` file. The activity should contain the necessary intent filters to receive shared files.

```xml
<activity
    android:name="de.mindlib.sendIntent.SendIntentActivity"
    android:label="@string/app_name"
    android:exported="true"
    android:theme="@style/AppTheme.NoActionBar">
    <intent-filter>
        <action android:name="android.intent.action.SEND" />
        <category android:name="android.intent.category.DEFAULT" />
        <data android:mimeType="text/plain" />
        <data android:mimeType="image/*" />
        <data android:mimeType="application/*" />
        <data android:mimeType="video/*" />
    </intent-filter>
</activity>
```

Remember to close the send-intent activity after processing the shared content to ensure app state stability.

```javascript
SendIntent.finish()
```

## iOS Configuration

For iOS, you need to create a "Share Extension" and ensure the extension's iOS deployment target version matches your app's deployment target version.

Make sure to set the activation rules in the extension's Info.plist to display your app as a share option.

By following these steps, you can effectively integrate the Send-Intent package into your Ionic app and handle shared content easily.