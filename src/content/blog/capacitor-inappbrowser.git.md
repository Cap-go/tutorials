---
"title": "Using @capgo/inappbrowser Package Tutorial",
"description": "Step-by-step guide on using @capgo/inappbrowser package in Capacitor",
"created_at": "2022-02-14",
"published": true,
"slug": "capacitor-inappbrowser.git"
---

# Using @capgo/inappbrowser Package Tutorial

In this tutorial, we will go step-by-step on how to use the @capgo/inappbrowser package in a Capacitor project. The @capgo/inappbrowser plugin provides functionalities like URL change events, two-way communication, camera and microphone usage, and more for in-app browsers in Capacitor applications.

## Installation

To get started, install the @capgo/inappbrowser package by running the following commands in your project directory:

```bash
npm install @capgo/inappbrowser
npx cap sync
```

## Usage

After installing the package, you can use it in your project with the following code snippet:

```js
import { InAppBrowser } from '@capgo/inappbrowser'

InAppBrowser.open({ url: "YOUR_URL" });
```

Please note that the web platform is not supported, so you should use `window.open` instead for web applications.

## Camera Usage

### Android

For Android, you need to make sure the following permissions are added to your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

With these permissions set, the app will ask for permission when the camera is used.

### iOS

On iOS, add the following to your `Info.plist` file:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to the camera to record audio.</string>
```

## Microphone Usage

### Android

Similarly, for Android, include these permissions in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

The app will request permission when the microphone is accessed.

### iOS

For iOS, add the following to your `Info.plist` file:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>We need access to the microphone to record audio.</string>
```

## Two-Way Communication

The @capgo/inappbrowser package allows for two-way communication between the main app and the in-app browser. You can send events and messages back and forth using JSON objects.

### Main App to In-App Browser

```js
InAppBrowser.postMessage({ detail: { message: "myMessage" } });
```

### Receive Event from In-App Browser

```js
window.addListener("messageFromNative", (event) => {
  console.log(event);
});
```

### In-App Browser to Main App

```js
window.mobileApp.postMessage({ detail: { message: "myMessage" } });
```

### Receive Event from In-App Browser in Main App

```js
window.addListener("messageFromWebview", (event) => {
  console.log(event);
});
```

## Closing In-App Browser

You can close the in-app browser directly from the browser itself using the following code:

```js
window.mobileApp.close();
```