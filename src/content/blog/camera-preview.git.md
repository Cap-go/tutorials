```markdown
---
"title": "Using @capacitor-community/camera-preview Package Tutorial",
"description": "This tutorial will guide you on how to use the @capacitor-community/camera-preview package with Capacitor 5. It includes installation steps for different platforms and additional instructions for Android, iOS, and Web.",
"created_at": "2023-10-06",
"published": true,
"slug": "camera-preview.git"
---

# Using @capacitor-community/camera-preview Package Tutorial

This tutorial will guide you on how to use the `@capacitor-community/camera-preview` package with Capacitor 5. Follow the steps below to install and integrate the camera preview functionality in your Capacitor project.

## Installation

```sh
yarn add @capacitor-community/camera-preview

or

npm install @capacitor-community/camera-preview
```

Once installed, sync the Capacitor project:

```sh
npx cap sync
```

### Android Installation Steps

Note: `camera-preview` 3+ requires Gradle 7.

1. Open `android/app/src/main/AndroidManifest.xml` and add the following permission above the closing `</manifest>` tag:
   
```xml
<uses-permission android:name="android.permission.CAMERA" />
```

2. Consult the [Capacitor docs](https://capacitorjs.com/docs/android/configuration#configuring-androidmanifestxml) for more help.

### iOS Installation Steps

1. Add the following permissions to `Info.plist`:
   
- `NSCameraUsageDescription`
- `NSMicrophoneUsageDescription` (if audio will be used) or set the `disableAudio` option to `true`

2. Follow the instructions in the [Capacitor docs](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist).

### Web Installation Steps

No additional steps required for the Web platform.

---

Feel free to explore the additional features and customizations that come with the `@capacitor-community/camera-preview` package for your camera interaction needs in Javascript and HTML. PR's are greatly appreciated.

Authors: @arielhernandezmusa and @pbowyer
```
```