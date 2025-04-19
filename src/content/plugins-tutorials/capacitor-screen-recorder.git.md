---
"title": "How to Use @capgo/capacitor-screen-recorder Package"
"description": "A step-by-step tutorial on using the @capgo/capacitor-screen-recorder package for recording screens on iOS and Android in Capacitor projects."
"created_at": "2022-02-22"
"published": true
"slug": "capacitor-screen-recorder.git"
---

# Using @capgo/capacitor-screen-recorder Package

This tutorial will guide you through the process of setting up and using the @capgo/capacitor-screen-recorder package to record device screens in your Capacitor project.

## Installation

```bash
npm install @capgo/capacitor-screen-recorder
npx cap sync
```

### IOS

Add `NSPhotoLibraryUsageDescription` in your `info.plist`.

### Android

Increase the project's `minSdk` version to 23. Add the following permissions to your `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_INTERNAL_STORAGE" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PROJECTION" />
```

Add JitPack repository to your Android app's `build.gradle`:
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

This package uses the following project variable (defined in your app's `variables.gradle` file):
- `$kotlinVersion` version of `org.jetbrains.kotlin:kotlin-stdlib-jdk7` (default: `1.7.21`)

If you encounter the compilation issue `Duplicate class androidx.lifecycle.ViewModelLazy`, you can exclude the conflicting module in the `android/app/build.gradle`.

## Getting Started

### Recording

To start recording, you can call the following method:
```typescript
start(options?: { recordAudio?: boolean }) => Promise<void>
```

You can also stop the recording using:
```typescript
stop() => Promise<void>
```

That's it! You are now ready to record your device's screen using @capgo/capacitor-screen-recorder.

```