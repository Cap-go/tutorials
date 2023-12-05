---
title: "Using capacitor-cos-plugin Package"
description: "This tutorial will guide you on how to use the capacitor-cos-plugin package to interact with Tencent Cloud Object Storage (COS) in your Capacitor project."
created_at: "2021-09-16"
published: true
slug: "capacitor-cos-plugin"
---

# Using capacitor-cos-plugin Package

This tutorial will guide you on how to use the capacitor-cos-plugin package to interact with Tencent Cloud Object Storage (COS) in your Capacitor project.

## Installation

To begin, make sure you have Capacitor installed globally on your machine:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Next, navigate to your Capacitor project's root directory and install the capacitor-cos-plugin package:

```bash
npm install capacitor-cos-plugin
```

## Configuration

### Android Configuration

1. Open the Android project in Android Studio.
2. Locate the `MainActivity.java` file in the `android/app/src/main/java/{your-package-name}` directory.
3. Import the necessary packages:

```java
import com.lequyettien.capacitor.cos.CosPlugin;
```

4. Add the plugin to the plugins list:

```java
add(CosPlugin.class);
```

### iOS Configuration

1. Open your project in Xcode.
2. Locate the `AppDelegate.swift` file.
3. Import the required package:

```swift
import Capacitor
import CapacitorCosPlugin
```

4. Add the plugin to the plugins list:

```swift
ca