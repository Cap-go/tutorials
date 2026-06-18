---
"title": "Using Send-Intent Package in Your Ionic App",
"description": "Step-by-step guide on implementing the Send-Intent package in your Ionic application to handle shared files on Android and iOS.",
"created_at": "2023-10-28",
"published": true,
"slug": "send-intent.git"
---

# Using Send-Intent Package in Your Ionic App

The Send-Intent package is a Capacitor plugin designed for Ionic applications to manage shared files on both Android and iOS platforms. This tutorial will guide you through the process of setting up and utilizing the Send-Intent package.

## Installation

To begin, you need to install the Send-Intent package in your Ionic project by running the following commands:

```bash
npm install send-intent
npx cap sync
```

## Usage

### Import and Sample Call

After installing the package, import the SendIntent module in your application.

```javascript
import {SendIntent} from "send-intent";

SendIntent.checkSendIntentReceived().then((result: any) => {
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
}).catch(err => console.error(err));
```

### Android Configuration

For Android, you need to configure a new activity in your `AndroidManifest.xml`. Add the following activity:

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

After processing the shared intent in your Android app, remember to close the send-intent activity with the following code:

```javascript
SendIntent.finish();
```

### iOS Configuration

On iOS, you will need to create a Share Extension and ensure that the extension's iOS deployment target version matches your app's deployment target version. Follow the steps for [Creating an App extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionCreation.html#//apple_ref/doc/uid/TP40014214-CH5-SW1). Set the activation rules in the extension's `Info.plist` to make your app appear as a share option.

## Conclusion

Congratulations! You have successfully learned how to integrate and use the Send-Intent package in your Ionic application. This package provides a seamless way to handle shared files across Android and iOS platforms.