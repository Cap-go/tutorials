---
title: "Using @klippa/capacitor-klippa-scanner-sdk Package"
description: "Learn how to use the @klippa/capacitor-klippa-scanner-sdk package to integrate Klippa Scanner into your Capacitor app."
created_at: "2022-10-05"
published: true
slug: capacitor-klippa-scanner-sdk
---

# Using @klippa/capacitor-klippa-scanner-sdk Package

In this tutorial, we will learn how to use the @klippa/capacitor-klippa-scanner-sdk package to integrate Klippa Scanner into your Capacitor app. Klippa Scanner allows you to easily scan and extract information from documents and receipts using your device's camera.

## Installation

To get started, we need to install the @klippa/capacitor-klippa-scanner-sdk package. Open your project's terminal and run the following command:

```bash
npm install @klippa/capacitor-klippa-scanner-sdk
```

Once the package is installed, we need to sync our Capacitor project. Run the following command to sync the package:

```bash
npx cap sync
```

For iOS, we also need to run `pod install` in the ios folder:

```bash
cd ios
pod install
```

## Configuration

Now that we have installed the package, we need to configure it for both Android and iOS platforms.

### Android Configuration

Edit the `android/build.gradle` file in your project and add the Klippa Maven repository:

```groovy
allprojects {
    repositories {
        // ... other repositories

        maven {
            credentials {
                username "{your-username}"
                password "{your-password}"
            }
            url "https://custom-ocr.klippa.com/sdk/android/maven"
        }
    }
}
```

Replace `{your-username}` and `{your-password}` with the credentials provided by Klippa.

### iOS Configuration

Edit the `ios/Podfile` file in your project and add the Klippa CocoaPod:

```ruby
// Edit the platform to a minimum of 13.0, our SDK doesn't support earlier iOS versions.
platform :ios, '13.0'

target 'YourApplicationName' do
  # Pods for YourApplicationName
  // ... other pods

  pod 'Klippa-Scanner', podspec: 'https://custom-ocr.klippa.com/sdk/ios/specrepo/{your-username}/{your-password}/KlippaScanner/latest.podspec'
end
```

Replace `{your-username}` and `{your-password}` with the credentials provided by Klippa.

Finally, edit the `ios/{project-name}/Info.plist` file and add the following entries:

```xml
<key>NSCameraUsageDescription</key>
<string>Access to your camera is needed to photograph documents.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Access to your photo library is used to save the images of documents.</string>
```

## Usage

With the package setup and configured, we can now start using Klippa Scanner in our Capacitor app.

### Import & Configuration

First, import the KlippaScannerSDK from the package:

```typescript
import { KlippaScannerSDK } from '@klippa/capacitor-klippa-scanner-sdk';
```

Next, define the configuration for Klippa Scanner:

```typescript
const KlippaScannerConfig = {
    license: 'your-license',
    allowMultipleDocuments: false,
    defaultMultipleDocuments: false,
    shutterButton: { allowShutterButton: true, hideShutterButton: false },
    defaultCrop: false,
    imageMaxWidth: 1920,
    imageMaxHeight: 1080,
    imageMaxQuality: 95,
    // Additional configuration options...
};
```

Replace `'your-license'` with your actual Klippa Scanner license.

### Scanning Documents

To start scanning documents using Klippa Scanner, call the `KlippaScanner