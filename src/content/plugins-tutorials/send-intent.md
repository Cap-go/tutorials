---
title: "Using the send-intent Package"
description: "A tutorial on how to use the send-intent package in Capacitor"
created_at: "2022-09-20"
published: true
slug: "send-intent"
---

# Using the send-intent Package

The `send-intent` package is a Capacitor plugin that allows you to check if your app was targeted as a share goal and handle shared files in your Ionic application. This tutorial will guide you through the installation and usage of the `send-intent` package.

## Installation

To get started, you need to install the `send-intent` package in your Capacitor project. Open your terminal and execute the following command:

```bash
npm install send-intent
npx cap sync
```

## Usage

Once you have installed the package, you can import and use it in your application. 

First, import the `SendIntent` module in your JavaScript file:

```js
import { SendIntent } from 'send-intent';
```

Next, you can use the `checkSendIntentReceived` method to check if your app was targeted as a share goal:

```js
SendIntent.checkSendIntentReceived().then((result) => {
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
}).catch((err) => console.error(err));
```

In this code snippet, we are checking if the `result` object exists and logging it to the console. If the `result` object has a `url` property, we are using Capacitor's `Filesystem` plugin to read the content of the file.

## Android Configuration

If you are using Android, you need to configure a new activity in the `AndroidManifest.xml` file. Open the file located at `android/app/src/main/AndroidManifest.xml` and add the following code:

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

It is recommended to close the `send-intent-activity` after processing the send-intent in your app. You can do this by calling the `finish()` method:

```js
SendIntent.finish();
```

## iOS Configuration

For iOS, you need to create a "Share Extension" and make sure the extensions "iOS deployment target" version is in sync with your app's deployment target version. You can refer to the [Creating an App Extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionCreation.html#//apple_ref/doc/uid/TP40014214-CH5-SW1) documentation for more details.

Make sure to set the activation rules in the extension's `Info.plist` file to display your app as a share option.

## Conclusion

In this tutorial, we have learned how to use the `send-intent` package in Capacitor to handle shared files in your Ionic application. We have covered the installation process and demonstrated how to check for shared intents and read file content. Additionally, we have provided Android and iOS configuration instructions.

You can now implement the `send-intent` package in your Capacitor project and handle shared files with ease. Happy coding!