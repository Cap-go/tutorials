```markdown
---
"title": "Using Fileintents Package in Capacitor",
"description": "Learn how to utilize the Fileintents package in Capacitor to handle shared files in your Ionic app.",
"created_at": "2023-09-29",
"published": true,
"slug": "fileintents"
---

# Using Fileintents Package in Capacitor

The Fileintents package is designed for use in Ionic applications with Capacitor, enabling the handling of shared files. It is a powerful tool that supports both Android and iOS platforms, allowing your app to receive, process, and manage shared files seamlessly.

## Installation

To install the Fileintents package, execute the following commands:

```
npm install send-intent
npx cap sync
```

## Usage

1. Import the Fileintents package in your project:

```js
import {SendIntent} from "send-intent";
```

2. Check for any received Fileintents within your app:

```js
SendIntent.checkSendIntentReceived().then((result: any) => {
    if (result) {
        console.log('Fileintent received');
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

3. For Android, remember to configure a new activity in AndroidManifest.xml to handle the Fileintents. Here's an example:

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

4. It's recommended to close the send-intent activity after processing the Fileintents to avoid app state issues. You can close the activity by calling the `finish` method:

```js
SendIntent.finish()
```

By following these steps, you can effectively implement the Fileintents package in your Capacitor app for seamless file sharing functionality.
```