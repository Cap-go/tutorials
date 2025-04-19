```markdown
---
"title": "How to Use the @docutain/capacitor-plugin-docutain-sdk Package",
"description": "This tutorial will guide you through the process of integrating and using the @docutain/capacitor-plugin-docutain-sdk package in your Capacitor app.",
"created_at": "2022-03-04",
"published": true,
"slug": "docutain-sdk-example-capacitor-ionic.git"
---

# How to Use the @docutain/capacitor-plugin-docutain-sdk Package

This tutorial will walk you through the steps of integrating and utilizing the @docutain/capacitor-plugin-docutain-sdk package in your Capacitor app.

## Installation

To get started, you will need to install the package via NPM. Navigate to your project's root folder and execute the following command:

```
npm install @docutain/capacitor-plugin-docutain-sdk
```

Once the installation is complete, you can proceed with the setup process.

## Setup

### Android

For Android projects, you will need to perform the following steps:

1. Enable data binding in your android.app module's gradle file.

```java
android {
    ...
    buildFeatures {
        dataBinding true
    }
}
```

2. Add the necessary repositories to the top-level app-level gradle file.

```java
allprojects {
    repositories {
        ...
        maven { url 'https://sdk.docutain.com/maven-public/' }
    }
}
```

3. Import the capacitor plugin inside the BridgeActivity.

### iOS

For iOS projects, you will need to add the description of camera and microphone usage in the `Info.plist` file.

```objc
"NSCameraUsageDescription" = "This app needs access to the camera for document scanning.";
"NSMicrophoneUsageDescription" = "This app needs access to the microphone for voice commands and recordings.";
```

## Usage

The @docutain/capacitor-plugin-docutain-sdk package allows you to integrate advanced document scanning, text recognition, document analysis, data extraction, and PDF creation features into your app.

### Document Scanning

To initiate a document scanning process using Docutain SDK, you can make use of the provided functions in the plugin. Here is a basic example:

```typescript
import { Plugins } from '@capacitor/core';

const { Docutain } = Plugins;

async function scanDocument() {
    const result = await Docutain.scanDocument();
    console.log('Scanned Document:', result);
}
```

This is just a brief overview of how you can use the @docutain/capacitor-plugin-docutain-sdk package in your Capacitor app. Make sure to refer to the official documentation for more advanced features and customization options.
```