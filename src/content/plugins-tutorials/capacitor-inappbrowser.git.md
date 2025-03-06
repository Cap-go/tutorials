```markdown
---
"title": "Using @capgo/inappbrowser Package Tutorial",
"description": "This tutorial covers the usage of @capgo/inappbrowser package, including installation, camera and microphone usage, two-way communication, and more.",
"created_at": "2022-01-01",
"published": true,
"slug": "capacitor-inappbrowser.git"
---

# Using @capgo/inappbrowser Package Tutorial

The `@capgo/inappbrowser` package is a Capacitor plugin that provides features like URL change events, two-way communication, camera, and microphone usage for your app. Follow the steps below to start using this package:

## Install

```bash
npm install @capgo/inappbrowser
npx cap sync
```

Web platform is not supported. Use `window.open` instead.

### Camera Usage

#### Android

Ensure the following permissions are added to your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

The permissions will be requested when the camera is accessed.

#### iOS

Update your `Info.plist` file with the following:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to the camera to record audio.</string>
```

### Microphone Usage

#### Android

Add the following permissions to your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

The permissions will be requested when the microphone is accessed.

#### iOS

Update your `Info.plist` file with the following:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>We need access to the microphone to record audio.</string>
```

### Two-Way Communication

Utilize this plugin for communicating events between the main app and the inappbrowser bidirectionally.

#### Main app to Inappbrowser

```js
InAppBrowser.postMessage({ detail: { message: "myMessage" } });
```

#### Receive Event from Native in the Inappbrowser

```js
window.addListener("messageFromNative", (event) => {
  console.log(event);
});
```

#### Send Event from Inappbrowser to Main App

```js
window.mobileApp.postMessage({ detail: { message: "myMessage" } });
```

#### Receive Event from Inappbrowser in the Main App

```js
window.addListener("messageFromWebview", (event) => {
  console.log(event);
});
```

### Close Inappbrowser from Inappbrowser Itself

```js
window.mobileApp.close();
```

```

This tutorial provides an overview of how to use the `@capgo/inappbrowser` package in your Capacitor app. It covers installation, camera and microphone usage, two-way communication, and closing the inappbrowser. Explore these features to enhance your app functionalities.
```