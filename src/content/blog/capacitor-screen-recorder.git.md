```md
---
"title": "How to Use Capacitor Screen Recorder Plugin",
"description": "This tutorial will guide you on how to use the @capgo/capacitor-screen-recorder package to record your device's screen in a Capacitor project.",
"created_at": "2022-02-25",
"published": true,
"slug": "capacitor-screen-recorder.git"
---

# How to Use Capacitor Screen Recorder Plugin

In this tutorial, we will walk you through the steps to use the `@capgo/capacitor-screen-recorder` package to record your device's screen in a Capacitor project. 

## Install

To get started, install the package using npm:

```bash
npm install @capgo/capacitor-screen-recorder
npx cap sync
```

### IOS Configuration

Make sure to add `NSPhotoLibraryUsageDescription` in your `info.plist` file for IOS.

### Android Configuration

For Android, you need to increase the project's `minSdk` version to 23 as it is required by the dependency HBRecorder. Additionally, add the following permissions in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_INTERNAL_STORAGE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION" />
```

### Add JitPack Repository

Add the JitPack repository to your Android app's `build.gradle`:

```java
allprojects {
    repositories {
        google()
        mavenCentral()
        maven { url 'https://jitpack.io/' }
    }
}
```

### Variables

This plugin will use the following project variable in your app's `variables.gradle` file:

- `$kotlinVersion`: version of `org.jetbrains.kotlin:kotlin-stdlib-jdk7` (default: `1.7.21`)

If you encounter the compilation issue `Duplicate class androidx.lifecycle.ViewModelLazy`, add the below configuration to resolve it in `android/app/build.gradle`:

```
configurations {
    all {
        exclude group: 'androidx.lifecycle', module: 'lifecycle-runtime-ktx'
        exclude group: 'androidx.lifecycle', module: 'lifecycle-viewmodel-ktx'
    }
}
```

## How to Use

### Start Recording

To start the recording, use the following method:

```typescript
start(options?: { recordAudio?: boolean; } | undefined) => Promise<void>
```

### Stop Recording

To stop the recording, use the following method:

```typescript
stop() => Promise<void>
```

That's it! You can now leverage the Capacitor Screen Recorder plugin in your project to capture your device's screen easily.
```