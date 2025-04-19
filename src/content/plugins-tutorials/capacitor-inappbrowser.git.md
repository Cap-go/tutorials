```markdown
---
title: "Tutorial on Using @capgo/inappbrowser Package"
description: "This tutorial will guide you on how to use the @capgo/inappbrowser package in your Capacitor applications. It covers installation, usage, camera and microphone permissions, two-way communication, and closing the inappbrowser from within the browser."
created_at: "2022-01-29"
published: true
slug: capacitor-inappbrowser.git
---

# Using @capgo/inappbrowser Package

The @capgo/inappbrowser package is a Capacitor plugin that provides in-app browsing functionality with additional features such as URL change events, two-way communication, and support for using camera and microphone. Follow the steps below to integrate and use this package in your Capacitor project.

## Installation

To get started, install the @capgo/inappbrowser package by running the following command in your project directory:

```bash
npm install @capgo/inappbrowser
npx cap sync
```

## Usage

You can open the inappbrowser with a specific URL by using the `InAppBrowser.open()` method. Make sure to import `InAppBrowser` from the package in your code.

```js
import { InAppBrowser } from '@capgo/inappbrowser'

InAppBrowser.open({ url: "YOUR_URL" });
```

Please note that the web platform is not supported. For web applications, use `window.open` instead.

## Camera Usage

### Android

For Android, add the following permissions to your `AndroidManifest.xml` file to allow camera usage:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
```

### iOS

For iOS, add the following information to your `Info.plist` file to declare camera usage:

```xml
<key>NSCameraUsageDescription</key>
<string>We need access to the camera to record audio.</string>
```

## Microphone Usage

### Android

To allow microphone usage on Android, include the following permissions in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

### iOS

For iOS, add the following information to your `Info.plist` file for microphone access:

```xml
<key>NSMicrophoneUsageDescription</key>
<string>We need access to the microphone to record audio.</string>
```

## Two-Way Communication

The @capgo/inappbrowser package allows you to send and receive events between the main app and the inappbrowser, enhancing interactivity.

### Main App to Inappbrowser

You can send messages from the main app to the inappbrowser using the `InAppBrowser.postMessage()` method. 

```js
InAppBrowser.postMessage({ detail: { message: "myMessage" } });
```

### Inappbrowser to Main App

Conversely, you can send events from the inappbrowser to the main app using `window.mobileApp.postMessage()`.

```js
window.mobileApp.postMessage({ detail: { message: "myMessage" } });
```

## Closing the Inappbrowser

You can close the inappbrowser from within the browser itself using `window.mobileApp.close()`.

This tutorial covers the basic usage of the @capgo/inappbrowser package in Capacitor applications. For more detailed information, refer to the official documentation.
```