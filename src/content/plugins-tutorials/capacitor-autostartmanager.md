---
title: "Using capacitor-autostartmanager package"
description: "This tutorial will guide you on how to use the capacitor-autostartmanager package in your Capacitor app."
created_at: "2022-06-28"
published: true
slug: "capacitor-autostartmanager"
---

# Using capacitor-autostartmanager package

In this tutorial, we will cover how to use the `capacitor-autostartmanager` package in your Capacitor app. The `capacitor-autostartmanager` package allows you to manage automatic startup behavior for your app on different platforms.

## Installation

To get started, you need to install the `capacitor-autostartmanager` package. Open your terminal and run the following command:

```bash
npm install capacitor-autostartmanager
```

## Android Configuration

### Configuring AndroidManifest.xml

In your `android/app/src/main/AndroidManifest.xml` file, add the following code inside the `<application>` tag:

```xml
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
```

```xml
<receiver android:name="com.getcapacitor.android.autostartmanager.AutoStartBroadcastReceiver">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED"/>
        <category android:name="android.intent.category.DEFAULT"/>
    </intent-filter>
</receiver>
```

### Registering the Plugin

To register the plugin, open your `android/app/src/main/java/**/**/MainActivity.java` file and add the following import statement:

```java
import com.getcapacitor.android.autostartmanager.AutoStartManager;
```

Inside the `init()` method, add the following code:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Other plugins
    add(AutoStartManager.class); // Add this line
}});
```

## iOS Configuration

### Registering the Plugin

To register the plugin, open your `ios/App/AppDelegate.swift` file and import the `CapacitorAutoStartManager` module:

```swift
import CapacitorAutoStartManager
```

Inside the `application(_:​didFinishLaunchingWithOptions:)` method, add the following code:

```swift
let autoStartManager = AutoStartManager()
autoStartManager.setLaunchCallback()
```

## Usage

Now that you have installed and configured the `capacitor-autostartmanager` package, you can use it to manage automatic startup behavior in your app.

### Check If Auto Start Is Enabled

To check if the auto start feature is enabled on the device, use the following code:

```typescript
import { Plugins } from '@capacitor/core';
const { AutoStartManager } = Plugins;

const checkAutoStartEnabled = async () => {
    const isAutoStartEnabled = await AutoStartManager.isAutoStartEnabled();
    console.log('Auto start enabled:', isAutoStartEnabled);
}

checkAutoStartEnabled();
```

### Request Auto Start

To request automatic startup for your app, use the following code:

```typescript
import { Plugins } from '@capacitor/core';
const { AutoStartManager } = Plugins;

const requestAutoStart = async () => {
    await AutoStartManager.requestAutoStart();
    console.log('Auto start requested');
}

requestAutoStart();
```

### Open Auto Start Settings

To open the device's auto start settings page, use the following code:

```typescript
import { Plugins } from '@capacitor/core';
const { AutoStartManager } = Plugins;

const openAutoStartSettings = async () => {
    await AutoStartManager.openAutoStartSettings();
    console.log('Auto start settings opened');
}

openAutoStartSettings();
```

That's it! You have successfully learned how to use the `capacitor-autostartmanager` package in your Capacitor app. You can now manage automatic startup behavior on different platforms.