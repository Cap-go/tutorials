```markdown
---
"title": "How to Use Capacitor Barcode Scanner Fragment Plugin",
"description": "Learn how to integrate and use the Capacitor Barcode Scanner Fragment Plugin to scan barcodes in your Ionic Capacitor projects on Android and iOS.",
"created_at": "2023-11-29",
"published": true,
"slug": "capacitor-barcode-scanner-fragment.git"
---

# How to Use Capacitor Barcode Scanner Fragment Plugin

In this tutorial, we will walk you through the steps to integrate and use the Capacitor Barcode Scanner Fragment Plugin. This plugin allows you to scan barcodes in your Ionic Capacitor projects on Android and iOS platforms.

## Installation

To begin, install the Capacitor Barcode Scanner Fragment Plugin using npm:

```shell
npm install @droponio/capacitor-barcode-scanner-fragment
npx cap sync
```

After installing the plugin, you will need to add some configurations to your native projects.

### iOS

#### Step 1

Open your iOS project in Xcode and add the camera usage description to the info.plist file:

```xml
<key>NSCameraUsageDescription</key>
<string>Your camera usage description</string>
```

#### Step 2

That's all you need to do for iOS.

### Android

#### Step 1

After removing the old android directory from your project's root directory, run the following commands:

```shell
npx cap add android
npx cap open android
```

#### Step 2

In the build.gradle file of your Android project, add the following dependency repository under the `allprojects > repositories` section:

```java
maven { url 'https://jitpack.io' }
```

## Usage

### iOS

To use the plugin in your code, import the Capacitor Barcode Scanner Fragment Plugin:

```javascript
import { BarcodeScannerFragment } from 'capacitor-barcode-scanner-fragment';
```

You can then use the methods provided by the plugin to scan barcodes.

### Android

Similar to iOS, you can import the plugin into your code:

```javascript
import { BarcodeScannerFragment } from 'capacitor-barcode-scanner-fragment';
```

You can now use the plugin methods to scan barcodes on Android.

That's it! You have now successfully integrated and utilized the Capacitor Barcode Scanner Fragment Plugin in your Ionic Capacitor project.
```