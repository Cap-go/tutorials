# Using the Send-Intent package

The Send-Intent package is a Capacitor plugin that allows you to check if your app was targeted as a share goal in both Android and iOS platforms. It can handle a single file or multiple files of any type.

To use the Send-Intent package in your Ionic application, follow these steps:

## Installation

To install the Send-Intent package, run the following command:

```
npm install send-intent
npx cap sync
```

## Usage

To use the Send-Intent package in your application, you need to import the `SendIntent` class from the package. Here is an example of how to use it:

```js
import { SendIntent } from "send-intent";

SendIntent.checkSendIntentReceived().then((result) => {
  if (result) {
    console.log('SendIntent received');
    console.log(JSON.stringify(result));
  }
  if (result.url) {
    let resultUrl = decodeURIComponent(result.url);
    // Use Capacitor's Filesystem plugin to access the file content
    Filesystem.readFile({ path: resultUrl })
      .then((content) => {
        console.log(content.data);
      })
      .catch((err) => console.error(err));
  }
}).catch(err => console.error(err));
```

In this example, we first import the `SendIntent` class from the `send-intent` package. Then, we call the `checkSendIntentReceived()` method to check if a SendIntent was received by the app. If a SendIntent was received, we log a message and the result object to the console. If the result object contains a `url` property, we use the Capacitor's Filesystem plugin to read the file content.

## Android Configuration

On the Android platform, you need to configure a new activity in the `AndroidManifest.xml` file. Add the following code inside the `<application>` element:

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

## iOS Configuration

On the iOS platform, you need to create a "Share Extension" and make sure that the extension's "iOS deployment target" version is in sync