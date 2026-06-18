```markdown
---
"title": "Using Capacitor Camera Preview Package Tutorial"
"description": "Step-by-step guide on integrating and using the @capacitor-community/camera-preview package for camera interactions in Capacitor projects."
"created_at": "2023-10-29"
"published": true
"slug": "capacitor-camera-preview-git"
---

# Capacitor Camera Preview Package Tutorial

In this tutorial, we will walk through the steps to install and use the `@capacitor-community/camera-preview` package in a Capacitor project for camera interactions.

## Installation

To begin, install the package using either Yarn or npm:

```bash
yarn add @capacitor-community/camera-preview
```

or

```bash
npm install @capacitor-community/camera-preview
```

Then, run the following command to sync the package with your project:

```bash
npx cap sync
```

## Android Setup

For Android, if you are using `camera-preview` version 3 and above, ensure that Gradle 7 is used. If you are using Gradle 4, it's recommended to use version 2 of the plugin.

Include the CAMERA permission in your `AndroidManifest.xml` file:

```xml
<uses-permission android:name="android.permission.CAMERA" />
```

## iOS Setup

For iOS, you will need to add the permissions `NSCameraUsageDescription` and `NSMicrophoneUsageDescription` in your `Info.plist` file. Follow the Capacitor docs for detailed instructions.

## Web Setup

For web applications, follow the specific web installation steps provided in the package documentation.

## Usage

The package offers various features for camera interaction from JavaScript and HTML, such as:
- Starting a camera preview from HTML code
- Maintaining HTML interactivity
- Dragging the preview box
- Setting camera color effects
- Sending the preview box to the back of HTML content
- Setting custom position, size, and alpha for the preview box
- Setting focus mode, zoom, color effects, exposure mode, etc.
- Tap to focus functionality

Refer to the package documentation for detailed usage instructions and all available features.

By following this tutorial, you can easily integrate and utilize the `@capacitor-community/camera-preview` package in your Capacitor projects for enhanced camera interactions.
```
```