# Tutorial: Using the Send-Intent Package

In this tutorial, we will guide you through the process of using the Send-Intent package in your Ionic/Capacitor application to handle incoming data shared from other apps. The Send-Intent package is a Capacitor plugin that supports both Android and iOS platforms.

## Prerequisites
To follow along with this tutorial, you should have the following:

1. Node.js and npm installed on your machine.
2. An existing Ionic/Capacitor project.
3. Basic knowledge of Ionic and Capacitor concepts.

## Step 1: Install the Send-Intent Package
To get started, open your command line interface and navigate to the root directory of your Ionic/Capacitor project. Then run the following command:

```
npm install send-intent
```

This will install the Send-Intent package and its dependencies in your project.

## Step 2: Import and Use the SendIntent Plugin

1. Open the file where you want to handle incoming shared data. This could be in a component, a service, or any other relevant file in your project.

2. Import the SendIntent plugin from the installed package:

```js
import { SendIntent } from "send-intent";
```

3. Use the `checkSendIntentReceived()` method to check if your app was targeted as a share goal:

```js
SendIntent.checkSendIntentReceived().then((result) => {
  if (result) {
    console.log('SendIntent received');
    console.log(JSON.stringify(result));
  }
  // Handle the received data here
}).catch((error) => {
  console.error(error);
});
```

The `checkSendIntentReceived()` method returns a promise that resolves with the received data if the app was targeted as a share goal. You can then handle the received data as needed.

## Step 3: Handle the Received Data

The received data object will contain information about the shared content. The specific properties will depend on the type of data shared.

For example, if a file was shared, the `url` property of the received data object will contain the URI of the shared file. You can use Capacitor's Filesystem plugin to retrieve the file content using the URL.

Here's an example of how you can handle a shared file:

```js
import { Filesystem } from "@capacitor/filesystem";

// ...

if (result.url) {
  const resultUrl = decodeURIComponent(result.url);
  Filesystem.readFile({ path: resultUrl })
    .then((content) => {
      console.log(content.data);
      // Do something with the file content
    })
    .catch((error) => {
      console.error(error);
    });
}
```

Handle the received data according to your application's requirements. You can access other properties of the received data object to retrieve additional information.

## Step 4: Android Configuration (Optional)

On Android, you need to configure a new activity in the `AndroidManifest.xml` file to handle the incoming share intents.

1. Open the `AndroidManifest.xml` file located at `android/app/src/main/AndroidManifest.xml`.

2. Add the following code inside the `<application>` element:

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

This configures the activity to handle share intents with various MIME types, such as plain text, images, applications, and videos.

## Step 5: iOS Configuration (Optional)

On iOS, you need to create a "Share Extension" and set the activation rules to display your app as a share option.

1. Create a Share Extension in your Xcode project. Refer to Apple's documentation for creating an app extension: [Creating an App Extension](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/ExtensionCreation.html#//apple_ref/doc/uid/TP40014214-CH5-SW1).

2. Make sure the "iOS deployment target" version of the Share Extension matches your app's deployment target version.

3. Set the activation rules in the Share Extension's Info.plist file to include your app as a share option.

## Conclusion
In this tutorial, you learned how to use the Send-Intent package in your Ionic/Capacitor application to handle incoming shared data from other apps. You learned how to install the package, import the plugin, handle the received data, and optionally configure the package for Android and iOS platforms.

Now you can enhance your app's functionality by allowing users to easily share data into your app from other apps on their devices.