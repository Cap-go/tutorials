---
title: "Using Capacitor Firebase ML Vision"
description: "This tutorial will guide you on how to use the Capacitor Firebase ML Vision package to integrate machine learning vision capabilities into your Capacitor application."
created_at: "2022-01-01"
published: true
slug: "capacitor-firebase-ml-vision"
---

# Using Capacitor Firebase ML Vision

In this tutorial, we will explore how to integrate machine learning vision capabilities into your Capacitor application using the Capacitor Firebase ML Vision package. The Firebase ML Vision package provides a set of APIs and machine learning models that enable you to perform various vision-related tasks such as image labeling, text recognition, face detection, and more.

## Prerequisites

Before getting started, make sure you have the following:

- A Capacitor project set up and configured.
- Firebase project created and configured for your application.
- Capacitor Firebase ML Vision package installed in your project.

## Installation

To install the Capacitor Firebase ML Vision package, run the following command in your project directory:

```shell
npm install capacitor-firebase-ml-vision
```

## Configuration

### 1. Configure Firebase

Download the `google-services.json` file from the Firebase console for your Android app and place it in the `android/app/` directory of your Capacitor Android project.

For iOS, download the `GoogleService-Info.plist` file and add it to your Xcode project. Make sure to add it to all targets.

### 2. Update AndroidManifest.xml

Open the `AndroidManifest.xml` file located in `android/app/src/main/` and add the following metadata tags within the `<application>` tag:

```xml
<meta-data android:name="PLUMB5_ACCOUNT_ID" android:value="---Account Id---" />
<meta-data android:name="PLUMB5_API_KEY" android:value="---App Key---" />
<meta-data android:name="PLUMB5_BASE_URL" android:value="---Base URL---" />
```

Replace the placeholder values (`---Account Id---`, `---App Key---`, `---Base URL---`) with your own credentials.

### 3. Update Info.plist

Open the `Info.plist` file located in your iOS project and add the following entries:

```xml
<key>PLUMB5_ACCOUNT_ID</key>
<string>---Account Id---</string>
<key>PLUMB5_API_KEY</key>
<string>---App Key---</string>
<key>PLUMB5_BASE_URL</key>
<string>---Base URL---</string>
```

Replace the placeholder values (`---Account Id---`, `---App Key---`, `---Base URL---`) with your own credentials.

## ML Vision Usage

Now that the Capacitor Firebase ML Vision package is installed and configured, let's explore some of the capabilities it provides.

### Image Labeling

To perform image labeling, you can use the `labelImage` method provided by the Capacitor Firebase ML Vision package. This method takes an image file path as input and returns an array of labels with their respective confidence scores.

```typescript
import { Plugins } from "@capacitor/core";
const { CapacitorFirebaseMLVision } = Plugins;

async function labelImage(imagePath: string) {
  const result = await CapacitorFirebaseMLVision.labelImage({ imagePath });

  if (result.labels) {
    console.log("Labels:", result.labels);
  } else {
    console.log("Labeling failed");
  }
}
```

### Text Recognition

For text recognition, you can use the `recognizeText` method. This method takes an image file path as input and returns the recognized text from the image.

```typescript
import { Plugins } from "@capacitor/core";
const { CapacitorFirebaseMLVision } = Plugins;

async function recognizeText(imagePath: string) {
  const result = await CapacitorFirebaseMLVision.recognizeText({ imagePath });

  if (result.text) {
    console.log("Recognized Text:", result.text);
  } else {
    console.log("Text recognition failed");
  }
}
```

### Face Detection

Capacitor Firebase ML Vision also provides a `detectFaces` method for face detection. This method takes an image file path as input and returns an array of face objects with their respective bounding boxes.

```typescript
import { Plugins } from "@capacitor/core";
const { CapacitorFirebaseMLVision } = Plugins;

async function detectFaces(imagePath: string) {
  const result = await CapacitorFirebaseMLVision.detectFaces({ imagePath });

  if (result.faces) {
    console.log("Detected Faces:", result.faces);
  } else {
    console.log("Face detection failed");
  }
}
```

## Conclusion

In this tutorial, you learned how to integrate the Capacitor Firebase ML Vision package into your Capacitor application. You explored image labeling, text recognition, and face detection capabilities provided by the package. Feel free to explore more features and capabilities of the Firebase ML Vision package to enhance your application's vision-related functionalities.

Remember to refer to the official documentation of Capacitor Firebase ML Vision for more detailed information and usage examples.