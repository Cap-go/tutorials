---
"title": "Using Capacitor-OpenWith Package Tutorial",
"description": "Learn how to use the @squareetlabs/capacitor-openwith package to handle files and content shared from other apps on Android and iOS.",
"created_at": "2023-10-12",
"published": true,
"slug": "capacitor-openwith.git"
---

# Using @squareetlabs/capacitor-openwith Package

This tutorial will guide you on how to use the `@squareetlabs/capacitor-openwith` package to handle files and content shared from other apps on both Android and iOS platforms.

## Installation

To install the package, run the following commands in your terminal:

```bash
npm install @squareetlabs/capacitor-openwith
npx cap sync
```

## Android Configuration

In your `android/app/src/main/AndroidManifest.xml` file, add the following permission:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

## iOS Configuration

To configure the iOS part, you need to set up a Share Extension in Xcode. Follow these steps:

### 1. Create Share Extension

1. Open your project in Xcode
2. Go to `File > New > Target`
3. Select "Share Extension" in the iOS section
4. Name your extension (e.g., "ShareExtension")
5. Make sure "Embed in Application" is selected

### 2. App Groups Configuration

1. Select your project in Xcode
2. Choose the main target of your app
3. Navigate to "Signing & Capabilities"
4. Click on "+" and add "App Groups"
5. Create a new group in the format: `group.[your-bundle-identifier]`
6. Repeat the process for the Share Extension target

### 3. Share Extension Info.plist Configuration

Add the following to your Share Extension's Info.plist:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionAttributes</key>
    <dict>
        <key>NSExtensionActivationRule</key>
        <dict>
            <key>NSExtensionActivationSupportsWebURLWithMaxCount</key>
            <integer>1</integer>
            <key>NSExtensionActivationSupportsFileWithMaxCount</key>
            <integer>1</integer>
            <key>NSExtensionActivationSupportsText</key>
            <true/>
            <key>NSExtensionActivationSupportsImageWithMaxCount</key>
            <integer>1</integer>
            <key>NSExtensionActivationSupportsMovieWithMaxCount</key>
            <integer>1</integer>
        </dict>
    </dict>
    <key>NSExtensionMainStoryboard</key>
    <string>MainInterface</string>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.share-services</string>
</dict>
```

### 4. ShareViewController Implementation

Replace the content of the `ShareViewController.swift` file with the provided code snippet.

## Conclusion

You've now learned how to set up and use the `@squareetlabs/capacitor-openwith` package to handle shared files and content in your Capacitor app. Follow the steps mentioned above to ensure a seamless integration of this functionality into your Android and iOS platforms.