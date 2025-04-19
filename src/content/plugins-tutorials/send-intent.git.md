---
"title": "Using Send-Intent Plugin in Capacitor Apps"
"description": "A comprehensive tutorial on integrating and utilizing the Send-Intent Capacitor plugin in Ionic applications for sharing content between Android and iOS platforms."
"created_at": "September 22, 2021"
"published": true
"slug": "send-intent.git"
---

# Send-Intent Tutorial

The Send-Intent plugin is designed for use in Capacitor applications, especially those built with Ionic. It enables you to check if your app was targeted as a sharing option. In this tutorial, you will learn how to integrate and use the Send-Intent plugin for handling shared content in your Ionic app.

## Installation

To get started, install the Send-Intent package by running the following commands:

```bash
npm install send-intent
npx cap sync
```

## Usage

To use Send-Intent in your app, follow these steps:

### Import & Sample Call

```typescript
import { SendIntent } from "send-intent";

SendIntent.checkSendIntentReceived().then((result: any) => {
    if (result) {
        console.log('SendIntent received');
        console.log(JSON.stringify(result));
    }
    if (result.url) {
        let resultUrl = decodeURIComponent(result.url);
        Filesystem.readFile({ path: resultUrl })
            .then((content) => {
                console.log(content.data);
            })
            .catch((err) => console.error(err));
    }
}).catch(err => console.error(err));
```

### Android Configuration

For Android, make sure to configure a new activity in the AndroidManifest.xml file. Here's an example:

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

Remember to close the send-intent activity after processing the shared content in your app. You can achieve this using the `finish()` method.

### iOS Configuration

For iOS, create a "Share Extension" by following the Apple documentation. Ensure the deployment target version matches your app's version and set the activation rules in the Info.plist file.

---

By following this tutorial, you can effectively integrate and use the Send-Intent plugin in your Ionic app for handling shared content on both Android and iOS platforms.
```